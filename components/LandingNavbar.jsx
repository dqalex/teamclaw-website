'use client';

import { useState } from 'react';
import { Menu, X, Github, ChevronRight, BookOpen, FileText } from 'lucide-react';
import { TeamClawLogo } from './TeamClawLogo';

export function LandingNavbar({ locale, onLocaleChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = {
    en: {
      home: 'Home',
      features: 'Features',
      wiki: 'Wiki',
      blog: 'Blog',
      docs: 'Docs',
      github: 'GitHub',
      getStarted: 'Get Started',
    },
    zh: {
      home: '首页',
      features: '功能',
      wiki: 'Wiki',
      blog: '博客',
      docs: '文档',
      github: 'GitHub',
      getStarted: '开始使用',
    },
  }[locale];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <TeamClawLogo className="w-8 h-8" />
              <span className="text-xl font-bold text-white">TeamClaw</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              {t.features}
            </a>
            <a href="/wiki" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              <BookOpen size={16} />
              {t.wiki}
            </a>
            <a href="/blog" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
              <FileText size={16} />
              {t.blog}
            </a>
            <button
              onClick={() => onLocaleChange(locale === 'en' ? 'zh' : 'en')}
              className="px-3 py-1.5 text-sm text-slate-300 hover:text-white border border-slate-700 rounded-lg hover:border-slate-600 transition-colors"
            >
              {locale === 'en' ? '中文' : 'English'}
            </button>
            <a
              href="https://github.com/dqalex/teamclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white border border-slate-700 rounded-lg hover:border-slate-600 transition-colors"
            >
              <Github size={18} />
              {t.github}
            </a>
            <a
              href="https://github.com/dqalex/teamclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#0056ff] hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              {t.getStarted}
              <ChevronRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#020617] border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-slate-300 hover:text-white">
              {t.features}
            </a>
            <a href="/wiki" className="block text-slate-300 hover:text-white flex items-center gap-2">
              <BookOpen size={16} />
              {t.wiki}
            </a>
            <a href="/blog" className="block text-slate-300 hover:text-white flex items-center gap-2">
              <FileText size={16} />
              {t.blog}
            </a>
            <button
              onClick={() => {
                onLocaleChange(locale === 'en' ? 'zh' : 'en');
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-slate-300 hover:text-white border border-slate-700 rounded-lg"
            >
              {locale === 'en' ? '中文' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
