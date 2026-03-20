'use client';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="h-16 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800" />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 导航 skeleton */}
          <div className="mb-8 h-6 w-24 bg-slate-800/50 rounded animate-pulse" />
          
          {/* 标题 skeleton */}
          <div className="mb-12">
            <div className="h-4 w-20 bg-slate-800/50 rounded mb-6 animate-pulse" />
            <div className="h-12 w-3/4 bg-slate-800/50 rounded mb-4 animate-pulse" />
            <div className="h-12 w-1/2 bg-slate-800/50 rounded animate-pulse" />
          </div>
          
          {/* 内容 skeleton */}
          <div className="space-y-4">
            <div className="h-4 w-full bg-slate-800/50 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-slate-800/50 rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-slate-800/50 rounded animate-pulse" />
            <div className="h-4 w-full bg-slate-800/50 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-slate-800/50 rounded animate-pulse" />
          </div>
          
          {/* 代码块 skeleton */}
          <div className="mt-8 h-40 w-full bg-slate-800/30 rounded-lg animate-pulse" />
          
          {/* 更多内容 skeleton */}
          <div className="mt-8 space-y-4">
            <div className="h-4 w-full bg-slate-800/50 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-slate-800/50 rounded animate-pulse" />
            <div className="h-4 w-full bg-slate-800/50 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
