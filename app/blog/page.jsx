'use client';

import { useState, Suspense, useEffect } from 'react';
import { LandingNavbar } from '@/components/LandingNavbar';
import { FileText, Calendar, User, ChevronRight, Search, Tag } from 'lucide-react';

const defaultBlogPosts = [
  {
    id: 'teamclaw-v1-release',
    title: 'TeamClaw V1.0 正式发布',
    excerpt: 'V1.0 带来了多用户认证系统和 SOP 工作流引擎...',
    date: '2026-03-07',
    author: 'TeamClaw Team',
    tags: ['重大更新'],
  },
];

export default function BlogPage() {
  const [locale, setLocale] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [blogPosts, setBlogPosts] = useState(defaultBlogPosts);

  useEffect(() => {
    fetch('/api/blog/')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setBlogPosts(data);
        }
      })
      .catch(console.error);
  }, []);

  const t = locale === 'zh' ? {
    title: '博客',
    subtitle: 'TeamClaw 的最新消息和更新',
    searchPlaceholder: '搜索文章...',
    backToHome: '返回首页',
    readMore: '阅读更多',
    by: '作者',
  } : {
    title: 'Blog',
    subtitle: 'Latest news and updates from TeamClaw',
    searchPlaceholder: 'Search articles...',
    backToHome: 'Back to Home',
    readMore: 'Read more',
    by: 'By',
  };

  const filteredPosts = blogPosts.filter(post =>
    post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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
                  {post.tags?.map((tag) => (
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
