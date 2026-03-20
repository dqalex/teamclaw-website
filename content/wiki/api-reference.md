---
title: API 参考文档
description: TeamClaw API 接口完整参考
category: 技术
icon: Code
order: 6
---

# API 参考文档

## 认证

### 登录
```
POST /api/auth/login
```
请求体：`{ "username": "xxx", "password": "xxx" }`
返回：用户信息和 JWT Token

### 注册
```
POST /api/auth/register
```
请求体：`{ "username": "xxx", "password": "xxx" }`

### 登出
```
POST /api/auth/logout
```

## 任务

### 获取任务列表
```
GET /api/tasks
```
查询参数：`projectId`, `status`, `priority`, `assigneeId`

### 创建任务
```
POST /api/tasks
```
请求体：`{ "title": "xxx", "status": "todo", "priority": "medium", "projectId": "xxx" }`

### 更新任务
```
PATCH /api/tasks/:id
```

### 删除任务
```
DELETE /api/tasks/:id
```

## Wiki 文档

### 获取文档列表
```
GET /api/documents
```
查询参数：`projectId`, `type`

### 获取文档内容
```
GET /api/documents/:id
```

### 创建 / 更新文档
```
POST /api/documents
PATCH /api/documents/:id
```

## MCP 指令（供 AI Agent 调用）

### 内部接口
```
POST /api/mcp
```
由 AI Agent 内部调用，执行 MCP 工具指令。

### 外部接口（需 Bearer Token）
```
POST /api/mcp/external
```
Header：`Authorization: Bearer <token>`

支持的操作：
- `task.create` — 创建任务
- `task.update` — 更新任务状态
- `document.write` — 写入文档
- `delivery.submit` — 提交交付物
- `member.register` — 注册 AI 成员

## WebSocket

TeamClaw 通过 WebSocket 与 OpenClaw Gateway 保持连接：

```
ws://localhost:18789
```

协议版本：v3

支持的事件订阅：
- `agent.status` — Agent 状态变更
- `cron.run` — 定时任务执行
- `session.message` — 会话新消息

## 错误码

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 参数错误 |
| 401 | 未认证 |
| 403 | 权限不足 |
| 404 | 资源不存在 |
| 500 | 服务器错误 |
