"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Code, Palette, Zap, Clock, HeadphonesIcon, BarChart2, Smartphone } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Comparison() {
  const { language } = useLanguage();

  const features = [
    {
      id: "Teknologi Modern & Cepat (Next.js/React)",
      en: "Modern & Fast Tech Stack (Next.js/React)",
    },
    {
      id: "Desain UI/UX Khusus & Unik",
      en: "Custom & Unique UI/UX Design",
    },
    {
      id: "Keamanan Tingkat Enterprise",
      en: "Enterprise-Grade Security",
    },
    {
      id: "Arsitektur Kode Bersih & Scalable",
      en: "Clean & Scalable Code Architecture",
    },
    {
      id: "Pengembangan Agile & Transparan",
      en: "Agile & Transparent Development",
    },
    {
      id: "Dukungan Jangka Panjang Khusus",
      en: "Dedicated Long-Term Support",
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Isometric CSS Cards (Small Image Decor) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center perspective-[1200px]"
          >
            {/* Background decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full blur-3xl opacity-60 scale-75" />

            {/* Container for Isometric Cards */}
            <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(15deg) rotateY(-20deg)' }}>
              
              {/* Card 1: Main Dashboard Mockup */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] bg-white rounded-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)] border border-slate-100 p-4 z-30"
              >
                <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-full h-4 flex items-center px-3">
                    <span className="text-[8px] text-slate-400 font-mono">zellio.id/dashboard</span>
                  </div>
                </div>
                <div className="flex gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <BarChart2 size={20} className="text-blue-500" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-3/4 bg-slate-100 rounded-full" />
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-90" />
                  <div className="h-16 w-full bg-slate-50 rounded-xl border border-slate-100" />
                </div>
              </motion.div>

              {/* Card 2: Mobile UI Mockup */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[15%] right-[5%] sm:right-[10%] w-[160px] bg-white rounded-3xl shadow-[15px_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-3 z-40"
              >
                <div className="w-12 h-4 bg-slate-200 rounded-b-xl mx-auto mb-3" />
                <div className="w-full h-[100px] bg-indigo-50 rounded-xl mb-3 flex items-center justify-center">
                   <Smartphone size={24} className="text-indigo-400" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-slate-100 rounded-full" />
                  <div className="h-2 w-4/5 bg-slate-100 rounded-full" />
                  <div className="h-2 w-full bg-slate-100 rounded-full" />
                </div>
              </motion.div>

              {/* Card 3: Code Editor Mockup */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[10%] left-[5%] sm:left-[5%] w-[200px] bg-slate-900 rounded-xl shadow-[10px_20px_40px_rgba(0,0,0,0.15)] border border-slate-800 p-4 z-20"
              >
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-blue-400/30 rounded-full" />
                  <div className="h-2 w-full bg-green-400/30 rounded-full" />
                  <div className="h-2 w-5/6 bg-purple-400/30 rounded-full" />
                  <div className="h-2 w-1/2 bg-yellow-400/30 rounded-full" />
                </div>
              </motion.div>
              
            </div>
          </motion.div>

          {/* Right Side: Comparison Table */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-blue-600 font-mono font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">
              {language === "id" ? "Perbandingan Kualitas" : "Quality Comparison"}
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
              {language === "id" ? "Mengapa Memilih ZELLIO?" : "Why Choose ZELLIO?"}
            </h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 max-w-xl">
              {language === "id" 
                ? "Banyak klien datang kepada kami setelah kecewa dengan agensi lain. Lihat perbedaan standar kualitas kami." 
                : "Many clients come to us after being disappointed by other agencies. See the difference in our quality standards."}
            </p>

            {/* The Comparison Table Card */}
            <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
              
              {/* Table Header */}
              <div className="grid grid-cols-12 items-center bg-slate-50 border-b border-slate-100 p-4 sm:p-6">
                <div className="col-span-6 font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wider">
                  {language === "id" ? "Fitur & Kualitas" : "Features & Quality"}
                </div>
                <div className="col-span-3 text-center">
                  <div className="inline-flex items-center justify-center bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-100">
                    <span className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Other</span>
                  </div>
                </div>
                <div className="col-span-3 text-center">
                  <div className="inline-flex items-center justify-center bg-blue-600 px-3 py-1.5 rounded-full shadow-md">
                    <span className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider">ZELLIO</span>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-slate-100">
                {features.map((feat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="grid grid-cols-12 items-center p-4 sm:p-6 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="col-span-6 pr-4">
                      <span className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                        {language === "id" ? feat.id : feat.en}
                      </span>
                    </div>
                    
                    {/* Other Agency (All Crosses) */}
                    <div className="col-span-3 flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                        <X size={18} strokeWidth={3} />
                      </div>
                    </div>
                    
                    {/* ZELLIO (All Checkmarks) */}
                    <div className="col-span-3 flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
