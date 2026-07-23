"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Cpu, Activity, Globe, Cloud, Code } from "lucide-react";

export default function Abstract3DComposition() {
  return (
    <div className="absolute inset-0 overflow-hidden w-full h-full pointer-events-none" style={{ perspective: "1200px" }}>
      
      {/* 1. Geometric Engineering Grid Background */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
        {/* Focal axis lines */}
        <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-slate-300" />
        <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-slate-300" />
      </div>

      {/* 2. Soft Ambient Lighting Blooms */}
      <div className="absolute top-[10%] left-[20%] w-[150px] h-[150px] rounded-full bg-blue-400/10 blur-[50px]" />
      <div className="absolute bottom-[15%] right-[25%] w-[180px] h-[180px] rounded-full bg-indigo-400/10 blur-[60px]" />

      {/* 3. The 3D Perspective Scene Container */}
      <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
        
        {/* ================= CLOUD INFRASTRUCTURE & APIs (Background SVG Mesh) ================= */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 400" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <linearGradient id="netLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A5B4FC" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="dataStreamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Connected Network Links (APIs) */}
          <motion.line x1="90" y1="120" x2="250" y2="70" stroke="url(#netLineGrad)" strokeWidth="1" />
          <motion.line x1="250" y1="70" x2="390" y2="130" stroke="url(#netLineGrad)" strokeWidth="1" />
          <motion.line x1="390" y1="130" x2="350" y2="280" stroke="url(#netLineGrad)" strokeWidth="1.5" />
          <motion.line x1="350" y1="280" x2="140" y2="300" stroke="url(#netLineGrad)" strokeWidth="1" />
          <motion.line x1="140" y1="300" x2="90" y2="120" stroke="url(#netLineGrad)" strokeWidth="1.5" />
          
          {/* Inner Mesh Diagonal Connections */}
          <motion.line x1="90" y1="120" x2="350" y2="280" stroke="url(#netLineGrad)" strokeWidth="0.75" strokeDasharray="3 3" />
          <motion.line x1="250" y1="70" x2="140" y2="300" stroke="url(#netLineGrad)" strokeWidth="0.75" strokeDasharray="3 3" />
          <motion.line x1="250" y1="70" x2="350" y2="280" stroke="url(#netLineGrad)" strokeWidth="1" />

          {/* Animated Data Flows (Light Streams) */}
          <motion.path 
            d="M 90 120 L 250 70 L 390 130" 
            fill="none" 
            stroke="url(#dataStreamGrad)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            strokeDasharray="30 150" 
            animate={{ strokeDashoffset: [-180, 180] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path 
            d="M 350 280 L 140 300 L 90 120" 
            fill="none" 
            stroke="url(#dataStreamGrad)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            strokeDasharray="40 120" 
            animate={{ strokeDashoffset: [160, -160] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          {/* Interconnected Glowing Cloud Nodes */}
          <circle cx="90" cy="120" r="4.5" fill="#3B82F6" filter="url(#nodeGlow)" />
          <circle cx="250" cy="70" r="6" fill="#2563EB" filter="url(#nodeGlow)" />
          <circle cx="390" cy="130" r="4.5" fill="#60A5FA" filter="url(#nodeGlow)" />
          <circle cx="140" cy="300" r="5" fill="#3B82F6" filter="url(#nodeGlow)" />
          <circle cx="350" cy="280" r="5.5" fill="#4F46E5" filter="url(#nodeGlow)" />
        </svg>

        {/* ================= WEBSITES (Layered Floating Browser Windows) ================= */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotateX: [10, 13, 10],
            rotateY: [-8, -4, -8],
            rotateZ: [-2, 0, -2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[6%] sm:left-[10%] w-[160px] h-[105px] sm:w-[200px] sm:h-[135px] rounded-xl border border-white/60 bg-white/20 backdrop-blur-md shadow-[0_12px_24px_-10px_rgba(59,130,246,0.1)] flex flex-col overflow-hidden z-10"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Mock Browser Header */}
          <div className="h-5 shrink-0 border-b border-slate-200/30 bg-white/40 px-2 flex items-center gap-1 justify-between">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-400/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="w-16 h-1.5 bg-slate-300/40 rounded-full mx-auto" />
            <Globe size={10} className="text-slate-400" />
          </div>
          {/* Mock Website Layout */}
          <div className="flex-1 p-2 flex flex-col gap-1.5">
            <div className="w-2/3 h-2 rounded bg-blue-500/20" />
            <div className="w-full h-1 bg-slate-400/10" />
            <div className="w-5/6 h-1 bg-slate-400/10" />
            <div className="grid grid-cols-3 gap-1 mt-1">
              <div className="h-8 rounded bg-blue-400/10 border border-blue-500/5 flex items-center justify-center">
                <Code size={12} className="text-blue-500/40" />
              </div>
              <div className="h-8 rounded bg-indigo-400/10 border border-indigo-500/5" />
              <div className="h-8 rounded bg-slate-400/5 border border-slate-500/5" />
            </div>
          </div>
        </motion.div>

        {/* ================= MOBILE APPS (Floating Rounded Device Frame) ================= */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotateX: [6, 9, 6],
            rotateY: [-12, -8, -12],
            rotateZ: [-5, -3, -5],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[16%] right-[14%] sm:right-[18%] w-[85px] h-[150px] sm:w-[100px] sm:h-[180px] rounded-2xl border border-white/70 bg-white/20 backdrop-blur-lg shadow-[0_20px_35px_-12px_rgba(59,130,246,0.12)] p-2 flex flex-col justify-between z-20"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Camera Notch */}
          <div className="w-8 h-1.5 bg-slate-300/40 rounded-full mx-auto" />
          
          {/* App Layout */}
          <div className="flex-1 my-3 flex flex-col gap-2 justify-center">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 mx-auto flex items-center justify-center shadow-[0_6px_12px_rgba(59,130,246,0.2)]">
              <Smartphone size={16} className="text-white" />
            </div>
            <div className="w-12 h-1.5 bg-slate-400/25 rounded-full mx-auto" />
            <div className="w-8 h-1 bg-slate-400/15 rounded-full mx-auto" />
            
            <div className="grid grid-cols-2 gap-1 px-1 mt-0.5">
              <div className="h-5 rounded-md bg-blue-500/10" />
              <div className="h-5 rounded-md bg-indigo-500/10" />
            </div>
          </div>
          
          {/* Home Bar Indicator */}
          <div className="w-10 h-1 bg-slate-300/40 rounded-full mx-auto" />
        </motion.div>

        {/* ================= DASHBOARDS (Translucent Analytics Panels) ================= */}
        <motion.div
          animate={{
            y: [6, -6, 6],
            rotateX: [15, 11, 15],
            rotateY: [10, 14, 10],
            rotateZ: [2, 0, 2],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[16%] right-[8%] sm:right-[12%] w-[180px] h-[120px] sm:w-[220px] sm:h-[150px] rounded-xl border border-white/80 bg-white/35 backdrop-blur-xl shadow-[0_16px_32px_-12px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden z-30"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Analytics Header */}
          <div className="h-6 shrink-0 border-b border-slate-200/30 bg-white/50 px-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Activity size={10} className="text-indigo-600 animate-pulse" />
              <div className="w-12 h-1.5 bg-slate-400/20 rounded-full" />
            </div>
            <div className="w-5 h-1.5 bg-indigo-500/20 rounded-full" />
          </div>
          
          {/* Analytics Content */}
          <div className="flex-1 p-2 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="h-5 rounded bg-slate-400/5 border border-slate-200/20 p-1 flex items-center justify-between">
                <div className="w-6 h-1 bg-slate-400/25 rounded-full" />
                <div className="w-3 h-1 bg-emerald-500/30 rounded" />
              </div>
              <div className="h-5 rounded bg-indigo-400/5 border border-slate-200/20 p-1 flex items-center justify-between">
                <div className="w-6 h-1 bg-slate-400/25 rounded-full" />
                <div className="w-3 h-1 bg-indigo-500/30 rounded" />
              </div>
            </div>

            {/* Glowing Analytics Line Chart */}
            <div className="flex-1 min-h-[30px] relative overflow-hidden mt-1">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="dashboardArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="dashboardLine" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                </defs>
                <path 
                  d="M0,30 L15,18 L35,22 L55,8 L75,18 L100,2 L100,30 Z" 
                  fill="url(#dashboardArea)"
                  opacity="0.12"
                />
                <motion.path 
                  d="M0,30 L15,18 L35,22 L55,8 L75,18 L100,2" 
                  fill="none" 
                  stroke="url(#dashboardLine)" 
                  strokeWidth="1.75" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ================= GEOMETRIC PRECISION DECORATIONS ================= */}
        {/* Floating Code/Database Cylinder */}
        <motion.div
          animate={{
            y: [-5, 5, -5],
            rotateX: [30, 40, 30],
            rotateY: [15, 25, 15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[20%] left-[16%] w-10 h-10 rounded-lg border border-white/50 bg-white/20 backdrop-blur-md shadow-[0_8px_16px_rgba(59,130,246,0.06)] flex items-center justify-center z-15"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Cpu size={18} className="text-blue-500/40" />
        </motion.div>

        {/* Small Precision Coordinates Cross */}
        <div className="absolute top-[12%] right-[40%] w-3 h-3 flex items-center justify-center opacity-30">
          <div className="absolute w-3 h-[0.5px] bg-slate-400" />
          <div className="absolute h-3 w-[0.5px] bg-slate-400" />
        </div>
        <div className="absolute bottom-[28%] right-[48%] w-3 h-3 flex items-center justify-center opacity-30">
          <div className="absolute w-3 h-[0.5px] bg-slate-400" />
          <div className="absolute h-3 w-[0.5px] bg-slate-400" />
        </div>

        {/* Floating Data Flow Particle Streams (Dust particles representing micro-services) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.15,
              boxShadow: "0 0 4px rgba(96,165,250,0.6)",
            }}
            animate={{
              y: [0, -Math.random() * 60 - 30],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  );
}
