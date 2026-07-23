"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const expertiseData = {
  en: [
    { 
      title: "Client Success", 
      desc: "We build IT systems that directly drive business growth and productivity.", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    },
    { 
      title: "User-Centric", 
      desc: "We prioritize intuitive, fast, and accessible user interfaces in every project.", 
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80"
    },
    { 
      title: "Modern Tech", 
      desc: "We leverage cutting-edge tech stacks for performance and scalability.", 
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
    },
    { 
      title: "Elite Quality", 
      desc: "We adhere to strict coding standards to deliver clean and secure codebases.", 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  id: [
    { 
      title: "Client Success", 
      desc: "Kami membangun sistem IT yang secara langsung mendorong pertumbuhan dan produktivitas bisnis.", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
    },
    { 
      title: "User-Centric", 
      desc: "Kami memprioritaskan antarmuka pengguna yang intuitif, cepat, dan mudah diakses di setiap proyek.", 
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80" 
    },
    { 
      title: "Modern Tech", 
      desc: "Kami memanfaatkan teknologi mutakhir untuk kinerja tinggi dan skalabilitas sistem.", 
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80" 
    },
    { 
      title: "Elite Quality", 
      desc: "Kami mematuhi standar pemrograman yang ketat demi menghasilkan basis kode yang bersih dan aman.", 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" 
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
    expertiseTitle: "Technology crafted for real business impact.",
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
    expertiseTitle: "Teknologi yang dirancang untuk dampak bisnis nyata.",
    expertiseDesc: "Kami memadukan rekayasa teknologi, desain, dan pemikiran produk untuk membangun sistem perangkat lunak yang tumbuh bersama bisnis Anda."
  }
};

// Authentic documentary-style imagery showing engineering and collaboration
const carouselImages = [
  "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
];

function CoreExpertiseSection({ language }: { language: "en" | "id" }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const data = expertiseData[language];
  const text = localText[language];
  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <div className="w-full bg-[#FFFFFF] py-24 lg:py-36 relative overflow-hidden border-t border-slate-100">
      
      {/* Centered Premium Editorial Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16 lg:mb-24">
        <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-6 block">
          {text.expertiseLabel}
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.05] mb-6">
          {text.expertiseTitle}
        </h3>
        <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
          {text.expertiseDesc}
        </p>
      </div>

      {/* Split Interactive Layout */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* RIGHT (45%): Interactive Vertical List */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center border-t border-slate-100 order-2 lg:order-2">
          {data.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIdx(idx)}
                className="relative py-6 md:py-8 border-b border-slate-100 cursor-pointer group flex items-center justify-between transition-colors duration-300"
              >
                
                {/* Thin animated left indicator */}
                {isActive && (
                  <motion.div
                    layoutId="expertiseActiveBorder"
                    className="absolute left-[-20px] top-1/4 bottom-1/4 w-[3px] rounded-full bg-blue-600 hidden lg:block"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center gap-6">
                  {/* Subtle numbering */}
                  <span
                    className={`text-sm font-mono font-bold transition-colors duration-300 ${
                      isActive ? "text-blue-600" : "text-slate-300"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  
                  {/* Title & Description stack inside left list */}
                  <div className="flex flex-col gap-1">
                    <h4
                      className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${
                        isActive ? "text-slate-950 font-bold" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {item.title}
                    </h4>
                    
                    {/* Responsive support description inside item */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed max-w-sm mt-1"
                        >
                          {item.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Animated Arrow */}
                <ArrowRight
                  size={18}
                  className={`transition-all duration-300 ${
                    isActive ? "text-blue-600 translate-x-1.5 rotate-45" : "text-slate-200 group-hover:text-slate-400"
                  }`}
                />

              </div>
            );
          })}
        </div>

        {/* LEFT (55%): Cinematic Media Container */}
        <div className="col-span-1 lg:col-span-7 order-1 lg:order-1">
          <div className="w-full aspect-[16/10] bg-slate-100 rounded-[28px] md:rounded-[36px] overflow-hidden relative border border-slate-200/50 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: premiumEase }}
                src={data[activeIdx].image}
                alt={data[activeIdx].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-slate-950/5 pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default function About() {
  const { language } = useLanguage();
  const text = localText[language];
  const [imgIdx, setImgIdx] = useState(0);

  // Crossfade images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
              {/* Autoplay Crossfading Carousel */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imgIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={carouselImages[imgIdx]}
                    alt="Authentic Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

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
