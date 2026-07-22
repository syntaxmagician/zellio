"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Target,
  Globe,
  Award,
  Users,
  TrendingUp,
  Sparkles,
  Eye,
} from "lucide-react";
import { missionItems } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Target,
  Globe,
  Award,
  Users,
  TrendingUp,
};

const combinedItems = [
  {
    type: "vision" as const,
    icon: "Eye",
    title: "Our Vision",
    subtitle: "To be the Top Software Development Agency in Southeast Asia",
    description:
      "We envision a digital landscape where businesses of all sizes can leverage robust, scalable, and premium IT solutions to accelerate their growth and dominate their respective markets.",
    tags: ["Scalable Tech", "World-Class Quality", "Enterprise Solutions"],
  },
  ...missionItems.map((item) => ({
    type: "mission" as const,
    icon: item.icon,
    title: item.title,
    subtitle: "",
    description: item.description,
    tags: [] as string[],
  })),
];

export default function VisionMission() {
  return (
    <section id="vision-mission" className="bg-[#F8FAFC]">
      {/* ══════════════════════════════════════
          VISION & MISSION — Unified Scroll Story
      ══════════════════════════════════════ */}
      <VisionMissionScroll />
    </section>
  );
}

function VisionMissionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 6 items total (1 Vision + 5 Missions)
    const index = Math.min(Math.floor(latest * 6), 5);
    setActiveIndex(index);
  });

  return (
    <div ref={containerRef} className="relative mt-8 h-[800vh] w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#F8FAFC]">
        {/* Dynamic Glowing Background Orbs */}
        <div className={`absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] transition-all duration-1000 pointer-events-none ${
          combinedItems[activeIndex].type === "vision" ? "bg-[#9FA1FF]/20" : "bg-[#2563EB]/10"
        }`} />
        <div className={`absolute -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] transition-all duration-1000 pointer-events-none ${
          combinedItems[activeIndex].type === "vision" ? "bg-[#2563EB]/10" : "bg-[#2563EB]/15"
        }`} />
        
        {/* Abstract Dotted Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />

        {/* Dynamic Watermark Text */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center transition-all duration-700">
          <span className={`text-[18vw] font-black uppercase select-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b transition-colors duration-1000 ${
            combinedItems[activeIndex].type === "vision" 
              ? "from-[#9FA1FF]/30 to-[#F8FAFC]" 
              : "from-slate-300/60 to-[#F8FAFC]"
          }`}>
            {combinedItems[activeIndex].type === "vision" ? "Vision" : "Mission"}
          </span>
        </div>

        {/* Dynamic Section Header Indicator */}
        <div className="mb-6 text-center z-10 relative">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
            combinedItems[activeIndex].type === "vision"
              ? "bg-violet-50 text-[#9FA1FF] border-violet-100"
              : "bg-teal-50 text-[#2563EB] border-teal-100"
          }`}>
            {combinedItems[activeIndex].type === "vision" ? "Our Vision" : `Our Mission — 0${activeIndex}`}
          </span>
        </div>

        {/* Centered Content Display */}
        <div className="relative w-full max-w-4xl h-[420px] flex items-center justify-center z-10 px-4">
          <AnimatePresence mode="wait">
            {combinedItems.map((item, index) => {
              if (index !== activeIndex) return null;
              const Icon = iconMap[item.icon];
              
              if (item.type === "vision") {
                return (
                  <motion.div
                    key="vision-slide"
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -60, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 sm:p-12"
                  >
                    {/* Glowing circular icon wrapper for Vision */}
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#9FA1FF] to-[#2563EB] flex items-center justify-center shadow-2xl shadow-violet-500/30 mb-8 text-white shrink-0">
                      {Icon && <Icon size={36} />}
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] mb-6 max-w-3xl leading-tight">
                      {item.subtitle}
                    </h3>
                    
                    <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                      {item.description}
                    </p>

                    {/* Highlight Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-violet-50/80 text-[#9FA1FF] text-xs font-semibold border border-violet-100/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              // Mission items
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -60, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 sm:p-12"
                >
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#2563EB] to-[#2563EB] flex items-center justify-center shadow-2xl shadow-teal-500/25 mb-8 text-white shrink-0">
                    {Icon && <Icon size={36} />}
                  </div>
                  <h4 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6">
                    {item.title}
                  </h4>
                  <p className="text-[#64748B] text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Progress Dots Indicator */}
        <div className="flex gap-3 mt-10 z-10 relative">
          {combinedItems.map((item, index) => (
            <div
              key={index}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? item.type === "vision"
                    ? "w-10 bg-[#9FA1FF]"
                    : "w-10 bg-[#D9F9DF]"
                  : "w-2.5 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
