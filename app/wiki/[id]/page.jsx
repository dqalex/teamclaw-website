'use client';

import { useState, Suspense, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { LandingNavbar } from '@/components/LandingNavbar';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function WikiDetailPage() {
  const params = useParams();
  const [locale, setLocale] = useState('zh');
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return;
    
    setLoading(true);
    fetch(`/api/wiki/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching wiki content:', err);
        setLoading(false);
      });
  }, [params.id]);

  const t = locale === 'zh' ? {
    backToWiki: '返回 Wiki',
    backToHome: '返回首页',
  } : {
    backToWiki: 'Back to Wiki',
    backToHome: 'Back to Home',
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] text-white">
        <Suspense fallback={<div className="h-16" />}>
          <LandingNavbar locale={locale} onLocaleChange={setLocale} />
        </Suspense>
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-400">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!content || content.error) {
    return (
      <div className="min-h-screen bg-[#020617] text-white">
        <Suspense fallback={<div className="h-16" />}>
          <LandingNavbar locale={locale} onLocaleChange={setLocale} />
        </Suspense>
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">页面未找到</h1>
            <Link href="/wiki" className="text-[#0056ff] hover:underline">
              返回 Wiki
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-[#0056ff]/30">
      <Suspense fallback={<div className="h-16" />}>
        <LandingNavbar locale={locale} onLocaleChange={setLocale} />
      </Suspense>
      
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 导航 */}
          <div className="mb-8">
            <Link href="/wiki" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={16} />
              {t.backToWiki}
            </Link>
          </div>

          {/* 标题区域 */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs px-3 py-1.5 bg-slate-800 rounded-full text-slate-400">
                {content.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.title}
            </h1>
          </header>

          {/* 内容区域 */}
          <div 
            className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-400 prose-li:text-slate-400"
            dangerouslySetInnerHTML={{ __html: content.htmlContent }}
          />

          {/* 底部导航 */}
          <footer className="mt-16 pt-8 border-t border-slate-800">
            <Link href="/wiki" className="inline-flex items-center gap-2 text-[#0056ff] hover:underline">
              <ArrowLeft size={16} />
              {t.backToWiki}
            </Link>
          </footer>
        </div>
      </article>

      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>© 2026 TeamClaw. Open source under MIT License.</p>
        </div>
      </footer>
    </div>
  );
}
