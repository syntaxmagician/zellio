"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import TrustedBy from "./TrustedBy";
import { useLanguage } from "@/context/LanguageContext";

// Abstract Kinetic Geometry Component
function KineticShape({ type, delay, position }: { type: "torus" | "pyramid" | "sphere", delay: number, position: string }) {
  const y = useMotionValue(0);
  
  // Create beautiful abstract shapes
  const renderShape = () => {
    if (type === "torus") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-blue-500/60">
          <motion.circle cx="50" cy="50" r="40" fill="none" strokeWidth="1.5"
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
          <motion.circle cx="50" cy="50" r="20" fill="none" strokeWidth="1"
            animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      );
    }
    if (type === "pyramid") {
      return (
        <svg viewBox="0 0 100 100" className="w-28 h-28 stroke-indigo-500/60">
          <motion.polygon points="50,10 90,90 10,90" fill="none" strokeWidth="1.5"
            animate={{ rotateY: [0, 360], rotateZ: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
      );
    }
    if (type === "sphere") {
      return (
        <svg viewBox="0 0 100 100" className="w-20 h-20 stroke-cyan-500/60">
          <motion.circle cx="50" cy="50" r="45" fill="none" strokeWidth="1" />
          <motion.ellipse cx="50" cy="50" rx="45" ry="15" fill="none" strokeWidth="1.5"
            animate={{ rotateX: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
            style={{ transformOrigin: "center" }} />
          <motion.ellipse cx="50" cy="50" rx="15" ry="45" fill="none" strokeWidth="1.5"
            animate={{ rotateY: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
            style={{ transformOrigin: "center" }} />
        </svg>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, type: "spring" }}
      style={{ y }}
      className={`absolute z-10 hidden lg:block ${position}`}
    >
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {renderShape()}
      </motion.div>
    </motion.div>
  );
}


export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Staggered Title Animation
  const titleWords = t("hero.titlePre").split(" ");

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden pt-40 lg:pt-48 pb-20 bg-[#F8FAFC]">
      
      {/* Background Mesh Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-blue-300/30 via-indigo-300/20 to-teal-200/30 blur-[120px] pointer-events-none" />

      {/* Elegant Dot Grid */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.25] pointer-events-none" 
        style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)" }}
      />

      {/* Abstract Kinetic Geometry */}
      <KineticShape type="torus" delay={0.2} position="top-[15%] left-[10%]" />
      <KineticShape type="pyramid" delay={0.4} position="top-[30%] right-[10%]" />
      <KineticShape type="sphere" delay={0.6} position="bottom-[40%] left-[5%]" />

      <div className="section-container relative z-10 w-full flex flex-col items-center text-center">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Glowing Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/80 shadow-[0_8px_20px_rgba(37,99,235,0.08)] mb-8 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] transition-all cursor-default"
          >
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[11px] font-black text-slate-800 tracking-[0.2em] uppercase">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Staggered Cinematic Typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black leading-[1.05] text-slate-900 mb-6 tracking-tight flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.1, type: "spring", damping: 15 }}
                  className="inline-block origin-bottom"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            {/* Premium Solid Text */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-2 block text-blue-600 dark:text-blue-500 font-black"
            >
              {t("hero.titleAcc")}
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-500/90 leading-relaxed max-w-3xl mb-12 font-medium"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA with Shimmer */}
            <a
              href="#services"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden transition-transform duration-300 active:scale-95 shadow-[0_10px_40px_rgba(15,23,42,0.3)]"
            >
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-1/2 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.3),transparent)] skew-x-[-20deg]" 
              />
              <span className="relative z-10 flex items-center gap-2">
                {t("hero.explore")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            {/* Secondary CTA */}
            <a
              href="#contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/50 backdrop-blur-sm text-slate-700 font-bold rounded-2xl border border-slate-200 hover:border-[#9FA1FF] hover:bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] transition-all duration-300 active:scale-95"
            >
              {t("hero.contact")}
            </a>
          </motion.div>
        </div>

        {/* 3D Perspective Scroll Reveal Mockup */}
        <div className="w-full max-w-6xl mx-auto mt-24 sm:mt-32 relative [perspective:2000px]">
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="relative z-10 w-full rounded-[32px] md:rounded-[40px] border border-white/60 bg-white/95 shadow-[0_50px_100px_rgba(37,99,235,0.15)] p-2 sm:p-4 overflow-hidden"
          >
            {/* MacOS Window Controls */}
            <div className="absolute top-6 left-6 flex gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            {/* Dashboard Inner App */}
            <div className="w-full aspect-[16/10] md:aspect-[21/9] bg-[#0A0F1C] rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-800/80 shadow-inner flex">
              
              {/* Glass Sidebar */}
              <div className="hidden sm:flex w-64 bg-[#0F172A] border-r border-slate-800/50 flex-col p-6 pt-16 gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-12 rounded-xl flex items-center px-4 gap-4 ${i === 1 ? 'bg-blue-600/20 text-blue-400 border border-blue-500/20' : 'text-slate-500 hover:bg-white/5 transition-colors'}`}>
                    <div className={`w-5 h-5 rounded-md ${i === 1 ? 'bg-blue-500' : 'bg-slate-700'}`} />
                    <div className={`h-2.5 rounded-full w-24 ${i === 1 ? 'bg-blue-400' : 'bg-slate-700'}`} />
                  </div>
                ))}
              </div>

              {/* Main Content Dashboard */}
              <div className="flex-1 p-6 sm:p-8 pt-16 flex flex-col gap-6 relative">
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { title: "Total Users", val: "142,300", accent: "from-blue-500 to-cyan-400" },
                    { title: "Revenue", val: "$4.2M", accent: "from-emerald-500 to-teal-400" },
                    { title: "Server Load", val: "23%", accent: "from-amber-500 to-orange-400" },
                    { title: "Uptime", val: "99.99%", accent: "from-violet-500 to-purple-400" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/50 relative overflow-hidden group">
                      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${stat.accent} rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                      <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">{stat.title}</div>
                      <div className="text-2xl sm:text-3xl font-black text-white">{stat.val}</div>
                    </div>
                  ))}
                </div>

                {/* Big Chart Area */}
                <div className="flex-1 bg-slate-800/80 rounded-3xl border border-slate-700/50 relative overflow-hidden flex flex-col justify-end p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
                  
                  {/* Floating Notification */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute top-6 right-6 bg-slate-900/95 border border-slate-700 p-4 rounded-xl hidden md:flex items-center gap-4 shadow-2xl"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">System Deployed</div>
                      <div className="text-slate-400 text-xs">All services running optimally</div>
                    </div>
                  </motion.div>

                  {/* Graph Bars (Infinite Harmonic Wave Visualizer - GPU Accelerated) */}
                  <div className="h-32 sm:h-48 w-full flex items-end justify-between gap-1 sm:gap-2 px-2 relative z-10">
                    {Array.from({ length: 30 }).map((_, i) => {
                      // Deterministic pseudo-random heights to prevent SSR hydration mismatch
                      const heightPercent = 20 + ((i * 17) % 75);
                      return (
                        <motion.div
                          key={i}
                          initial={{ scaleY: 0.3 }}
                          animate={{ scaleY: [0.3, 1.1, 0.3] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            ease: "easeInOut",
                            delay: i * 0.07
                          }}
                          style={{ height: `${heightPercent}%`, transformOrigin: "bottom" }}
                          className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80 will-change-transform"
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Dashboard Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none -z-10" />
        </div>

        {/* Trusted By Section */}
        <div className="w-full mt-28 mb-8 relative z-10">
          <TrustedBy />
        </div>
      </div>
    </section>
  );
}
