"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, BarChart3, Smartphone, Network, Terminal,
  Server, Shield, Database, RefreshCw, Cpu, Layers, CheckCircle2
} from "lucide-react";

interface EngineProps {
  activeIndex: number;
}

const premiumSpring = { type: "spring", stiffness: 100, damping: 20 };

export default function BrowserPreviewEngine({ activeIndex }: EngineProps) {
  return (
    <div 
      className="w-full max-w-[500px] aspect-[16/11] relative select-none"
      style={{
        perspective: "1200px"
      }}
    >
      {/* 
        3D Tilted macOS Browser Frame
        Optimized: Removed heavy backdrop-blur and infinite floating vertical loops 
        to ensure buttery smooth 60fps performance on all devices.
      */}
      <motion.div
        animate={{
          rotateX: 5,
          rotateY: -10,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
        style={{
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full bg-white border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] rounded-[20px] flex flex-col overflow-hidden"
      >
        {/* Browser Top Titlebar */}
        <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-4 bg-slate-50/50">
          {/* macOS window bullets */}
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] block opacity-80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] block opacity-80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] block opacity-80" />
          </div>
          
          {/* Dummy address bar */}
          <div className="flex-1 max-w-sm mx-auto h-5 bg-slate-200/40 rounded-md border border-slate-200/20 flex items-center justify-center px-3">
            <span className="text-[9px] font-mono tracking-wider text-slate-400">
              zellio.io/engine/capabilities
            </span>
          </div>
        </div>

        {/* Browser Body Split Layout */}
        <div className="flex-1 w-full flex overflow-hidden">
          {/* Sidebar Tabs */}
          <div className="w-14 border-r border-slate-100 flex flex-col items-center py-5 gap-5 bg-slate-50/20">
            {/* Z logo badge */}
            <div className="w-7 h-7 rounded-lg bg-blue-600/10 flex items-center justify-center border border-blue-500/20 mb-2">
              <span className="font-bold text-[10px] text-blue-600">Z</span>
            </div>

            {/* Sidebar navigation corresponding to services */}
            {[Code, BarChart3, Smartphone, Network, Terminal, Layers].map((Icon, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 relative ${
                    isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-slate-300 hover:text-slate-400"
                  }`}
                >
                  <Icon size={14} />
                  {isActive && (
                    <motion.div 
                      layoutId="sidebarIndicator"
                      className="absolute right-0 top-1/4 bottom-1/4 w-[2px] bg-blue-600 rounded-l"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Canvas workspace hosting the active screen */}
          <div className="flex-1 relative bg-white/40 overflow-hidden p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97, y: 5 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -5 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full flex flex-col justify-between"
              >
                {renderScreen(activeIndex)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function renderScreen(index: number) {
  switch (index) {
    case 0:
      return <ScreenWebDev />;
    case 1:
      return <ScreenDashboard />;
    case 2:
      return <ScreenMobile />;
    case 3:
      return <ScreenSystems />;
    case 4:
      return <ScreenDevOps />;
    case 5:
      return <ScreenUIUX />;
    default:
      return null;
  }
}

/* ============================================================================
   SCREEN 01: WEB DEVELOPMENT
   ============================================================================ */
function ScreenWebDev() {
  const [loading, setLoading] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const fullText = "npx create-next-app@latest zellio-app";

  useEffect(() => {
    // 1. Typing effect
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setTypedCode((prev) => prev + fullText[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 45);

    // 2. Loading bar progress after typing finishes
    const timer = setTimeout(() => {
      const loadInterval = setInterval(() => {
        setLoading((prev) => {
          if (prev >= 100) {
            clearInterval(loadInterval);
            return 100;
          }
          return prev + 5;
        });
      }, 60);
    }, 2000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {/* Command prompt block */}
      <div className="w-full bg-slate-900 rounded-xl p-3.5 font-mono text-[10px] text-slate-300 shadow-md">
        <div className="flex gap-1.5 mb-2.5 opacity-55">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-blue-400">~</span>
          <span>{typedCode}</span>
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className="w-1.5 h-3 bg-blue-500 inline-block"
          />
        </div>
        {loading > 0 && (
          <div className="mt-3 text-slate-400 flex flex-col gap-1.5">
            <div className="flex justify-between font-bold text-[9px] tracking-wider text-slate-500">
              <span>INITIALIZING SYSTEM DEPLOYMENT</span>
              <span>{loading}%</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${loading}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Grid columns sliding in */}
      <div className="grid grid-cols-3 gap-3 w-full mt-4">
        {[
          { label: "Core Module", desc: "Architecture setup", delay: 0.4 },
          { label: "Design System", desc: "Interface definitions", delay: 0.5 },
          { label: "API Client", desc: "Integrated schema sync", delay: 0.6 }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay, type: "spring", stiffness: 100 }}
            className="bg-white p-3 rounded-xl border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col gap-1.5"
          >
            <span className="text-[10px] font-bold text-slate-900">{card.label}</span>
            <span className="text-[8px] text-slate-400 leading-normal">{card.desc}</span>
            <div className="w-10 h-1.5 bg-blue-500/10 rounded-full mt-1.5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 1, delay: card.delay + 0.3 }}
                className="h-full bg-blue-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================================
   SCREEN 02: ADMIN & ANALYTICS DASHBOARD
   ============================================================================ */
function ScreenDashboard() {
  const [stats, setStats] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => {
        if (prev >= 72) {
          clearInterval(interval);
          return 72;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between gap-4">
      {/* Top metric row */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {/* Metric 1: Radial graph */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              Widget
            </span>
            <span className="text-xl font-bold text-slate-900">
              {stats}%
            </span>
          </div>
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="24" cy="24" r="18" stroke="#F1F5F9" strokeWidth="3" fill="transparent" />
              <motion.circle 
                cx="24" cy="24" r="18" stroke="#3B82F6" strokeWidth="3" fill="transparent"
                strokeDasharray={2 * Math.PI * 18}
                animate={{ strokeDashoffset: (2 * Math.PI * 18) * (1 - stats / 100) }}
                transition={{ duration: 1 }}
              />
            </svg>
          </div>
        </div>

        {/* Metric 2: Live conversion */}
        <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col justify-between shadow-sm">
          <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Conversion rate
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-xl font-bold text-slate-900">4.82%</span>
            <span className="text-[8px] font-bold text-green-500 font-mono">+12.4%</span>
          </div>
        </div>
      </div>

      {/* Database/Table area filling out */}
      <div className="bg-white flex-1 rounded-xl border border-slate-100 p-4 flex flex-col shadow-sm gap-2">
        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
          Data Table
        </span>
        <div className="flex flex-col gap-2 mt-1">
          {[
            { name: "Checkout completed", val: "$1,240.00", time: "Just now" },
            { name: "API request authorized", val: "200 OK", time: "1 min ago" },
            { name: "Database shard replicated", val: "Replica A", time: "3 mins ago" }
          ].map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="flex justify-between items-center text-[9px] border-b border-slate-50 pb-2 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-slate-800 font-medium">{row.name}</span>
              </div>
              <div className="flex gap-4 items-center">
                <span className="font-mono font-bold text-slate-900">{row.val}</span>
                <span className="text-slate-400">{row.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SCREEN 03: MOBILE APP DEVELOPMENT
   ============================================================================ */
function ScreenMobile() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* 3D Rotated phone container */}
      <motion.div
        animate={{
          rotateZ: [-2, 2, -2],
          y: [0, -4, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut"
        }}
        className="w-[140px] h-[250px] bg-slate-900 rounded-[28px] p-2 border-2 border-slate-800/80 shadow-xl flex flex-col relative"
      >
        {/* Speaker notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-slate-950 rounded-full flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
        </div>

        {/* Inside mobile canvas screen */}
        <div className="flex-1 bg-white rounded-[20px] overflow-hidden p-3 pt-6 flex flex-col justify-between">
          <div className="flex flex-col gap-2.5">
            {/* Profile banner */}
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
              <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold text-white">
                Z
              </span>
              <div className="flex flex-col">
                <span className="text-[8px] font-bold text-slate-800 leading-tight">Mobile Native</span>
                <span className="text-[6px] text-slate-400 leading-none">Status: Syncing</span>
              </div>
            </div>

            {/* Simulated content screen morph */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-blue-500/5 border border-blue-500/10 p-2.5 rounded-xl flex flex-col gap-2"
            >
              <div className="w-10 h-1.5 bg-blue-500 rounded-full" />
              <div className="w-full h-10 bg-white rounded-lg border border-slate-100 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Simple device CTA */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="w-full bg-slate-950 hover:bg-slate-900 text-white rounded-xl py-2 flex items-center justify-center text-[8px] font-bold tracking-widest uppercase cursor-pointer"
          >
            Authorize Project
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ============================================================================
   SCREEN 04: CUSTOM IT SYSTEMS (Node Architecture)
   ============================================================================ */
function ScreenSystems() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-2">
      {/* Title */}
      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 block">
        Microservice Clusters
      </span>

      <div className="flex-1 w-full relative flex items-center justify-center">
        {/* Connection topology SVG */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Node connections */}
          <path d="M 60 120 L 160 50" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M 60 120 L 160 120" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M 60 120 L 160 190" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M 160 50 L 260 120" stroke="#E2E8F0" strokeWidth="1.5" fill="none" />
          <path d="M 160 120 L 260 120" stroke="#E2E8F0" strokeWidth="1.5" fill="none" />
          <path d="M 160 190 L 260 120" stroke="#E2E8F0" strokeWidth="1.5" fill="none" />

          {/* Flowing data packets (circles traversing) */}
          <motion.circle 
            r="3" fill="#3B82F6"
            animate={{
              cx: [60, 160, 260],
              cy: [120, 50, 120]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
          <motion.circle 
            r="3" fill="#3B82F6"
            animate={{
              cx: [60, 160, 260],
              cy: [120, 190, 120]
            }}
            transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "linear" }}
          />
        </svg>

        {/* Nodes layer */}
        <div className="absolute inset-0 flex items-center justify-between px-10">
          {/* Gateway Node */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-sm">
              <Cpu className="text-blue-600" size={16} />
            </div>
            <span className="text-[7px] font-mono text-slate-400 font-bold uppercase">Gateway</span>
          </div>

          {/* Clusters Stack (Mid) */}
          <div className="flex flex-col gap-6 justify-center h-full">
            <div className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                <Server className="text-slate-500" size={14} />
              </div>
              <span className="text-[6px] font-mono text-slate-400">Auth</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                <Database className="text-slate-500" size={14} />
              </div>
              <span className="text-[6px] font-mono text-slate-400">Users</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                <RefreshCw className="text-slate-500" size={14} />
              </div>
              <span className="text-[6px] font-mono text-slate-400">APIs</span>
            </div>
          </div>

          {/* Sync Central Database (End) */}
          <div className="flex flex-col items-center gap-1.5">
            <motion.div 
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-11 h-11 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center shadow-md"
            >
              <Shield className="text-blue-400" size={16} />
            </motion.div>
            <span className="text-[7px] font-mono text-slate-900 font-bold uppercase">API Core</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   SCREEN 05: CLOUD INFRASTRUCTURE & DEVOPS
   ============================================================================ */
function ScreenDevOps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000); // Cycle loops through pipeline states
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "Build", desc: "Docker bundle successful" },
    { label: "Test", desc: "Lint & Unit tests pass" },
    { label: "Deploy", desc: "Push to AWS replica clusters" },
    { label: "Success", desc: "Production live on Ingress" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between gap-4">
      {/* Title */}
      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
        CI/CD Pipeline Tracker
      </span>

      {/* DevOps steps columns mapping */}
      <div className="flex-1 flex items-center justify-between relative mt-2">
        {/* Continuous track line */}
        <div className="absolute left-[36px] right-[36px] top-1/2 -translate-y-1/2 h-[2px] bg-slate-100 z-0">
          <motion.div 
            className="h-full bg-green-500 rounded"
            animate={{ width: `${(activeStep / 3) * 100}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {steps.map((step, idx) => {
          const isDone = idx <= activeStep;
          const isCurrent = idx === activeStep;

          return (
            <div key={idx} className="flex flex-col items-center gap-2 relative z-10 w-20">
              {/* Circle state */}
              <motion.div
                animate={{
                  scale: isCurrent ? 1.15 : 1,
                  backgroundColor: isDone ? "#22C55E" : "#FFFFFF",
                  borderColor: isDone ? "#22C55E" : "#E2E8F0"
                }}
                transition={{ duration: 0.4 }}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-sm"
              >
                {isDone ? (
                  <CheckCircle2 size={14} className="text-white" />
                ) : (
                  <span className="text-[9px] font-bold text-slate-300 font-mono">0{idx + 1}</span>
                )}
              </motion.div>
              
              {/* Labels below */}
              <span className={`text-[9px] font-bold ${isDone ? "text-slate-900" : "text-slate-300"}`}>
                {step.label}
              </span>
              {isCurrent && (
                <motion.span 
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[6px] text-slate-400 font-mono text-center leading-normal"
                >
                  {step.desc}
                </motion.span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================================
   SCREEN 06: UI/UX & PRODUCT DESIGN WORKSPACE
   ============================================================================ */
function ScreenUIUX() {
  const [posX, setPosX] = useState(60);
  const [posY, setPosY] = useState(80);

  useEffect(() => {
    // Simulated design element drag loops
    const interval = setInterval(() => {
      setPosX((prev) => (prev === 60 ? 120 : 60));
      setPosY((prev) => (prev === 80 ? 110 : 80));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between p-2">
      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
        Figma Workspace Design System
      </span>

      {/* Frame canvas */}
      <div className="flex-1 bg-slate-50 rounded-xl border border-dashed border-slate-200 relative p-4 overflow-hidden">
        {/* Spacing coordinate rulers */}
        <div className="absolute top-2 left-2 text-[7px] font-mono text-slate-400">
          W: 240px H: 180px
        </div>

        {/* Dynamic moving mockup wireframe component inside layout */}
        <motion.div
          animate={{
            x: posX,
            y: posY,
            width: posX === 60 ? 120 : 160,
            height: posX === 60 ? 80 : 70
          }}
          transition={{ type: "spring", stiffness: 90, damping: 15 }}
          className="absolute bg-white border-2 border-blue-500 rounded-lg p-2.5 flex flex-col justify-between shadow-md"
        >
          <div className="flex flex-col gap-1.5">
            <div className="w-12 h-1.5 bg-blue-500/20 rounded-full" />
            <div className="w-20 h-1 bg-slate-100 rounded-full" />
          </div>

          <div className="flex justify-between items-center mt-2">
            <span className="w-4 h-4 rounded-full bg-slate-100 block" />
            <div className="w-8 h-3 bg-blue-500 rounded-md" />
          </div>

          {/* Interactive Spacing lines overlay */}
          <div className="absolute -left-[32px] top-1/2 -translate-y-1/2 flex items-center gap-1">
            <div className="w-[32px] h-[1px] bg-red-400 border-dashed" />
            <span className="text-[6px] font-mono text-red-500 font-bold bg-white px-0.5 border border-red-200">32px</span>
          </div>
        </motion.div>

        {/* Simulated Cursor pointer dragging */}
        <motion.div
          animate={{
            x: posX + 40,
            y: posY + 20
          }}
          transition={{ type: "spring", stiffness: 90, damping: 15 }}
          className="absolute pointer-events-none"
        >
          <svg width="12" height="15" viewBox="0 0 12 15" fill="none" className="drop-shadow-sm">
            <path d="M0 0 L12 6.5 L7.5 7.8 L12 13.5 L9.5 15 L5 9.3 L0 13.5 Z" fill="#3B82F6" stroke="white" strokeWidth="1" />
          </svg>
          <span className="absolute left-3 top-3 bg-blue-500 text-white font-mono text-[6px] py-0.5 px-1 rounded shadow-sm font-bold">
            Antigravity
          </span>
        </motion.div>
      </div>
    </div>
  );
}
