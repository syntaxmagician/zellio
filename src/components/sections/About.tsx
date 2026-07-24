import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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



function EngineeringWorkflowSection({ language }: { language: "en" | "id" }) {
  const text = localText[language];

  return (
    <div className="w-full mt-24 lg:mt-32 bg-white py-16 lg:py-24 relative overflow-hidden rounded-[24px] md:rounded-[40px] border border-slate-200/80 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.06)]">
      
      {/* Decorative Studio Light Glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Row (Linear Style) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-4 block">
              {text.workflowLabel}
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-[3rem] font-bold text-slate-900 tracking-tight leading-[1.1]">
              {text.workflowTitle}
            </h3>
          </div>
          <div className="max-w-lg lg:pb-2 text-left lg:text-right">
            <p className="text-[15px] md:text-base text-slate-500 leading-relaxed font-medium">
              {text.workflowDesc}
            </p>
          </div>
        </div>

        {/* Full-width Flat Dashboard Showcase */}
        <div className="w-full">
          <LinearProcessShowcase />
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
                href="/contact"
                className="group inline-flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider py-1 border-b-2 border-slate-900 transition-colors"
              >
                <span>{text.cta}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>

          </div>

        </div>

        {/* Replaced old CoreExpertiseSection with new EngineeringWorkflowSection */}
        <EngineeringWorkflowSection language={language} />

      </div>
    </section>
  );
}
