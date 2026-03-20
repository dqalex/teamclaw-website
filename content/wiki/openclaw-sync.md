---
title: OpenClaw Workspace 同步
description: TeamClaw 与 OpenClaw Workspace 双向文件同步
category: 技术
icon: RefreshCw
order: 7
---

# OpenClaw Workspace 同步

TeamClaw 支持与 OpenClaw Workspace 双向同步文件，团队文档和 Agent 工作空间保持一致。

## 功能特性

- **双向同步** — TeamClaw ↔ OpenClaw Agent 文件双向流动
- **版本历史** — 每次变更都有完整记录，可追溯
- **冲突检测** — 多人同时修改同一文件时自动标记冲突
- **手动 / 自动** — 支持按需同步或开启自动监控

## 同步模式

| 模式 | 说明 |
|------|------|
| 自动监控 | 文件变更自动触发同步（适合开发场景） |
| 手动同步 | 手动触发扫描、推送或拉取操作 |

## 冲突解决

当同一文件在两端同时被修改时：

1. 系统检测到哈希值不一致
2. 标记为冲突状态，保留两个版本
3. 用户手动选择保留版本或合并内容

## 配置步骤

1. 在「设置 → OpenClaw」中添加 Workspace
2. 配置同步目录和排除规则（如 `node_modules/`）
3. 选择同步模式（自动 / 手动）
4. 点击「立即同步」开始首次同步

## 排除规则

支持 glob 语法：
```
node_modules/
.git/
*.log
dist/
```
