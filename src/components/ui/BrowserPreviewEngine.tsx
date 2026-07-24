"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Code2, ShieldAlert, Rocket, 
  Shield, Database, Cpu, CheckCircle2, Lock,
  Globe2, Fingerprint
} from "lucide-react";

interface EngineProps {
  activeIndex: number;
}

export default function BrowserPreviewEngine({ activeIndex }: EngineProps) {
  return (
    <div 
      className="w-full max-w-[550px] aspect-[16/11] relative select-none"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        animate={{ rotateX: 2, rotateY: -8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full bg-white/90 border border-slate-200/80 shadow-[0_30px_70px_rgba(0,0,0,0.04)] rounded-[20px] flex flex-col overflow-hidden relative backdrop-blur-xl"
      >
        {/* Browser Top Titlebar */}
        <div className="h-10 border-b border-slate-200/60 flex items-center px-4 gap-4 bg-slate-50/80 relative z-20">
          {/* macOS window bullets */}
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] block" />
          </div>
          
          {/* Dummy address bar */}
          <div className="flex-1 max-w-[200px] mx-auto h-6 bg-white rounded-md border border-slate-200/60 flex items-center justify-center px-3 shadow-sm relative">
            <Lock className="w-2.5 h-2.5 text-emerald-600 absolute left-2.5 opacity-80" />
            <span className="text-[9px] font-mono tracking-wider text-slate-500">
              zellio.io/engine
            </span>
          </div>
        </div>

        {/* Browser Body Split Layout */}
        <div className="flex-1 w-full flex overflow-hidden">
          {/* Sidebar Tabs */}
          <div className="w-16 border-r border-slate-200/60 flex flex-col items-center py-5 gap-6 bg-slate-50/40 relative z-20">
            {/* Z logo badge */}
            <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm mb-2">
              <span className="font-black text-[12px] text-blue-600">Z</span>
            </div>

            {/* Sidebar navigation */}
            {[Search, Code2, ShieldAlert, Rocket].map((Icon, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 relative ${
                    isActive 
                      ? "text-blue-600 bg-blue-50/80 border border-blue-200/60 shadow-sm" 
                      : "text-slate-400 hover:text-slate-600 border border-transparent"
                  }`}
                >
                  <Icon size={16} />
                  {isActive && (
                    <motion.div 
                      layoutId="sidebarIndicator"
                      className="absolute right-[-1px] top-1/4 bottom-1/4 w-[3px] bg-blue-600 rounded-l shadow-[0_0_8px_#2563eb]"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Canvas workspace hosting the active screen */}
          <div className="flex-1 relative bg-white overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full p-6 relative z-10"
              >
                {renderScreen(activeIndex)}
              </motion.div>
            </AnimatePresence>
            
            {/* Ambient Background Glow matching the active step */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
              <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] transition-colors duration-1000 ${
                  activeIndex === 0 ? "bg-blue-400/20" :
                  activeIndex === 1 ? "bg-emerald-400/20" :
                  activeIndex === 2 ? "bg-rose-400/20" :
                  "bg-cyan-400/20"
                }`}
              />
            </div>
            
            {/* Subtle Grid */}
            <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function renderScreen(index: number) {
  switch (index) {
    case 0: return <ScreenArchitecture />;
    case 1: return <ScreenWebDev />;
    case 2: return <ScreenSecurity />;
    case 3: return <ScreenDevOps />;
    default: return null;
  }
}

/* ============================================================================
   SCREEN 01: DISCOVERY & ARCHITECTURE (Node Topology)
   ============================================================================ */
function ScreenArchitecture() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">System Topology</span>
        <span className="text-[9px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded shadow-sm animate-pulse">DESIGNING</span>
      </div>

      <div className="flex-1 w-full relative flex items-center justify-center mt-4">
        {/* Connection topology SVG */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          {/* Animated dashed paths */}
          <path d="M 20 50 L 50 20" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="1 1.5" fill="none" />
          <path d="M 20 50 L 50 50" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="1 1.5" fill="none" />
          <path d="M 20 50 L 50 80" stroke="#E2E8F0" strokeWidth="0.75" strokeDasharray="1 1.5" fill="none" />
          <path d="M 50 20 L 80 50" stroke="#E2E8F0" strokeWidth="0.75" fill="none" />
          <path d="M 50 50 L 80 50" stroke="#E2E8F0" strokeWidth="0.75" fill="none" />
          <path d="M 50 80 L 80 50" stroke="#E2E8F0" strokeWidth="0.75" fill="none" />

          {/* Flowing Data Particles */}
          <motion.circle r="1" fill="#3b82f6" style={{ filter: "drop-shadow(0 0 2px #3b82f6)" }}
            animate={{ cx: [20, 50, 80], cy: [50, 20, 50] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }} />
          <motion.circle r="1" fill="#3b82f6" style={{ filter: "drop-shadow(0 0 2px #3b82f6)" }}
            animate={{ cx: [20, 50, 80], cy: [50, 80, 50] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1.5, ease: "linear" }} />
          <motion.circle r="1" fill="#3b82f6" style={{ filter: "drop-shadow(0 0 2px #3b82f6)" }}
            animate={{ cx: [20, 50], cy: [50, 50] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5, ease: "linear" }} />
        </svg>

        {/* Nodes layer */}
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-6">
          {/* Edge Gateway */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center shadow-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-50/30" />
              <Globe2 className="text-blue-500" size={18} />
            </div>
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase tracking-wider">Gateway</span>
          </div>

          {/* Microservices Cluster */}
          <div className="flex flex-col gap-4 justify-center h-full">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm relative">
                <Fingerprint className="text-slate-400" size={14} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                <Database className="text-slate-400" size={14} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                <Cpu className="text-slate-400" size={14} />
              </div>
            </div>
          </div>

          {/* Master API / Core Database */}
          <div className="flex flex-col items-center gap-2">
            <motion.div 
              animate={{ boxShadow: ["0 0 10px rgba(59,130,246,0.1)", "0 0 25px rgba(59,130,246,0.3)", "0 0 10px rgba(59,130,246,0.1)"] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-12 h-12 rounded-full bg-white border-2 border-blue-400/80 flex items-center justify-center relative overflow-hidden shadow-md"
            >
              <div className="absolute inset-0 bg-blue-50/20" />
              <Shield className="text-blue-500" size={20} />
            </motion.div>
            <span className="text-[7px] font-mono text-blue-500 font-bold uppercase tracking-wider">Core Engine</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SCREEN 02: AGILE DEVELOPMENT (High-Fidelity Code Editor)
   ============================================================================ */
function ScreenWebDev() {
  const [typedCode, setTypedCode] = useState("");
  const fullText = "export async function generateMetadata() {";

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedCode((prev) => prev + fullText[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">IDE Workspace</span>
        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded shadow-sm animate-pulse">BUILDING</span>
      </div>

      {/* Code Editor Window */}
      <div className="w-full flex-1 bg-white rounded-xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden relative">
        {/* Editor Tabs */}
        <div className="flex bg-slate-50 border-b border-slate-200/85 text-[9px] font-mono text-slate-400 h-8 items-center px-1 shrink-0">
          <div className="bg-white px-4 h-full flex items-center border-t-2 border-emerald-500 text-slate-800 font-semibold shadow-[0_-2px_6px_rgba(0,0,0,0.01)]">page.tsx</div>
          <div className="px-4 h-full flex items-center hover:bg-slate-100/50 cursor-pointer">api.ts</div>
        </div>
        {/* Code Content */}
        <div className="p-3 font-mono text-[10px] leading-relaxed relative flex-1 text-slate-800">
          <div className="flex">
            <div className="text-slate-300 select-none pr-3 text-right">
              1<br/>2<br/>3<br/>4<br/>5
            </div>
            <div className="text-slate-700">
              <span className="text-purple-600 font-semibold">import</span> <span className="text-blue-600">{"{ Metadata }"}</span> <span className="text-purple-600 font-semibold">from</span> <span className="text-emerald-600">"next"</span>;<br/>
              <br/>
              <span className="text-purple-600 font-semibold">const</span> <span className="text-blue-600">db</span> = <span className="text-amber-600 font-semibold">connectToDatabase</span>();<br/>
              <br/>
              <span className="text-purple-600 font-semibold">{typedCode.split(" ")[0]}</span> <span className="text-purple-600 font-semibold">{typedCode.split(" ")[1]}</span> <span className="text-purple-600 font-semibold">{typedCode.split(" ")[2]}</span> <span className="text-blue-600">{typedCode.split(" ").slice(3).join(" ")}</span>
              <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1.5 h-3 bg-emerald-500 inline-block align-middle ml-1" />
            </div>
          </div>
        </div>
        {/* Terminal output at bottom */}
        <div className="h-10 bg-slate-50 border-t border-slate-200/80 p-2 text-[8px] font-mono text-slate-500 flex flex-col justify-center shrink-0">
          <div className="flex justify-between items-center mb-1">
            <span><span className="text-emerald-600 font-bold mr-1">✓</span> Compiled successfully in 142ms</span>
            <span className="text-slate-400 font-bold">Terminal</span>
          </div>
          <div className="w-full h-0.5 bg-slate-200 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, repeat: Infinity }} className="h-full bg-emerald-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SCREEN 03: SYSTEM FORENSICS & QA (Cyber Radar Scanner)
   ============================================================================ */
function ScreenSecurity() {
  const [checks, setChecks] = useState<number[]>([]);

  useEffect(() => {
    const sequence = [1, 2, 3, 4];
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < sequence.length) {
        setChecks(prev => [...prev, sequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const auditLines = [
    { id: 1, text: "XSS & CSRF security audits" },
    { id: 2, text: "Zero-day vulnerability checks" },
    { id: 3, text: "Database fuzzing protocols" },
    { id: 4, text: "TLS 1.3 encryption status" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Forensics Engine</span>
        <span className="text-[9px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded shadow-sm animate-pulse">AUDITING</span>
      </div>

      <div className="flex-1 w-full bg-white border border-slate-200/80 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative flex p-4 gap-6 items-center overflow-hidden">
        {/* Radar Visual */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden bg-slate-50 shadow-inner">
          {/* Radar grids */}
          <div className="absolute inset-0 rounded-full border border-rose-500/10 m-3" />
          <div className="absolute inset-0 rounded-full border border-rose-500/10 m-6" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-rose-500/10" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-rose-500/10" />
          
          {/* Radar Sweep */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-1/2 h-1/2 bg-gradient-to-br from-rose-500/20 to-transparent origin-bottom-right"
            style={{ borderRadius: "100% 0 0 0" }}
          />
          <ShieldAlert className="text-rose-500/85 relative z-10" size={20} />
        </div>

        {/* Audit Logs */}
        <div className="flex-1 flex flex-col gap-3 z-10">
          {auditLines.map((line) => {
            const isChecked = checks.includes(line.id);
            return (
              <div key={line.id} className="flex items-center gap-2.5">
                {isChecked ? (
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                ) : (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-3.5 h-3.5 border-2 border-slate-200 border-t-rose-500 rounded-full shrink-0"
                  />
                )}
                <span className={`text-[9px] font-mono truncate ${isChecked ? "text-slate-700 font-semibold" : "text-slate-400"}`}>
                  {line.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SCREEN 04: DEPLOYMENT & SCALING (Multi-Region Cloud Map)
   ============================================================================ */
function ScreenDevOps() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Global Deployment</span>
        <span className="text-[9px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-100 px-2 py-0.5 rounded shadow-sm animate-pulse">SCALING</span>
      </div>

      <div className="flex-1 w-full bg-white border border-slate-200/80 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative flex flex-col p-4 overflow-hidden">
        {/* World Map representation */}
        <div className="absolute inset-0 opacity-[0.12] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat z-0" />
        
        {/* Deployment Nodes */}
        <div className="absolute inset-0 z-10">
          {/* Node US */}
          <div className="absolute top-[40%] left-[25%] flex flex-col items-center">
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
            <span className="text-[7px] font-mono text-cyan-700 mt-1 font-bold bg-white/90 border border-slate-100 px-1 rounded shadow-sm">us-east</span>
          </div>
          {/* Node EU */}
          <div className="absolute top-[30%] left-[55%] flex flex-col items-center">
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, delay: 0.6, repeat: Infinity }} className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
            <span className="text-[7px] font-mono text-cyan-700 mt-1 font-bold bg-white/90 border border-slate-100 px-1 rounded shadow-sm">eu-central</span>
          </div>
          {/* Node Asia */}
          <div className="absolute top-[55%] left-[80%] flex flex-col items-center">
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, delay: 1.2, repeat: Infinity }} className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
            <span className="text-[7px] font-mono text-cyan-700 mt-1 font-bold bg-white/90 border border-slate-100 px-1 rounded shadow-sm">ap-east</span>
          </div>

          {/* Arcs/Lines connecting nodes */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
            <path d="M 25 40 Q 40 25 55 30" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="1 1.5" fill="none" opacity="0.4" />
            <path d="M 55 30 Q 70 40 80 55" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="1 1.5" fill="none" opacity="0.4" />
            <path d="M 25 40 Q 50 60 80 55" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="1 1.5" fill="none" opacity="0.4" />
          </svg>
        </div>

        {/* Live Logs */}
        <div className="mt-auto bg-white/95 border border-slate-200 p-2.5 relative z-20 flex flex-col gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] backdrop-blur-sm rounded-lg">
          <div className="flex justify-between text-[8px] font-mono text-slate-500">
            <span>Container Image deployed</span>
            <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">SUCCESS</span>
          </div>
          <div className="flex justify-between text-[8px] font-mono text-slate-500">
            <span>Anycast CDN propagation</span>
            <span className="text-cyan-600 font-bold">12ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
