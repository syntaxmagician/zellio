"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Lock, Cpu, RefreshCw, Activity, Terminal, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// ============================================================
// SYNTHETIC UI COMPONENT 1: Ares Cryptographic Portal (Dark High-Contrast Console)
// ============================================================
// ============================================================
// SYNTHETIC UI COMPONENT 1: Horizon ERP Platform (Dark Console)
// ============================================================
const HorizonVisual = () => {
  return (
    <div className="relative w-full h-[260px] sm:h-[300px] bg-[#0E131F] rounded-2xl border border-slate-800/80 overflow-hidden font-mono text-[10px] text-slate-400 p-4 flex flex-col justify-between shadow-2xl">
      {/* Glow effect inside console */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none" />
      
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-2 shrink-0 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(239,68,68,0.4)]" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
          <span className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
          <span className="text-[9px] text-slate-500 ml-2 font-mono">horizon-erp-api.sh</span>
        </div>
        <div className="text-[8px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 font-bold">API GATEWAY</div>
      </div>
      
      {/* Terminal Content */}
      <div className="flex-grow grid grid-cols-1 sm:grid-cols-12 gap-4 items-center overflow-hidden relative z-10">
        {/* API Routing (Spans 5) */}
        <div className="col-span-1 sm:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-blue-500/30 flex items-center justify-center">
            {/* Spinning radar ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t border-b border-blue-400/40"
            />
            {/* Inner CPU container */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#111625] border border-slate-800 flex items-center justify-center shadow-xl relative overflow-hidden group-hover:border-blue-400 transition-colors">
              {/* Laser scanning beam */}
              <motion.div
                animate={{ y: [-30, 30, -30] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-[1.5px] bg-blue-400 shadow-[0_0_8px_#60a5fa] z-10"
              />
              <Cpu className="w-5 h-5 text-blue-400 drop-shadow-[0_0_4px_#3b82f6]" />
            </div>
          </div>
          <span className="text-[8px] text-slate-500 mt-2 tracking-wider">REST API ROUTING</span>
        </div>

        {/* Code Logs (Spans 7) */}
        <div className="col-span-1 sm:col-span-7 h-full flex flex-col justify-center gap-1.5 text-slate-400 font-mono pl-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-slate-800/60 pt-3 sm:pt-0 overflow-hidden">
          <div className="text-slate-500">&gt; initiating horizon core api...</div>
          <div className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✔</span> <span>Database replication: active</span></div>
          <div className="flex items-center gap-1.5"><span className="text-emerald-500 font-bold">✔</span> <span>API router gateway: connected</span></div>
          <div className="text-slate-500">&gt; serving multi-tenant traffic...</div>
          <div className="text-blue-400 select-all truncate">GET /api/v2/transactions: 200 OK</div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span>ERP CORE ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// SYNTHETIC UI COMPONENT 2: Apex Analytics Dashboard (Premium Light Theme)
// ============================================================
const ApexVisual = () => {
  return (
    <div className="relative w-full h-[180px] bg-white rounded-2xl border border-slate-200/80 overflow-hidden p-4 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
      {/* Dashboard Top */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 shrink-0">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
          <span className="text-[10px] text-slate-800 font-mono font-bold">apex-analytics-dashboard</span>
        </div>
        <span className="text-emerald-600 text-[8px] font-mono font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">24.5K MRR</span>
      </div>

      {/* Visual Live Grid (Bar Chart) */}
      <div className="flex-grow flex items-end gap-2 justify-center py-3 px-2">
        {[45, 80, 55, 95, 60, 40, 75, 90, 50, 70].map((val, idx) => (
          <div key={idx} className="flex-grow flex flex-col justify-end items-center h-full">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: idx * 0.1,
              }}
              className="w-full bg-gradient-to-t from-emerald-500/20 to-emerald-500 rounded-sm relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-emerald-300 shadow-[0_0_4px_#34d399]" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Database query log */}
      <div className="bg-slate-50 p-2 rounded border border-slate-100 font-mono text-[8px] text-slate-500 flex justify-between items-center select-all shrink-0">
        <span className="truncate">SELECT count() FROM app_signups;</span>
        <span className="text-emerald-600 font-bold ml-2 shrink-0">0.01s</span>
      </div>
    </div>
  );
};

// ============================================================
// SYNTHETIC UI COMPONENT 3: Velo Pay Application (Premium Light Phone Mockup)
// ============================================================
const VeloVisual = () => {
  return (
    <div className="relative w-full h-[180px] bg-white rounded-2xl border border-slate-200/80 overflow-hidden p-3 flex items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
      {/* Phone Frame Mockup */}
      <div className="relative w-[130px] h-[155px] bg-[#F8FAFC] rounded-[20px] border-2 border-slate-200 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col p-2.5">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-200 rounded-b-md z-20" />
        
        {/* App UI */}
        <div className="flex-grow flex flex-col justify-between font-mono text-[8px] text-slate-700 relative z-10 pt-1.5">
          {/* Sync Header */}
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-1.5">
            <span className="text-slate-400 uppercase tracking-widest text-[7px] font-bold">VELO FINTECH APP</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="w-2 h-2 text-cyan-500" />
            </motion.div>
          </div>

          {/* Sync Core */}
          <div className="flex-grow flex flex-col justify-center items-center py-1 relative">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-10 h-10 rounded-full border border-cyan-400/40"
            />
            <div className="w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200/60 flex items-center justify-center shadow-inner">
              <Shield className="w-3.5 h-3.5 text-cyan-500" />
            </div>
            <span className="text-[7px] text-cyan-600 font-bold uppercase tracking-wider mt-1 animate-pulse">BIOMETRIC WALLET</span>
          </div>

          {/* Decryption status */}
          <div className="bg-white p-1 rounded border border-slate-200/60 text-[6.5px] text-slate-500 space-y-0.5 shadow-sm">
            <div className="flex justify-between"><span>PAYMENT GATEWAY</span><span className="text-emerald-500 font-bold">SECURED</span></div>
            <div className="flex justify-between"><span>BALANCE</span><span className="text-slate-600 font-mono">$42,950</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getVisual = (num: string) => {
  switch (num) {
    case "01": return <HorizonVisual />;
    case "02": return <ApexVisual />;
    case "03": return <VeloVisual />;
    default: return null;
  }
};

const localText = {
  en: {
    badge: "FEATURED WORK",
    title: "Engineering Showcase",
    description: "Real-world systems we designed, architected, and shipped for enterprise partners.",
    viewProject: "Explore Case Study",
    stackLabel: "Technologies used",
    projects: [
      {
        num: "01",
        title: "Horizon ERP Platform",
        category: "Enterprise Web Platform",
        desc: "A multi-tenant corporate resources planner and database router featuring high concurrency. Engineered for high performance transaction processing, automated audit trails, and lightning-fast load times under load.",
        tags: ["Next.js", "Go (Golang)", "PostgreSQL", "Docker", "AWS ECS"],
      },
      {
        num: "02",
        title: "Apex Analytics Dashboard",
        category: "Data & SaaS Analytics Suite",
        desc: "Real-time SaaS billing analysis and signups tracking dashboard. Built with a specialized analytics database cluster for processing millions of subscription data updates with sub-second response times.",
        tags: ["React", "TypeScript", "Node.js", "ClickHouse", "Kubernetes"],
      },
      {
        num: "03",
        title: "Velo Pay Systems",
        category: "Fintech Mobile Application",
        desc: "A beautiful consumer peer-to-peer mobile payments wallet and secure transaction portal. Developed with instant local currency conversion, biometrics security, and offline SQLite synchronization.",
        tags: ["Flutter", "Dart", "gRPC", "SQLite Encrypted", "GCP"],
      }
    ]
  },
  id: {
    badge: "PROYEK UNGGULAN",
    title: "Galeri Studi Kasus",
    description: "Sistem nyata yang kami rancang, arsiteki, dan luncurkan untuk mitra perusahaan kami.",
    viewProject: "Pelajari Studi Kasus",
    stackLabel: "Teknologi yang digunakan",
    projects: [
      {
        num: "01",
        title: "Horizon ERP Platform",
        category: "Platform Web Perusahaan",
        desc: "Sistem perencanaan sumber daya korporat multi-tenant dengan concurrency tinggi. Dirancang untuk pemrosesan transaksi berkinerja tinggi, audit log otomatis, serta waktu muat halaman yang super cepat.",
        tags: ["Next.js", "Go (Golang)", "PostgreSQL", "Docker", "AWS ECS"],
      },
      {
        num: "02",
        title: "Apex Analytics Dashboard",
        category: "Dashboard SaaS & Analitik",
        desc: "Panel pemantauan analitik pendapatan SaaS dan pendaftaran pengguna secara real-time. Dilengkapi klaster basis data analitik ClickHouse untuk waktu respons query di bawah satu detik.",
        tags: ["React", "TypeScript", "Node.js", "ClickHouse", "Kubernetes"],
      },
      {
        num: "03",
        title: "Velo Pay Systems",
        category: "Aplikasi Finansial Mobile",
        desc: "Aplikasi dompet pembayaran peer-to-peer dan transfer dana berdesain premium untuk konsumen. Mendukung transaksi biometrik aman, konversi valuta instan, dan penyimpanan data lokal offline.",
        tags: ["Flutter", "Dart", "gRPC", "SQLite Encrypted", "GCP"],
      }
    ]
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function FeaturedWork() {
  const { language } = useLanguage();
  const text = localText[language];

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-[#FAFAFA] text-slate-900 border-t border-slate-200/50 overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />
      
      {/* Decorative Glows */}
      <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none z-0" />
      <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-4">
            <Terminal className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            {text.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
            {text.title}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-slate-500 leading-relaxed font-medium">
            {text.description}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {text.projects.map((project, idx) => {
            const isLarge = project.num === "01";
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`bg-white border border-slate-200/60 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] relative group transition-all duration-500 ${
                  isLarge ? "lg:col-span-2" : "col-span-1"
                }`}
              >
                {/* Decorative Laser Border Line (Top side only) */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50 group-hover:via-blue-400/50 transition-all duration-700" />

                {/* Hover Glow Radial Effect */}
                <div className={`absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-gradient-to-br ${isLarge ? 'from-blue-500/10 to-indigo-500/10' : idx === 1 ? 'from-emerald-500/10 to-teal-500/10' : 'from-sky-500/10 to-cyan-500/10'} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {isLarge ? (
                  /* ============================================================
                     LATERALLY-SPLIT LAYOUT (Large Card - Ares Portal)
                     ============================================================ */
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full z-10">
                    {/* Copy Column (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full">
                      <div>
                        {/* Header details */}
                        <div className="flex items-center gap-2 mb-4">
                          <span className="font-mono text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                            {project.num}
                          </span>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                            {project.category}
                          </span>
                        </div>
 
                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-6">
                          {project.desc}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-[1px] bg-slate-100 my-4" />

                      {/* Tech and CTA footer */}
                      <div>
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                          {text.stackLabel}
                        </span>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2.5 py-0.5 text-[9px] font-mono font-semibold text-slate-600 bg-slate-50 border border-slate-100 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#contact"
                          className="group inline-flex items-center gap-1.5 text-slate-800 font-bold text-[10px] uppercase tracking-widest py-1 border-b border-slate-800 hover:text-blue-600 hover:border-blue-600 transition-colors"
                        >
                          <span>{text.viewProject}</span>
                          <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>

                    {/* Interactive Virtual Console Column (7 cols) */}
                    <div className="lg:col-span-7 w-full">
                      {getVisual(project.num)}
                    </div>
                  </div>
                ) : (
                  /* ============================================================
                     STACKED LAYOUT (Small Cards - Vesper / Lumina)
                     ============================================================ */
                  <div className="flex flex-col gap-6 w-full h-full justify-between z-10">
                    {/* Top: Synthetic Visual */}
                    <div className="w-full">
                      {getVisual(project.num)}
                    </div>

                    {/* Bottom: Typography copy */}
                    <div className="flex flex-col justify-between flex-grow mt-2">
                      <div>
                        {/* Header details */}
                        <div className="flex items-center gap-2 mb-3.5">
                          <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${idx === 1 ? 'text-emerald-600 bg-emerald-50 border-emerald-100' : 'text-cyan-600 bg-cyan-50 border-cyan-100'}`}>
                            {project.num}
                          </span>
                          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-3 transition-colors ${idx === 1 ? 'group-hover:text-emerald-600' : 'group-hover:text-cyan-600'}`}>
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[12.5px] text-slate-500 leading-relaxed font-medium mb-6">
                          {project.desc}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-[1px] bg-slate-100 my-4" />

                      {/* Tech and CTA footer */}
                      <div>
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2.5">
                          {text.stackLabel}
                        </span>
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2.5 py-0.5 text-[9px] font-mono font-semibold text-slate-600 bg-slate-50 border border-slate-100 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#contact"
                          className={`group inline-flex items-center gap-1.5 text-slate-800 font-bold text-[10px] uppercase tracking-widest py-1 border-b border-slate-800 transition-colors ${idx === 1 ? 'hover:text-emerald-600 hover:border-emerald-600' : 'hover:text-cyan-600 hover:border-cyan-600'}`}
                        >
                          <span>{text.viewProject}</span>
                          <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
