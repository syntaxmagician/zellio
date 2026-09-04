"use client";

import React from "react";
import { 
  Cpu, 
  Layers, 
  Terminal, 
  Server, 
  Network
} from "lucide-react";

export type TeamMemberId = "vico" | "samuel" | "cavendio" | "hasyim" | "alwi";

interface TeamTechCardProps {
  id: TeamMemberId;
  name: string;
  role: string;
  className?: string;
}

interface TechConfig {
  tag: string;
  specTitle: string;
  icon: React.ElementType;
  glowColor: string;
  accentClass: string;
  borderHover: string;
  metrics: { label: string; value: string }[];
  renderGraphic: () => React.ReactNode;
}

export default function TeamTechCard({ id, className = "" }: TeamTechCardProps) {
  const configs: Record<TeamMemberId, TechConfig> = {
    vico: {
      tag: "CORE // ARCH-01",
      specTitle: "SYSTEM TOPOLOGY",
      icon: Cpu,
      glowColor: "rgba(59, 130, 246, 0.25)",
      accentClass: "text-blue-400",
      borderHover: "group-hover:border-blue-500/50",
      metrics: [
        { label: "NODES", value: "64/64" },
        { label: "LATENCY", value: "12ms" },
      ],
      renderGraphic: () => (
        <svg className="w-full h-full p-2" viewBox="0 0 160 160" fill="none">
          {/* Blueprint Grid Lines */}
          <circle cx="80" cy="80" r="60" stroke="#1E293B" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="80" cy="80" r="40" stroke="#334155" strokeWidth="1" />
          <circle cx="80" cy="80" r="20" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.4" />
          
          {/* Connecting Circuit Arms */}
          <line x1="80" y1="20" x2="80" y2="140" stroke="#1E293B" strokeWidth="1" />
          <line x1="20" y1="80" x2="140" y2="80" stroke="#1E293B" strokeWidth="1" />
          <line x1="38" y1="38" x2="122" y2="122" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="122" y1="38" x2="38" y2="122" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

          {/* Central Architecture Core */}
          <circle cx="80" cy="80" r="12" fill="#0F172A" stroke="#3B82F6" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          <circle cx="80" cy="80" r="4" fill="#60A5FA" />

          {/* Peripheral Satellite Nodes */}
          <circle cx="80" cy="35" r="4" fill="#3B82F6" />
          <circle cx="125" cy="80" r="4" fill="#38BDF8" />
          <circle cx="80" cy="125" r="4" fill="#3B82F6" />
          <circle cx="35" cy="80" r="4" fill="#38BDF8" />

          <circle cx="110" cy="50" r="3" fill="#60A5FA" />
          <circle cx="50" cy="110" r="3" fill="#60A5FA" />
        </svg>
      ),
    },

    samuel: {
      tag: "UI/UX // ENGINE-02",
      specTitle: "RENDER MATRIX",
      icon: Layers,
      glowColor: "rgba(16, 185, 129, 0.25)",
      accentClass: "text-emerald-400",
      borderHover: "group-hover:border-emerald-500/50",
      metrics: [
        { label: "FPS", value: "120" },
        { label: "DOM", value: "OPTIMAL" },
      ],
      renderGraphic: () => (
        <svg className="w-full h-full p-2" viewBox="0 0 160 160" fill="none">
          {/* Viewport Wireframes */}
          <rect x="25" y="30" width="110" height="75" rx="8" stroke="#1E293B" strokeWidth="1.5" fill="#0F172A" fillOpacity="0.4" />
          <line x1="25" y1="48" x2="135" y2="48" stroke="#334155" strokeWidth="1" />
          <circle cx="36" cy="39" r="2.5" fill="#10B981" />
          <circle cx="44" cy="39" r="2.5" fill="#334155" />
          <circle cx="52" cy="39" r="2.5" fill="#334155" />

          {/* Component Blocks */}
          <rect x="35" y="56" width="38" height="38" rx="4" stroke="#10B981" strokeWidth="1.5" strokeOpacity="0.8" fill="#10B981" fillOpacity="0.1" />
          <rect x="80" y="56" width="45" height="16" rx="4" fill="#1E293B" />
          <rect x="80" y="78" width="45" height="16" rx="4" stroke="#34D399" strokeWidth="1" strokeDasharray="2 2" fill="#0F172A" />

          {/* Interactive Bezier Spline Wave */}
          <path d="M 20 125 C 50 100, 70 145, 100 115 C 120 95, 135 130, 145 120" stroke="#10B981" strokeWidth="2" strokeLinecap="round" className="drop-shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          <circle cx="100" cy="115" r="3.5" fill="#34D399" />
          <circle cx="145" cy="120" r="3" fill="#6EE7B7" />
        </svg>
      ),
    },

    cavendio: {
      tag: "PIPELINE // DATA-03",
      specTitle: "CLUSTER MESH",
      icon: Server,
      glowColor: "rgba(99, 102, 241, 0.25)",
      accentClass: "text-indigo-400",
      borderHover: "group-hover:border-indigo-500/50",
      metrics: [
        { label: "QPS", value: "48.2k" },
        { label: "STREAM", value: "gRPC" },
      ],
      renderGraphic: () => (
        <svg className="w-full h-full p-2" viewBox="0 0 160 160" fill="none">
          {/* Isometric Server & Database Layers */}
          <g transform="translate(80, 45)">
            <ellipse cx="0" cy="0" rx="46" ry="16" stroke="#6366F1" strokeWidth="1.5" fill="#0F172A" className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            <path d="M -46 0 L -46 16 C -46 25 46 25 46 16 L 46 0" stroke="#4338CA" strokeWidth="1.5" fill="#0F172A" fillOpacity="0.5" />
          </g>

          <g transform="translate(80, 75)">
            <ellipse cx="0" cy="0" rx="46" ry="16" stroke="#818CF8" strokeWidth="1.5" fill="#0F172A" />
            <path d="M -46 0 L -46 16 C -46 25 46 25 46 16 L 46 0" stroke="#4338CA" strokeWidth="1.5" fill="#0F172A" fillOpacity="0.5" />
          </g>

          <g transform="translate(80, 105)">
            <ellipse cx="0" cy="0" rx="46" ry="16" stroke="#6366F1" strokeWidth="1.5" fill="#0F172A" />
            <path d="M -46 0 L -46 16 C -46 25 46 25 46 16 L 46 0" stroke="#312E81" strokeWidth="1.5" fill="#0F172A" />
          </g>

          {/* Vertical Bus Lines & Data Beacons */}
          <line x1="80" y1="20" x2="80" y2="135" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="80" cy="45" r="3" fill="#A5B4FC" />
          <circle cx="80" cy="75" r="3" fill="#A5B4FC" />
          <circle cx="80" cy="105" r="3" fill="#A5B4FC" />
        </svg>
      ),
    },

    hasyim: {
      tag: "INFRA // DEVOPS-04",
      specTitle: "POD TELEMETRY",
      icon: Terminal,
      glowColor: "rgba(245, 158, 11, 0.25)",
      accentClass: "text-amber-400",
      borderHover: "group-hover:border-amber-500/50",
      metrics: [
        { label: "PODS", value: "12/12" },
        { label: "UPTIME", value: "99.99%" },
      ],
      renderGraphic: () => (
        <svg className="w-full h-full p-2" viewBox="0 0 160 160" fill="none">
          {/* Hexagonal Node Mesh (K8s & Pods) */}
          <polygon points="80,25 125,50 125,100 80,125 35,100 35,50" stroke="#334155" strokeWidth="1.5" fill="#0F172A" fillOpacity="0.3" />
          <polygon points="80,42 110,60 110,95 80,112 50,95 50,60" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.8" fill="#F59E0B" fillOpacity="0.08" className="drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />

          {/* Active Container Pods */}
          <circle cx="80" cy="77" r="8" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="80" cy="77" r="3" fill="#FCD34D" />

          <circle cx="80" cy="25" r="3.5" fill="#FBBF24" />
          <circle cx="125" cy="50" r="3.5" fill="#F59E0B" />
          <circle cx="125" cy="100" r="3.5" fill="#FBBF24" />
          <circle cx="80" cy="125" r="3.5" fill="#F59E0B" />
          <circle cx="35" cy="100" r="3.5" fill="#FBBF24" />
          <circle cx="35" cy="50" r="3.5" fill="#F59E0B" />

          {/* Pulse Track */}
          <line x1="20" y1="140" x2="140" y2="140" stroke="#334155" strokeWidth="1" />
          <path d="M 40 140 L 60 140 L 70 130 L 80 148 L 90 135 L 100 140 L 120 140" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },

    alwi: {
      tag: "NEXUS // API-05",
      specTitle: "PROTOCOL SYNERGY",
      icon: Network,
      glowColor: "rgba(244, 63, 94, 0.25)",
      accentClass: "text-rose-400",
      borderHover: "group-hover:border-rose-500/50",
      metrics: [
        { label: "BRIDGES", value: "ACTIVE" },
        { label: "RELAY", value: "100%" },
      ],
      renderGraphic: () => (
        <svg className="w-full h-full p-2" viewBox="0 0 160 160" fill="none">
          {/* Interconnected Constellation / Synergy Mesh */}
          <path d="M 35 60 L 80 35 L 125 65 L 115 115 L 45 110 Z" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" fill="#0F172A" fillOpacity="0.4" />
          <line x1="80" y1="35" x2="80" y2="85" stroke="#F43F5E" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="35" y1="60" x2="80" y2="85" stroke="#FB7185" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="125" y1="65" x2="80" y2="85" stroke="#F43F5E" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="115" y1="115" x2="80" y2="85" stroke="#FB7185" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="45" y1="110" x2="80" y2="85" stroke="#F43F5E" strokeWidth="1.5" strokeOpacity="0.6" />

          {/* Central Hub */}
          <circle cx="80" cy="85" r="10" fill="#0F172A" stroke="#F43F5E" strokeWidth="2" className="drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]" />
          <circle cx="80" cy="85" r="3.5" fill="#FDA4AF" />

          {/* Nodes */}
          <circle cx="80" cy="35" r="4.5" fill="#FB7185" />
          <circle cx="125" cy="65" r="4" fill="#F43F5E" />
          <circle cx="115" cy="115" r="4.5" fill="#FB7185" />
          <circle cx="45" cy="110" r="4" fill="#F43F5E" />
          <circle cx="35" cy="60" r="4.5" fill="#FB7185" />
        </svg>
      ),
    },
  };

  const current = configs[id] || configs.vico;
  const IconComponent = current.icon;

  return (
    <div
      className={`w-full h-full rounded-[24px] bg-[#090D16] border border-slate-800/80 ${current.borderHover} relative overflow-hidden flex flex-col justify-between p-3.5 sm:p-4 transition-all duration-500 select-none group/techcard ${className}`}
      style={{
        boxShadow: `0 10px 30px -10px rgba(0,0,0,0.8)`,
      }}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute inset-0 opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 35%, ${current.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Subtle Blueprint Dot Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#475569 1px, transparent 1px)`,
          backgroundSize: "12px 12px",
        }}
      />

      {/* Card Header: Tag & Pulse Dot */}
      <div className="flex items-center justify-between relative z-10 w-full">
        <span className="font-mono text-[8px] sm:text-[9px] font-bold text-slate-400 tracking-wider">
          {current.tag}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[7px] sm:text-[8px] text-slate-500 font-semibold tracking-widest">
            LIVE
          </span>
        </div>
      </div>

      {/* Graphic Visualization Area */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center my-1 group-hover:scale-105 transition-transform duration-500">
        <div className="w-full max-w-[125px] aspect-square relative flex items-center justify-center">
          {current.renderGraphic()}
        </div>
      </div>

      {/* Card Footer: Spec Title & Mini Metrics */}
      <div className="relative z-10 w-full pt-2 border-t border-slate-800/60 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] text-slate-300 font-bold uppercase tracking-wider flex items-center gap-1">
            <IconComponent className={`w-2.5 h-2.5 ${current.accentClass}`} />
            {current.specTitle}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1 pt-0.5">
          {current.metrics.map((m, idx) => (
            <div
              key={idx}
              className="px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[7px] sm:text-[8px] font-mono"
            >
              <span className="text-slate-500">{m.label}</span>
              <span className={`font-bold ${current.accentClass}`}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Laser Sweep on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-[24px]">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent absolute top-0 -translate-y-full group-hover:translate-y-[280px] transition-transform duration-1000 ease-in-out" />
      </div>
    </div>
  );
}
