"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  WebDevIllustration,
  DashboardIllustration,
  MobileAppIllustration,
  ITSystemsIllustration,
  CloudDevOpsIllustration,
  UIDesignIllustration,
} from "../ui/ServiceIllustrations";

const illustrationMap: Record<number, React.FC<{ isHovered: boolean }>> = {
  1: WebDevIllustration,
  2: DashboardIllustration,
  3: MobileAppIllustration,
  4: ITSystemsIllustration,
  5: CloudDevOpsIllustration,
  6: UIDesignIllustration,
};

// Background palette per service for the large illustration panel (light colors)
const bgPalette: Record<number, { bg: string; accent: string }> = {
  1: { bg: "#F8FAFC", accent: "#2563EB" },
  2: { bg: "#F1F5F9", accent: "#2563EB" },
  3: { bg: "#FFFBEB", accent: "#f59e0b" },
  4: { bg: "#FDF2F8", accent: "#ec4899" },
  5: { bg: "#FAF5FF", accent: "#8b5cf6" },
  6: { bg: "#FFF1F2", accent: "#e11d48" },
};

const localText = {
  en: {
    badge: "Our Expertise",
    headline: "Custom IT solutions.",
    desc: "Purpose-built engineering for modern enterprises. From scalable backend architectures to pixel-perfect interfaces, we build software that drives momentum.",
    explore: "Explore service",
    tags: [
      ["Web Design", "SEO-Optimized", "Responsive", "Next.js"],
      ["Corporate Identity", "CMS", "B2B Focused", "SEO"],
      ["Conversion-Focused", "Google Ads", "A/B Testing", "Performance"],
      ["Payment Gateway", "Inventory", "Cart System", "Courier API"],
      ["SaaS-Ready", "API Integration", "React", "Node.js"],
      ["Analytics", "Real-Time Data", "Charts", "Admin Panel"],
    ],
  },
  id: {
    badge: "Keahlian Kami",
    headline: "Solusi IT kustom.",
    desc: "Rekayasa perangkat lunak untuk perusahaan modern. Dari arsitektur backend yang skalabel hingga antarmuka yang presisi, kami membangun sistem yang memacu pertumbuhan.",
    explore: "Lihat layanan",
    tags: [
      ["Desain Web", "SEO-Optimized", "Responsif", "Next.js"],
      ["Identitas Korporat", "CMS", "Fokus B2B", "SEO"],
      ["Berfokus Konversi", "Google Ads", "A/B Testing", "Performa"],
      ["Payment Gateway", "Inventori", "Keranjang Belanja", "API Kurir"],
      ["Siap-SaaS", "Integrasi API", "React", "Node.js"],
      ["Analitik", "Data Real-Time", "Grafik", "Panel Admin"],
    ],
  },
};

const getSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[\s&/]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const SLIDE_VARIANTS: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
  }),
};

const INFO_VARIANTS: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] as const },
  }),
};

export default function ServicesRail() {
  const { language, t } = useLanguage();
  const text = localText[language];
  const services = servicesData.slice(0, 6);
  const total = services.length;

  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setActive((prev) => (prev + delta + total) % total);
    },
    [total]
  );

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > active ? 1 : -1);
      setActive(idx);
    },
    [active]
  );

  const service = services[active];
  const Illustration = illustrationMap[service.id];
  const palette = bgPalette[service.id] ?? { bg: "#0D0D0D", accent: "#2563EB" };
  const slug = getSlug(service.title);
  const tags = text.tags[active] ?? [];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative bg-[#F8FAFC] border-t border-slate-200/60 overflow-hidden"
    >
      {/* CSS For Infinite Text Marquee */}
      <style jsx global>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee-scroll 25s linear infinite;
        }
      `}</style>

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#2563EB] mb-3 block">
              {text.badge}
            </span>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl md:text-[3rem] font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              {text.headline}
            </h2>
          </div>
          <p className="max-w-md text-[15px] text-slate-500 leading-relaxed font-medium lg:text-right">
            {text.desc}
          </p>
        </div>
      </div>

      {/* ── Main Showcase ────────────────────────────────────── */}
      <div className="relative w-full min-h-[800px] lg:min-h-0 lg:h-[clamp(480px,65vh,700px)]">
        <div className="flex flex-col lg:flex-row h-full w-full">

          {/* LEFT: Large Illustration Panel & Horizontal Progress Navigation */}
          <div
            className="relative overflow-hidden flex-1 w-full lg:w-[58%] min-w-0 flex flex-col justify-between"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated background color */}
            <motion.div
              key={`bg-${active}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, backgroundColor: palette.bg }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Subtle dot grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            {/* FIG label (Top-Left of Left Panel) */}
            <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
              <span
                className="text-[10px] font-mono font-bold tracking-[0.35em] uppercase"
                style={{ color: palette.accent }}
              >
                FIG 0{active + 1}
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest">
                / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Illustration slide container */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-10 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]">
              
              {/* Elegant, Premium Background Elements (Clean & Minimalist) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                
                {/* Huge Watermark Number in the Background */}
                <motion.div 
                  key={`watermark-${active}`}
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 0.035, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, y: -15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute font-black text-[18rem] md:text-[24rem] lg:text-[28rem] text-slate-900 tracking-tighter leading-none select-none z-0"
                >
                  0{active + 1}
                </motion.div>

                {/* Soft, Dynamic Center Glow (Matching service theme) */}
                <motion.div 
                  key={`blob-${active}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.12 }}
                  transition={{ duration: 1 }}
                  className="absolute w-[400px] h-[400px] rounded-full blur-[100px] z-0"
                  style={{
                    backgroundColor: palette.accent,
                  }}
                />

                {/* Clean tech grid floor overlay */}
                <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
                     style={{
                       backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`,
                       backgroundSize: "36px 36px"
                     }}
                />
              </div>

              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={`ill-${active}`}
                  custom={direction}
                  variants={SLIDE_VARIANTS}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full flex items-center justify-center relative z-10"
                >
                  {Illustration && (
                    <div className="w-full h-full max-w-[720px] max-h-[540px] scale-110 lg:scale-[1.25] transform-gpu drop-shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                      <Illustration isHovered={isHovered} />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Accent glow at bottom */}
            <motion.div
              key={`glow-${active}`}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.12 }}
              transition={{ delay: 0.2 }}
              style={{
                background: `radial-gradient(ellipse at 50% 100%, ${palette.accent}, transparent 70%)`,
              }}
            />

            {/* Bottom: Progress Bar & Minimalist Arrows */}
            <div className="relative z-20 w-full bg-white/70 backdrop-blur-md border-t border-slate-200/60 px-8 py-6 flex items-center justify-between">
              
              {/* Progress Line */}
              <div className="flex-1 max-w-md mr-8">
                <div className="h-[2px] bg-slate-200/80 w-full relative rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ backgroundColor: palette.accent }}
                    initial={false}
                    animate={{ width: `${((active + 1) / total) * 100}%` }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Counter and Arrows */}
              <div className="flex items-center gap-5">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous service"
                  className="w-8 h-8 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all duration-200"
                >
                  <ChevronLeft size={16} />
                </button>
                
                {/* Index Indicator */}
                <div className="flex items-baseline font-mono text-sm tracking-wide text-slate-500">
                  <span className="text-slate-900 font-bold">{String(active + 1).padStart(2, "0")}</span>
                  <span className="mx-1.5 text-slate-300">/</span>
                  <span>{String(total).padStart(2, "0")}</span>
                </div>

                <button
                  onClick={() => go(1)}
                  aria-label="Next service"
                  className="w-8 h-8 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-300 transition-all duration-200"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Info Sidebar & Sliding Marquee Ticker */}
          <div className="relative z-10 flex flex-col justify-between bg-white border-l border-slate-200/80 w-full lg:w-[42%] flex-shrink-0 overflow-hidden">
            
            {/* Top: Black Marquee Ticker */}
            <div className="w-full bg-[#0A0A0B] text-white overflow-hidden py-4 border-b border-slate-800 flex items-center shrink-0">
              <div className="animate-marquee-infinite flex whitespace-nowrap">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="text-[10px] font-mono tracking-[0.25em] uppercase px-4 text-slate-200 select-none">
                    {language === "en" 
                      ? "ZELLIO ENGINEERING LAB • PURPOSE-BUILT SOFTWARE • PIXEL-PERFECT INTERFACES • SCALE-ON-DEMAND • " 
                      : "REKAYASA ZELLIO • SOLUSI IT KUSTOM • ANTARMUKA PRESISI • PERFORMA TINGGI • "}
                  </span>
                ))}
                {/* Duplicate for seamless looping */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={`dup-${i}`} className="text-[10px] font-mono tracking-[0.25em] uppercase px-4 text-slate-200 select-none">
                    {language === "en" 
                      ? "ZELLIO ENGINEERING LAB • PURPOSE-BUILT SOFTWARE • PIXEL-PERFECT INTERFACES • SCALE-ON-DEMAND • " 
                      : "REKAYASA ZELLIO • SOLUSI IT KUSTOM • ANTARMUKA PRESISI • PERFORMA TINGGI • "}
                  </span>
                ))}
              </div>
            </div>

            {/* Middle: Service Info Details */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 lg:px-14 lg:py-12 overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={`info-${active}`}
                  custom={direction}
                  variants={INFO_VARIANTS}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col gap-6 max-w-xl"
                >
                  {/* Category Indicator (Premium Monospace) */}
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono tracking-[0.25em] uppercase text-slate-400 select-none">
                    <span>[{String(active + 1).padStart(2, "0")} // {service.category}]</span>
                  </div>

                  {/* Title & Underline accent */}
                  <div>
                    <h3 
                      className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight"
                      style={{ color: "#0F172A" }}
                    >
                      {t(`service.${slug}` as TranslationKey)}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed font-normal">
                    {t(`service.desc.${slug}` as TranslationKey)}
                  </p>

                  {/* Tags (Sleek Monospace Inline list) */}
                  <div className="text-[10px] md:text-xs font-mono tracking-widest text-slate-400 uppercase select-none leading-relaxed">
                    {tags.join("  //  ")}
                  </div>

                  {/* Specs divider */}
                  <div className="h-px bg-slate-200/60 my-2" />

                  {/* Specs Table (Clean tech specifications) */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm font-mono text-slate-500 select-none">
                    <div className="flex items-center">
                      <span className="text-slate-400 uppercase tracking-widest mr-2">DUR. //</span>
                      <span className="text-slate-800 font-bold">{service.duration}</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <div className="flex items-center">
                      <span className="text-slate-400 uppercase tracking-widest mr-2">TIER //</span>
                      <span className="text-slate-800 font-bold">{service.level}</span>
                    </div>
                  </div>

                  {/* Creative Underlined CTA Link */}
                  <div className="pt-2">
                    <Link
                      href={`/services/${slug}`}
                      className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] relative py-1.5 group/cta"
                      style={{ color: palette.accent }}
                    >
                      <span>{text.explore}</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
                      />
                      <span 
                        className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-300 origin-left"
                        style={{ backgroundColor: palette.accent }}
                      />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile: horizontal dot scroller caption */}
        <div className="absolute bottom-0 left-0 right-0 lg:hidden bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent pt-12 pb-6 px-6 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            FIG 0{active + 1} / {String(total).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5 pointer-events-auto">
            <button onClick={() => go(-1)} aria-label="Previous" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors">
              <ChevronLeft size={14} />
            </button>
            <button onClick={() => go(1)} aria-label="Next" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Thin bottom accent line ──────────────────────────── */}
      <motion.div
        className="h-px w-full"
        style={{ backgroundColor: palette.accent, opacity: 0.3 }}
        key={`line-${active}`}
        layoutId="accent-line"
        transition={{ duration: 0.4 }}
      />

      {/* ── Section bottom padding ─────────────────────────── */}
      <div className="h-16" />
    </section>
  );
}
