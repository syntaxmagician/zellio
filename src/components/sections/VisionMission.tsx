"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles, CheckCircle2, Zap, Rocket, Globe, ShieldCheck, Database, Settings, Heart, Smartphone, Bell, Users, Clock, BarChart3, Layers } from "lucide-react";

const solutionsData = {
  en: {
    sectionLabel: "OUR DIRECTION",
    title: "Zellio Digital Solutions for Every Business Need",
    items: [
      {
        id: "website",
        num: "01",
        title: "Website",
        desc: "Expand your market reach and elevate your brand presence with high-converting, ultrafast custom web applications and corporate portals.",
        cta: "Learn More",
        image: "/woman-creative.png",
        gradient: "from-[#0055FF] via-[#0088FF] to-[#00C2FF]",
        borderGlow: "border-blue-300/40",
        badges: [
          { icon: Sparkles, color: "text-amber-500", bg: "bg-white", border: "border-blue-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: Rocket, color: "text-white", bg: "bg-blue-600", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 24 },
          { icon: Globe, color: "text-white", bg: "bg-gradient-to-br from-purple-500 to-indigo-500", border: "", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      },
      {
        id: "internal-system",
        num: "02",
        title: "Sistem Internal",
        desc: "Custom operational workflows, secure databases, and custom dashboard architectures built specifically to eliminate bottlenecks.",
        cta: "Learn More",
        image: "/woman-techy.png",
        gradient: "from-indigo-600 via-purple-500 to-violet-400",
        borderGlow: "border-purple-300/40",
        badges: [
          { icon: ShieldCheck, color: "text-emerald-500", bg: "bg-white", border: "border-emerald-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: Database, color: "text-white", bg: "bg-indigo-600", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 24 },
          { icon: Settings, color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-200", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      },
      {
        id: "mobile-app",
        num: "03",
        title: "Mobile App",
        desc: "Engage your customers anywhere with sleek, native Android & iOS mobile applications designed for peak performance and user delight.",
        cta: "Learn More",
        image: "/avatar-anisa.png",
        gradient: "from-rose-500 via-pink-500 to-fuchsia-400",
        borderGlow: "border-pink-300/40",
        badges: [
          { icon: Heart, color: "text-rose-500", bg: "bg-white", border: "border-rose-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: Smartphone, color: "text-white", bg: "bg-rose-500", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 24 },
          { icon: Bell, color: "text-white", bg: "bg-gradient-to-br from-amber-400 to-orange-500", border: "", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      },
      {
        id: "hris-payroll",
        num: "04",
        title: "HRIS & Payroll",
        desc: "Streamline employee attendance, performance management, tax compliance, and automated payroll systems tailored for modern organizations.",
        cta: "Learn More",
        image: "/cute-asian-woman.png",
        gradient: "from-emerald-600 via-teal-500 to-green-400",
        borderGlow: "border-emerald-300/40",
        badges: [
          { icon: Users, color: "text-teal-600", bg: "bg-white", border: "border-teal-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: CheckCircle2, color: "text-white", bg: "bg-emerald-500", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 26 },
          { icon: Clock, color: "text-white", bg: "bg-gradient-to-br from-blue-400 to-cyan-500", border: "", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      },
      {
        id: "erp-system",
        num: "05",
        title: "ERP System",
        desc: "Comprehensive enterprise resource planning software integrating finance, inventory, supply chain, and operations in one centralized hub.",
        cta: "Learn More",
        image: "/asian-consultant.png",
        gradient: "from-amber-500 via-orange-500 to-yellow-400",
        borderGlow: "border-amber-300/40",
        badges: [
          { icon: BarChart3, color: "text-orange-500", bg: "bg-white", border: "border-orange-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: Layers, color: "text-white", bg: "bg-amber-500", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 24 },
          { icon: Zap, color: "text-white", bg: "bg-gradient-to-br from-amber-400 to-orange-500", border: "", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      }
    ]
  },
  id: {
    sectionLabel: "ARAH & SOLUSI",
    title: "Solusi Digital ZELLIO untuk Semua Jenis Usaha",
    items: [
      {
        id: "website",
        num: "01",
        title: "Website",
        desc: "Kembangkan usaha dan jangkauan pasar Anda dengan aplikasi web kustom dan profil perusahaan premium yang cepat, aman, dan berkonversi tinggi.",
        cta: "Selengkapnya",
        image: "/woman-creative.png",
        gradient: "from-[#0055FF] via-[#0088FF] to-[#00C2FF]",
        borderGlow: "border-blue-300/40",
        badges: [
          { icon: Sparkles, color: "text-amber-500", bg: "bg-white", border: "border-blue-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: Rocket, color: "text-white", bg: "bg-blue-600", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 24 },
          { icon: Globe, color: "text-white", bg: "bg-gradient-to-br from-purple-500 to-indigo-500", border: "", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      },
      {
        id: "internal-system",
        num: "02",
        title: "Sistem Internal",
        desc: "Alur kerja operasional kustom, database aman, dan arsitektur dasbor internal yang dibangun khusus untuk merampingkan hambatan operasional.",
        cta: "Selengkapnya",
        image: "/woman-techy.png",
        gradient: "from-indigo-600 via-purple-500 to-violet-400",
        borderGlow: "border-purple-300/40",
        badges: [
          { icon: ShieldCheck, color: "text-emerald-500", bg: "bg-white", border: "border-emerald-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: Database, color: "text-white", bg: "bg-indigo-600", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 24 },
          { icon: Settings, color: "text-slate-600", bg: "bg-slate-100", border: "border-slate-200", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      },
      {
        id: "mobile-app",
        num: "03",
        title: "Mobile App",
        desc: "Jangkau pelanggan di mana saja dengan aplikasi seluler Android & iOS native berkinerja tinggi yang memanjakan pengguna dan mendorong konversi.",
        cta: "Selengkapnya",
        image: "/avatar-anisa.png",
        gradient: "from-rose-500 via-pink-500 to-fuchsia-400",
        borderGlow: "border-pink-300/40",
        badges: [
          { icon: Heart, color: "text-rose-500", bg: "bg-white", border: "border-rose-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: Smartphone, color: "text-white", bg: "bg-rose-500", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 24 },
          { icon: Bell, color: "text-white", bg: "bg-gradient-to-br from-amber-400 to-orange-500", border: "", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      },
      {
        id: "hris-payroll",
        num: "04",
        title: "HRIS & Payroll",
        desc: "Kelola absensi karyawan, penilaian kinerja, kepatuhan pajak, dan sistem penggajian otomatis secara mulus dan akurat untuk perusahaan modern.",
        cta: "Selengkapnya",
        image: "/cute-asian-woman.png",
        gradient: "from-emerald-600 via-teal-500 to-green-400",
        borderGlow: "border-emerald-300/40",
        badges: [
          { icon: Users, color: "text-teal-600", bg: "bg-white", border: "border-teal-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: CheckCircle2, color: "text-white", bg: "bg-emerald-500", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 26 },
          { icon: Clock, color: "text-white", bg: "bg-gradient-to-br from-blue-400 to-cyan-500", border: "", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      },
      {
        id: "erp-system",
        num: "05",
        title: "ERP System",
        desc: "Sistem perencanaan sumber daya terintegrasi penuh yang menghubungkan keuangan, inventaris, rantai pasokan, dan operasional dalam satu pusat.",
        cta: "Selengkapnya",
        image: "/asian-consultant.png",
        gradient: "from-amber-500 via-orange-500 to-yellow-400",
        borderGlow: "border-amber-300/40",
        badges: [
          { icon: BarChart3, color: "text-orange-500", bg: "bg-white", border: "border-orange-100", pos: "right-4 top-8 sm:right-8 sm:top-10", size: 12, iconSize: 22 },
          { icon: Layers, color: "text-white", bg: "bg-amber-500", border: "border-white border-2", pos: "left-4 bottom-10 sm:left-10 sm:bottom-12", size: 14, iconSize: 24 },
          { icon: Zap, color: "text-white", bg: "bg-gradient-to-br from-amber-400 to-orange-500", border: "", pos: "left-10 top-14 sm:left-14 sm:top-16", size: 10, iconSize: 18 }
        ]
      }
    ]
  }
};

export default function VisionMission() {
  const { language } = useLanguage();
  const text = solutionsData[language];
  const [activeIdx, setActiveIdx] = useState(0); 

  const activeItem = text.items[activeIdx] || text.items[0];

  return (
    <section id="direction" className="relative py-12 lg:py-16 bg-[#F3F8FD] text-slate-900 border-y border-blue-100/60 overflow-hidden">
      
      {/* Subtle background ambient details */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-blue-600 uppercase mb-2 inline-block bg-blue-100/80 px-3 py-1 rounded-full">
            {text.sectionLabel}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
            {text.title}
          </h2>
        </div>

        {/* 2-Column Composite & Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Dynamic Photo & Emote Badges */}
          <div className="col-span-1 lg:col-span-6 flex items-center justify-center relative min-h-[380px]">
            
            {/* Outer Decorative Rings that match the active category */}
            <div className={`absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed transition-colors duration-500 animate-[spin_60s_linear_infinite] ${activeItem.borderGlow}`} />
            <div className={`absolute w-[310px] h-[310px] sm:w-[360px] sm:h-[360px] rounded-full border transition-colors duration-500 ${activeItem.borderGlow}`} />

            {/* Dotted Pattern Accents */}
            <div className="absolute left-4 bottom-4 w-20 h-20 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

            {/* Main Vibrant Circle with Dynamic Gradient & Woman Portrait */}
            <div className={`relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-tr transition-all duration-700 shadow-lg p-1.5 flex items-center justify-center ${activeItem.gradient}`}>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.image}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image 
                      src={activeItem.image} 
                      alt={activeItem.title} 
                      fill 
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 280px, 320px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dynamic Animated Symbol / Emote Badges */}
            <AnimatePresence mode="wait">
              {activeItem.badges?.map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <motion.div
                    key={`${activeItem.id}-badge-${idx}`}
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      scale: [1, 1.05, 1],
                      y: idx === 0 ? [0, -8, 0] : idx === 1 ? [0, 8, 0] : [0, 0, 0],
                      rotate: idx === 1 ? [0, 5, 0] : 0
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ 
                      duration: idx === 0 ? 3.5 : idx === 1 ? 4.2 : 2.8, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: idx * 0.2
                    }}
                    className={`absolute ${badge.pos} w-${badge.size} h-${badge.size} rounded-full ${badge.bg} shadow-lg ${badge.border} flex items-center justify-center z-20 ${badge.color}`}
                  >
                    <BadgeIcon size={badge.iconSize} strokeWidth={idx === 1 ? 2.5 : 2} className={idx === 0 ? "animate-pulse" : ""} fill={idx === 2 ? "currentColor" : "none"} />
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>

          {/* RIGHT COLUMN: Interactive Vertical Cards Accordion (Editorial Numbers) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-2.5 max-w-lg w-full mx-auto lg:mx-0">
            {text.items.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`group w-full bg-white rounded-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive 
                      ? "border border-blue-200 shadow-md p-4" 
                      : "border border-slate-100 shadow-sm hover:border-blue-100 hover:shadow p-3.5"
                  }`}
                >
                  {/* Card Header (Editorial Typography) */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      {/* Editorial Numbering instead of AI/Lucide Icon */}
                      <span className={`font-mono text-xs sm:text-sm font-black tracking-wider transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500"
                      }`}>
                        {item.num}
                      </span>
                      
                      <h3 className={`text-[14px] sm:text-[15px] font-bold tracking-tight transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-slate-700 group-hover:text-slate-900"
                      }`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Expand Indicator */}
                    <div className={`transition-transform duration-300 ${
                      isActive ? "text-blue-500 rotate-90" : "text-slate-300 group-hover:text-slate-400"
                    }`}>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  {/* Expanded Body Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-slate-50 space-y-3">
                          <p className="text-slate-500 text-[13px] leading-relaxed pr-4">
                            {item.desc}
                          </p>

                          <div className="pt-1">
                            <a
                              href="/contact"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold transition-all duration-200"
                            >
                              <span>{item.cta}</span>
                              <ArrowRight size={10} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
