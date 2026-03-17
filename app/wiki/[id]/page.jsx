'use client';

import { useState, Suspense, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { LandingNavbar } from '@/components/LandingNavbar';
import { BookOpen, ChevronRight, ArrowLeft, FileText, Users, Shield, Wrench, Zap, Code, Database } from 'lucide-react';
import Link from 'next/link';

// 使用简单的页面数据，避免复杂的模板字符串问题
const wikiPagesData = {
  'user-guide': {
    title: '用户手册',
    description: 'TeamClaw 完整用户手册，学习如何使用所有功能',
    category: '指南',
    icon: BookOpen,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">TeamClaw 用户手册</h1>
        <p className="text-slate-400">版本：v1.0.0 | 最后更新：2026-03-07</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">快速开始</h2>
        <h3 className="text-xl font-semibold text-white">1. 安装和初始化</h3>
        <ol className="list-decimal list-inside text-slate-400 space-y-2">
          <li>克隆 TeamClaw 仓库</li>
          <li>运行 npm install 安装依赖</li>
          <li>运行 npm run dev 启动开发服务器</li>
          <li>首次访问时创建管理员账户</li>
        </ol>
        
        <h3 className="text-xl font-semibold text-white">2. 创建你的第一个项目</h3>
        <ol className="list-decimal list-inside text-slate-400 space-y-2">
          <li>点击"新建项目"按钮</li>
          <li>填写项目名称和描述</li>
          <li>添加团队成员（人类和 AI）</li>
          <li>开始创建任务！</li>
        </ol>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">核心功能</h2>
        <h3 className="text-xl font-semibold text-white">任务看板</h3>
        <p className="text-slate-400">TeamClaw 提供四列看板：待办、进行中、审核中、完成。</p>
        <p className="text-slate-400"><strong>主要功能：</strong></p>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
          <li>拖拽排序任务</li>
          <li>任务优先级设置</li>
          <li>里程碑管理</li>
          <li>检查项列表</li>
          <li>任务评论和操作日志</li>
        </ul>
      </div>
    )
  },
  'prd': {
    title: '产品需求文档 (PRD)',
    description: '了解 TeamClaw 的产品规划和功能需求',
    category: '产品',
    icon: FileText,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">TeamClaw 产品需求文档 (PRD)</h1>
        <p className="text-slate-400">版本：v1.0.0 | 最后更新：2026-03-07</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">产品概述</h2>
        <p className="text-slate-400">TeamClaw 是一个开源的人机协作平台，让 AI Agent 作为真正的团队成员参与项目管理。</p>
        
        <h3 className="text-xl font-semibold text-white">核心价值主张</h3>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
          <li><strong>AI 即队友</strong>：AI 不是工具，而是真正的团队成员</li>
          <li><strong>任务驱动</strong>：从聊天驱动转向任务驱动的协作模式</li>
          <li><strong>完整工作流</strong>：从任务创建到交付物审核的完整闭环</li>
        </ul>
      </div>
    )
  },
  'api-reference': {
    title: 'API 参考',
    description: '完整的 API 文档，了解如何集成 TeamClaw',
    category: '技术',
    icon: Code,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">TeamClaw API 参考</h1>
        <p className="text-slate-400">版本：v1.0.0 | 最后更新：2026-03-07</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">认证</h2>
        <h3 className="text-xl font-semibold text-white">Bearer Token 认证</h3>
        <p className="text-slate-400">大多数 API 需要在请求头中包含 Bearer Token。</p>
        
        <h2 className="text-2xl font-bold text-white">任务 API</h2>
        <h3 className="text-xl font-semibold text-white">获取任务列表</h3>
        <p className="text-slate-400">{`GET /api/tasks?projectId=<projectId>&status=<status>`}</p>
      </div>
    )
  },
  'multi-user-access': {
    title: '多用户访问控制',
    description: '了解企业级多用户系统和权限管理',
    category: '安全',
    icon: Users,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">多用户访问控制</h1>
        <p className="text-slate-400">版本：v1.0.0 | 最后更新：2026-03-07</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">用户角色</h2>
        <h3 className="text-xl font-semibold text-white">三种角色类型</h3>
        <table className="w-full border-collapse border border-slate-700">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-4 py-2 text-left">角色</th>
              <th className="border border-slate-700 px-4 py-2 text-left">权限级别</th>
              <th className="border border-slate-700 px-4 py-2 text-left">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-4 py-2">Admin</td>
              <td className="border border-slate-700 px-4 py-2">最高</td>
              <td className="border border-slate-700 px-4 py-2">系统管理员，拥有全部权限</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2">Member</td>
              <td className="border border-slate-700 px-4 py-2">标准</td>
              <td className="border border-slate-700 px-4 py-2">普通团队成员，可以参与项目协作</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2">Viewer</td>
              <td className="border border-slate-700 px-4 py-2">只读</td>
              <td className="border border-slate-700 px-4 py-2">只能查看，不能修改</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  'approval-system': {
    title: '审批系统设计',
    description: '通用审批系统的技术实现和使用指南',
    category: '技术',
    icon: Shield,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">审批系统设计</h1>
        <p className="text-slate-400">版本：v1.0.0 | 最后更新：2026-03-07</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">审批类型</h2>
        <h3 className="text-xl font-semibold text-white">支持的审批类型</h3>
        <table className="w-full border-collapse border border-slate-700">
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
          </tbody>
        </table>
      </div>
    )
  },
  'skill-management': {
    title: 'Skill 管理系统',
    description: 'AI Skill 生命周期管理的完整指南',
    category: '功能',
    icon: Wrench,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">Skill 管理系统</h1>
        <p className="text-slate-400">版本：v1.0.0 | 最后更新：2026-03-07</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">Skill 生命周期</h2>
        <h3 className="text-xl font-semibold text-white">状态流转</h3>
        <div className="bg-slate-800 p-4 rounded-lg font-mono text-slate-300">
          draft → pending_approval → active / rejected
        </div>
        
        <h3 className="text-xl font-semibold text-white">各状态说明</h3>
        <table className="w-full border-collapse border border-slate-700">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-4 py-2 text-left">状态</th>
              <th className="border border-slate-700 px-4 py-2 text-left">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">draft</td>
              <td className="border border-slate-700 px-4 py-2">草稿状态，可编辑，未提交审批</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">pending_approval</td>
              <td className="border border-slate-700 px-4 py-2">审批中，等待管理员决定</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">active</td>
              <td className="border border-slate-700 px-4 py-2">已激活，可被发现和安装</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2 font-mono">rejected</td>
              <td className="border border-slate-700 px-4 py-2">已拒绝，可修改后重新提交</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  'sop-engine': {
    title: 'SOP 工作流引擎',
    description: '深入了解 SOP 引擎的架构和使用方法',
    category: '功能',
    icon: Zap,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">SOP 工作流引擎</h1>
        <p className="text-slate-400">版本：v1.0.0 | 最后更新：2026-03-07</p>
        
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
      </div>
    )
  },
  'openclaw-sync': {
    title: 'OpenClaw 同步设计',
    description: '了解与 OpenClaw Gateway 的深度集成',
    category: '集成',
    icon: Database,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">OpenClaw Gateway 集成</h1>
        <p className="text-slate-400">版本：v1.0.0 | 最后更新：2026-03-07</p>
        
        <hr className="border-slate-700" />
        
        <h2 className="text-2xl font-bold text-white">连接模式</h2>
        <h3 className="text-xl font-semibold text-white">两种连接模式</h3>
        <table className="w-full border-collapse border border-slate-700">
          <thead>
            <tr className="bg-slate-800">
              <th className="border border-slate-700 px-4 py-2 text-left">模式</th>
              <th className="border border-slate-700 px-4 py-2 text-left">说明</th>
              <th className="border border-slate-700 px-4 py-2 text-left">适用场景</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 px-4 py-2">服务端代理</td>
              <td className="border border-slate-700 px-4 py-2">TeamClaw 服务端代理 MCP 调用</td>
              <td className="border border-slate-700 px-4 py-2">企业部署，安全性高</td>
            </tr>
            <tr>
              <td className="border border-slate-700 px-4 py-2">浏览器直连</td>
              <td className="border border-slate-700 px-4 py-2">浏览器直接连接 Gateway</td>
              <td className="border border-slate-700 px-4 py-2">个人使用，延迟低</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
};

export default function WikiDetailPage() {
  const params = useParams();
  const [locale, setLocale] = useState('zh');
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const data = wikiPagesData[params.id];
    setPageData(data);
  }, [params.id]);

  const t = {
    en: {
      backToWiki: 'Back to Wiki',
      backToHome: 'Back to Home',
    },
    zh: {
      backToWiki: '返回 Wiki',
      backToHome: '返回首页',
    },
  }[locale];

  if (!pageData) {
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

  const Icon = pageData.icon || FileText;

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
              <span className="flex items-center gap-1 text-xs px-3 py-1.5 bg-slate-800 rounded-full text-slate-400">
                {pageData.category}
              </span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#0056ff]/10 rounded-lg flex items-center justify-center">
                <Icon size={24} className="text-[#0056ff]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {pageData.title}
              </h1>
            </div>
          </header>

          {/* 内容区域 */}
          <div className="prose prose-invert max-w-none">
            {pageData.content}
          </div>

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
