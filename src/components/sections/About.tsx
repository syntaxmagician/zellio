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
import { useLanguage } from "@/context/LanguageContext";

const NeonDivider = () => (
  <>
    {/* Desktop Divider */}
    <div className="w-[1.5px] h-20 bg-slate-200/50 relative overflow-hidden hidden md:block self-center mx-4 flex-shrink-0">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "200%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
      />
    </div>
    {/* Mobile Divider */}
    <div className="w-20 h-[1.5px] bg-slate-200/50 relative overflow-hidden md:hidden my-4 self-center flex-shrink-0">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
    </div>
  </>
);

function BentoStatItem({ value, suffix, label, icon: Icon, delay }: { value: number; suffix: string; label: string; icon: any; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const spring = useSpring(0, {
    mass: 1.2,
    stiffness: 50,
    damping: 18,
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
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center p-6 group cursor-default select-none h-44 w-full"
    >
      {/* Dynamic Floating Liquid Orb in backdrop */}
      <div 
        className="absolute w-28 h-28 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none -z-10"
      />
      
      {/* Glowing Icon with spring movement */}
      <motion.div 
        whileHover={{ y: -6, scale: 1.1 }}
        className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 border border-blue-100/50"
      >
        <Icon size={20} strokeWidth={1.5} />
      </motion.div>

      {/* Huge Typographic Metric value with Liquid Mask Gradient */}
      <h4 className="text-5xl sm:text-6xl font-black text-[#0F172A] tracking-tighter mb-2 flex items-baseline gap-0.5 group-hover:scale-105 transition-transform duration-300">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-500">
          {displayCount}
        </span>
        <span className="text-blue-600 font-extrabold">{suffix}</span>
      </h4>

      {/* Metric Label */}
      <p className="text-xs sm:text-[13px] font-black uppercase tracking-[0.15em] text-slate-400 group-hover:text-slate-700 transition-colors duration-300">
        {label}
      </p>
    </div>
  );
}

const coreValues = {
  en: [
    { icon: Target, title: "Client Success", desc: "We build IT systems that directly drive business growth and productivity.", gradient: "from-blue-600 to-indigo-600 shadow-blue-600/20" },
    { icon: Heart, title: "User-Centric", desc: "We prioritize intuitive, fast, and accessible user interfaces in every project.", gradient: "from-indigo-500 to-purple-600 shadow-purple-500/20" },
    { icon: Zap, title: "Modern Tech", desc: "We leverage cutting-edge tech stacks for performance and scalability.", gradient: "from-purple-600 to-pink-500 shadow-pink-500/20" },
    { icon: TrendingUp, title: "Elite Quality", desc: "We adhere to strict coding standards to deliver clean and secure codebases.", gradient: "from-cyan-500 to-blue-600 shadow-cyan-500/20" },
  ],
  id: [
    { icon: Target, title: "Kesuksesan Klien", desc: "Kami membangun sistem IT yang langsung mendorong pertumbuhan bisnis dan produktivitas.", gradient: "from-blue-600 to-indigo-600 shadow-blue-600/20" },
    { icon: Heart, title: "Fokus Pengguna", desc: "Kami memprioritaskan antarmuka pengguna yang intuitif, cepat, dan mudah diakses di setiap proyek.", gradient: "from-indigo-500 to-purple-600 shadow-purple-500/20" },
    { icon: Zap, title: "Teknologi Modern", desc: "Kami memanfaatkan teknologi terbaru demi performa dan skalabilitas sistem yang maksimal.", gradient: "from-purple-600 to-pink-500 shadow-pink-500/20" },
    { icon: TrendingUp, title: "Kualitas Terbaik", desc: "Kami menerapkan standar koding yang ketat untuk menghasilkan sistem yang bersih dan aman.", gradient: "from-cyan-500 to-blue-600 shadow-cyan-500/20" },
  ]
};

const localText = {
  en: {
    badge: "Who We Are",
    titlePre: "We Engineer",
    titleAcc: "Digital Success.",
    desc1: "ZELLIO is a professional digital agency providing end-to-end IT services. We combine cutting-edge technologies with top-tier engineers to deliver systems that drive real business impact.",
    desc2: "Our approach is simple: write clean code, focus on pixel-perfect UI/UX, and deploy robust architectures.",
    since: "Since 2018",
    sinceSub: "Pioneering digital innovation across Indonesia",
    valuesBadge: "Our Core DNA",
    valuesTitle: "Driven by",
    valuesTitleAcc: "Values",
    valuesDesc: "Every decision and system we build is guided by these four foundational principles.",
    stats: [
      { label: "Projects Delivered", value: 150, suffix: "+", icon: Target },
      { label: "Client Satisfaction", value: 98, suffix: "%", icon: Heart },
      { label: "Enterprise Clients", value: 50, suffix: "+", icon: TrendingUp },
      { label: "Years Expertise", value: 8, suffix: "+", icon: Zap },
    ]
  },
  id: {
    badge: "Siapa Kami",
    titlePre: "Kami Merancang",
    titleAcc: "Solusi Digital Sukses.",
    desc1: "ZELLIO adalah agensi layanan digital profesional yang menyediakan solusi IT ujung-ke-ujung (end-to-end). Kami memadukan teknologi canggih dengan tim developer andal untuk membangun platform digital yang berdampak nyata bagi pertumbuhan bisnis Anda.",
    desc2: "Prinsip kerja kami sederhana: menulis kode yang bersih, mendesain UI/UX yang memanjakan mata, serta menerapkan arsitektur server yang stabil.",
    since: "Sejak 2018",
    sinceSub: "Mempelopori inovasi produk digital di seluruh Indonesia",
    valuesBadge: "DNA Inti Kami",
    valuesTitle: "Bekerja Sesuai",
    valuesTitleAcc: "Nilai Kami",
    valuesDesc: "Setiap keputusan dan sistem yang kami bangun dipandu oleh empat prinsip dasar berikut.",
    stats: [
      { label: "Proyek Selesai", value: 150, suffix: "+", icon: Target },
      { label: "Kepuasan Klien", value: 98, suffix: "%", icon: Heart },
      { label: "Klien Perusahaan", value: 50, suffix: "+", icon: TrendingUp },
      { label: "Tahun Pengalaman", value: 8, suffix: "+", icon: Zap },
    ]
  }
};

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

function DrivenByValuesSection({ language }: { language: "en" | "id" }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const text = localText[language];
  const values = coreValues[language];

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

  const ActiveIcon = activeIdx < 4 ? values[activeIdx].icon : null;

  return (
    <div ref={containerRef} className="h-[600vh] w-full relative mb-16">

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
                    {text.valuesBadge}
                  </span>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight leading-tight mb-6">
                    {text.valuesTitle} <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">{text.valuesTitleAcc}</span>
                  </h3>
                  <p className="text-[#64748B] text-base md:text-lg leading-relaxed font-medium mb-8 lg:mb-12 lg:max-w-md mx-auto lg:mx-0">
                    {text.valuesDesc}
                  </p>
                </div>

                {/* Interactive Quantum Core (Hidden on Mobile) */}
                {ActiveIcon && (
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 hidden lg:flex items-center justify-center" style={{ perspective: "1000px" }}>
                    {/* Outer Glowing Ambient Orb */}
                    <div
                      className={`absolute inset-0 rounded-full blur-[50px] opacity-40 transition-all duration-1000 ease-in-out bg-gradient-to-tr ${values[activeIdx].gradient}`}
                    />
                    {/* Solid Glassmorphic Orb */}
                    <div
                      className={`relative z-10 w-full h-full rounded-full bg-gradient-to-tr ${values[activeIdx].gradient} flex items-center justify-center shadow-2xl transition-all duration-1000 ease-in-out border-[6px] border-white/20`}
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
                      title={values[activeIdx].title}
                      desc={values[activeIdx].desc}
                      icon={values[activeIdx].icon}
                      gradient={values[activeIdx].gradient}
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
                  {text.valuesBadge}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
                  {text.valuesTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">{text.valuesTitleAcc}</span>
                </h3>
              </div>

              {/* 4 Pillars Grid (staggered animation entrance, 2x2 on mobile, 1x4 on desktop) */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full justify-items-center"
              >
                {values.map((v, i) => (
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
  const { language } = useLanguage();
  const text = localText[language];

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
                  {text.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
                  {text.titlePre} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#9FA1FF] to-[#2563EB]">{text.titleAcc}</span>
                </h2>
                <p className="text-[#64748B] text-sm md:text-base leading-relaxed max-w-xl font-medium mb-3">
                  {text.desc1}
                </p>
                <p className="text-[#64748B] text-xs md:text-sm leading-relaxed max-w-xl font-medium opacity-80">
                  {text.desc2}
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
              <h3 className="text-4xl font-black text-white mb-3 tracking-tight">{text.since}</h3>
              <p className="text-slate-400 font-medium leading-relaxed max-w-[200px] mx-auto text-sm">{text.sinceSub}</p>
            </div>
          </motion.div>

          {/* Card-less Liquid Stats & Kinetic Beams Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-3 flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0 mt-8 py-4"
          >
            {text.stats.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <BentoStatItem {...stat} delay={i * 0.1} />
                {i < 3 && <NeonDivider />}
              </React.Fragment>
            ))}
          </motion.div>

        </div>

        {/* Driven By Values Floating Physics Section */}
        <DrivenByValuesSection language={language} />

      </div>
    </section>
  );
}
