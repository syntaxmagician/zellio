"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hammer, ShieldCheck, Milestone } from "lucide-react";
import TeamAvatar from "./TeamAvatar";
import AuroraFlowHero from "../ui/AuroraFlowHero";
import { gsap, useGSAP } from "@/lib/gsap";
import { isReady } from "@/lib/ready";

// Kept in sync with team/page.tsx — the splash sets this before the hero can be seen.

export default function TeamHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -20]);
  const y2 = useTransform(scrollY, [0, 500], [0, 15]);
  const y3 = useTransform(scrollY, [0, 500], [0, -35]);
  const y4 = useTransform(scrollY, [0, 500], [0, 25]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
        tl.from(".th-badge", { y: 14, opacity: 0, duration: 0.5 })
          .from(".th-title", { y: 26, opacity: 0, duration: 0.8 }, "-=0.25")
          .from(".th-desc", { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
          .from(
            ".th-card",
            { y: 24, opacity: 0, scale: 0.94, duration: 0.7, stagger: 0.09 },
            "-=0.45"
          );

        let fallback: ReturnType<typeof setTimeout> | undefined;
        const play = () => tl.play();
        if (isReady()) {
          play();
        } else {
          window.addEventListener("zellio:ready", play, { once: true });
          fallback = setTimeout(play, 2600);
        }
        return () => {
          window.removeEventListener("zellio:ready", play);
          if (fallback) clearTimeout(fallback);
        };
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full relative overflow-hidden py-10 lg:py-16 border-b border-slate-100">
      {/* Background Simplex Flow Animation */}
      <AuroraFlowHero />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">

        {/* Left Side: Content */}
        <div className="lg:col-span-6 space-y-5 lg:space-y-6">
          <div className="th-badge inline-block px-3 py-1 rounded-full bg-white text-[#2563EB] text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-blue-100 shadow-sm">
            Meet The Builders.
          </div>
          <h1 className="th-title text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
            Engineering is never a solo effort.
          </h1>
          <p className="th-desc text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
            Behind every enterprise platform is a multidisciplinary team of designers, software engineers, architects, and strategists dedicated to building products that stand the test of time.
          </p>
        </div>

        {/* Right Side: NFT Portraits Editorial Composition */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 lg:block lg:relative lg:h-[420px] w-full">

          {/* Portrait 1: Leader (Vico Tegar) */}
          <motion.div
            style={{ y: y1 }}
            className="th-card relative lg:absolute lg:left-[0%] lg:top-[5%] w-full lg:w-[130px] xl:w-[150px] aspect-[4/5] bg-white border border-slate-200/80 rounded-[20px] p-3 shadow-lg group hover:shadow-xl transition-shadow duration-500 z-20 flex flex-col"
          >
            <div className="w-full flex-grow rounded-[12px] bg-slate-950 relative overflow-hidden flex items-center justify-center">
              <TeamAvatar name="vico" className="w-[120%] h-[120%] mt-8 object-cover scale-110 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="mt-2 text-center">
              <span className="text-[8px] font-mono font-bold text-blue-500 tracking-wider block">LEADER</span>
              <h3 className="text-[11px] font-black text-slate-800 tracking-tight leading-none mt-0.5">Vico Tegar</h3>
            </div>
          </motion.div>

          {/* Portrait 2: Frontend (Samuel Sukarno) */}
          <motion.div
            style={{ y: y2 }}
            className="th-card relative lg:absolute lg:left-[25%] lg:bottom-[5%] w-full lg:w-[120px] xl:w-[140px] aspect-[4/5] bg-white border border-slate-200/80 rounded-[20px] p-3 shadow-lg group hover:shadow-xl transition-shadow duration-500 z-10 flex flex-col"
          >
            <div className="w-full flex-grow rounded-[12px] bg-emerald-950 relative overflow-hidden flex items-center justify-center">
              <TeamAvatar name="samuel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="mt-2 text-center">
              <span className="text-[8px] font-mono font-bold text-emerald-500 tracking-wider block">FRONTEND</span>
              <h3 className="text-[11px] font-black text-slate-800 tracking-tight leading-none mt-0.5">Samuel Sukarno</h3>
            </div>
          </motion.div>

          {/* Portrait 3: Backend (Muhammad Cavendio) */}
          <motion.div
            style={{ y: y3 }}
            className="th-card relative lg:absolute lg:left-[50%] lg:top-[5%] w-full lg:w-[130px] xl:w-[150px] aspect-[4/5] bg-white border border-slate-200/80 rounded-[20px] p-3 shadow-lg group hover:shadow-xl transition-shadow duration-500 z-30 flex flex-col"
          >
            <div className="w-full flex-grow rounded-[12px] bg-indigo-950 relative overflow-hidden flex items-center justify-center">
              <TeamAvatar name="cavendio" className="w-[120%] h-[120%] mt-8 object-cover scale-110 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="mt-2 text-center">
              <span className="text-[8px] font-mono font-bold text-indigo-500 tracking-wider block">BACKEND</span>
              <h3 className="text-[11px] font-black text-slate-800 tracking-tight leading-none mt-0.5">Muhammad Cavendio</h3>
            </div>
          </motion.div>

          {/* Portrait 4: Server (Hasyim Ridwan) */}
          <motion.div
            style={{ y: y4 }}
            className="th-card relative lg:absolute lg:left-[75%] lg:bottom-[5%] w-full lg:w-[120px] xl:w-[140px] aspect-[4/5] bg-white border border-slate-200/80 rounded-[20px] p-3 shadow-lg group hover:shadow-xl transition-shadow duration-500 z-40 flex flex-col"
          >
            <div className="w-full flex-grow rounded-[12px] bg-sky-950 relative overflow-hidden flex items-center justify-center">
              <TeamAvatar name="hasyim" className="w-[120%] h-[120%] mt-8 object-cover scale-110 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="mt-2 text-center">
              <span className="text-[8px] font-mono font-bold text-sky-500 tracking-wider block">DEVOPS</span>
              <h3 className="text-[11px] font-black text-slate-800 tracking-tight leading-none mt-0.5">Hasyim Ridwan</h3>
            </div>
          </motion.div>

        </div>
      </div>

      {/* SECTION 02: Engineering Philosophy */}
      <div className="border-t border-slate-100 pt-8 relative z-10">
        <span className="text-[10px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase block mb-4">
          ENGINEERING PHILOSOPHY
        </span>

        <div className="relative mt-8 md:mt-12 pl-3 md:pl-0">
          
          {/* Animated Pipeline Track */}
          <div className="absolute top-0 md:top-4 left-7 md:left-0 w-[1px] md:w-full h-full md:h-[1px] bg-slate-200/80" />
          
          {/* Data Packet Animation (Desktop) */}
          <motion.div 
            className="absolute hidden md:block top-4 left-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-40 -translate-y-[0.5px] z-0"
            animate={{ left: ["-20%", "120%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Data Packet Animation (Mobile) */}
          <motion.div 
            className="absolute md:hidden top-0 left-7 w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent h-40 -translate-x-[0.5px] z-0"
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 relative z-10 pt-2 md:pt-0">
            
            {/* Node 1: Craftsmanship */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-row md:flex-col gap-6 md:gap-5 group relative cursor-default"
            >
              {/* Connector Node */}
              <div className="w-8 h-8 shrink-0 rounded-full bg-white border-[3px] border-slate-200 flex items-center justify-center md:mb-1 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 z-10 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors" />
                <div className="absolute inset-0 rounded-full border border-blue-400 scale-100 opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
              
              <div className="flex-1 md:pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <Hammer className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-[9px] font-mono font-bold text-blue-500 uppercase tracking-widest">
                    Phase 01 // Build
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-black text-slate-900 tracking-tight mb-1.5 group-hover:text-blue-600 transition-colors">
                  Craftsmanship
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  We obsess over every interaction and every line of code.
                </p>
                <div className="mt-3 font-mono text-[9px] text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span className="text-blue-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity"> &gt; </span> 
                  core.compile()
                </div>
              </div>
            </motion.div>

            {/* Node 2: Quality First */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-row md:flex-col gap-6 md:gap-5 group relative cursor-default"
            >
              {/* Connector Node */}
              <div className="w-8 h-8 shrink-0 rounded-full bg-white border-[3px] border-slate-200 flex items-center justify-center md:mb-1 group-hover:border-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 z-10 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-emerald-500 transition-colors" />
                <div className="absolute inset-0 rounded-full border border-emerald-400 scale-100 opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
              
              <div className="flex-1 md:pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-[9px] font-mono font-bold text-emerald-500 uppercase tracking-widest">
                    Phase 02 // Audit
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-black text-slate-900 tracking-tight mb-1.5 group-hover:text-emerald-600 transition-colors">
                  Quality First
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Performance, security, scalability and maintainability come before shortcuts.
                </p>
                <div className="mt-3 font-mono text-[9px] text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span className="text-emerald-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity"> &gt; </span> 
                  sec.analyze_v2()
                </div>
              </div>
            </motion.div>

            {/* Node 3: Long-term Thinking */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row md:flex-col gap-6 md:gap-5 group relative cursor-default"
            >
              {/* Connector Node */}
              <div className="w-8 h-8 shrink-0 rounded-full bg-white border-[3px] border-slate-200 flex items-center justify-center md:mb-1 group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 z-10 relative">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-indigo-500 transition-colors" />
                <div className="absolute inset-0 rounded-full border border-indigo-400 scale-100 opacity-0 group-hover:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
              </div>
              
              <div className="flex-1 md:pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <Milestone className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="text-[9px] font-mono font-bold text-indigo-500 uppercase tracking-widest">
                    Phase 03 // Deploy
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-black text-slate-900 tracking-tight mb-1.5 group-hover:text-indigo-600 transition-colors">
                  Long-term Thinking
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  We build software that still feels modern years after launch.
                </p>
                <div className="mt-3 font-mono text-[9px] text-slate-400 group-hover:text-slate-600 transition-colors">
                  <span className="text-indigo-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity"> &gt; </span> 
                  sys.launch()
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      
      </div>
    </section>
  );
}
