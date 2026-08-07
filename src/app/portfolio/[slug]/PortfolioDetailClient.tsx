"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, ArrowRight, LayoutGrid, AlertCircle, CheckCircle2, Globe, Smartphone, Laptop, LineChart, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/lib/portfolioData";

const iconMap = {
  Globe,
  Smartphone,
  Laptop,
  LineChart,
};

function TimelineNode({ step, idx, nodes, scrollYProgress }: any) {
  const appearStart = (idx / 4) * 0.75;
  const appearEnd = appearStart + 0.05;
  
  const scale = useTransform(scrollYProgress, [appearStart, appearEnd], [0, 1]);
  const opacity = useTransform(scrollYProgress, [appearStart, appearEnd], [0, 1]);

  return (
    <div 
      className="absolute"
      style={{ 
        left: nodes[idx].left, 
        top: nodes[idx].top,
        transform: "translate(-50%, -50%)" 
      }}
    >
      {/* The Node Dot */}
      <motion.div 
        style={{ scale }}
        className="relative w-5 h-5 bg-blue-600 rounded-full shadow-[0_0_12px_rgba(37,99,235,0.5)] border-[3px] border-white z-10 mx-auto"
      />

      {/* The Text Content */}
      <motion.div 
        style={{ opacity }}
        className={`absolute w-56 md:w-64 top-full mt-4 ${
          nodes[idx].textAlign === "left" ? "left-1/2 -ml-2 text-left" : "right-1/2 -mr-2 text-right"
        }`}
      >
        <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase mb-1 block">
          Phase 0{idx + 1}
        </span>
        <h3 className="text-base md:text-lg font-black text-slate-900 tracking-tight leading-tight mb-2">
          {step.title}
        </h3>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          {step.desc}
        </p>
      </motion.div>
    </div>
  );
}

function OrganicDesktopTimeline({ workflow, scrollYProgress }: any) {
  // A highly organic, hand-drawn winding curve with irregular wiggles between nodes.
  // The Y-coordinate strictly increases to ensure the clip-path animation is flawless.
  const pathD = `
    M 0,0 
    C 5,0 8,3 10,5 
    C 12,7 8,9 5,10 
    C 2,11 10,13 15,15 
    C 15,18 30,17 40,20 
    C 50,23 35,24 30,26 
    C 25,28 50,27 65,29 
    C 80,31 85,30 85,32.5 
    C 85,35 70,36 60,37 
    C 50,38 65,40 70,42 
    C 75,44 50,45 35,46 
    C 20,47 15,48 15,50 
    C 15,52 35,53 45,54 
    C 55,55 40,57 35,59 
    C 30,61 60,62 70,63 
    C 80,64 85,65 85,67.5 
    C 85,70 70,71 55,72 
    C 40,73 60,75 65,77 
    C 70,79 45,80 30,81 
    C 15,82 15,83 15,85 
    C 15,87 35,88 45,90 
    C 55,92 40,93 35,94 
    C 30,95 70,96 80,97 
    C 90,98 100,99 100,100
  `;
  
  // Reveal path from top to bottom based on scroll (using CSS clip-path to prevent vector scaling dash bugs)
  const clipPercent = useTransform(scrollYProgress, [0, 0.8], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 0 ${clipPercent}% 0)`;

  // Place nodes on the extreme edges (matching 5 phases)
  const nodes = [
    { left: "15%", top: "15%", textAlign: "left" },
    { left: "85%", top: "32.5%", textAlign: "right" },
    { left: "15%", top: "50%", textAlign: "left" },
    { left: "85%", top: "67.5%", textAlign: "right" },
    { left: "15%", top: "85%", textAlign: "left" }
  ];

  return (
    <div className="relative w-full h-full">
      {/* Background Grey Path */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        style={{ overflow: 'visible' }} 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path d={pathD} fill="none" stroke="#e2e8f0" strokeWidth="3" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Animated Blue Path (Revealed via Clip-Path) */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath }}
      >
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path d={pathD} fill="none" stroke="#2563eb" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        </svg>
      </motion.div>

      {/* The Nodes */}
      {workflow.map((step: any, idx: number) => (
        <TimelineNode 
          key={idx} 
          step={step} 
          idx={idx} 
          nodes={nodes} 
          scrollYProgress={scrollYProgress} 
        />
      ))}
    </div>
  );
}

export default function PortfolioDetailClient({ project }: { project: Project }) {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: workflowProgress } = useScroll({
    target: workflowRef,
    offset: ["start start", "end end"]
  });
  const scaleY = useTransform(workflowProgress, [0, 1], [0, 1]);

  const t = {
    overview: language === "id" ? "Ikhtisar Proyek" : "Project Overview",
    challenges: language === "id" ? "Tantangan" : "Challenges",
    solutions: language === "id" ? "Solusi" : "Solutions",
    workflow: language === "id" ? "Alur Kerja" : "Workflow",
    visit: language === "id" ? "Kunjungi Website" : "Visit Website",
    readCase: language === "id" ? "Baca Studi Kasus" : "Read Case Study",
    back: language === "id" ? "Kembali ke Portofolio" : "Back to Portfolio",
    category: language === "id" ? "Kategori" : "Category",
    type: language === "id" ? "Tipe" : "Type",
    technologies: language === "id" ? "Teknologi" : "Technologies",
    screenshots: language === "id" ? "Screenshots Gallery" : "Screenshots Gallery",
  };

  const Icon = iconMap[project.icon as keyof typeof iconMap] || Globe;

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-blue-600/10 selection:text-blue-600">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-24 relative overflow-x-clip">
        {/* Subtle Decorative Background Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-b from-blue-50/40 to-transparent blur-3xl pointer-events-none" />

        {/* Navigation & Breadcrumbs */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-8 relative z-20">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">
            <ArrowLeft size={16} strokeWidth={2.5} />
            {t.back}
          </Link>
        </div>

        {/* Modern Asymmetrical Collage Hero */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8 lg:pt-16 pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start text-left z-20">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-slate-200 bg-white text-slate-600 shadow-sm">
                  <Icon size={14} strokeWidth={2.5} className="text-blue-600" />
                  {project.category[language as "id" | "en"]}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                  / {project.type}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-6">
                {project.title}
              </h1>

              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed mb-8 max-w-xl">
                {project.desc[language as "id" | "en"]}
              </p>

              {/* Technologies Tags directly inside hero */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 bg-white border border-slate-200/60 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.url && (
                <a 
                  href={project.url}
                  target={project.isPrivate ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-slate-900 text-white hover:bg-blue-600 font-black text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-blue-600/10"
                >
                  {project.isPrivate ? t.readCase : t.visit}
                  <ExternalLink size={14} strokeWidth={2.5} />
                </a>
              )}
            </div>

            {/* Right Overlapping Collage Column */}
            <div className="lg:col-span-6 xl:col-span-7 relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[580px] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10]">
                {/* Subtle Ambient Glow behind collage */}
                <div className="absolute inset-10 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

                {/* Layer 1: Underneath Card (First Screenshot - Tilted Left) */}
                {project.screenshots && project.screenshots[0] && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: -12, x: -30 }}
                    animate={{ opacity: 1, scale: 0.9, rotate: -6, x: -20 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="absolute left-4 top-12 w-[75%] aspect-[16/9] rounded-[24px] overflow-hidden bg-slate-100 shadow-xl border border-slate-200/60 z-0 origin-bottom-left"
                  >
                    <Image
                      src={project.screenshots[0]}
                      alt={`${project.title} Preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 60vw, 35vw"
                    />
                  </motion.div>
                )}

                {/* Layer 2: Top Card (Cover Image - Tilted Right) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: 12, y: 30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 3, y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-0 w-[80%] aspect-[16/9] rounded-[24px] overflow-hidden bg-slate-100 shadow-2xl border border-slate-200/60 z-10 origin-top-right hover:rotate-0 hover:scale-[1.02] hover:shadow-blue-500/5 transition-all duration-500"
                >
                  <Image
                    src={project.image || project.screenshots[0] || ""}
                    alt={`${project.title} Cover`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 80vw, 45vw"
                  />
                </motion.div>
              </div>
            </div>

          </div>
        </section>

        {/* Project Overview - Clean Editorial Layout */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start"
          >
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <LayoutGrid size={18} strokeWidth={2.5} />
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  {t.overview}
                </h2>
              </div>
              <div className="hidden lg:block w-full h-px bg-slate-200 mt-8" />
            </div>
            
            <div className="lg:col-span-8">
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                {project.overview[language as "id" | "en"]}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Challenges & Solutions - Sticky Unified Cards */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="w-16 h-2 bg-slate-900 mb-8 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                {t.challenges} <br /> <span className="text-slate-300">&</span> {t.solutions}
              </h2>
              <p className="text-lg text-slate-500 font-medium">
                {language === "id" 
                  ? "Bagaimana kami mengatasi masalah teknis yang rumit menjadi solusi digital yang elegan dan terstruktur." 
                  : "How we turned complex technical problems into elegant, structured digital solutions."}
              </p>
            </div>

            {/* Right Unified Cards (Sticky Stacking Deck) */}
            <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-32 pb-16 lg:pb-[20vh]">
              {project.challenges[language as "id" | "en"].map((challenge, idx) => {
                const solution = project.solutions[language as "id" | "en"][idx];
                const total = project.challenges[language as "id" | "en"].length;
                const scaleVal = 1 - (total - 1 - idx) * 0.02;

                return (
                  <motion.div 
                    initial={{ opacity: 0, y: 50, scale: scaleVal - 0.02 }}
                    whileInView={{ opacity: 1, y: 0, scale: scaleVal }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    key={idx} 
                    className="sticky w-full group relative bg-white border border-slate-100/50 rounded-[32px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden"
                    style={{
                      top: `${140 + idx * 24}px`,
                      zIndex: (idx + 1) * 10,
                    }}
                  >
                    {/* Background decoration hover */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-50/55 transition-colors duration-700 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col">
                      {/* Top Header Row */}
                      <div className="flex justify-between items-center border-b border-slate-100 pb-6 mb-8">
                        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase">
                          Problem & Response — Stage 0{idx + 1}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-300">
                          {idx + 1} / {total}
                        </span>
                      </div>

                      {/* 2-Column Editorial Layout */}
                      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
                        
                        {/* Left Column: Challenge */}
                        <div className="space-y-4 flex-1">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block">
                            {t.challenges}
                          </span>
                          <p className="text-lg md:text-xl font-bold text-slate-900 leading-snug tracking-tight">
                            {challenge}
                          </p>
                        </div>

                        {/* Right Column: Solution */}
                        <div className="space-y-4 flex-1">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase block">
                            {t.solutions}
                          </span>
                          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                            {solution}
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Workflow / Zellio Approach (Sticky S-Curve on Desktop, Vertical on Mobile) */}
        <section ref={workflowRef} className="w-full bg-slate-50 relative border-y border-slate-200/50 md:h-[400vh]">
          
          <div className="w-full md:sticky md:top-0 md:h-screen md:overflow-hidden md:flex md:flex-col md:items-center py-20 md:py-0 relative">
            
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full relative z-10 pt-16 md:pt-24">
              <div className="text-center mb-8 md:mb-12">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-slate-400">
                  Zellio Approach
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-3">
                  {t.workflow}
                </h2>
              </div>
            </div>

            {/* MOBILE LAYOUT (Vertical Timeline) */}
            <div className="block md:hidden relative max-w-sm mx-auto w-full px-6">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-[1px]" />
              <motion.div 
                className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-600 -translate-x-[1px] origin-top pointer-events-none shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                style={{ scaleY }}
              />
              <div className="space-y-16">
                {project.workflow[language as "id" | "en"].map((step, idx) => (
                  <div key={idx} className="relative flex flex-col items-start">
                    <div className="absolute left-0 w-12 h-12 -translate-x-1/2 flex items-center justify-center bg-white border-2 border-slate-200 rounded-full z-10 font-mono font-black text-xs text-slate-500 shadow-sm">
                      0{idx + 1}
                    </div>
                    <div className="w-full pl-16">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                          Phase 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-black text-slate-900 tracking-tight mt-1 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESKTOP LAYOUT (Edge-to-Edge Organic Sticky Line) */}
            <div className="hidden md:block absolute top-[200px] bottom-10 left-12 right-12">
              <OrganicDesktopTimeline 
                workflow={project.workflow[language as "id" | "en"]} 
                scrollYProgress={workflowProgress} 
              />
            </div>

          </div>
        </section>

        {/* Screenshots Section - Editorial Split Layout */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-t border-slate-200/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Left Column - Sticky Title */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="w-16 h-2 bg-slate-900 mb-8 rounded-full" />
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                  {t.screenshots}
                </h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  {language === "id" 
                    ? "Cuplikan antarmuka dan pengalaman pengguna yang kami rancang secara detail." 
                    : "A glimpse into the interface and user experience we meticulously designed."}
                </p>
              </div>
              
              {/* Right Column - Images (Controlled & Sleek) */}
              <div className="lg:col-span-8 flex flex-col gap-16 lg:gap-24">
                {project.screenshots.map((shot, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full flex justify-center lg:justify-start group"
                  >
                    <div className="relative w-full max-w-[620px]">
                      {/* Ambient hover glow */}
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.02] rounded-[40px] blur-3xl transition-colors duration-700 pointer-events-none" />
                      
                      <Image
                        src={shot}
                        alt={`${project.title} Screenshot ${idx + 1}`}
                        width={1200}
                        height={800}
                        className="relative w-full h-auto object-contain mix-blend-multiply group-hover:-translate-y-1.5 transition-transform duration-700 ease-out"
                        sizes="(max-width: 1400px) 100vw, 1400px"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
            </div>
          </section>
        )}

        {/* Project Impact & Achieved Results */}
        {project.impact && project.impact[language as "id" | "en"].length > 0 && (
          <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-t border-slate-200/60">
            {/* Header */}
            <div className="mb-20 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-600 uppercase">
                {language === "id" ? "Dampak Project" : "Project Impact"}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mt-4">
                {language === "id" ? "Hasil yang Dicapai." : "Achieved Results."}
              </h2>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {project.impact[language as "id" | "en"].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col relative group"
                >
                  <div className="w-full h-1 bg-slate-100 mb-8 overflow-hidden rounded-full">
                    <div className="w-0 h-full bg-blue-600 group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-12">
          <div className="relative overflow-hidden rounded-[40px] bg-slate-900 p-12 sm:p-16 lg:p-24 shadow-2xl text-white">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top right, #3b82f6, transparent 50%)' }} />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                  {language === "id" ? "Terinspirasi oleh proyek ini?" : "Inspired by this project?"}
                </h2>
                <p className="text-lg md:text-xl text-slate-400 font-medium">
                  {language === "id" 
                    ? "Mari diskusikan bagaimana Zellio dapat mewujudkan visi digital perusahaan Anda." 
                    : "Let's discuss how Zellio can bring your company's digital vision to life."}
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-10 py-6 bg-white text-slate-950 hover:bg-slate-100 font-black text-sm uppercase tracking-widest rounded-3xl transition-all duration-300 flex-shrink-0 shadow-xl"
              >
                {language === "id" ? "Mulai Proyek Anda" : "Start Your Project"}
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
