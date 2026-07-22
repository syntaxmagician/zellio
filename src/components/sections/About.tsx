"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useMotionValueEvent } from "framer-motion";
import {
  CheckCircle2,
  Target,
  Heart,
  Zap,
  TrendingUp,
} from "lucide-react";
import { stats } from "@/lib/data";

function BentoStatItem({ value, suffix, label, icon: Icon, delay }: { value: number; suffix: string; label: string; icon: any; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 45,
    damping: 14,
  });

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        spring.set(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, value, delay, spring]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplayCount(Math.floor(latest));
    });
  }, [spring]);

  return (
    <div ref={ref} className="bg-white border border-slate-100 rounded-[24px] p-6 flex flex-col gap-4 group hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/[0.03] transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
        <Icon size={20} strokeWidth={2.5} />
      </div>
      <div>
        <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500 mb-1 font-sans">
          {displayCount}{suffix}
        </h4>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 tracking-tight">{label}</p>
      </div>
    </div>
  );
}

const coreValues = [
  { icon: Target, title: "Client Success", desc: "We build IT systems that directly drive business growth and productivity.", gradient: "from-blue-600 to-indigo-600 shadow-blue-600/20" },
  { icon: Heart, title: "User-Centric", desc: "We prioritize intuitive, fast, and accessible user interfaces in every project.", gradient: "from-indigo-500 to-purple-600 shadow-purple-500/20" },
  { icon: Zap, title: "Modern Tech", desc: "We leverage cutting-edge tech stacks for performance and scalability.", gradient: "from-purple-600 to-pink-500 shadow-pink-500/20" },
  { icon: TrendingUp, title: "Elite Quality", desc: "We adhere to strict coding standards to deliver clean and secure codebases.", gradient: "from-cyan-500 to-blue-600 shadow-cyan-500/20" },
];

const containerVariants: any = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

function GrandRevealPillar({ 
  idx, 
  title, 
  desc, 
  icon: Icon, 
  gradient 
}: { 
  idx: number; 
  title: string; 
  desc: string; 
  icon: any; 
  gradient: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex flex-col items-center lg:items-start text-center lg:text-left py-4 lg:py-6 px-3 lg:px-4 group select-none"
    >
      {/* Soft Ambient Glow (No borders or cards, pure light source behind values) */}
      <div className={`absolute inset-0 rounded-full blur-[40px] lg:blur-[60px] opacity-10 group-hover:opacity-25 transition-all duration-700 bg-gradient-to-tr ${gradient} pointer-events-none`} />

      {/* Floating Icon Container */}
      <div className={`relative z-10 w-11 h-11 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center text-white bg-gradient-to-tr ${gradient} shadow-lg mb-3 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
        <Icon className="w-5 h-5 lg:w-8 lg:h-8" strokeWidth={1.5} />
      </div>

      {/* Giant Watermark Number */}
      <div className="absolute top-6 lg:top-10 right-2 lg:right-10 text-[40px] lg:text-[90px] font-black text-slate-200/20 group-hover:text-slate-200/30 transition-colors duration-500 pointer-events-none font-mono">
        0{idx + 1}
      </div>

      {/* Typography */}
      <h4 className="relative z-10 text-base lg:text-2xl font-black text-[#0F172A] mb-1 lg:mb-2 tracking-tight">
        {title}
      </h4>
      <p className="relative z-10 text-[10px] lg:text-sm leading-relaxed font-semibold text-[#64748B] max-w-[200px]">
        {desc}
      </p>
      
      {/* Accent line */}
      <div className={`mt-3 lg:mt-6 w-8 lg:w-12 h-[3px] rounded-full bg-gradient-to-r ${gradient} scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </motion.div>
  );
}

function ValueBlock({ 
  idx, 
  title, 
  desc, 
  icon: Icon, 
  gradient,
}: { 
  idx: number; 
  title: string; 
  desc: string; 
  icon: any; 
  gradient: string;
}) {
  return (
    <div className={`relative w-full max-w-[500px] flex items-start gap-4 md:gap-6 group cursor-default py-4`}>
      {/* Active Line Indicator */}
      <div className={`absolute left-[-16px] md:left-[-32px] top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b ${gradient}`} />

      {/* Giant Number Watermark */}
      <div className={`absolute -top-6 -left-2 text-[100px] md:text-[140px] font-black tracking-tighter pointer-events-none z-[-1] leading-[0.8] text-slate-200/50`}>
        0{idx + 1}
      </div>

      <div className={`relative z-10 opacity-100`}>
        <div className="flex items-center gap-4 mb-4">
          {/* Mobile-only Icon Indicator */}
          <div className={`lg:hidden flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-700 bg-gradient-to-tr ${gradient}`}>
            <Icon size={24} strokeWidth={2.5} />
          </div>
          <h4 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">
            {title}
          </h4>
        </div>
        <p className="text-base md:text-lg leading-relaxed font-medium text-[#64748B]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function DrivenByValuesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.18) setActiveIdx(0);
    else if (latest < 0.36) setActiveIdx(1);
    else if (latest < 0.54) setActiveIdx(2);
    else if (latest < 0.72) setActiveIdx(3);
    else setActiveIdx(4); // Grand Finale State!
  });

  const ActiveIcon = activeIdx < 4 ? coreValues[activeIdx].icon : null;

  return (
    <div ref={containerRef} className="h-[250vh] w-full relative mb-16">
      
      {/* The 1-Screen Sticky Slideshow Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#FAFAFA] rounded-[48px] border border-slate-100">
        
        {/* Ambient background mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

        <AnimatePresence mode="wait">
          {activeIdx < 4 ? (
            <motion.div
              key="split-slideshow"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full max-w-6xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start pt-16 lg:pt-0"
            >
              {/* LEFT COLUMN: Static Header & Quantum Core */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left h-full">
                <div>
                  <span className="inline-block px-5 py-2 rounded-full bg-white text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100/50 shadow-sm">
                    Our Core DNA
                  </span>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight leading-tight mb-6">
                    Driven by <br className="hidden lg:block"/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Values</span>
                  </h3>
                  <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-medium mb-8 lg:mb-12 lg:max-w-md mx-auto lg:mx-0">
                    Every decision and system we build is guided by these four foundational principles.
                  </p>
                </div>

                {/* Interactive Quantum Core (Hidden on Mobile) */}
                {ActiveIcon && (
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 hidden lg:flex items-center justify-center" style={{ perspective: "1000px" }}>
                    {/* Outer Glowing Ambient Orb */}
                    <div 
                      className={`absolute inset-0 rounded-full blur-[50px] opacity-40 transition-all duration-1000 ease-in-out bg-gradient-to-tr ${coreValues[activeIdx].gradient}`}
                    />
                    {/* Solid Glassmorphic Orb */}
                    <div 
                      className={`relative z-10 w-full h-full rounded-full bg-gradient-to-tr ${coreValues[activeIdx].gradient} flex items-center justify-center shadow-2xl transition-all duration-1000 ease-in-out border-[6px] border-white/20`}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIdx}
                          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 1.5, rotate: 45 }}
                          transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                          className="text-white drop-shadow-md"
                        >
                          <ActiveIcon size={80} strokeWidth={1.5} />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="absolute inset-[-40px] rounded-full border border-slate-300/50 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none" />
                    <div className="absolute inset-[-70px] rounded-full border border-slate-200/40 border-dashed animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: Static Typography Slideshow */}
              <div className="w-full lg:w-1/2 relative h-[40vh] lg:h-[70vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center lg:justify-start"
                  >
                    <ValueBlock
                      idx={activeIdx}
                      title={coreValues[activeIdx].title}
                      desc={coreValues[activeIdx].desc}
                      icon={coreValues[activeIdx].icon}
                      gradient={coreValues[activeIdx].gradient}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grand-reveal"
              initial={{ opacity: 0, scale: 1.05, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-6xl mx-auto px-6 sm:px-12 relative z-10 flex flex-col items-center justify-center h-full"
            >
              {/* Grand Reveal Header */}
              <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-16">
                <span className="inline-block px-5 py-2 rounded-full bg-white text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100/50 shadow-sm">
                  Our Core DNA
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
                  Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Values</span>
                </h3>
              </div>

              {/* 4 Pillars Grid (staggered animation entrance, 2x2 on mobile, 1x4 on desktop) */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full justify-items-center"
              >
                {coreValues.map((v, i) => (
                  <GrandRevealPillar
                    key={i}
                    idx={i}
                    title={v.title}
                    desc={v.desc}
                    icon={v.icon}
                    gradient={v.gradient}
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-white">
      <div className="section-container">
        {/* About Bento Box Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          
          {/* Main Card (col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 bg-gradient-to-br from-white via-slate-50/50 to-slate-100/50 border border-slate-100 rounded-[28px] p-6 md:p-10 relative overflow-hidden group shadow-[0_15px_30px_-15px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500"
          >
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
               <Target size={120} className="text-[#2563EB] -rotate-12 translate-x-8 -translate-y-8 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-100/80 shadow-sm">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
                  We Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#9FA1FF] to-[#2563EB]">Digital Success.</span>
                </h2>
                <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-xl font-medium mb-3">
                  Digifore is a premium software development agency providing end-to-end IT services. We combine cutting-edge technologies with top-tier engineers to deliver systems that drive real business impact.
                </p>
                <p className="text-[#64748B] text-xs md:text-sm leading-relaxed max-w-xl font-medium opacity-80">
                  Our approach is simple: write clean code, focus on pixel-perfect UI/UX, and deploy robust architectures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Card (col-span-1) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-[#0A0F1C] rounded-[32px] p-8 relative overflow-hidden flex flex-col items-center justify-center text-center group shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)] border border-slate-800"
          >
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/25 via-transparent to-[#06B6D4]/15 pointer-events-none group-hover:scale-110 transition-transform duration-1000 ease-out" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] bg-blue-500/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-blue-400/30 transition-colors duration-700" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#9FA1FF] to-[#2563EB] flex items-center justify-center shadow-xl shadow-violet-500/20 group-hover:rotate-[10deg] group-hover:scale-105 transition-all duration-500">
                <span className="text-white text-3xl font-black">DF</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-3 tracking-tight">Since 2018</h3>
              <p className="text-slate-400 font-medium leading-relaxed max-w-[200px] mx-auto text-sm">Pioneering digital innovation across Indonesia</p>
            </div>
          </motion.div>

          {/* Metrics/Capabilities Card (col-span-3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Projects Delivered", value: 150, suffix: "+", icon: Target },
              { label: "Client Satisfaction", value: 98, suffix: "%", icon: Heart },
              { label: "Enterprise Clients", value: 50, suffix: "+", icon: TrendingUp },
              { label: "Years Expertise", value: 8, suffix: "+", icon: Zap },
            ].map((stat, i) => (
              <BentoStatItem key={stat.label} {...stat} delay={i * 0.15} />
            ))}
          </motion.div>

        </div>

        {/* Driven By Values Floating Physics Section */}
        <DrivenByValuesSection />

      </div>
    </section>
  );
}
