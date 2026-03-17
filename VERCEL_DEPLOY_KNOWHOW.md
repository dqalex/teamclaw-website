# Vercel 部署踩坑记录

## 问题汇总

### 1. npm install 失败：`Exit handler never called!`

**现象：** Vercel 构建时 `npm install` 报 npm 内部错误

**原因：** npm 与 lockfile 版本或依赖解析不兼容

**解决方案：**
- 切换到 **yarn**：删除 `package-lock.json`，生成 `yarn.lock`
- Vercel 检测到 `yarn.lock` 会自动使用 yarn 而非 npm
- 添加 `.npmrc`（即使不用 npm 也留着备用）：
  ```
  legacy-peer-deps=true
  engine-strict=false
  ```

---

### 2. TypeScript 构建错误：`moduleResolution` 不匹配

**现象：** `Option 'moduleResolution' must be set to 'NodeNext' when option 'module' is set to 'NodeNext'`

**原因：** `tsconfig.json` 中 `module: "nodenext"` 与 `moduleResolution: "node"` 冲突

**解决方案：** 使用 Next.js 推荐配置：
```json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "bundler"
  }
}
```

---

### 3. 静态导出报错：`generateStaticParams()` 缺失

**现象：** `Page "/blog/[id]" is missing "generateStaticParams()" so it cannot be used with "output: export"`

**原因：** `next.config.js` 设置了 `output: 'export'`，但 Vercel 不需要这个

**解决方案：** 删除 `output: 'export'`，Vercel 自动处理 SSG/SSR

---

### 4. yarn.lock 引用私有镜像源

**现象：** `getaddrinfo ENOTFOUND mirrors.tencentyun.com`

**原因：** 在腾讯云服务器上生成的 yarn.lock 锁定了腾讯云 npm 镜像

**解决方案：**
```bash
rm -rf node_modules yarn.lock
yarn install --registry https://registry.npmjs.org
```
确保 yarn.lock 中所有 URL 都指向 `registry.npmjs.org`

---

### 5. ⚠️ Deploy Key 推送不触发 Vercel Webhook

**现象：** GitHub 已有新 commit，但 Vercel 始终拉旧 commit

**原因：** 通过 deploy key（SSH）推送时，GitHub 有时不向 Vercel 发送 webhook 事件

**解决方案（选一个）：**
1. **Vercel Settings → Git → Disconnect**，然后重新连接仓库
2. 用 Personal Access Token (HTTPS) 推送而非 deploy key
3. 在 Vercel Dashboard 手动触发部署（但注意它可能还是拉缓存的 commit）

**推荐方案：** 重新连接 Git 集合，让 Vercel 重新同步

---

### 6. `.gitconfig` URL 重写导致 SSH 失效

**现象：** `git remote` 配置了 SSH 地址，但 `git push` 仍然走 HTTPS

**原因：** `~/.gitconfig` 中存在 URL 重写规则：
```ini
[url "https://github.com/"]
    insteadOf = ssh://git@github.com/
    insteadOf = git@github.com:
```

**解决方案：** 删除这些重写规则：
```bash
git config --global --unset-all url.https://github.com/.insteadof
git config --global --unset-all url.https://github.com/.insteadof
```

---

### 7. Deploy Key vs Personal SSH Key

**现象：** SSH 认证成功但 `Permission denied`，显示 `denied to deploy key`

**原因：** Deploy key 是仓库级别的，且默认只读。一个 deploy key 只能访问一个仓库。

**规则：**
- **Deploy Key** — 单仓库访问，默认只读
- **Personal SSH Key** — 所有仓库访问，读写权限

**解决方案：** 如果需要推送多个仓库，将 SSH key 作为 Personal Key 添加到 GitHub 账号（Settings → SSH and GPG keys），而不是单个仓库的 deploy key。

---

### 8. 依赖版本兼容性

**现象：** 各种类型错误或安装失败

**规则：**
- `@types/react` 版本必须匹配 React 主版本（React 18 → `@types/react: ^18`）
- `@types/node` 不要用过新的版本（用 `^20` 而非 `25.x`）
- 避免在 `package.json` 中写 `engines` 字段（Vercel 会警告）

---

## 本地验证流程（推送前必须执行）

```bash
# 完整的 clean test
rm -rf node_modules yarn.lock .next
yarn install --registry https://registry.npmjs.org
yarn build
```

全部通过后才能 push！

---

## 最佳实践

1. **用 yarn 而非 npm** — Vercel 上更稳定
2. **锁定官方 registry** — 避免镜像源问题
3. **本地 clean test** — 推送前完整验证
4. **避免 force push** — deploy key + force push 可能导致 webhook 不触发
5. **不用 engines 字段** — Vercel 会警告，用 `.nvmrc` 替代

---

_Last updated: 2026-03-17_
