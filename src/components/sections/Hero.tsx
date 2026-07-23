"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TrustedBy from "./TrustedBy";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    slogan: ["BUILD", "DIGITAL", "PRODUCTS", "THAT", "LAST."],
    description: "We are a premium digital engineering agency. We design and architect world-class software solutions, transforming ambitious ideas into scalable, high-performance enterprise platforms.",
    primaryBtn: "Start Your Project",
    secondaryBtn: "View Our Work"
  },
  id: {
    slogan: ["BANGUN", "PRODUK", "DIGITAL", "YANG", "ABADI."],
    description: "Kami adalah agensi rekayasa digital premium. Kami merancang dan membangun solusi perangkat lunak kelas dunia, mengubah ide ambisius menjadi platform enterprise yang terukur dan berkinerja tinggi.",
    primaryBtn: "Mulai Proyek",
    secondaryBtn: "Lihat Portofolio"
  }
};

export default function Hero() {
  const { language } = useLanguage();
  const text = localText[language];

  // Premium easing curve (Framer / Apple style)
  const premiumEase = [0.22, 1, 0.36, 1];

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col bg-[#FAFAFA] overflow-hidden">
      
      {/* 
        Full Viewport Immersive Container
        On desktop: Flex row / CSS Grid 12 cols
        On mobile: Flex col
      */}
      <div className="flex-1 w-full flex flex-col justify-center pt-32 lg:pt-24 pb-12 lg:pb-0 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 w-full max-w-[1400px] mx-auto items-center">
          
          {/* LEFT SIDE: Editorial Typography (40%) - col-span-5 */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
            
            {/* Towering Slogan */}
            <h1 className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
              {text.slogan.map((word, idx) => (
                <div key={idx} className="overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.1 + (idx * 0.08), 
                      ease: premiumEase 
                    }}
                    className="block"
                  >
                    {word}
                  </motion.span>
                </div>
              ))}
            </h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: premiumEase }}
              className="text-slate-500 font-medium text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mb-10 pr-4"
            >
              {text.description}
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: premiumEase }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all duration-300"
              >
                <span>{text.primaryBtn}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#portfolio"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-2xl border border-slate-200 transition-all duration-300"
              >
                {text.secondaryBtn}
              </a>
            </motion.div>
            
          </div>

          {/* RIGHT SIDE: Cinematic Video Container (60%) - col-span-7 */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center h-full w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
              className="w-full aspect-square sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10] bg-slate-200 rounded-[32px] md:rounded-[40px] overflow-hidden border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative"
            >
              {/* Centerpiece Visual (Lumina MP4 cinematic looping video) */}
              <video 
                src="/lumina2.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-none" 
              />
              
              {/* Minimal inner shadow for premium depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.05)] pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Trusted By Section elegantly anchored at the bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full relative z-10 pb-8"
      >
        <TrustedBy />
      </motion.div>

    </section>
  );
}
