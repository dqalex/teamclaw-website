import { LandingNavbar } from '@/components/LandingNavbar';
import { ArrowLeft, BookOpen, Calendar, Folder } from 'lucide-react';
import Link from 'next/link';
import { getWikiContent, getWikiFiles } from '@/lib/content';

// 预生成所有 wiki 页面的静态路径
export async function generateStaticParams() {
  const files = getWikiFiles();
  return files.map((file) => ({
    id: file.id,
  }));
}

// 生成 meta 信息
export async function generateMetadata({ params }) {
  try {
    const content = await getWikiContent(params.id);
    return {
      title: `${content.title} | TeamClaw Wiki`,
      description: content.description || `${content.title} - TeamClaw 官方文档`,
      openGraph: {
        title: content.title,
        description: content.description,
        type: 'article',
      },
    };
  } catch {
    return {
      title: 'Wiki | TeamClaw',
    };
  }
}

export default async function WikiDetailPage({ params }) {
  let content;
  let error = false;

  try {
    content = await getWikiContent(params.id);
  } catch (e) {
    error = true;
  }

  // 支持中英文
  const locale = 'zh';

  const t = {
    backToWiki: '返回 Wiki',
  };

  if (error || !content) {
    return (
      <div className="min-h-screen bg-[#020617] text-white">
        <LandingNavbar locale={locale} />
        
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
      <LandingNavbar locale={locale} />
      
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
              {content.category && (
                <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-slate-800 rounded-full text-slate-400">
                  <Folder size={12} />
                  {content.category}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.title}
            </h1>
            {content.description && (
              <p className="text-xl text-slate-400">{content.description}</p>
            )}
          </header>

          {/* 内容区域 - 直接嵌入 HTML，SEO 友好 */}
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
