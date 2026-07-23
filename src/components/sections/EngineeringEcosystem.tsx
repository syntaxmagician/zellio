"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Check,
  Copy,
  Activity
} from "lucide-react";
import { SiFigma, SiReact, SiNodedotjs, SiPostgresql, SiKubernetes, SiGrafana, SiDocker } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    badge: "ENGINEERING PROCESS",
    title: "Engineering complete software ecosystems.",
    subtitle: "We don't just build features. We architect production-ready digital systems with robust infrastructure, scalable APIs, and pixel-perfect design systems.",
    centerTitle: "Unified Platform",
    centerDesc: "Zellio Core Integration Engine",
    centerMeta: "v2.4.0 • Production Ready",
    copy: "Copy ID",
    copied: "Copied!",
  },
  id: {
    badge: "PROSES REKAYASA",
    title: "Merancang ekosistem perangkat lunak lengkap.",
    subtitle: "Kami tidak hanya membuat fitur. Kami merancang sistem digital siap produksi dengan infrastruktur kuat, API terukur, dan sistem desain yang sempurna.",
    centerTitle: "Platform Terpadu",
    centerDesc: "Mesin Integrasi Inti Zellio",
    centerMeta: "v2.4.0 • Siap Produksi",
    copy: "Salin ID",
    copied: "Tersalin!",
  }
};

interface Capability {
  id: string;
  title: string;
  desc: string;
  meta: string;
  icon: React.ElementType;
  color: string;
  side: "left" | "right";
  renderMiniUI: () => React.ReactNode;
}

export default function EngineeringEcosystem() {
  const { language } = useLanguage();
  const text = localText[language];
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ [key: string]: { x: number; y: number } }>({});
  const [copied, setCopied] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const updateCoords = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const anchors = containerRef.current.querySelectorAll("[data-anchor]");
    const newCoords: typeof coords = {};
    
    anchors.forEach((el) => {
      const name = el.getAttribute("data-anchor");
      if (name) {
        const rect = el.getBoundingClientRect();
        newCoords[name] = {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      }
    });
    setCoords(newCoords);
  }, []);

  useEffect(() => {
    updateCoords();
    
    // Use ResizeObserver to detect layout shifts and font loads
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateCoords);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
      const cards = containerRef.current.querySelectorAll('.group');
      cards.forEach(card => observer.observe(card));
    }

    window.addEventListener("resize", updateCoords);
    return () => {
      window.removeEventListener("resize", updateCoords);
      observer.disconnect();
    };
  }, [updateCoords]);

  const handleCopy = () => {
    navigator.clipboard.writeText("zellio-prod-platform-hub-99");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const capabilities: Capability[] = [
    {
      id: "design",
      title: "UI/UX Design Systems",
      desc: "Tokenized UI kits and interactive user journeys designed in Figma.",
      meta: "Figma • Tokenized",
      icon: SiFigma,
      color: "#3B82F6",
      side: "left",
      renderMiniUI: () => (
        <div className="mt-2.5 p-2 bg-slate-50 rounded-md border border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-500">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 block" title="Primary" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-900 block" title="Neutral" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" title="Success" />
          </div>
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[8px] font-bold">Btn/Pri</span>
          </div>
        </div>
      )
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      desc: "Responsive web architectures optimized for SEO and Speed with Next.js.",
      meta: "React • Next.js 15",
      icon: SiReact,
      color: "#2563EB",
      side: "left",
      renderMiniUI: () => (
        <div className="mt-2.5 p-2 bg-slate-50 rounded-md border border-slate-100 text-[9px] font-mono text-slate-500 flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-slate-400">
            <span>page.tsx</span>
            <span className="text-[#3B82F6]">100% hydr</span>
          </div>
          <div className="h-1.5 w-full bg-slate-200 rounded overflow-hidden">
            <div className="h-full bg-blue-600 rounded" style={{ width: "95%" }}></div>
          </div>
        </div>
      )
    },
    {
      id: "backend",
      title: "Backend API Layer",
      desc: "Robust, concurrent server applications using Node.js or Go services.",
      meta: "GraphQL • REST",
      icon: SiNodedotjs,
      color: "#6366F1",
      side: "left",
      renderMiniUI: () => (
        <div className="mt-2.5 p-2 bg-slate-900 text-[#38BDF8] rounded-md text-[9px] font-mono leading-none">
          <span className="text-amber-400">GET</span> /auth <span className="text-emerald-500">200 OK</span>
        </div>
      )
    },
    {
      id: "database",
      title: "Database Schemas",
      desc: "Highly optimized transactional databases and fast Redis key-value caches.",
      meta: "PostgreSQL • Redis",
      icon: SiPostgresql,
      color: "#06B6D4",
      side: "right",
      renderMiniUI: () => (
        <div className="mt-2.5 p-2 bg-slate-50 rounded-md border border-slate-100 flex flex-col gap-1 text-[9px] font-mono text-slate-500">
          <div className="flex justify-between border-b border-slate-100 pb-1 font-bold text-slate-700">
            <span>Col</span>
            <span>Type</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>id</span>
            <span>UUID</span>
          </div>
        </div>
      )
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      desc: "Secure container orchestration with Kubernetes on AWS / GCP.",
      meta: "Kubernetes • Docker",
      icon: SiKubernetes,
      color: "#10B981",
      side: "right",
      renderMiniUI: () => (
        <div className="mt-2.5 p-2 bg-slate-50 rounded-md border border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>us-east-1</span>
          </div>
          <span className="text-emerald-600 font-bold">100% CPU</span>
        </div>
      )
    },
    {
      id: "dashboard",
      title: "Real-time Telemetry",
      desc: "Live system health monitoring, telemetry metrics, and dashboards.",
      meta: "Grafana • Prometheus",
      icon: SiGrafana,
      color: "#EC4899",
      side: "right",
      renderMiniUI: () => (
        <div className="mt-2.5 p-2 bg-slate-50 rounded-md border border-slate-100 flex flex-col gap-1">
          <div className="flex justify-between text-[9px] font-mono text-slate-500">
            <span>Traffic</span>
            <span className="text-pink-600 font-bold">12.5k r/s</span>
          </div>
          <svg className="w-full h-4 text-pink-500" viewBox="0 0 100 20" fill="none">
            <path d="M0 15 Q20 5 40 12 T80 4 T100 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      )
    },
    {
      id: "production",
      title: "DevOps & Production",
      desc: "Continuous integration pipelines delivering zero-downtime rollouts.",
      meta: "CI/CD • Docker",
      icon: SiDocker,
      color: "#F59E0B",
      side: "right",
      renderMiniUI: () => (
        <div className="mt-2.5 p-2 bg-emerald-950 text-emerald-400 rounded-md text-[9px] font-mono flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Check className="w-3 h-3 text-emerald-400" />
            <span>deploy: success</span>
          </div>
          <span className="opacity-60">2s ago</span>
        </div>
      )
    }
  ];

  const leftCaps = capabilities.filter(c => c.side === "left");
  const rightCaps = capabilities.filter(c => c.side === "right");

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-t border-slate-100">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-50/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-50/10 rounded-full blur-[90px] pointer-events-none z-0" />

      {/* Expanded Container */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-6 lg:mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-100 shadow-sm">
            {text.badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {text.title}
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Desktop Layout with SVG Overlay Connection Lines */}
        <div ref={containerRef} className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center min-h-[600px]">
          
          {/* SVG Connector Layer */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
            <svg className="w-full h-full" style={{ overflow: "visible" }}>
              <defs>
                {capabilities.map((cap) => (
                  <linearGradient key={`grad-${cap.id}`} id={`grad-${cap.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={cap.side === "left" ? cap.color : "#2563EB"} stopOpacity="0.4" />
                    <stop offset="100%" stopColor={cap.side === "left" ? "#2563EB" : cap.color} stopOpacity="0.4" />
                  </linearGradient>
                ))}
              </defs>

              {Object.keys(coords).length > 0 &&
                [...leftCaps, ...rightCaps].map((cap) => {
                  const index = cap.side === "left" ? leftCaps.findIndex(c => c.id === cap.id) : rightCaps.findIndex(c => c.id === cap.id);
                  const start = coords[cap.id];
                  const end = coords[`center-${cap.side}-${index}`];
                  
                  if (!start || !end) return null;

                  const controlOffset = Math.abs(start.x - end.x) * 0.45;
                  const x1 = start.x;
                  const y1 = start.y;
                  const x2 = end.x;
                  const y2 = end.y;

                  const d = `M ${x1} ${y1} C ${x1 + (cap.side === "left" ? controlOffset : -controlOffset)} ${y1}, ${x2 + (cap.side === "left" ? -controlOffset : controlOffset)} ${y2}, ${x2} ${y2}`;

                  const isHovered = hoveredCard === cap.id;

                  return (
                    <g key={`link-${cap.id}`}>
                      {/* Background link */}
                      <path
                        d={d}
                        fill="none"
                        stroke={`url(#grad-${cap.id})`}
                        strokeWidth={isHovered ? "2.5" : "1.2"}
                        className="transition-all duration-300"
                      />
                      {/* Animated dashed line on top */}
                      <motion.path
                        d={d}
                        fill="none"
                        stroke={cap.color}
                        strokeWidth="1.2"
                        strokeDasharray="4, 12"
                        animate={{
                          strokeDashoffset: cap.side === "left" ? [-40, 0] : [0, -40]
                        }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          duration: isHovered ? 1.5 : 3
                        }}
                      />
                      {/* Animated light pulse flowing along path */}
                      <motion.circle
                        r="3"
                        fill={cap.color}
                        className="shadow-sm"
                        style={{ filter: "drop-shadow(0px 0px 4px currentColor)" }}
                      >
                        <animateMotion
                          path={d}
                          dur={isHovered ? "1.5s" : "3s"}
                          repeatCount="indefinite"
                          keyPoints={cap.side === "left" ? "0;1" : "1;0"}
                          keyTimes="0;1"
                        />
                      </motion.circle>
                    </g>
                  );
                })}
            </svg>
          </div>

          {/* LEFT COLUMN: 3 Capabilities */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 lg:gap-8 z-10">
            {leftCaps.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  onMouseEnter={() => setHoveredCard(cap.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="relative group bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-3xl p-5 lg:p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)] hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${cap.color}10`,
                        border: `1px solid ${cap.color}25`
                      }}
                    >
                      <IconComponent size={16} style={{ color: cap.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h4 className="font-black text-sm lg:text-base text-slate-800 tracking-tight group-hover:text-slate-900 transition-colors">
                          {cap.title}
                        </h4>
                        <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded px-1.5 py-0.5">
                          {cap.meta}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {cap.desc}
                      </p>
                      {cap.renderMiniUI()}
                    </div>
                  </div>
                  {/* Desktop anchor connection node */}
                  <div
                    data-anchor={cap.id}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-white bg-slate-300 z-20 pointer-events-none hidden lg:block"
                  />
                </motion.div>
              );
            })}
          </div>

          {/* CENTER COLUMN: Central Unified Platform Card */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-center justify-center py-8 lg:py-0 z-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-[340px] bg-slate-950 text-white rounded-3xl p-6 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.25)] border border-slate-800 relative overflow-hidden"
            >
              {/* Animated glow pulse */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/25 rounded-full blur-[50px] pointer-events-none animate-pulse" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-[50px] pointer-events-none animate-pulse" />

              {/* Title & Metadata */}
              <div className="relative z-10 flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-blue-400 animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm tracking-tight leading-none text-white mb-1">
                      {text.centerTitle}
                    </h3>
                    <span className="text-[9px] font-mono font-bold text-slate-400 tracking-wider">
                      {text.centerMeta}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-md px-2 py-1 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                  <span>{copied ? text.copied : text.copy}</span>
                </button>
              </div>

              {/* Subtitle */}
              <div className="mb-6 relative z-10">
                <span className="text-[9px] font-mono font-bold text-blue-400 tracking-[0.15em] uppercase block mb-1">
                  Ecosystem Hub
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {text.centerDesc}
                </p>
              </div>

              {/* Telemetry panel */}
              <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-4 space-y-3 font-mono text-[9px] relative z-10">
                <div className="flex items-center justify-between border-b border-slate-800/50 pb-2 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                    <span>sys_telemetry</span>
                  </div>
                  <span className="text-emerald-500 font-bold">ONLINE</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-slate-300">
                    <span>API Handlers</span>
                    <span>100% OK</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded" style={{ width: "100%" }} />
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>Database Synced</span>
                    <span>0.4ms lat</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded" style={{ width: "98%" }} />
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span>Cloud Clusters</span>
                    <span>12 Nodes</span>
                  </div>
                  <div className="h-1 bg-slate-800 rounded overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>

              {/* Center Anchor points for lines */}
              {/* Left connection anchors */}
              <div className="absolute left-0 top-[20%] w-0 h-0 pointer-events-none hidden lg:block">
                <div data-anchor="center-left-0" className="w-1 h-1 bg-transparent" />
              </div>
              <div className="absolute left-0 top-[50%] w-0 h-0 pointer-events-none hidden lg:block">
                <div data-anchor="center-left-1" className="w-1 h-1 bg-transparent" />
              </div>
              <div className="absolute left-0 top-[80%] w-0 h-0 pointer-events-none hidden lg:block">
                <div data-anchor="center-left-2" className="w-1 h-1 bg-transparent" />
              </div>

              {/* Right connection anchors */}
              <div className="absolute right-0 top-[12.5%] w-0 h-0 pointer-events-none hidden lg:block">
                <div data-anchor="center-right-0" className="w-1 h-1 bg-transparent" />
              </div>
              <div className="absolute right-0 top-[37.5%] w-0 h-0 pointer-events-none hidden lg:block">
                <div data-anchor="center-right-1" className="w-1 h-1 bg-transparent" />
              </div>
              <div className="absolute right-0 top-[62.5%] w-0 h-0 pointer-events-none hidden lg:block">
                <div data-anchor="center-right-2" className="w-1 h-1 bg-transparent" />
              </div>
              <div className="absolute right-0 top-[87.5%] w-0 h-0 pointer-events-none hidden lg:block">
                <div data-anchor="center-right-3" className="w-1 h-1 bg-transparent" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: 4 Capabilities */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 lg:gap-8 z-10">
            {rightCaps.map((cap) => {
              const IconComponent = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  onMouseEnter={() => setHoveredCard(cap.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="relative group bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-3xl p-5 lg:p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)] hover:border-slate-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${cap.color}10`,
                        border: `1px solid ${cap.color}25`
                      }}
                    >
                      <IconComponent size={16} style={{ color: cap.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h4 className="font-black text-sm lg:text-base text-slate-800 tracking-tight group-hover:text-slate-900 transition-colors">
                          {cap.title}
                        </h4>
                        <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-50 border border-slate-100 rounded px-1.5 py-0.5">
                          {cap.meta}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {cap.desc}
                      </p>
                      {cap.renderMiniUI()}
                    </div>
                  </div>
                  {/* Desktop anchor connection node */}
                  <div
                    data-anchor={cap.id}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-white bg-slate-300 z-20 pointer-events-none hidden lg:block"
                  />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
