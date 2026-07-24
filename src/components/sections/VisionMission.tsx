"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    sectionLabel: "OUR DIRECTION",
    vision: "We engineer next-generation digital products that empower businesses to scale and dominate.",
    missions: [
      {
        id: "01",
        short: "Client First",
        desc: "Custom systems engineered specifically to match your exact business logic and strategic goals.",
        color: "bg-blue-500/20"
      },
      {
        id: "02",
        short: "Global Standards",
        desc: "Strict adherence to global engineering standards, ensuring clean, scalable, and secure code.",
        color: "bg-emerald-500/20"
      },
      {
        id: "03",
        short: "Peak Performance",
        desc: "Zero latency. High throughput. Custom digital platforms optimized relentlessly for speed.",
        color: "bg-amber-500/20"
      },
      {
        id: "04",
        short: "Elite Engineers",
        desc: "Your product is built directly by senior full-stack developers and high-end UI/UX designers.",
        color: "bg-purple-500/20"
      },
      {
        id: "05",
        short: "Next-Gen Stack",
        desc: "Staying ahead. We constantly adopt bleeding-edge technologies and modern security upgrades.",
        color: "bg-cyan-500/20"
      }
    ]
  },
  id: {
    sectionLabel: "ARAH PERUSAHAAN",
    vision: "Kami merancang produk digital generasi baru yang memberdayakan bisnis untuk tumbuh cepat dan mendominasi.",
    missions: [
      {
        id: "01",
        short: "Klien Utama",
        desc: "Sistem kustom yang dirancang secara presisi sesuai dengan logika bisnis dan visi strategis Anda.",
        color: "bg-blue-500/20"
      },
      {
        id: "02",
        short: "Standar Global",
        desc: "Kepatuhan ketat pada standar rekayasa kode internasional yang bersih, aman, dan mudah dikembangkan.",
        color: "bg-emerald-500/20"
      },
      {
        id: "03",
        short: "Performa Puncak",
        desc: "Nol latensi. Bandwidth tinggi. Kami mengoptimalkan setiap platform untuk kecepatan maksimal.",
        color: "bg-amber-500/20"
      },
      {
        id: "04",
        short: "Insinyur Elite",
        desc: "Produk Anda dibangun langsung oleh pengembang senior full-stack dan desainer UI/UX kelas atas.",
        color: "bg-purple-500/20"
      },
      {
        id: "05",
        short: "Teknologi Terdepan",
        desc: "Selangkah di depan. Kami secara aktif mengadopsi tech stack mutakhir dan pembaruan keamanan siber.",
        color: "bg-cyan-500/20"
      }
    ]
  }
};

export default function VisionMission() {
  const { language } = useLanguage();
  const text = localText[language];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="direction" className="relative py-32 lg:py-48 bg-[#FAFAFA] text-slate-900 border-t border-slate-200/50 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      
      {/* Background Ambient Glow that shifts based on active mission */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.4 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px] absolute ${text.missions[activeIdx].color}`}
          />
        </AnimatePresence>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* VISION STATEMENT (Massive Typography) */}
        <div className="text-center mb-24 lg:mb-32">
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-slate-400 uppercase mb-8 block">
            {text.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 max-w-5xl mx-auto leading-[1.05] selection:bg-blue-200 selection:text-blue-900">
            {text.vision}
          </h2>
        </div>

        {/* MISSION FILMSTRIP NAV */}
        <div className="w-full flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-12 lg:gap-16 mb-16">
          {text.missions.map((mission, idx) => (
            <button
              key={idx}
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => setActiveIdx(idx)}
              className={`text-sm md:text-base lg:text-lg font-mono font-bold uppercase tracking-widest transition-all duration-500 outline-none relative py-2 ${
                activeIdx === idx 
                  ? "text-slate-900" 
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {mission.short}
              {activeIdx === idx && (
                <motion.div
                  layoutId="active-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-900 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ACTIVE MISSION DESCRIPTION (Huge Elegant Typography with Blur Reveal) */}
        <div className="relative w-full max-w-4xl min-h-[160px] md:min-h-[140px] flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIdx}
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-slate-800 leading-tight tracking-tight selection:bg-slate-200"
            >
              {text.missions[activeIdx].desc}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
