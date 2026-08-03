"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitPullRequest, Zap, BookOpen, Accessibility, Handshake, CheckCircle } from "lucide-react";

export default function EngineeringCulture() {
  return (
    <section className="w-full bg-[#FFFFFF] relative overflow-hidden py-16 lg:py-24 border-t border-slate-100">
      
      {/* Subtle Background Blueprint Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase block mb-4">
            ENGINEERING CULTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            How we build matters as much as what we build.
          </h2>
          <p className="text-sm md:text-base font-medium text-slate-500 leading-relaxed">
            Our culture is rooted in rigorous engineering standards, continuous learning, and a relentless pursuit of product excellence.
          </p>
        </div>

        {/* Premium Bento Grid Console */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[1px] bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          
          {/* Card 1: Pull Request Reviewed (8 columns) */}
          <div className="col-span-12 lg:col-span-8 bg-white p-6 relative overflow-hidden group flex flex-col justify-between min-h-[220px]">
            <div className="absolute right-4 bottom-4 w-1/2 hidden md:block h-[110px] bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-[9px] text-slate-400 overflow-hidden shadow-2xl z-10">
              <div className="flex items-center gap-1.5 mb-2 border-b border-slate-800 pb-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-slate-500">PR #402 // APPROVED</span>
              </div>
              <div className="text-green-400 font-bold mb-1">{"+ import { securityAudit } from \"zellio-sec\";"}</div>
              <div className="text-red-400 font-bold mb-1">- const unsecured = true;</div>
              <div className="text-slate-500 mt-2">// Reviewed & approved by Vico Tegar</div>
            </div>
            
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                <GitPullRequest className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight mb-2">
                Every pull request reviewed
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed max-w-md">
                Code quality is non-negotiable. Every line of code goes through rigorous peer review to maintain structural integrity.
              </p>
            </div>
          </div>

          {/* Card 2: Performance (4 columns) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-6 relative overflow-hidden group flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-100">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight mb-2">
                Performance is a feature
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
                Speed is paramount. We engineer applications to load instantly and respond without latency.
              </p>
            </div>

            <div className="mt-4 flex gap-1.5 border-t border-slate-100 pt-4">
              <span className="px-2 py-1 rounded bg-slate-50 border border-slate-150 text-[9px] font-mono font-bold text-slate-500">Low Latency</span>
              <span className="px-2 py-1 rounded bg-slate-50 border border-slate-150 text-[9px] font-mono font-bold text-slate-500">High Scalability</span>
            </div>
          </div>

          {/* Card 3: Documentation First (4 columns) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-6 relative overflow-hidden group flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight mb-2">
                Documentation first
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
                If it's not documented, it doesn't exist. Clear architectural blueprints are our foundation.
              </p>
            </div>

            <div className="mt-4 bg-slate-50 border border-slate-150 rounded-lg p-2.5 font-mono text-[9px] text-slate-500">
              <span className="text-blue-500">type</span> Deploy = <span className="text-emerald-600">"SUCCESS"</span>;
            </div>
          </div>

          {/* Card 4: Accessibility (4 columns) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-6 relative overflow-hidden group flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 border border-cyan-100">
                <Accessibility className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight mb-2">
                Accessibility matters
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
                Software must be usable by everyone. We build inclusive, standards-compliant digital experiences.
              </p>
            </div>

            <div className="mt-4 flex gap-1.5 border-t border-slate-100 pt-4">
              <span className="px-2 py-1 rounded bg-slate-50 border border-slate-150 text-[9px] font-mono font-bold text-slate-500">Inclusive Design</span>
              <span className="px-2 py-1 rounded bg-slate-50 border border-slate-150 text-[9px] font-mono font-bold text-slate-500">A11y Compliant</span>
            </div>
          </div>

          {/* Card 5: Long-term Partnerships (4 columns) */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white p-6 relative overflow-hidden group flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100">
                <Handshake className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-black text-slate-800 tracking-tight mb-2">
                Long-term partnerships
              </h3>
              <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
                We maintain, scale, and evolve your ecosystem alongside your business.
              </p>
            </div>

            <div className="mt-4 h-10 w-full relative">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path d="M0,35 Q40,15 80,30 T160,15 T240,8" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
                <circle cx="240" cy="8" r="3" fill="#8B5CF6" className="animate-pulse" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
