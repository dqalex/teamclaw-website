'use client';

import { useState, Suspense } from 'react';
import { LandingNavbar } from '@/components/LandingNavbar';
import { FileText, Calendar, User, ChevronRight, Search, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 'teamclaw-v3-release',
    title: 'TeamClaw V3.0 正式发布：多用户系统与 SOP 工作流引擎',
    excerpt: 'TeamClaw V3.0 是一次重大的架构升级，带来了多用户认证系统和 SOP（标准化操作流程）工作流引擎两大核心功能。从个人工具正式进化为团队协作平台，让 AI Agent 真正成为企业工作流中的团队成员。',
    date: '2026-03-07',
    author: 'TeamClaw Team',
    tags: ['重大更新', '多用户', 'SOP引擎'],
    content: `
# TeamClaw V3.0 正式发布：多用户系统与 SOP 工作流引擎

> 发布日期：2026-03-07  
> 版本：v3.0.0  
> 标签：重大更新, 多用户, SOP引擎

---

## 概述

TeamClaw V3.0 是一次重大的架构升级，带来了**多用户认证系统**和**SOP（标准化操作流程）工作流引擎**两大核心功能。从个人工具正式进化为团队协作平台，让 AI Agent 真正成为企业工作流中的团队成员。

---

## 核心新特性

### 1. 多用户认证系统（Multi-User System）

V3.0 引入了完整的企业级用户管理体系：

| 特性 | 说明 |
|------|------|
| **三角色权限** | Admin（管理员）、Member（成员）、Viewer（只读） |
| **安全码验证** | 敏感操作需二次验证，增强安全性 |
| **用户注册** | 支持开放注册和邀请制两种模式 |
| **用户隔离** | 聊天会话、个人配置完全隔离 |

**使用场景**：
- 企业团队多人协作，不同成员拥有不同权限
- 管理员统一管理 Gateway 配置和系统设置
- 普通成员专注于任务和项目协作

---

### 2. SOP 工作流引擎（Standard Operating Procedure）

让 AI Agent 按预定义的多阶段工作流自动执行复杂任务。

#### 7 种阶段类型

| 阶段类型 | 说明 |
|----------|------|
| \`input\` | 人工输入阶段，收集用户表单数据 |
| \`ai_auto\` | AI 自动执行，完成后自动推进 |
| \`ai_with_confirm\` | AI 执行后需人工确认再推进 |
| \`manual\` | 纯人工操作阶段 |
| \`render\` | 可视化渲染阶段（自动创建 Content Studio 文档） |
| \`export\` | 导出阶段 |
| \`review\` | 最终审核阶段 |

---

### 3. Skill 管理系统

V3.0 引入了完整的 AI Skill 生命周期管理：

| 特性 | 说明 |
|------|------|
| **Skill 注册** | 自动验证 SKILL.md 结构规范 |
| **审批流程** | Skill 发布需管理员审批 |
| **信任管理** | 信任/拒绝未知来源 Skill |
| **快照监控** | 定期检测 Agent 已安装 Skill 变更 |
| **敏感检测** | 自动标记含敏感信息的 Skill |

---

### 4. 通用审批系统

统一的多场景审批流程：

**4 种审批类型**：
| 类型 | 说明 |
|------|------|
| \`skill_publish\` | Skill 发布审批 |
| \`skill_install\` | Skill 安装审批 |
| \`project_join\` | 项目加入申请 |
| \`sensitive_action\` | 敏感操作审批（预留） |

---

## 未来规划

V3.1 计划特性：

- [ ] 更细粒度的权限控制（项目级别）
- [ ] SOP 执行数据分析仪表盘
- [ ] 更多内置 SOP 模板市场
- [ ] 移动端适配优化
- [ ] WebSocket 实时协作

---

*感谢所有参与 V3.0 开发和测试的团队成员！*
    `
  },
  {
    id: 'ai-as-teammates',
    title: '把 AI 当作队友，而不是工具',
    excerpt: '为什么我们构建了 TeamClaw，以及它如何改变我们与 AI 合作的方式。',
    date: '2026-03-12',
    author: 'Alex',
    tags: ['理念', '设计'],
  },
  {
    id: 'sop-workflow-engine',
    title: '构建强大的 SOP 工作流引擎',
    excerpt: '深入探讨我们的 SOP 引擎设计，以及它如何实现复杂的 AI 工作流。',
    date: '2026-03-11',
    author: 'Scout',
    tags: ['技术', '深入探讨'],
  },
];

export default function BlogPage() {
  const [locale, setLocale] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');

  const t = {
    en: {
      title: 'Blog',
      subtitle: 'Latest news and updates from TeamClaw',
      searchPlaceholder: 'Search articles...',
      backToHome: 'Back to Home',
      readMore: 'Read more',
      by: 'By',
    },
    zh: {
      title: '博客',
      subtitle: 'TeamClaw 的最新消息和更新',
      searchPlaceholder: '搜索文章...',
      backToHome: '返回首页',
      readMore: '阅读更多',
      by: '作者',
    },
  }[locale];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-[#0056ff]/30">
      <Suspense fallback={<div className="h-16" />}>
        <LandingNavbar locale={locale} onLocaleChange={setLocale} />
      </Suspense>
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <a href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
              <ChevronRight size={16} className="rotate-180" />
              {t.backToHome}
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
              <FileText size={40} className="text-[#0056ff]" />
              {t.title}
            </h1>
            <p className="text-xl text-slate-400">{t.subtitle}</p>
          </div>

          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:border-[#0056ff] focus:outline-none transition-colors"
            />
          </div>

          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 bg-[#0056ff]/10 text-[#0056ff] rounded-full">
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-[#0056ff] transition-colors">
                    {post.title}
                  </h2>
                </a>
                <p className="text-slate-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {t.by} {post.author}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p>No articles found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </main>

      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>© 2026 TeamClaw. Open source under MIT License.</p>
        </div>
      </footer>
    </div>
  );
}
