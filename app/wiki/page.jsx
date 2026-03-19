'use client';

import { useState, Suspense, useEffect } from 'react';
import { LandingNavbar } from '@/components/LandingNavbar';
import { BookOpen, FileText, ChevronRight, Search, Users, Shield, Wrench, Zap, Code, Database } from 'lucide-react';

const iconMap = {
  BookOpen,
  FileText,
  Users,
  Shield,
  Wrench,
  Zap,
  Code,
  Database,
};

const defaultWikiPages = [
  { id: 'user-guide', title: '用户手册', description: 'TeamClaw 完整用户手册', category: '指南', icon: 'BookOpen' },
];

export default function WikiPage() {
  const [locale, setLocale] = useState('zh');
  const [searchQuery, setSearchQuery] = useState('');
  const [wikiPages, setWikiPages] = useState(defaultWikiPages);

  useEffect(() => {
    fetch('/api/wiki/')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setWikiPages(data);
        }
      })
      .catch(console.error);
  }, []);

  const t = locale === 'zh' ? {
    title: 'Wiki 文档',
    subtitle: 'TeamClaw 的文档和指南',
    searchPlaceholder: '搜索文档...',
    backToHome: '返回首页',
    readMore: '阅读更多',
  } : {
    title: 'Wiki',
    subtitle: 'Documentation and guides for TeamClaw',
    searchPlaceholder: 'Search documentation...',
    backToHome: 'Back to Home',
    readMore: 'Read more',
  };

  const filteredPages = wikiPages.filter(page =>
    page.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.category?.toLowerCase().includes(searchQuery.toLowerCase())
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
              const Icon = iconMap[page.icon] || FileText;
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
