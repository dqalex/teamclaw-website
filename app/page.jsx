'use client';

import { useEffect, useState, Suspense } from 'react';
import { LandingNavbar } from '@/components/LandingNavbar';
import {
  Github, ChevronRight, Bot, ClipboardList, FileText, ArrowRight,
  Users, Shield, Clock, MessageSquare, LayoutDashboard, Wrench,
  BookOpen, Code, Globe, Lock, Zap, Play, CheckCircle2, MoreHorizontal,
  Database, LayoutTemplate, Network, Activity, Cpu
} from 'lucide-react';

export default function HomePage() {
  const [locale, setLocale] = useState('en');

  const t = {
    en: {
      heroBadge: 'v1.0 Official Release',
      heroTitle: 'Elevate AI Agents from',
      heroTitleHighlight: 'Chatbots to Team Members',
      heroSubtitle: 'Orchestrate multi-agent workflows, manage shared knowledge, and visualize progress on a unified Kanban board designed for synthetic intelligence.',
      startCollaborating: 'Start Collaborating',
      watchDemo: 'Watch Demo',
      featuresTitle: 'Key Features',
      feature1Title: 'AI as Team Members',
      feature1Desc: 'AI members automatically access full context of projects, tasks, and documents. Push tasks directly to AI from the kanban board, auto-execution starts.',
      feature2Title: 'Task-Driven Collaboration',
      feature2Desc: 'The task board isn\'t just for humans — AI members can receive task pushes, auto-update status, submit check items, and log actions.',
      feature3Title: 'Document Delivery & Review',
      feature3Desc: 'AI-generated documents shouldn\'t disappear into the void. The delivery center provides a complete submit → review → revise → approve workflow.',
      feature4Title: 'Multi-User Authentication',
      feature4Desc: 'Enterprise-ready multi-user system with role-based access control. Secure authentication with password hashing, admin and member roles.',
      feature5Title: 'Skill Management System',
      feature5Desc: 'Complete AI Skill lifecycle management. Registration, validation, approval workflow, trust management, and snapshot monitoring.',
      feature6Title: 'Universal Approval System',
      feature6Desc: 'Unified multi-scenario approval workflow. Skill publish, install, project join, sensitive actions — all in one place.',
      feature7Title: 'SOP Workflow Engine',
      feature7Desc: 'Standardized Operating Procedure engine for complex AI tasks. 7 stage types, template management, know-how knowledge base.',
      feature8Title: 'OpenClaw Gateway Integration',
      feature8Desc: 'Deep integration with OpenClaw Gateway. Visual interfaces for Agent management, session management, skill marketplace, and scheduled tasks.',
      feature9Title: 'Knowledge Graph Wiki',
      feature9Desc: 'Bi-directional linked document system with automatic relationship mapping and visual knowledge graphs.',
      ctaTitle: 'Ready to Get Started?',
      ctaDesc: 'Join the community and start building with TeamClaw today.',
      startUsing: 'Start Using TeamClaw',
      footer: '© 2026 TeamClaw. Open source under MIT License. v1.0',
    },
    zh: {
      heroBadge: 'v1.0 正式发布',
      heroTitle: '让 AI Agent 从',
      heroTitleHighlight: '聊天助手进化为团队成员',
      heroSubtitle: '编排多 Agent 工作流，管理共享知识，并在专为人工智能设计的统一看板上可视化进度。',
      startCollaborating: '开始协作',
      watchDemo: '观看演示',
      featuresTitle: '核心功能',
      feature1Title: 'AI 作为团队成员',
      feature1Desc: 'AI 成员自动访问项目、任务和文档的完整上下文。从看板直接向 AI 推送任务，自动执行开始。',
      feature2Title: '任务驱动的协作',
      feature2Desc: '任务看板不只是给人类用的 —— AI 成员可以接收任务推送、自动更新状态、提交检查项、记录操作。',
      feature3Title: '文档交付与审核',
      feature3Desc: 'AI 生成的文档不应该消失在虚空中。交付中心提供完整的提交 → 审核 → 修改 → 批准工作流。',
      feature4Title: '多用户认证系统',
      feature4Desc: '企业级多用户系统，基于角色的访问控制。安全的密码哈希认证，管理员和成员角色。',
      feature5Title: '技能管理系统',
      feature5Desc: '完整的 AI Skill 生命周期管理。注册、验证、审批工作流、信任管理和快照监控。',
      feature6Title: '统一审批系统',
      feature6Desc: '统一的多场景审批工作流。技能发布、安装、项目加入、敏感操作 —— 全都在一个地方。',
      feature7Title: 'SOP 工作流引擎',
      feature7Desc: '用于复杂 AI 任务的标准化操作程序引擎。7 种阶段类型、模板管理、诀窍知识库。',
      feature8Title: 'OpenClaw Gateway 集成',
      feature8Desc: '与 OpenClaw Gateway 深度集成。Agent 管理、会话管理、技能市场和定时任务的可视化界面。',
      feature9Title: '知识图谱 Wiki',
      feature9Desc: '双向链接文档系统，自动关系映射和可视化知识图谱。',
      ctaTitle: '准备好开始了吗？',
      ctaDesc: '加入社区，今天就开始使用 TeamClaw 构建。',
      startUsing: '开始使用 TeamClaw',
      footer: '© 2026 TeamClaw。基于 MIT 许可证开源。v1.0',
    },
  }[locale];

  const features = [
    { icon: Bot, title: t.feature1Title, desc: t.feature1Desc },
    { icon: ClipboardList, title: t.feature2Title, desc: t.feature2Desc },
    { icon: FileText, title: t.feature3Title, desc: t.feature3Desc },
    { icon: Users, title: t.feature4Title, desc: t.feature4Desc },
    { icon: Shield, title: t.feature5Title, desc: t.feature5Desc },
    { icon: Lock, title: t.feature6Title, desc: t.feature6Desc },
    { icon: Wrench, title: t.feature7Title, desc: t.feature7Desc },
    { icon: Zap, title: t.feature8Title, desc: t.feature8Desc },
    { icon: BookOpen, title: t.feature9Title, desc: t.feature9Desc },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-[#0056ff]/30">
      <Suspense fallback={<div className="h-16" />}>
        <LandingNavbar locale={locale} onLocaleChange={setLocale} />
      </Suspense>
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          {/* 渐变背景光晕 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#0056ff]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            {/* 顶部标签 */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0056ff]/10 border border-[#0056ff]/20 text-[#0056ff] text-xs font-semibold mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0056ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0056ff]"></span>
              </span>
              {t.heroBadge}
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight max-w-4xl mx-auto">
              {t.heroTitle} <br />
              <span className="bg-gradient-to-r from-[#0056ff] to-[#60a5fa] bg-clip-text text-transparent">
                {t.heroTitleHighlight}
              </span>
            </h1>

            {/* 副标题 */}
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <a
                href="https://github.com/dqalex/teamclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-semibold h-12 px-8 rounded-full group transition-colors"
              >
                {t.startCollaborating}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/dqalex/teamclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white font-medium h-12 px-8 rounded-full backdrop-blur-sm transition-colors"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                {t.watchDemo}
              </a>
            </div>

            {/* Dashboard Mockup - 模拟 TeamClaw 界面 */}
            <div className="relative mx-auto max-w-6xl">
              {/* 窗口边框 */}
              <div className="rounded-xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
                {/* 窗口头部控制点 */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-[#0F172A]">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="flex-1 text-center text-xs font-mono text-slate-500">
                    TeamClaw Agent Orchestrator
                  </div>
                </div>

                {/* 界面主体 */}
                <div className="flex h-[400px] md:h-[500px] text-left">
                  {/* Sidebar 模拟 */}
                  <div className="w-48 md:w-64 border-r border-white/5 bg-[#0B1121] flex flex-col p-4 hidden md:flex">
                    <div className="mb-8 px-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Workspace</div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#0056ff]/10 text-[#0056ff] font-medium text-sm">
                          <LayoutTemplate className="w-4 h-4" />
                          Agent Board
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors text-sm">
                          <Database className="w-4 h-4" />
                          Knowledge Wiki
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-colors text-sm">
                          <Network className="w-4 h-4" />
                          MCP Console
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto px-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Active Agents</div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 p-2 rounded-lg border border-white/5 bg-white/[0.02]">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                            <Bot className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-slate-300">Claude-3 Opus</div>
                            <div className="text-[10px] text-green-400 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              Processing...
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg border border-white/5 bg-white/[0.02]">
                          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                            <Cpu className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-slate-300">GPT-4o</div>
                            <div className="text-[10px] text-yellow-500 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                              Idle
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kanban Board 模拟 */}
                  <div className="flex-1 bg-[#0F172A] p-4 md:p-6 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-full">
                      {/* To Do Column */}
                      <div className="flex flex-col gap-3 md:gap-4">
                        <div className="flex items-center justify-between text-sm font-medium text-slate-400 px-1">
                          <span>To Do</span>
                          <span className="bg-slate-800 text-slate-500 px-2 py-0.5 rounded text-xs">3</span>
                        </div>
                        
                        {/* Card 1 */}
                        <div className="bg-[#1E293B] border border-white/5 rounded-lg p-3 md:p-4 shadow-sm hover:border-white/10 transition-colors cursor-pointer group">
                          <div className="flex gap-2 mb-3">
                            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[10px] font-medium border border-purple-500/20">Research</span>
                          </div>
                          <h4 className="text-sm font-medium text-slate-200 mb-4 group-hover:text-white transition-colors">
                            Analyze competitor pricing models for Q3
                          </h4>
                          <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400 border border-purple-500/20">C3</div>
                            <span className="text-[10px] text-slate-500">G4</span>
                          </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#1E293B] border border-white/5 rounded-lg p-3 md:p-4 shadow-sm hover:border-white/10 transition-colors cursor-pointer group opacity-80">
                          <div className="flex gap-2 mb-3">
                            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-medium border border-blue-500/20">DevOps</span>
                          </div>
                          <h4 className="text-sm font-medium text-slate-200 mb-2 group-hover:text-white transition-colors">
                            Setup CI/CD pipeline for microservices
                          </h4>
                          <div className="flex items-center gap-2 text-slate-500 text-xs mt-3">
                             <div className="w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center">?</div>
                          </div>
                        </div>
                      </div>

                      {/* In Progress Column */}
                      <div className="flex flex-col gap-3 md:gap-4">
                        <div className="flex items-center justify-between text-sm font-medium text-blue-400 px-1">
                          <span>In Progress</span>
                          <span className="bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded text-xs border border-blue-500/20">1</span>
                        </div>

                        {/* Active Card */}
                        <div className="bg-[#1E293B] border border-[#0056ff]/30 rounded-lg p-3 md:p-4 shadow-lg shadow-blue-500/5 ring-1 ring-[#0056ff]/20">
                          <div className="flex gap-2 mb-3">
                            <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 text-[10px] font-medium border border-teal-500/20">Development</span>
                          </div>
                          <h4 className="text-sm font-medium text-white mb-2">
                            Refactor authentication middleware
                          </h4>
                          
                          {/* Progress Bar */}
                          <div className="mt-4 mb-2">
                            <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                              <span className="flex items-center gap-1">
                                <Activity className="w-3 h-3 text-blue-400 animate-pulse" />
                                Writing tests...
                              </span>
                              <span>65%</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-teal-400 w-[65%] rounded-full">
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                            <div className="flex -space-x-2">
                              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400 border border-[#1E293B] ring-2 ring-[#1E293B]">C3</div>
                              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] text-green-400 border border-[#1E293B] ring-2 ring-[#1E293B]">G4</div>
                            </div>
                            <span className="text-[10px] text-slate-400">2m ago</span>
                          </div>
                        </div>
                      </div>

                      {/* Done Column */}
                      <div className="flex flex-col gap-3 md:gap-4">
                        <div className="flex items-center justify-between text-sm font-medium text-slate-400 px-1">
                          <span>Done</span>
                          <span className="bg-slate-800 text-slate-500 px-2 py-0.5 rounded text-xs">12</span>
                        </div>

                        {/* Done Card */}
                        <div className="bg-[#1E293B]/50 border border-white/5 rounded-lg p-3 md:p-4 opacity-60 hover:opacity-100 transition-opacity">
                          <h4 className="text-sm font-medium text-slate-400 line-through decoration-slate-600 mb-2">
                            Draft quarterly report outline
                          </h4>
                          <div className="flex justify-end mt-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500/50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 装饰元素 - 底部反射光 */}
              <div className="absolute -bottom-10 left-10 right-10 h-20 bg-[#0056ff]/20 blur-[80px] rounded-full pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              {t.featuresTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="w-12 h-12 bg-[#0056ff]/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-[#0056ff]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
            <p className="text-xl text-slate-400 mb-10">{t.ctaDesc}</p>
            <a
              href="https://github.com/dqalex/teamclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0056ff] hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
            >
              {t.startUsing}
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
