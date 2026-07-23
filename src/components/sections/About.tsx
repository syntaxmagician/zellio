import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BrowserPreviewEngine from "../ui/BrowserPreviewEngine";
import AuroraSectionBackground from "../ui/AuroraSectionBackground";

const expertiseData = {
  en: [
    { 
      title: "Custom Web Development", 
      desc: "Modern, fast, and SEO-friendly corporate websites, landing pages, and web portals built with React and Next.js."
    },
    { 
      title: "Admin & Analytics Dashboards", 
      desc: "Interactive data dashboards, custom CRM/ERP interfaces, and business intelligence panels with real-time analytics."
    },
    { 
      title: "Mobile App Development", 
      desc: "Native-grade Android and iOS applications developed using Flutter and React Native for a seamless user experience."
    },
    { 
      title: "Custom IT Systems", 
      desc: "Robust backend architectures, custom database designs, integration of third-party APIs, and legacy system migrations."
    },
    { 
      title: "Cloud Infrastructure & DevOps", 
      desc: "Reliable AWS, GCP, or Azure setup, Docker containerization, Kubernetes orchestration, and continuous integration (CI/CD) pipelines."
    },
    { 
      title: "UI/UX & Product Design", 
      desc: "Figma mockups, user research, wireframing, custom design systems, and rapid prototyping to wow your target users."
    }
  ],
  id: [
    { 
      title: "Pembangunan Web Kustom", 
      desc: "Website korporat, landing page, dan portal web yang modern, cepat, dan SEO-friendly menggunakan React dan Next.js."
    },
    { 
      title: "Dashboard Admin & Analitik", 
      desc: "Dashboard data interaktif, antarmuka CRM/ERP kustom, dan panel kecerdasan bisnis dengan analitik real-time."
    },
    { 
      title: "Pengembangan Aplikasi Mobile", 
      desc: "Aplikasi Android dan iOS tingkat native menggunakan Flutter dan React Native untuk pengalaman pengguna yang mulus."
    },
    { 
      title: "Sistem TI Kustom", 
      desc: "Arsitektur backend yang tangguh, desain basis data kustom, integrasi API pihak ketiga, dan migrasi sistem warisan."
    },
    { 
      title: "Infrastruktur Cloud & DevOps", 
      desc: "Konfigurasi AWS, GCP, atau Azure yang andal, kontainerisasi Docker, orkestrasi Kubernetes, dan pipa CI/CD."
    },
    { 
      title: "Desain UI/UX & Produk", 
      desc: "Mockup Figma, riset pengguna, wireframing, sistem desain kustom, dan pembuatan prototipe cepat untuk memikat pengguna Anda."
    }
  ]
};

const localText = {
  en: {
    badge: "WHO WE ARE",
    headline: "We build software that creates lasting business value.",
    para1: "ZELLIO is an elite software engineering and design agency. We partner with visionaries and forward-thinking enterprises to design, architect, and ship digital products that redefine industries.",
    para2: "Our methodology is centered around engineering craftsmanship and product aesthetic. We believe that software should not only be highly performant and secure, but also intuitive, elegant, and built to stand the test of time.",
    cta: "Learn About Us",
    stats: [
      { label: "Projects Delivered", value: "150+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Enterprise Clients", value: "50+" },
      { label: "Years Experience", value: "8+" }
    ],
    expertiseLabel: "Core Expertise",
    expertiseTitle: "Engineering capabilities, not just services.",
    expertiseDesc: "We combine engineering, design and product thinking to build software that scales with your business."
  },
  id: {
    badge: "SIAPA KAMI",
    headline: "Kami membangun perangkat lunak yang menciptakan nilai bisnis abadi.",
    para1: "ZELLIO adalah agensi rekayasa perangkat lunak dan desain elit. Kami bermitra dengan para visioner dan perusahaan maju untuk merancang, mengarsiteki, dan meluncurkan produk digital yang mendefinisikan ulang industri.",
    para2: "Metodologi kami berpusat pada keahlian rekayasa teknologi dan estetika produk. Kami percaya bahwa perangkat lunak tidak hanya harus berkinerja tinggi dan aman, tetapi juga intuitif, elegan, serta dibangun untuk bertahan lama.",
    cta: "Pelajari Tentang Kami",
    stats: [
      { label: "Proyek Selesai", value: "150+" },
      { label: "Kepuasan Klien", value: "98%" },
      { label: "Klien Perusahaan", value: "50+" },
      { label: "Tahun Pengalaman", value: "8+" }
    ],
    expertiseLabel: "Keahlian Utama",
    expertiseTitle: "Kapabilitas rekayasa, bukan sekadar layanan.",
    expertiseDesc: "Kami memadukan rekayasa teknologi, desain, dan pemikiran produk untuk membangun sistem perangkat lunak yang tumbuh bersama bisnis Anda."
  }
};



function CoreExpertiseSection({ language }: { language: "en" | "id" }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const data = expertiseData[language];
  const text = localText[language];

  return (
    <div className="w-full mt-24 lg:mt-32 bg-[#FFFFFF] py-14 lg:py-20 relative overflow-hidden border border-slate-100 rounded-[24px] md:rounded-[40px] shadow-sm">
      
      {/* 
        Aurora diagonal background canvas (flowing softly)
      */}
      <AuroraSectionBackground />

      {/* Split Spacious Grid Layout: LEFT (Browser Showcase 60%) / RIGHT (Copy + List 40%) */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT (60%): macOS persistent Browser Showcase */}
        <div className="col-span-1 lg:col-span-7 order-1 flex items-center justify-center relative z-10">
          <BrowserPreviewEngine activeIndex={activeIdx} />
        </div>

        {/* RIGHT (40%): Editorial Typographic Stack & Vertical Menu */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center order-2 relative z-10">
          
          {/* Header Copy */}
          <div className="mb-6 text-left">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-3 block">
              {text.expertiseLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
              {text.expertiseTitle}
            </h3>
            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
              {text.expertiseDesc}
            </p>
          </div>

          {/* Vertical Navigation Menu with Premium Cards */}
          <div className="flex flex-col gap-2">
            {data.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`relative cursor-pointer group flex flex-col transition-all duration-300 rounded-[14px] ${
                    isActive 
                      ? "bg-blue-500/5 border border-blue-500/10 shadow-[0_8px_30px_rgba(59,130,246,0.02)] p-4 pl-5 border-l-2 border-l-blue-600" 
                      : "bg-transparent border border-transparent p-2.5 hover:translate-x-1 border-b border-b-slate-100/40 rounded-none last:border-b-0"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      {/* Numbering */}
                      <span
                        className={`text-xs font-mono font-bold transition-colors duration-300 ${
                          isActive ? "text-blue-600" : "text-slate-300"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      
                      {/* Active Title */}
                      <h4
                        className={`text-sm md:text-base tracking-tight transition-all duration-300 ${
                          isActive 
                            ? "text-slate-950 font-bold" 
                            : "text-slate-400 group-hover:text-slate-600 font-medium"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* Circular Action Badge Arrow */}
                    {isActive ? (
                      <div className="w-6 h-6 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-600">
                        <ArrowUpRight size={12} />
                      </div>
                    ) : (
                      <ArrowRight
                        size={12}
                        className="text-slate-300 group-hover:text-slate-500 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}
                  </div>

                  {/* Active detailed supporting text */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[11px] md:text-xs text-slate-500 font-medium leading-relaxed max-w-sm mt-2 pl-6"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}

export default function About() {
  const { language } = useLanguage();
  const text = localText[language];


  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <section id="about" className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#FAFAFA] overflow-hidden">
      
      {/* Subtle fine grid/grain style layout support */}
      <div className="absolute inset-0 opacity-[0.012] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Asymmetrical Editorial split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* MEDIA CONTAINER (Right on desktop, but FIRST on mobile stack) */}
          <div className="col-span-1 lg:col-span-7 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="relative w-full aspect-square sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/11] bg-slate-200 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border border-slate-200"
            >
              {/* Premium Cinematic Looping Video */}
              <video
                src="/lumina2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              />

              {/* Muted overlay for readability */}
              <div className="absolute inset-0 bg-slate-950/15 z-10 pointer-events-none" />

              {/* Elegant overlays representing stats */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
                className="absolute top-6 left-6 z-20 backdrop-blur-md bg-white/70 border border-white/30 px-5 py-3 rounded-2xl shadow-sm flex flex-col items-start w-32 md:w-36 select-none"
              >
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{text.stats[0].value}</span>
                <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase leading-tight mt-1">{text.stats[0].label}</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
                className="absolute top-16 right-6 z-20 backdrop-blur-md bg-white/70 border border-white/30 px-5 py-3 rounded-2xl shadow-sm flex flex-col items-start w-32 md:w-36 select-none"
              >
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{text.stats[1].value}</span>
                <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase leading-tight mt-1">{text.stats[1].label}</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: premiumEase }}
                className="absolute bottom-16 left-6 z-20 backdrop-blur-md bg-white/70 border border-white/30 px-5 py-3 rounded-2xl shadow-sm flex flex-col items-start w-32 md:w-36 select-none"
              >
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{text.stats[2].value}</span>
                <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase leading-tight mt-1">{text.stats[2].label}</span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: premiumEase }}
                className="absolute bottom-6 right-6 z-20 backdrop-blur-md bg-white/70 border border-white/30 px-5 py-3 rounded-2xl shadow-sm flex flex-col items-start w-32 md:w-36 select-none"
              >
                <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{text.stats[3].value}</span>
                <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase leading-tight mt-1">{text.stats[3].label}</span>
              </motion.div>

            </motion.div>
          </div>

          {/* EDITORIAL STORYTELLING TEXT (Left on desktop, SECOND on mobile stack) */}
          <div className="col-span-1 lg:col-span-5 lg:order-1 flex flex-col justify-center max-w-xl">
            
            {/* Section Label */}
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-6 block">
              {text.badge}
            </span>

            {/* Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
              {text.headline}
            </h2>

            {/* Paragraphs - Staggered fade upward */}
            <div className="space-y-6 text-slate-500 font-medium text-base md:text-lg leading-relaxed mb-10 pr-2">
              <p>{text.para1}</p>
              <p>{text.para2}</p>
            </div>

            {/* Primary Minimal CTA */}
            <div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider py-1 border-b-2 border-slate-900 transition-colors"
              >
                <span>{text.cta}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>

          </div>

        </div>

        {/* Replaced old DrivenByValuesSection floating card with premium CoreExpertiseSection */}
        <CoreExpertiseSection language={language} />

      </div>
    </section>
  );
}
