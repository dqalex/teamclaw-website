---
title: Skill 管理系统
description: AI Skill 生命周期管理 — 注册、审批、部署、监控
category: 功能
icon: Wrench
order: 3
---

# Skill 管理系统

Skill 是 AI Agent 的能力模块，决定了 AI 能做什么、怎么做得更好。

## 生命周期

```
draft → pending_approval → active / rejected
```

### 1. 注册（Register）
Skill 文件（SKILL.md）被放入 OpenClaw workspace 后，系统自动验证结构规范。

### 2. 审批（Approve）
未批准的 Skill 需要管理员审批才能激活。支持配置审批策略：
- `any_admin` — 任意管理员审批
- `specific_role` — 指定角色审批
- `project_admin` — 项目管理员审批

### 3. 部署（Deploy）
审批通过后 Skill 自动激活，AI 立即可以使用新能力。

### 4. 监控（Monitor）
系统定期检测 Agent 已安装 Skill 的变更，支持：
- **快照对比**：自动发现 Skill 内容变化
- **敏感信息检测**：自动标记含 API Key 等敏感内容的 Skill
- **来源追踪**：区分内置 / 手动创建 / 外部导入 / 未知来源

## Skill 来源类型

| 类型 | 说明 |
|------|------|
| `teamclaw` | 内置 Skill，出厂自带 |
| `manual` | 手动创建 |
| `external` | 从外部导入 |
| `unknown` | 未知来源，需谨慎处理 |

## 安装新 Skill

1. 从 Skill 市场浏览可用 Skill
2. 点击安装，系统自动处理依赖
3. 缺失依赖时提示安装（如 Node.js、brew 等）
4. 审批后激活

## API Key 管理

部分 Skill 需要 API Key 才能使用（如 Tavily 搜索、RAG 服务等）。在 Skill 详情页填写 Key，系统加密存储，不在 UI 明文显示。
