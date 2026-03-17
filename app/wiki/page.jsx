'use client';

import { useState, Suspense } from 'react';
import { LandingNavbar } from '@/components/LandingNavbar';
import { BookOpen, FileText, ChevronRight, Search, Users, Shield, Wrench, Zap, Code, Database } from 'lucide-react';

const wikiPages = [
  { 
    id: 'user-guide', 
    title: '用户手册', 
    description: 'TeamClaw 完整用户手册，学习如何使用所有功能', 
    category: '指南',
    icon: BookOpen
  },
  { 
    id: 'prd', 
    title: '产品需求文档 (PRD)', 
    description: '了解 TeamClaw 的产品规划和功能需求', 
    category: '产品',
    icon: FileText
  },
  { 
    id: 'api-reference', 
    title: 'API 参考', 
    description: '完整的 API 文档，了解如何集成 TeamClaw', 
    category: '技术',
    icon: Code
  },
  { 
    id: 'multi-user-access', 
    title: '多用户访问控制', 
    description: '了解企业级多用户系统和权限管理', 
    category: '安全',
    icon: Users
  },
  { 
    id: 'approval-system', 
    title: '审批系统设计', 
    description: '通用审批系统的技术实现和使用指南', 
    category: '技术',
    icon: Shield
  },
  { 
    id: 'skill-management', 
    title: 'Skill 管理系统', 
    description: 'AI Skill 生命周期管理的完整指南', 
    category: '功能',
    icon: Wrench
  },
  { 
    id: 'sop-engine', 
    title: 'SOP 工作流引擎', 
    description: '深入了解 SOP 引擎的架构和使用方法', 
    category: '功能',
    icon: Zap
  },
  { 
    id: 'openclaw-sync', 
    title: 'OpenClaw 同步设计', 
    description: '了解与 OpenClaw Gateway 的深度集成', 
    category: '集成',
    icon: Database
  },
];

export default function WikiPage() {
  const [locale, setLocale] = useState('zh');
  const [searchQuery, setSearchQuery] = useState('');

  const t = {
    en: {
      title: 'Wiki',
      subtitle: 'Documentation and guides for TeamClaw',
      searchPlaceholder: 'Search documentation...',
      backToHome: 'Back to Home',
      readMore: 'Read more',
    },
    zh: {
      title: 'Wiki 文档',
      subtitle: 'TeamClaw 的文档和指南',
      searchPlaceholder: '搜索文档...',
      backToHome: '返回首页',
      readMore: '阅读更多',
    },
  }[locale];

  const filteredPages = wikiPages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-[#0056ff]/30">
      <Suspense fallback={<div className="h-16" />}>
        <LandingNavbar locale={locale} onLocaleChange={setLocale} />
      </Suspense>
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <a href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
              <ChevronRight size={16} className="rotate-180" />
              {t.backToHome}
            </a>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-3">
              <BookOpen size={40} className="text-[#0056ff]" />
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

          <div className="grid md:grid-cols-2 gap-6">
            {filteredPages.map((page) => {
              const Icon = page.icon || FileText;
              return (
                <a
                  key={page.id}
                  href={`/wiki/${page.id}`}
                  className="p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-[#0056ff]/10 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-[#0056ff]" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-slate-800 rounded-full text-slate-400">
                      {page.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0056ff] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{page.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#0056ff] text-sm font-medium">
                    {t.readMore}
                    <ChevronRight size={14} />
                  </span>
                </a>
              );
            })}
          </div>

          {filteredPages.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p>No pages found for "{searchQuery}"</p>
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
