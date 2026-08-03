"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, ShieldCheck, Milestone, ArrowRight } from "lucide-react";
import TeamAvatar from "./TeamAvatar";
import AuroraFlowHero from "../ui/AuroraFlowHero";
import { gsap, useGSAP } from "@/lib/gsap";
import { isReady } from "@/lib/ready";

const teamList = [
  { name: "Vico Tegar", id: "vico", role: "Chief Architect" },
  { name: "Samuel Sukarno", id: "samuel", role: "Lead Frontend" },
  { name: "Muhammad Cavendio", id: "cavendio", role: "Backend Engineer" },
  { name: "Hasyim Ridwan", id: "hasyim", role: "DevOps Engineer" },
  { name: "Alwi Rianto", id: "alwi", role: "Engineering Contributor" },
];

export default function TeamHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>("vico");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
        tl.from(".th-badge", { y: 14, opacity: 0, duration: 0.5 })
          .from(".th-title", { y: 26, opacity: 0, duration: 0.8 }, "-=0.25")
          .from(".th-desc", { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
          .from(
            ".th-item",
            { y: 16, opacity: 0, duration: 0.6, stagger: 0.08 },
            "-=0.45"
          )
          .from(
            ".th-photo",
            { scale: 0.96, opacity: 0, duration: 0.8 },
            "-=0.5"
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
        <div className="lg:col-span-5 space-y-5 lg:space-y-6">
          <div className="th-badge inline-block px-3 py-1 rounded-full bg-white text-[#2563EB] text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-blue-100 shadow-sm">
            Meet The Builders.
          </div>
          <h1 className="th-title text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
            Engineering is never a solo effort.
          </h1>
          <p className="th-desc text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
            Behind every production system is a multidisciplinary team of designers, software engineers, architects, and strategists dedicated to building products that stand the test of time.
          </p>
        </div>

        {/* Right Side: Editorial Hover Gallery (Editorial composition replacing old NFT Cards) */}
        <div className="lg:col-span-7 w-full">
          
          {/* Mobile Layout (Circular profile badges, clean & premium) */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-6 w-full py-4 justify-items-center">
            {teamList.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-900 border border-slate-100 shadow-lg relative">
                  <TeamAvatar name={member.id as any} className="w-[120%] h-[120%] object-cover scale-110 mt-2" />
                </div>
                <span className="text-[8px] font-mono font-bold text-blue-500 tracking-wider block uppercase mt-3">{member.role}</span>
                <h3 className="text-xs font-black text-slate-800 tracking-tight mt-0.5">{member.name}</h3>
              </div>
            ))}
          </div>

          {/* Desktop Layout (Interactive typographic selection + animated fluid display) */}
          <div className="hidden lg:grid grid-cols-12 gap-8 w-full h-[420px] items-center">
            
            {/* Left part: Names list (Interactive hover list) */}
            <div className="col-span-7 flex flex-col justify-center space-y-4 pr-4">
              {teamList.map((member) => {
                const isActive = activeId === member.id;
                return (
                  <div
                    key={member.id}
                    onMouseEnter={() => setActiveId(member.id)}
                    className="th-item group cursor-pointer py-2.5 border-b border-slate-100 hover:border-slate-300 transition-all duration-300 relative flex items-center justify-between"
                  >
                    <div>
                      <span className={`text-[8px] font-mono font-bold tracking-widest uppercase block transition-colors duration-300 ${isActive ? "text-blue-500" : "text-slate-400"}`}>
                        {member.role}
                      </span>
                      <h3 className={`text-xl xl:text-2xl font-black tracking-tight mt-1 transition-all duration-300 ${isActive ? "text-slate-900 translate-x-3" : "text-slate-400 group-hover:text-slate-600"}`}>
                        {member.name}
                      </h3>
                    </div>
                    {isActive && (
                      <motion.div
                        layoutId="activePointer"
                        className="text-blue-500 mr-2"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      >
                        <ArrowRight size={18} strokeWidth={2.5} />
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right part: Portrait showcase (Dynamic canvas) */}
            <div className="th-photo col-span-5 relative w-full h-full rounded-[28px] overflow-hidden bg-slate-950 shadow-2xl border border-slate-200/20">
              <AnimatePresence mode="wait">
                {teamList.map((member) => {
                  const isActive = activeId === member.id;
                  if (!isActive) return null;
                  return (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.04 }}
                      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <TeamAvatar 
                        name={member.id as any} 
                        className="w-[120%] h-[120%] object-cover opacity-90" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

          </div>

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
