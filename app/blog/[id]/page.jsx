import { LandingNavbar } from '@/components/LandingNavbar';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getBlogContent, getBlogFiles } from '@/lib/content';

// 预生成所有 blog 页面的静态路径
export async function generateStaticParams() {
  const files = getBlogFiles();
  return files.map((file) => ({
    id: file.id,
  }));
}

// 生成 meta 信息
export async function generateMetadata({ params }) {
  try {
    const content = await getBlogContent(params.id);
    return {
      title: `${content.title} | TeamClaw Blog`,
      description: content.description || `${content.title} - TeamClaw 官方博客`,
      openGraph: {
        title: content.title,
        description: content.description,
        type: 'article',
        publishedTime: content.date,
        authors: content.author ? [content.author] : undefined,
        tags: content.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: content.title,
        description: content.description,
      },
    };
  } catch {
    return {
      title: 'Blog | TeamClaw',
    };
  }
}

export default async function BlogDetailPage({ params }) {
  let content;
  let error = false;

  try {
    content = await getBlogContent(params.id);
  } catch (e) {
    error = true;
  }

  const locale = 'zh';

  const t = {
    backToBlog: '返回博客',
  };

  if (error || !content) {
    return (
      <div className="min-h-screen bg-[#020617] text-white">
        <LandingNavbar locale={locale} />
        
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
            <Link href="/blog" className="text-[#0056ff] hover:underline">
              返回博客
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
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={16} />
              {t.backToBlog}
            </Link>
          </div>

          {/* 文章信息 */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {content.tags?.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs px-3 py-1.5 bg-[#0056ff]/10 text-[#0056ff] rounded-full">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {content.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-400">
              {content.date && (
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {content.date}
                </span>
              )}
              {content.author && (
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {content.author}
                </span>
              )}
            </div>
          </header>

          {/* 内容区域 - 直接嵌入 HTML，SEO 友好 */}
          <div 
            className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-400 prose-li:text-slate-400"
            dangerouslySetInnerHTML={{ __html: content.htmlContent }}
          />

          {/* 底部导航 */}
          <footer className="mt-16 pt-8 border-t border-slate-800">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#0056ff] hover:underline">
              <ArrowLeft size={16} />
              {t.backToBlog}
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
