"use client";

import React from "react";
import { 
  GitBranch, GitCommit, Play, CheckCircle2, AlertTriangle, 
  Terminal, Shield, FileCode, Check, LayoutGrid, Kanban, 
  FolderGit2, Settings, User, Clock, ArrowRight
} from "lucide-react";

export default function LinearProcessShowcase() {
  return (
    <div className="w-full bg-[#08090A] border border-white/5 rounded-2xl overflow-hidden shadow-2xl font-sans text-xs text-[#8E939E]">
      {/* Top Window Bar */}
      <div className="h-10 border-b border-white/5 bg-[#0D0E10] px-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="h-4 w-[1px] bg-white/5 mx-2" />
          <span className="text-[10px] font-mono tracking-wider text-white/40">zellio-engine-v2</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">STABLE PRODUCTION</span>
        </div>
      </div>

      <div className="flex min-h-[380px] lg:min-h-[420px]">
        {/* Sidebar Nav */}
        <div className="w-48 bg-[#0D0E10] border-r border-white/5 p-4 flex flex-col justify-between shrink-0 hidden sm:flex">
          <div className="space-y-6">
            {/* Project Title */}
            <div className="flex items-center gap-2.5 px-1.5">
              <div className="w-5 h-5 rounded bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 font-bold text-[10px]">
                Z
              </div>
              <span className="font-semibold text-white/95 text-[11px] tracking-tight">Zellio Workspace</span>
            </div>

            {/* Menu Sections */}
            <div className="space-y-1">
              <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest px-2 block mb-2">ENGINEERING OS</span>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 text-white/90 font-medium">
                <Kanban size={13} className="text-blue-500" />
                <span>Workflow Board</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.02] hover:text-white/80 transition-colors">
                <FolderGit2 size={13} className="text-white/40" />
                <span>Repositories</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.02] hover:text-white/80 transition-colors">
                <Shield size={13} className="text-white/40" />
                <span>Security Vault</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/[0.02] hover:text-white/80 transition-colors">
                <Settings size={13} className="text-white/40" />
                <span>Config</span>
              </div>
            </div>
          </div>

          {/* User info at bottom */}
          <div className="flex items-center gap-2 border-t border-white/5 pt-3 px-1.5">
            <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
              <User size={10} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-medium text-white/80">Zellio Deployer</span>
              <span className="text-[8px] text-white/30 font-mono">v2.4.0-stable</span>
            </div>
          </div>
        </div>

        {/* Board Workspace */}
        <div className="flex-grow p-4 sm:p-5 bg-[#08090A] flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6">
          
          {/* COLUMN 01: DISCOVERY & ARCHITECTURE */}
          <div className="flex flex-col gap-3 w-[260px] shrink-0 snap-start">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="font-semibold text-white/90">01. Discovery</span>
              </div>
              <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded font-mono text-white/40">1</span>
            </div>

            {/* Ticket Card */}
            <div className="bg-[#121315]/80 border border-white/5 p-3 rounded-lg hover:border-white/10 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-blue-500 bg-blue-500/5 px-1.5 py-0.5 rounded border border-blue-500/10">ARCH</span>
                <span className="text-[8px] text-white/30 flex items-center gap-1"><Clock size={9} /> High Priority</span>
              </div>
              <p className="text-white/80 font-medium leading-relaxed text-[11px]">
                Create system blueprints, digital infrastructure designs & AWS VPC/Security layouts.
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px] text-white/40">
                <span className="flex items-center gap-1 font-mono"><GitBranch size={9} /> main-specs</span>
                <span className="text-emerald-500 flex items-center gap-0.5 font-bold">100% SPEC</span>
              </div>
            </div>
          </div>

          {/* COLUMN 02: ENGINEERING */}
          <div className="flex flex-col gap-3 w-[260px] shrink-0 snap-start">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="font-semibold text-white/90">02. Engineering</span>
              </div>
              <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded font-mono text-white/40">2</span>
            </div>

            {/* Ticket Card */}
            <div className="bg-[#121315]/80 border border-white/5 p-3 rounded-lg hover:border-white/10 transition-colors space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-amber-500 bg-amber-500/5 px-1.5 py-0.5 rounded border border-amber-500/10">CODE</span>
                <span className="text-[8px] text-white/30 flex items-center gap-1"><Play size={9} /> Active</span>
              </div>
              <p className="text-white/80 font-medium leading-relaxed text-[11px]">
                Write clean React/Next.js files & setup microservice REST/gRPC API gateways.
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px] text-white/40">
                <span className="flex items-center gap-1 font-mono"><GitCommit size={9} /> f5a93d1</span>
                <span className="text-amber-500 flex items-center gap-0.5 font-bold"><FileCode size={10} /> typescript</span>
              </div>
            </div>

            {/* Sub-process visual: Code compiling terminal */}
            <div className="bg-[#0D0E10] border border-white/5 rounded-md p-2 font-mono text-[9px] text-white/40">
              <div className="flex items-center gap-1 mb-1"><Terminal size={9} /> <span>build_runner</span></div>
              <div className="text-emerald-500/70">$ next build</div>
              <div className="text-emerald-500">✓ Page optimizations complete</div>
              <div className="text-blue-400">✓ Turbopack compilation: OK</div>
            </div>
          </div>

          {/* COLUMN 03: AUDIT & QA */}
          <div className="flex flex-col gap-3 w-[260px] shrink-0 snap-start">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span className="font-semibold text-white/90">03. Audit & QA</span>
              </div>
              <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded font-mono text-white/40">1</span>
            </div>

            {/* Ticket Card */}
            <div className="bg-[#121315]/80 border border-white/5 p-3 rounded-lg hover:border-white/10 transition-colors space-y-3 opacity-80">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-rose-500 bg-rose-500/5 px-1.5 py-0.5 rounded border border-rose-500/10">SEC-AUDIT</span>
                <span className="text-[8px] text-emerald-500 flex items-center gap-1"><Check size={9} /> Pass</span>
              </div>
              <p className="text-white/80 font-medium leading-relaxed text-[11px]">
                Run query fuzzing tests, database penetration scans, and XSS prevention checks.
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px] text-white/40">
                <span className="flex items-center gap-1 font-mono"><Terminal size={9} /> check-sec.sh</span>
                <span className="text-emerald-500 flex items-center gap-0.5 font-bold"><Shield size={10} /> SECURE</span>
              </div>
            </div>
          </div>

          {/* COLUMN 04: DEVOPS */}
          <div className="flex flex-col gap-3 w-[260px] shrink-0 snap-start">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-semibold text-white/90">04. DevOps</span>
              </div>
              <span className="text-[10px] bg-white/5 px-1.5 py-0.5 rounded font-mono text-white/40">1</span>
            </div>

            {/* Ticket Card */}
            <div className="bg-[#121315]/80 border border-white/5 p-3 rounded-lg hover:border-white/10 transition-colors space-y-3 opacity-60">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono text-emerald-500 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10">DOCKER</span>
                <span className="text-[8px] text-white/30 flex items-center gap-1"><ArrowRight size={9} /> Released</span>
              </div>
              <p className="text-white/80 font-medium leading-relaxed text-[11px]">
                Containerize app stack via Docker & setup high-availability Kubernetes scaling patterns.
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[9px] text-white/40">
                <span className="flex items-center gap-1 font-mono"><GitBranch size={9} /> production</span>
                <span className="text-emerald-500 flex items-center gap-0.5 font-bold">12ms CDN</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
