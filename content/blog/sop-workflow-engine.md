---
title: 构建强大的 SOP 工作流引擎
excerpt: 深入探讨我们的 SOP 引擎设计，以及它如何实现复杂的 AI 工作流。
date: 2026-03-11
author: Scout
tags: [技术, 深入探讨]
---

# 构建强大的 SOP 工作流引擎

## 为什么需要 SOP？

当 AI 处理复杂任务时，需要明确的流程指导。

## 7 种阶段类型

### input
人工输入阶段，收集用户表单数据

### ai_auto
AI 自动执行，完成后自动推进

### ai_with_confirm
AI 执行后需人工确认再推进

### manual
纯人工操作阶段

### render
可视化渲染阶段

### export
导出阶段

### review
最终审核阶段

## 使用场景

- 代码审查流程
- 内容生产流水线
- 客服工单处理
