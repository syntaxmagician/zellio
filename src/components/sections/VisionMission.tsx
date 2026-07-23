"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    sectionLabel: "Our Direction",
    categoryVision: "Our Vision",
    categoryMission: "Our Mission",
    items: [
      {
        type: "vision",
        title: "To be the Top Digital Solutions Agency in Southeast Asia",
        description: "We envision a digital landscape where businesses of all sizes can leverage robust, scalable, and premium IT solutions to accelerate their growth and dominate their respective markets.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Client-Centric Solutions",
        description: "We design and build every system tailored specifically to your business flow and strategic requirements.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Global Coding Standards",
        description: "Our team adheres to strict international coding standards, ensuring highly clean, maintainable, and scalable codebases.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "High-Performance Systems",
        description: "We don't settle for slow. We build custom websites, dashboards, and enterprise platforms optimized for speed and high traffic.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Expert Tech Engineers",
        description: "Our squad consists of top-tier full-stack developers, UI/UX designers, and cloud architects working dedicatedly for your project.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Continuous Tech Innovation",
        description: "We constantly adopt the latest tech stacks and security patches to keep your digital infrastructure ahead of competitors.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
    ]
  },
  id: {
    sectionLabel: "Arah Perusahaan",
    categoryVision: "Visi Kami",
    categoryMission: "Misi Kami",
    items: [
      {
        type: "vision",
        title: "Menjadi Agensi Solusi Digital Terbaik di Asia Tenggara",
        description: "Kami membayangkan sebuah lanskap digital di mana bisnis dari berbagai skala dapat memanfaatkan solusi IT premium, terukur, dan tangguh untuk mempercepat pertumbuhan serta mendominasi pasar masing-masing.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Solusi Berpusat pada Klien",
        description: "Kami merancang dan membangun setiap sistem yang disesuaikan secara khusus dengan alur bisnis dan kebutuhan strategis Anda.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Standar Koding Global",
        description: "Tim kami mematuhi standar koding internasional yang ketat, memastikan basis kode yang sangat bersih, mudah dipelihara, dan dapat diskalakan.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Sistem Berkinerja Tinggi",
        description: "Kami tidak akan merasa puas dengan kinerja lambat. Kami membangun situs web kustom, dasbor, dan platform perusahaan yang dioptimalkan untuk kecepatan dan lalu lintas data yang padat.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Insinyur Teknologi Ahli",
        description: "Tim kami terdiri dari pengembang full-stack, desainer UI/UX, dan arsitek cloud tingkat atas yang bekerja dengan penuh dedikasi untuk kesuksesan proyek Anda.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        type: "mission",
        title: "Inovasi Teknologi Berkelanjutan",
        description: "Kami secara konstan mengadopsi tumpukan teknologi dan patch keamanan terbaru untuk menjaga infrastruktur digital Anda tetap selangkah di depan para pesaing.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      },
    ]
  }
};

export default function VisionMission() {
  const { language } = useLanguage();
  const text = localText[language];
  const items = text.items;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Hook into scroll progress over the 250vh height track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 5 items total -> map 0-1 to index 0-4
    const itemIndex = Math.floor(latest * items.length);
    const safeIndex = Math.min(Math.max(itemIndex, 0), items.length - 1);
    setActiveIndex(safeIndex);
  });

  const activeItem = items[activeIndex];

  const getCategoryTitle = (type: string) => {
    if (type === "mission") return text.categoryMission;
    return text.categoryVision;
  };

  return (
    <div ref={containerRef} className="relative mt-8 h-[600vh] w-full">
      {/* Sticky Checkpoint for the Storytelling Frame */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-[#FAFAFA] text-slate-900 border-y border-slate-200/50">
        
        {/* Cinematic Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 w-full max-w-[1400px] mx-auto px-6 h-full items-center py-12 md:py-20 lg:py-0">
          
          {/* LEFT SIDE: Editorial Content (45%) */}
          {/* Order 2 on mobile (below image), Order 1 on desktop (left of image) */}
          <div className="col-span-1 lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center h-full max-w-lg lg:py-24">
            
            {/* Minimal Section Label */}
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-6 lg:mb-8 block">
              {text.sectionLabel}
            </span>

            {/* Dynamic Category Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 tracking-tight leading-none mb-8 lg:mb-12 transition-colors">
              {getCategoryTitle(activeItem.type)}
            </h2>

            {/* Active Story Block */}
            {/* Absolute positioning wrapper to ensure smooth crossfade without layout jumps */}
            <div className="relative min-h-[160px] md:min-h-[180px] lg:min-h-[200px] flex items-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0"
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">
                    {activeItem.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-base lg:text-lg leading-relaxed md:pr-4">
                    {activeItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicator (01 / 05) - Only visible after Intro/Vision slide */}
            <div className="mt-8 lg:mt-12 flex items-center gap-6 h-10">
              <AnimatePresence mode="wait">
                {activeIndex > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-5 w-full"
                  >
                    <span className="text-sm font-mono font-bold text-slate-900">
                      {String(activeIndex).padStart(2, "0")} / 05
                    </span>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((step) => (
                        <div
                          key={step}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            activeIndex === step ? "w-8 bg-blue-600" : "w-2 bg-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT SIDE: Immersive Photography (55%) */}
          {/* Order 1 on mobile (above content), Order 2 on desktop (right of content) */}
          <div className="col-span-1 lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center h-full w-full">
            <div className="w-full h-[40vh] sm:h-[45vh] lg:h-[75vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100 shrink-0">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.02, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Subtle inner shadow overlay to give the photo physical depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
