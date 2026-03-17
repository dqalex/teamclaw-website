'use client';

import { useState, Suspense, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { LandingNavbar } from '@/components/LandingNavbar';
import { FileText, Calendar, User, ChevronRight, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const blogPostsData = {
  'teamclaw-v3-release': {
    title: 'TeamClaw v1.0 正式发布：多用户系统与 SOP 工作流引擎',
    excerpt: 'TeamClaw v1.0 是一次重大的架构升级，带来了多用户认证系统和 SOP（标准化操作流程）工作流引擎两大核心功能。从个人工具正式进化为团队协作平台，让 AI Agent 真正成为企业工作流中的团队成员。',
    date: '2026-03-07',
    author: 'TeamClaw Team',
    tags: ['重大更新', '多用户', 'SOP引擎'],
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">TeamClaw v1.0 正式发布：多用户系统与 SOP 工作流引擎</h1>
        <p className="text-slate-400">发布日期：2026-03-07 | 版本：v1.0.0</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">概述</h2>
        <p className="text-slate-400">
          TeamClaw v1.0 是一次重大的架构升级，带来了<strong className="text-white">多用户认证系统</strong>和<strong className="text-white">SOP（标准化操作流程）工作流引擎</strong>两大核心功能。从个人工具正式进化为团队协作平台，让 AI Agent 真正成为企业工作流中的团队成员。
        </p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">核心新特性</h2>
        
        <h3 className="text-xl font-semibold text-white">1. 多用户认证系统（Multi-User System）</h3>
        <p className="text-slate-400">v1.0 引入了完整的企业级用户管理体系：</p>
        
        <table className="w-full border-collapse border border-slate-700 mb-6">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-4 py-2 text-left">特性</th>
              <th className="border border-slate-700 px-4 py-2 text-left">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-4 py-2"><strong>三角色权限</strong></td>
              <td className="border border-slate-700 px-4 py-2">Admin（管理员）、Member（成员）、Viewer（只读）</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2"><strong>安全码验证</strong></td>
              <td className="border border-slate-700 px-4 py-2">敏感操作需二次验证，增强安全性</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2"><strong>用户注册</strong></td>
              <td className="border border-slate-700 px-4 py-2">支持开放注册和邀请制两种模式</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2"><strong>用户隔离</strong></td>
              <td className="border border-slate-700 px-4 py-2">聊天会话、个人配置完全隔离</td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="text-xl font-semibold text-white">2. SOP 工作流引擎（Standard Operating Procedure）</h3>
        <p className="text-slate-400">让 AI Agent 按预定义的多阶段工作流自动执行复杂任务。</p>
        
        <h4 className="text-lg font-semibold text-white">7 种阶段类型</h4>
        <table className="w-full border-collapse border border-slate-700 mb-6">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-4 py-2 text-left">阶段类型</th>
              <th className="border border-slate-700 px-4 py-2 text-left">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">input</td>
              <td className="border border-slate-700 px-4 py-2">人工输入阶段，收集用户表单数据</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">ai_auto</td>
              <td className="border border-slate-700 px-4 py-2">AI 自动执行，完成后自动推进</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">ai_with_confirm</td>
              <td className="border border-slate-700 px-4 py-2">AI 执行后需人工确认再推进</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">manual</td>
              <td className="border border-slate-700 px-4 py-2">纯人工操作阶段</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">render</td>
              <td className="border border-slate-700 px-4 py-2">可视化渲染阶段</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">export</td>
              <td className="border border-slate-700 px-4 py-2">导出阶段</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">review</td>
              <td className="border border-slate-700 px-4 py-2">最终审核阶段</td>
            </tr>
          </tbody>
        </table>
        
        <h3 className="text-xl font-semibold text-white">3. Skill 管理系统</h3>
        <p className="text-slate-400">v1.0 引入了完整的 AI Skill 生命周期管理：</p>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
          <li><strong>Skill 注册</strong> - 自动验证 SKILL.md 结构规范</li>
          <li><strong>审批流程</strong> - Skill 发布需管理员审批</li>
          <li><strong>信任管理</strong> - 信任/拒绝未知来源 Skill</li>
          <li><strong>快照监控</strong> - 定期检测 Agent 已安装 Skill 变更</li>
          <li><strong>敏感检测</strong> - 自动标记含敏感信息的 Skill</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-white">4. 通用审批系统</h3>
        <p className="text-slate-400">统一的多场景审批流程：</p>
        
        <h4 className="text-lg font-semibold text-white">4 种审批类型</h4>
        <table className="w-full border-collapse border border-slate-700 mb-6">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-4 py-2 text-left">类型</th>
              <th className="border border-slate-700 px-4 py-2 text-left">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">skill_publish</td>
              <td className="border border-slate-700 px-4 py-2">Skill 发布审批</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">skill_install</td>
              <td className="border border-slate-700 px-4 py-2">Skill 安装审批</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">project_join</td>
              <td className="border border-slate-700 px-4 py-2">项目加入申请</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">sensitive_action</td>
              <td className="border border-slate-700 px-4 py-2">敏感操作审批（预留）</td>
            </tr>
          </tbody>
        </table>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">未来规划</h2>
        <p className="text-slate-400">V3.1 计划特性：</p>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
          <li>更细粒度的权限控制（项目级别）</li>
          <li>SOP 执行数据分析仪表盘</li>
          <li>更多内置 SOP 模板市场</li>
          <li>移动端适配优化</li>
          <li>WebSocket 实时协作</li>
        </ul>
        
        <hr className="border-slate-700" />
        <p className="text-slate-400 italic">感谢所有参与 v1.0 开发和测试的团队成员！</p>
      </div>
    )
  },
  'ai-as-teammates': {
    title: '把 AI 当作队友，而不是工具',
    excerpt: '为什么我们构建了 TeamClaw，以及它如何改变我们与 AI 合作的方式。',
    date: '2026-03-12',
    author: 'Alex',
    tags: ['理念', '设计'],
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">把 AI 当作队友，而不是工具</h1>
        <p className="text-slate-400">发布日期：2026-03-12 | 作者：Alex</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">核心理念</h2>
        <p className="text-slate-400">
          在 TeamClaw，我们相信 AI 应该被当作队友，而不是工具。这意味着：
        </p>
        <ul className="list-disc list-inside text-slate-400 space-y-2">
          <li>AI 应该能够访问完整的项目上下文</li>
          <li>AI 应该能够主动领取和执行任务</li>
          <li>AI 应该能够提交交付物并进行审核</li>
          <li>AI 应该有自己的状态和能力声明</li>
        </ul>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">设计原则</h2>
        
        <h3 className="text-xl font-semibold text-white">1. 任务驱动而非对话驱动</h3>
        <p className="text-slate-400">
          传统的 AI 工具都是对话驱动的——你需要在聊天框里输入指令。TeamClaw 是任务驱动的——AI 从看板上领取任务，自动执行并更新进度。
        </p>
        
        <h3 className="text-xl font-semibold text-white">2. 完整上下文访问</h3>
        <p className="text-slate-400">AI 成员应该能够访问：</p>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
          <li>项目文档和 Wiki</li>
          <li>任务历史和评论</li>
          <li>相关的交付物</li>
          <li>团队成员的状态</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-white">3. 人机协作流程</h3>
        <p className="text-slate-400">复杂的任务应该由人和 AI 协作完成：</p>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
          <li>AI 处理重复性工作</li>
          <li>人类在关键节点做决策</li>
          <li>完整的审核和反馈循环</li>
        </ul>
        
        <hr className="border-slate-700" />
        <p className="text-slate-400 italic">这是 TeamClaw 的设计哲学，感谢阅读！</p>
      </div>
    )
  },
  'sop-workflow-engine': {
    title: '构建强大的 SOP 工作流引擎',
    excerpt: '深入探讨我们的 SOP 引擎设计，以及它如何实现复杂的 AI 工作流。',
    date: '2026-03-11',
    author: 'Scout',
    tags: ['技术', '深入探讨'],
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">构建强大的 SOP 工作流引擎</h1>
        <p className="text-slate-400">发布日期：2026-03-11 | 作者：Scout</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">SOP 引擎架构</h2>
        <p className="text-slate-400">
          SOP（标准化操作流程）引擎是 TeamClaw v1.0 的核心功能，让 AI Agent 按预定义的多阶段工作流自动执行复杂任务。
        </p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">7 种阶段类型</h2>
        <table className="w-full border-collapse border border-slate-700">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-4 py-2 text-left">阶段类型</th>
              <th className="border border-slate-700 px-4 py-2 text-left">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">input</td>
              <td className="border border-slate-700 px-4 py-2">人工输入阶段，收集用户表单数据</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">ai_auto</td>
              <td className="border border-slate-700 px-4 py-2">AI 自动执行，完成后自动推进</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">ai_with_confirm</td>
              <td className="border border-slate-700 px-4 py-2">AI 执行后需人工确认再推进</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">manual</td>
              <td className="border border-slate-700 px-4 py-2">纯人工操作阶段</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">render</td>
              <td className="border border-slate-700 px-4 py-2">可视化渲染阶段</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">export</td>
              <td className="border border-slate-700 px-4 py-2">导出阶段</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">review</td>
              <td className="border border-slate-700 px-4 py-2">最终审核阶段</td>
            </tr>
          </tbody>
        </table>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">内置 SOP 模板</h2>
        <p className="text-slate-400">我们提供了 5 个内置 SOP 模板：</p>
        <table className="w-full border-collapse border border-slate-700">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-4 py-2 text-left">模板</th>
              <th className="border border-slate-700 px-4 py-2 text-left">阶段数</th>
              <th className="border border-slate-700 px-4 py-2 text-left">用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-4 py-2">竞品调研 SOP</td>
              <td className="border border-slate-700 px-4 py-2">5</td>
              <td className="border border-slate-700 px-4 py-2">竞品信息收集→分析→报告</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2">内容营销 SOP</td>
              <td className="border border-slate-700 px-4 py-2">6</td>
              <td className="border border-slate-700 px-4 py-2">选题→创作→审核→发布</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2">周报月报 SOP</td>
              <td className="border border-slate-700 px-4 py-2">4</td>
              <td className="border border-slate-700 px-4 py-2">数据收集→汇总→渲染→审核</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2">Bug 分析 SOP</td>
              <td className="border border-slate-700 px-4 py-2">5</td>
              <td className="border border-slate-700 px-4 py-2">复现→根因→修复→验证→知识沉淀</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2">数据分析 SOP</td>
              <td className="border border-slate-700 px-4 py-2">5</td>
              <td className="border border-slate-700 px-4 py-2">需求→采集→分析→可视化→审核</td>
            </tr>
          </tbody>
        </table>
        
        <hr className="border-slate-700" />
        <p className="text-slate-400 italic">深入技术文章，感谢阅读！</p>
      </div>
    )
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const [locale, setLocale] = useState('zh');
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const data = blogPostsData[params.id];
    setPostData(data);
  }, [params.id]);

  const t = {
    en: {
      backToBlog: 'Back to Blog',
      backToHome: 'Back to Home',
      by: 'By',
    },
    zh: {
      backToBlog: '返回博客',
      backToHome: '返回首页',
      by: '作者',
    },
  }[locale];

  if (!postData) {
    return (
      <div className="min-h-screen bg-[#020617] text-white">
        <Suspense fallback={<div className="h-16" />}>
          <LandingNavbar locale={locale} onLocaleChange={setLocale} />
        </Suspense>
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
      <Suspense fallback={<div className="h-16" />}>
        <LandingNavbar locale={locale} onLocaleChange={setLocale} />
      </Suspense>
      
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 导航 */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={16} />
              {t.backToBlog}
            </Link>
          </div>

          {/* 标题区域 */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {postData.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs px-3 py-1.5 bg-[#0056ff]/10 text-[#0056ff] rounded-full">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {postData.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-400">
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {postData.date}
              </span>
              <span className="flex items-center gap-2">
                <User size={18} />
                {t.by} {postData.author}
              </span>
            </div>
          </header>

          {/* 内容区域 */}
          <div className="prose prose-invert max-w-none">
            {postData.content}
          </div>

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
