"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["INNOVATE", "DEVELOP", "TRANSFORM", "ZELLIO"];

export default function SplashLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 2800ms total timeout from page.tsx
    // We have 4 words. Each word gets ~600ms
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[99999] bg-[#0A0A0B] flex flex-col justify-between p-6 md:p-12 overflow-hidden pointer-events-auto"
    >
      {/* Top Left: Agency Tag */}
      <div className="flex items-center gap-3 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/40 uppercase font-bold">
          ZELLIO DIGITAL
        </span>
      </div>

      {/* Center: Typographic Word Animation */}
      <div className="flex-1 flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease: [0.215, 0.610, 0.355, 1] }}
            className={`text-4xl sm:text-6xl md:text-8xl font-light tracking-[0.25em] text-center uppercase ${
              index === words.length - 1 
                ? "font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-white" 
                : "text-white/90"
            }`}
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Bottom Row: Minimal Monospace Phase Counter */}
      <div className="flex justify-between items-end pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-white/30 uppercase font-semibold">
            SYSTEM INITIALIZATION
          </span>
          <span className="text-xs tracking-[0.1em] text-white/60">
            v2.0.4
          </span>
        </div>
        
        <div className="text-sm md:text-base font-mono text-white/50 tracking-widest flex items-center gap-2">
          <span className="text-white/80">0{index + 1}</span> 
          <span className="text-white/20">/</span> 
          <span>0{words.length}</span>
        </div>
      </div>
    </motion.div>
  );
}
