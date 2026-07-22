"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import TrustedBy from "./TrustedBy";

const floatingCards = [
  { label: "150+ Projects Delivered", delay: 0, accent: "#2563EB" },
  { label: "Elite Tech Team", delay: 1, accent: "#9FA1FF" },
  { label: "Scalable Architecture", delay: 2, accent: "#2563EB" },
  { label: "99.9% System Uptime", delay: 0.5, accent: "#9FA1FF" },
];

const techIcons = [
  {
    name: "React.js",
    color: "#61DAFB",
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
    position: "top-[20%] left-[2%] xl:left-[8%]",
    delay: 0.2,
  },
  {
    name: "Next.js",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 180 180" className="w-16 h-16">
        <circle cx="90" cy="90" r="90" fill="currentColor"/>
        <path fill="#fff" d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.361a90.304 90.304 0 0 0 9.509-7.225Z"/>
        <path fill="#fff" d="M115 54h12v72h-12z"/>
      </svg>
    ),
    position: "top-[25%] right-[2%] xl:right-[8%]",
    delay: 0.4,
  },
  {
    name: "Node.js",
    color: "#339933",
    svg: (
      <svg viewBox="0 0 128 128" className="w-16 h-16" fill="currentColor">
        <path d="M64 5.952L4.015 39.816v68.329l59.985 33.903 59.985-33.903V39.816L64 5.952zm42.668 93.181L64 122.991l-42.668-23.858V51.74l42.668-23.858L106.668 51.74v47.393z"/>
      </svg>
    ),
    position: "top-[42%] left-[6%] xl:left-[12%]",
    delay: 0.6,
  },
  {
    name: "Golang",
    color: "#00ADD8",
    svg: (
      <svg viewBox="0 0 128 128" className="w-20 h-20" fill="currentColor">
        <path d="M37.3 84.7c-8.9 0-14.7-6.2-14.7-14.8 0-8.6 6-14.9 14.9-14.9 5.8 0 9.9 2.7 12 7l-5.3 3c-1.6-2.5-4-3.9-6.9-3.9-5 0-8.5 4.1-8.5 8.7 0 4.5 3.5 8.8 8.4 8.8 3.5 0 6.6-1.8 7.8-5h-8v-5.6h14v13.5c-2.4 2-6.5 3.2-13.7 3.2zm23.6-.3c-8.8 0-14.8-6.3-14.8-15s6-15 14.8-15 14.7 6.3 14.7 15-5.9 15-14.7 15zm0-6.1c5 0 8.5-4.1 8.5-8.9s-3.5-8.9-8.5-8.9-8.6 4.1-8.6 8.9 3.6 8.9 8.6 8.9zm16.9-14v-8.2h6v28.2h-6V84.4h-.1c-1.5 2.1-4.7 3.4-8 3.4-6.4 0-11-5-11-11.8s4.6-11.8 11-11.8c3.2 0 6.4 1.3 7.9 3.5h.2zM80.2 70c-3.6 0-6.1 2.9-6.1 6 0 3.1 2.5 6 6.1 6s6.1-2.9 6.1-6c0-3.1-2.5-6-6.1-6z"/>
      </svg>
    ),
    position: "top-[55%] right-[3%] xl:right-[12%]",
    delay: 0.8,
  },
  {
    name: "MySQL",
    color: "#00618A",
    svg: (
      <svg viewBox="0 0 128 128" className="w-16 h-16" fill="currentColor">
         <path d="M64 24c-26.5 0-48 7.2-48 16s21.5 16 48 16 48-7.2 48-16-21.5-16-48-16zm0 24c-22.1 0-40.8-5.3-46.6-12.4-.9 1.4-1.4 2.9-1.4 4.4 0 8.8 21.5 16 48 16s48-7.2 48-16c0-1.5-.5-3-1.4-4.4C104.8 42.7 86.1 48 64 48zm0 24c-22.1 0-40.8-5.3-46.6-12.4-.9 1.4-1.4 2.9-1.4 4.4 0 8.8 21.5 16 48 16s48-7.2 48-16c0-1.5-.5-3-1.4-4.4C104.8 66.7 86.1 72 64 72zm0 24c-22.1 0-40.8-5.3-46.6-12.4-.9 1.4-1.4 2.9-1.4 4.4 0 8.8 21.5 16 48 16s48-7.2 48-16c0-1.5-.5-3-1.4-4.4C104.8 90.7 86.1 96 64 96z"/>
      </svg>
    ),
    position: "top-[15%] right-[24%] xl:right-[20%]",
    delay: 1.0,
  }
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[110vh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-20 bg-[#F8FAFC]">
      {/* Background Mesh Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-blue-300/30 via-indigo-300/20 to-teal-200/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-cyan-300/20 to-blue-400/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tl from-violet-300/20 to-indigo-400/20 blur-[100px] pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      {/* Floating Tech Stack Icons */}
      {techIcons.map((icon) => (
        <motion.div
          key={icon.name}
          title={icon.name}
          initial={{ opacity: 0, scale: 0.3, y: 50 }}
          animate={{ opacity: 0.75, scale: 1, y: 0 }}
          whileHover={{ opacity: 1, scale: 1.15, filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
          transition={{ 
            delay: icon.delay, 
            type: "spring", 
            stiffness: 70, 
            damping: 12 
          }}
          style={{ color: icon.color }}
          className={`absolute z-10 hidden md:block cursor-pointer drop-shadow-2xl ${icon.position}`}
        >
          {icon.svg}
        </motion.div>
      ))}

      <div className="section-container relative z-10 w-full flex flex-col items-center text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Glowing Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_12px_rgba(0,0,0,0.05)] mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]"></span>
            </span>
            <span className="text-xs font-bold text-slate-700 tracking-widest uppercase">
              Available for New Projects
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.1] text-slate-900 mb-8 tracking-tight">
            Transforming Ideas Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#9FA1FF] to-[#06B6D4]">
              Premium Software
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mb-12 font-medium">
            Digifore is a top-tier software house delivering custom websites, 
            high-performance dashboards, and robust IT systems for enterprises and startups.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* Primary CTA */}
            <a
              href="#services"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl overflow-hidden transition-transform duration-300 active:scale-95 shadow-xl shadow-slate-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#9FA1FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            {/* Secondary CTA */}
            <a
              href="#contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-700 font-bold rounded-2xl border border-slate-200 hover:border-[#9FA1FF] hover:bg-white shadow-sm hover:shadow-xl hover:shadow-[#9FA1FF]/10 transition-all duration-300 active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* Hero Interactive Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl mx-auto mt-20"
        >
          {/* Main Dashboard Window */}
          <div className="relative z-10 w-full aspect-[16/10] md:aspect-[21/9] bg-white/40 backdrop-blur-2xl rounded-[32px] md:rounded-[40px] border border-white/80 shadow-[0_30px_60px_rgba(37,99,235,0.1)] p-2 sm:p-4 overflow-hidden flex flex-col">
            {/* Window Header */}
            <div className="flex items-center gap-2 mb-4 px-4 pt-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
            </div>
            
            {/* Inner Dashboard Layout */}
            <div className="flex-1 bg-[#0F172A] rounded-2xl md:rounded-[28px] overflow-hidden flex shadow-inner border border-slate-800 relative z-10">
              {/* Sidebar */}
              <div className="hidden sm:flex w-48 lg:w-64 bg-slate-900 border-r border-slate-800 flex-col p-4 relative z-10">
                <div className="w-24 h-6 rounded bg-slate-800 mb-8" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-10 rounded-xl flex items-center px-3 gap-3 ${i === 1 ? 'bg-blue-600/20 text-blue-400' : 'text-slate-500'}`}>
                      <div className={`w-5 h-5 rounded ${i === 1 ? 'bg-blue-500' : 'bg-slate-700'}`} />
                      <div className={`h-2.5 rounded w-16 ${i === 1 ? 'bg-blue-400' : 'bg-slate-700'}`} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 p-4 sm:p-6 lg:p-8 flex flex-col gap-6 overflow-hidden relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="w-32 h-5 rounded bg-slate-800 mb-2" />
                    <div className="w-48 h-3 rounded bg-slate-800/50" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500" />
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Total Revenue", val: "$124,500", color: "from-emerald-400 to-emerald-600" },
                    { label: "Active Users", val: "84.2K", color: "from-blue-400 to-blue-600" },
                    { label: "System Load", val: "12%", color: "from-violet-400 to-violet-600" },
                    { label: "Uptime", val: "99.9%", color: "from-cyan-400 to-cyan-600" },
                  ].map((m, i) => (
                    <div key={i} className="bg-slate-900 rounded-2xl p-4 border border-slate-800/50 relative overflow-hidden group hover:border-slate-700 transition-colors">
                      <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${m.color} rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                      <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2">{m.label}</div>
                      <div className="text-xl sm:text-2xl font-black text-white">{m.val}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="flex-1 bg-slate-900 rounded-2xl border border-slate-800/50 p-4 relative overflow-hidden flex flex-col justify-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
                  {/* Fake Chart Lines */}
                  <div className="h-32 flex items-end justify-between gap-1 sm:gap-2 opacity-60 px-2 pb-2">
                    {Array.from({length: 24}).map((_, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: "10%" }}
                        animate={{ height: `${20 + Math.random() * 80}%` }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm" 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements / Badges */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute z-20 ${
                i === 0
                  ? "top-[20%] -left-2 sm:-left-8 lg:-left-16"
                  : i === 1
                  ? "top-[10%] -right-2 sm:-right-8 lg:-right-12"
                  : i === 2
                  ? "bottom-[30%] -left-2 sm:-left-6 lg:-left-12"
                  : "bottom-[15%] -right-2 sm:-right-6 lg:-right-12"
              }`}
              style={{
                animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${card.delay}s`,
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl shadow-blue-900/10 border border-white">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 border border-slate-100" style={{ color: card.accent }}>
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">
                  {card.label}
                </span>
              </div>
            </motion.div>
          ))}
          
          {/* Floating Code Snippet Card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ animation: 'float 5s ease-in-out infinite' }}
            className="hidden lg:block absolute bottom-1/4 -right-24 z-30 w-72 bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700 shadow-2xl p-5 font-mono text-[12px]"
          >
             <div className="flex items-center gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            </div>
            <div className="text-slate-300">
              <span className="text-pink-400">const</span> buildSystem = <span className="text-blue-400">async</span> () ={">"} {"{"}
            </div>
            <div className="text-slate-300 pl-4">
              <span className="text-blue-400">await</span> engine.optimize();
            </div>
            <div className="text-slate-300 pl-4 mt-1">
              <span className="text-emerald-400">return</span> {"{"}
            </div>
            <div className="text-slate-300 pl-8">
              status: <span className="text-amber-300">"Production Ready"</span>,
            </div>
            <div className="text-slate-300 pl-8">
              uptime: <span className="text-cyan-400">99.99</span>
            </div>
            <div className="text-slate-300 pl-4">{"}"};</div>
            <div className="text-slate-300">{"}"};</div>
          </motion.div>
        </motion.div>
        
        {/* Trusted By Section (Pushed down nicely) */}
        <div className="w-full mt-28 mb-8 relative z-10">
          <TrustedBy />
        </div>
      </div>
    </section>
  );
}
