"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, animate, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import LinearProcessShowcase from "../ui/LinearProcessShowcase";
import AuroraSectionBackground from "../ui/AuroraSectionBackground";

const workflowData = {
  en: [
    {
      title: "Discovery & Architecture",
      desc: "We map out requirements, analyze digital infrastructure, and design a secure, high-performance blueprint."
    },
    {
      title: "Agile Engineering",
      desc: "We write clean, typed code in modern frameworks (React/Next.js/Node) with rapid iterations and transparent feedback."
    },
    {
      title: "System Forensics & QA",
      desc: "Our engineers run rigorous automated testing, penetration tests, and security audits to guarantee zero defects."
    },
    {
      title: "Deployment & Scaling",
      desc: "We deploy onto highly available cloud infrastructures (AWS/GCP) using Docker/Kubernetes and setup automated monitoring."
    }
  ],
  id: [
    {
      title: "Perencanaan & Arsitektur",
      desc: "Kami memetakan kebutuhan, menganalisis infrastruktur digital, dan merancang cetak biru sistem yang aman dan berkinerja tinggi."
    },
    {
      title: "Pengembangan Tangkas",
      desc: "Kami menulis kode bersih dan terstruktur dalam framework modern dengan iterasi cepat serta umpan balik transparan."
    },
    {
      title: "Forensik Sistem & QA",
      desc: "Insinyur kami menjalankan pengujian otomatis, uji penetrasi, dan audit keamanan sistem untuk menjamin bebas cacat."
    },
    {
      title: "Peluncuran & Skalabilitas",
      desc: "Kami meluncurkan sistem ke infrastruktur cloud berkinerja tinggi menggunakan Docker/Kubernetes dengan pemantauan otomatis."
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
    workflowLabel: "Our Process",
    workflowTitle: "How we build digital products.",
    workflowDesc: "We combine engineering rigor, security auditing, and product thinking to ship software that drives momentum."
  },
  id: {
    badge: "SIAPA KAMI",
    headline: "Kami membangun perangkat lunak yang menciptakan nilai bisnis abadi.",
    para1: "ZELLIO adalah agensi rekayasa perangkat lunak dan desain elit. Kami bermitra dengan para visioner dan perusahaan maju untuk merancang, mengarsiteki, dan meluncurkan produk digital yang mendefinisikan ulang industri.",
    para2: "Metodologi kami berpusat pada keahlian rekayasa teknologi dan estetika produk. Kami percaya bahwa perangkat lunak tidak hanya harus berkinerja tinggi dan aman, tetapi juga intuitif, elegan, serta dibangun untuk bertahan lama.",
    cta: "Pelajari Tentang Kami",
    stats: [
      { label: "Proyek Selesai", value: "15+" },
      { label: "Kepuasan Klien", value: "98%" },
      { label: "Klien Perusahaan", value: "10+" },
      { label: "Tahun Pengalaman", value: "4+" }
    ],
    workflowLabel: "Proses Kami",
    workflowTitle: "Bagaimana kami membangun produk digital.",
    workflowDesc: "Kami memadukan rekayasa teknologi, audit keamanan, dan pemikiran produk untuk meluncurkan sistem yang memacu pertumbuhan."
  }
};



import { Check, X } from "lucide-react";

function EngineeringWorkflowSectionContent({ language }: { language: "en" | "id" }) {
  const text = localText[language];

  const comparisonFeatures = [
    {
      enTitle: "End-to-End Digital Ecosystems",
      enDesc: "We build complete custom systems from codebase to secure cloud infrastructure.",
      idTitle: "Ekosistem Digital End-to-End",
      idDesc: "Kami membangun sistem kustom lengkap dari kode hingga infrastruktur cloud yang aman.",
      enOther: "Provide fragmented or single-feature solutions.",
      idOther: "Hanya menyediakan solusi terfragmentasi atau fitur tunggal."
    },
    {
      enTitle: "Dedicated Concierge Support",
      enDesc: "Direct 24/7 access to our senior engineering team whenever you need assistance.",
      idTitle: "Dukungan Eksklusif Siaga",
      idDesc: "Akses langsung 24/7 ke tim senior engineer kami kapan pun Anda membutuhkannya.",
      enOther: "Limited response times, restricted to working hours.",
      idOther: "Waktu respon terbatas, hanya pada jam kerja standar."
    },
    {
      enTitle: "Co-Creation & Transparent Updates",
      enDesc: "Real-time Slack/Teams communication with regular progress reports.",
      idTitle: "Ko-Kreasi & Pembaruan Transparan",
      idDesc: "Komunikasi real-time via Slack/Teams dengan laporan progres berkala.",
      enOther: "Opaque development cycles and slow communication.",
      idOther: "Siklus pengembangan tertutup dan komunikasi lambat."
    },
    {
      enTitle: "Scalable & Future-Proof Builds",
      enDesc: "We deliver rich, enterprise-ready features tailored to your business growth.",
      idTitle: "Arsitektur Skalabel & Siap Masa Depan",
      idDesc: "Menyediakan fitur lengkap skala enterprise yang siap menopang pertumbuhan bisnis.",
      enOther: "Basic templates or feature-limited applications.",
      idOther: "Menggunakan template dasar atau aplikasi dengan fitur terbatas."
    },
    {
      enTitle: "Vetted Industry Excellence",
      enDesc: "Proven track record of high-performance digital products across sectors.",
      idTitle: "Rekam Jejak Industri Teruji",
      idDesc: "Rekam jejak terbukti dalam membangun produk digital performa tinggi di berbagai sektor.",
      enOther: "Unproven methodologies or generic, untested outcomes.",
      idOther: "Metodologi belum teruji dengan hasil generik."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Header Row (Restored to its original majestic size) */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-4 block">
            {text.workflowLabel}
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-[3rem] font-black text-slate-900 tracking-tight leading-[1.1]">
            {text.workflowTitle}
          </h3>
        </div>
        <div className="max-w-lg lg:pb-2 text-left lg:text-right">
          <p className="text-[15px] md:text-base text-slate-500 leading-relaxed font-medium">
            {text.workflowDesc}
          </p>
        </div>
      </div>

      {/* 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Dark Showcase (Original size) */}
        <div className="col-span-1 lg:col-span-5 relative">
          <LinearProcessShowcase />
        </div>

        {/* Right Column: Comparison Table (Service Standard) */}
        <div className="col-span-1 lg:col-span-7">
          <div className="w-full relative">
            
            <div className="mb-10">
              <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {language === "id" ? "Kualitas Tanpa Kompromi." : "Uncompromising Quality."}
              </h4>
              <p className="text-slate-500 text-sm mt-2 font-medium">
                {language === "id" ? "Bagaimana kami membedakan diri dari agensi lain." : "How we differentiate from other agencies."}
              </p>
            </div>

            <div className="w-full shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-2xl overflow-hidden border border-slate-100">
              
              {/* Headers */}
              <div className="grid grid-cols-12 items-stretch pb-0 mb-0">
                <div className="col-span-7 bg-[#EAF2FC]/40 border-l border-t border-r border-blue-100/40 pt-5 pb-3 rounded-tl-2xl flex justify-center items-center">
                  <div className="relative w-28 md:w-36 h-10 flex items-center justify-center">
                    <Image 
                      src="/zellio3.png" 
                      alt="Zellio" 
                      width={200}
                      height={64}
                      className="h-10 md:h-11 w-auto object-contain scale-[3.2] md:scale-[3.5] origin-center"
                      style={{ width: 'auto' }}
                    />
                  </div>
                </div>
                <div className="col-span-5 text-center font-mono text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center pb-3 border-t border-r border-slate-200/60 rounded-tr-2xl bg-white">
                  {language === "id" ? "LAYANAN LAIN" : "OTHER SERVICES"}
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col">
                {comparisonFeatures.map((feat, idx) => {
                  const isLast = idx === comparisonFeatures.length - 1;
                  return (
                    <div key={idx} className="grid grid-cols-12 items-stretch border-b border-slate-100/85">
                      
                      {/* ZELLIO column (Subtle blue background with Title, Desc, and Check Icon) */}
                      <div className={`col-span-7 flex items-start gap-2.5 px-4 py-4 bg-[#EAF2FC]/40 border-x border-blue-100/40 ${
                        isLast ? "rounded-bl-2xl" : ""
                      }`}>
                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-emerald-400/20">
                          <Check size={11} strokeWidth={4} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-slate-800 text-xs md:text-[14px] leading-snug">
                            {language === "id" ? feat.idTitle : feat.enTitle}
                          </h5>
                          <p className="text-slate-500 text-[10px] md:text-[12px] mt-1 leading-relaxed font-medium">
                            {language === "id" ? feat.idDesc : feat.enDesc}
                          </p>
                        </div>
                      </div>

                      {/* Other column (Red cross and descriptive text) */}
                      <div className={`col-span-5 flex items-start gap-2.5 px-4 py-4 bg-white border-r border-slate-200/60 ${
                        isLast ? "rounded-br-2xl border-b border-slate-200/60" : ""
                      }`}>
                        <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-rose-400/20">
                          <X size={11} strokeWidth={4} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-slate-500 text-[11px] md:text-[13px] font-medium leading-relaxed mt-0.5">
                            {language === "id" ? feat.idOther : feat.enOther}
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/**
 * Counts up to the numeric part of a stat ("150+" -> 150, keeping "+").
 * The value itself is animated, so this drives state via animate()'s onUpdate
 * rather than using a declarative whileInView transition.
 */
function StatCounter({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[\d\s]/g, "");

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.4,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, target, delay, reduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-slate-200 pt-4"
    >
      {/* tabular-nums keeps the digits from jittering while counting */}
      <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight tabular-nums leading-none">
        {display}
        <span className="text-blue-600">{suffix}</span>
      </div>
      <div className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase text-slate-400 mt-2.5 leading-tight">
        {label}
      </div>
    </motion.div>
  );
}

export default function About() {
  const { language } = useLanguage();
  const text = localText[language];

  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <>
      <section id="about" className="relative pt-24 pb-16 lg:pt-24 lg:pb-32 bg-[#FAFAFA] overflow-hidden">

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

                {/* Subtle grade so the video sits calmly next to the copy */}
                <div className="absolute inset-0 bg-slate-950/10 z-10 pointer-events-none" />

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

              {/* Proof points — moved off the video so the numbers are readable
                  and can animate on their own baseline grid. */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-7 mb-12 max-w-md">
                {text.stats.map((stat, i) => (
                  <StatCounter
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    delay={i * 0.12}
                  />
                ))}
              </div>

              {/* Primary Minimal CTA */}
              <div>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider py-1 border-b-2 border-slate-900 transition-colors"
                >
                  <span>{text.cta}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Full-bleed Light Section for Process & Quality Comparison */}
      <section className="w-full bg-[#F8FAFC] py-16 lg:py-20 border-t border-b border-slate-200/60 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <EngineeringWorkflowSectionContent language={language} />
        </div>
      </section>
    </>
  );
}
