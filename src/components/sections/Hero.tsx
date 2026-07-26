"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    slogan: ["BUILD", "DIGITAL", "SYSTEMS", "THAT LAST."],
    description: "Modern websites, custom applications, and enterprise software built with performance, scalability, and exceptional user experience in mind",
    primaryBtn: "Start Your Project",
    secondaryBtn: "Explore Our Work"
  },
  id: {
    slogan: ["BANGUN", "SISTEM", "DIGITAL", "YANG ABADI."],
    description: "Kami membangun website modern, aplikasi web & mobile custom, serta perangkat lunak enterprise yang membantu bisnis berkembang dengan lebih cepat dan terukur.",
    primaryBtn: "Mulai Proyek",
    secondaryBtn: "Lihat Portofolio"
  }
};

export default function Hero() {
  const { language } = useLanguage();
  const text = localText[language];
  const reduceMotion = useReducedMotion();

  // Scroll-linked parallax: copy drifts up and fades, video sinks slower than the page.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduceMotion ? 1 : 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 140]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.08]);

  // Premium easing curve (Framer / Apple style)
  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col bg-[#FFFFFF] overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(148, 163, 184, 0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.025) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px"
      }}
    >
      {/* 
        The Absolute Background Layer (Z-0)
        Vertical Hero Video (Right side only)
      */}
      <motion.div
        className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0"
        style={{
          y: videoY,
          scale: videoScale,
          maskImage: "linear-gradient(to right, transparent 0%, transparent 40%, black 55%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 40%, black 55%, black 100%)"
        }}
      >
        <video
          src="/vertikalHero.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            transform: "translate3d(0, 0, 0)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        />
      </motion.div>

      {/* 
        Full Viewport Immersive Container
        On desktop: Flex row / CSS Grid 12 cols
        On mobile: Flex col
      */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="flex-1 w-full flex flex-col justify-center pt-32 lg:pt-24 pb-12 lg:pb-0 px-6 relative z-10 pointer-events-none"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 w-full max-w-[1400px] mx-auto items-center pointer-events-auto">

          {/* LEFT SIDE: Editorial Typography (40%) - col-span-5 */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">

            {/* Towering Slogan */}
            <h1 className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.75rem] font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
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
                href="/contact"
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

          {/* RIGHT SIDE: Empty to let the background Flow Field shine through (60%) - col-span-7 */}
          <div className="col-span-1 lg:col-span-7 h-full w-full pointer-events-none" />

        </div>
      </motion.div>

    </section>
  );
}
