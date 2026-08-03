"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Hammer, ShieldCheck, Milestone } from "lucide-react";
import TeamAvatar from "./TeamAvatar";
import AuroraFlowHero from "../ui/AuroraFlowHero";
import { gsap, useGSAP } from "@/lib/gsap";
import { isReady } from "@/lib/ready";

const teamList = [
  { name: "Vico Tegar", id: "vico", role: "Chief Architect" },
  { name: "Samuel Sukarno", id: "samuel", role: "Lead Frontend" },
  { name: "Muhammad Cavendio", id: "cavendio", role: "Backend Engineer" },
  { name: "Hasyim Ridwan", id: "hasyim", role: "DevOps Engineer" },
];

export default function TeamHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax subtle offset for the portraits (4 offsets for 4 members)
  const y1 = useTransform(scrollY, [0, 500], [0, -15]);
  const y2 = useTransform(scrollY, [0, 500], [0, 20]);
  const y3 = useTransform(scrollY, [0, 500], [0, -10]);
  const y4 = useTransform(scrollY, [0, 500], [0, 15]);

  const yOffsets = [y1, y2, y3, y4];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });
        tl.from(".th-badge", { y: 14, opacity: 0, duration: 0.5 })
          .from(".th-title", { y: 26, opacity: 0, duration: 0.8 }, "-=0.25")
          .from(".th-desc", { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
          .from(
            ".th-portrait",
            { y: 30, opacity: 0, scale: 0.95, duration: 0.8, stagger: 0.1 },
            "-=0.4"
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
    <section ref={containerRef} className="w-full relative overflow-hidden pt-12 lg:pt-20 pb-16 lg:pb-24 border-b border-slate-100">
      {/* Background Simplex Flow Animation */}
      <AuroraFlowHero />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Centered Content */}
        <div className="text-center max-w-3xl mx-auto space-y-5 lg:space-y-6 mb-16 lg:mb-20">
          <div className="th-badge inline-block px-3 py-1 rounded-full bg-white text-[#2563EB] text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-blue-100 shadow-sm">
            Leadership Core
          </div>
          <h1 className="th-title text-4xl sm:text-5xl lg:text-[4rem] font-black text-[#0F172A] tracking-tight leading-tight">
            Engineering is never a solo effort.
          </h1>
          <p className="th-desc text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            Behind every production system is a multidisciplinary squad of software engineers and architects dedicated to building products that stand the test of time.
          </p>
        </div>

        {/* The Lineup: All Members Displayed Simultaneously */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 justify-items-center max-w-5xl mx-auto mb-16 lg:mb-24">
          {teamList.map((member, i) => (
            <motion.div
              key={member.id}
              style={{ y: yOffsets[i % 4] }}
              className="th-portrait group flex flex-col items-center w-full max-w-[200px]"
            >
              {/* Borderless Organic Portrait Container */}
              <div className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[24px] bg-slate-950 overflow-hidden relative shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                <TeamAvatar
                  name={member.id as any}
                  className="w-[120%] h-[120%] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Typography below portrait */}
              <div className="mt-4 text-center">
                <span className="text-[9px] font-mono font-bold text-blue-500 tracking-wider block uppercase mb-1">
                  {member.role}
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                  {member.name}
                </h3>
              </div>
            </motion.div>
          ))}
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
