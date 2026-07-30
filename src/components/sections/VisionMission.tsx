"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Sparkles, CheckCircle2, Zap, Rocket, Globe, ShieldCheck, Database, Settings, Heart, Smartphone, Bell, Users, Clock, BarChart3, Layers } from "lucide-react";

const solutionsData = {
  en: {
    sectionLabel: "WHAT WE DO",
    title: "Digital Solutions Built for Your Business",
    items: [
      {
        id: "website",
        num: "01",
        title: "Websites",
        desc: "We build fast, secure, and beautiful websites that make your business look professional online and help you attract more clients.",
        cta: "Learn More",
        href: "/services/custom-website-development",
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
        title: "Internal Systems",
        desc: "Custom operational software designed specifically for your team to eliminate manual paperwork and speed up your daily work.",
        cta: "Learn More",
        href: "/services/erp-system",
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
        title: "Mobile Apps",
        desc: "Native iOS and Android apps that your customers will actually enjoy using, built with modern standards for a smooth experience.",
        cta: "Learn More",
        href: "/services/mobile-app-development",
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
        desc: "Easily manage your employees' attendance, leave requests, and automated monthly payroll without the headache of spreadsheets.",
        cta: "Learn More",
        href: "/services/hris-payroll-system",
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
        title: "ERP Systems",
        desc: "Connect your finance, inventory, and operations in one central system so you always know exactly how your business is doing.",
        cta: "Learn More",
        href: "/services/erp-system",
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
    sectionLabel: "LAYANAN KAMI",
    title: "Solusi Digital untuk Bisnis Anda",
    items: [
      {
        id: "website",
        num: "01",
        title: "Pembuatan Website",
        desc: "Kami membangun website yang cepat dan elegan untuk membantu bisnis Anda tampil lebih profesional dan menarik kepercayaan klien di internet.",
        cta: "Selengkapnya",
        href: "/services/custom-website-development",
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
        title: "Sistem Internal Kustom",
        desc: "Tinggalkan proses pencatatan manual. Kami membuatkan aplikasi khusus yang disesuaikan persis dengan alur kerja harian tim Anda.",
        cta: "Selengkapnya",
        href: "/services/erp-system",
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
        title: "Pembuatan Aplikasi Mobile",
        desc: "Hadir langsung di genggaman pelanggan Anda melalui aplikasi Android dan iOS yang dirancang agar mudah digunakan siapa saja.",
        cta: "Selengkapnya",
        href: "/services/mobile-app-development",
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
        title: "Sistem HRIS & Gaji",
        desc: "Permudah bagian HR dalam mencatat absensi, pengajuan cuti, hingga pembuatan slip gaji bulanan karyawan secara otomatis.",
        cta: "Selengkapnya",
        href: "/services/hris-payroll-system",
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
        title: "Sistem ERP Terpadu",
        desc: "Pantau kesehatan bisnis Anda dengan sistem tunggal yang menyatukan laporan keuangan, stok gudang, dan operasional sekaligus.",
        cta: "Selengkapnya",
        href: "/services/erp-system",
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
  const text = solutionsData[language as "en" | "id"];
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = text.items[activeIdx];

  return (
    <section id="direction" className="relative py-20 lg:py-28 bg-white text-slate-900 border-y border-slate-100 overflow-hidden">

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">

        {/* ── HEADER ── */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <span className="inline-block text-[10px] font-mono font-bold tracking-[0.35em] text-blue-600 uppercase mb-5">
            {text.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[0.9] text-slate-900">
            {text.title}
          </h2>
        </div>

        {/* ── MAIN GRID: Portrait left · Accordion right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Portrait circle + animated badges */}
          <div className="flex items-center justify-center relative min-h-[400px] order-2 lg:order-1">

            {/* Spinning dashed ring */}
            <div className={`absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed transition-colors duration-700 animate-[spin_60s_linear_infinite] ${activeItem.borderGlow}`} />
            {/* Static inner ring */}
            <div className={`absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full border transition-colors duration-700 ${activeItem.borderGlow}`} />

            {/* Dot accent */}
            <div className="absolute left-6 bottom-6 w-16 h-16 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] [background-size:10px_10px] opacity-30 pointer-events-none" />

            {/* Main portrait circle */}
            <div className={`relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full bg-gradient-to-tr transition-all duration-700 shadow-2xl p-[5px] ${activeItem.gradient}`}>
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.image}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1.04 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.32, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 260px, 300px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Animated icon badges */}
            <AnimatePresence mode="wait">
              {activeItem.badges?.map((badge, idx) => {
                const BadgeIcon = badge.icon;
                return (
                  <motion.div
                    key={`${activeItem.id}-badge-${idx}`}
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{
                      opacity: 1,
                      scale: [1, 1.06, 1],
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
                    className={`absolute ${badge.pos} w-${badge.size} h-${badge.size} rounded-full ${badge.bg} shadow-xl ${badge.border} flex items-center justify-center z-20 ${badge.color}`}
                  >
                    <BadgeIcon
                      size={badge.iconSize}
                      strokeWidth={idx === 1 ? 2.5 : 2}
                      className={idx === 0 ? "animate-pulse" : ""}
                      fill={idx === 2 ? "currentColor" : "none"}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT — Accordion service list */}
          <div className="flex flex-col gap-2 order-1 lg:order-2">
            {text.items.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "border-slate-200 bg-slate-50 shadow-sm"
                      : "border-transparent hover:border-slate-100 hover:bg-slate-50/50"
                  }`}
                  layout
                >
                  {/* Row header */}
                  <div className="flex items-center justify-between gap-4 px-5 py-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <span className={`font-mono text-xs font-black tracking-wider flex-shrink-0 transition-colors duration-300 ${isActive ? "text-blue-600" : "text-slate-300 group-hover:text-slate-400"}`}>
                        {item.num}
                      </span>
                      <h3 className={`text-[15px] font-bold tracking-tight truncate transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                        {item.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex-shrink-0 transition-colors duration-300 ${isActive ? "text-blue-500" : "text-slate-300 group-hover:text-slate-400"}`}
                    >
                      <ArrowRight size={15} />
                    </motion.div>
                  </div>

                  {/* Expanded body */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">
                          <p className="text-slate-500 text-[13px] leading-relaxed">
                            {item.desc}
                          </p>
                          <Link
                            href={item.href}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-[11px] font-bold tracking-wide transition-all duration-200"
                          >
                            {item.cta}
                            <ArrowRight size={10} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
