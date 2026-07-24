"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Palette, Layers, Terminal, Activity, ArrowRight } from "lucide-react";
import TeamAvatar from "./TeamAvatar";

interface LeaderData {
  name: string;
  id: "vico" | "samuel" | "cavendio";
  role: string;
  exp: string;
  projects: string;
  tech: string[];
  philosophy: string;
  icon: React.ElementType;
  theme: "blue" | "emerald" | "indigo";
}

const leaders: LeaderData[] = [
  {
    name: "Vico Tegar",
    id: "vico",
    role: "Chief Architect & Leader",
    exp: "5+ Years Experience",
    projects: "12+ Enterprise Platforms",
    tech: ["System Architecture", "Cloud Infrastructure", "Go", "Node.js", "Docker"],
    philosophy: "\"Great architecture isn't about the tools you use, but the complexity you hide.\"",
    icon: Cpu,
    theme: "blue"
  },
  {
    name: "Samuel Sukarno",
    id: "samuel",
    role: "Lead Frontend Engineer",
    exp: "3+ Years Experience",
    projects: "10+ Enterprise Projects",
    tech: ["React", "Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    philosophy: "\"Interfaces should disappear so users only notice the product.\"",
    icon: Palette,
    theme: "emerald"
  },
  {
    name: "Muhammad Cavendio",
    id: "cavendio",
    role: "Lead Backend Engineer",
    exp: "5+ Years Experience",
    projects: "22+ Scalable APIs",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"],
    philosophy: "\"Data integrity and performance at scale are the lifeblood of any digital ecosystem.\"",
    icon: Layers,
    theme: "indigo"
  }
];

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState<LeaderData>(leaders[0]);
  const [terminalLog, setTerminalLog] = useState<string>("");

  useEffect(() => {
    setTerminalLog("");
    const timeouts = [
      setTimeout(() => setTerminalLog(`> INITIALIZING CORE: ${activeLeader.id.toUpperCase()}`), 100),
      setTimeout(() => setTerminalLog(prev => prev + `\n> FETCHING SPECS... OK`), 600),
      setTimeout(() => setTerminalLog(prev => prev + `\n> SYNCING ${activeLeader.tech[0].toUpperCase()} ENGINE... ONLINE`), 1200),
      setTimeout(() => setTerminalLog(prev => prev + `\n> STATUS: OPERATIONAL`), 1800),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, [activeLeader.id]);

  return (
    <section className="w-full bg-[#FFFFFF] border-t border-slate-100 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="mb-12">
          <span className="text-[10px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase block mb-2">
            LEADERSHIP CORE
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            The minds behind the code.
          </h2>
        </div>

        {/* Dashboard Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: Selector Console */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {leaders.map((leader) => {
              const isActive = activeLeader.id === leader.id;
              const Icon = leader.icon;
              return (
                <button
                  key={leader.id}
                  onClick={() => setActiveLeader(leader)}
                  className={`w-full text-left relative flex items-center p-4 rounded-xl transition-all duration-300 border ${isActive
                    ? 'bg-white border-blue-200 shadow-md ring-4 ring-blue-50'
                    : 'bg-slate-50/50 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                >
                  {/* Status Indicator */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-full bg-slate-200 overflow-hidden">
                    {isActive && (
                      <motion.div layoutId="activeIndicator" className={`w-full h-full ${leader.theme === 'blue' ? 'bg-blue-500' : leader.theme === 'emerald' ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
                    )}
                  </div>

                  <div className="pl-6 flex-1">
                    <span className="text-[9px] font-mono font-bold text-slate-400 tracking-widest uppercase block mb-0.5">
                      {leader.role.split(' ')[0]}
                    </span>
                    <h3 className={`text-sm md:text-base font-bold tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                      {leader.name}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive ? (leader.theme === 'blue' ? 'bg-blue-50 text-blue-600' : leader.theme === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600') : 'bg-white border border-slate-200 text-slate-400'
                    }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Spec Screen */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl shadow-sm relative overflow-hidden flex flex-col">

            {/* Header / Nav Bar */}
            <div className="h-12 border-b border-slate-100 flex items-center px-6 justify-between bg-slate-50/50">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-slate-400" />
                <span className="font-mono text-[10px] font-bold text-slate-500 tracking-widest">
                  SYS_CORE // {activeLeader.id.toUpperCase()}
                </span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 lg:gap-12 relative">

              {/* Avatar Radar Scope */}
              <div className="shrink-0 flex items-center justify-center relative">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeLeader.id}
                    initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-slate-50 border border-slate-100 flex items-end justify-center overflow-hidden group"
                  >
                    {/* Radar Spinning Border */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full border border-slate-100" />

                    <TeamAvatar name={activeLeader.id} className="w-[115%] h-[115%] relative z-10 transform scale-105 group-hover:scale-110 transition-transform duration-500 ease-out drop-shadow-sm origin-bottom" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Data Specs */}
              <div className="flex-1 flex flex-col justify-center space-y-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                    {activeLeader.name}
                  </h3>
                  <p className={`text-sm font-bold ${activeLeader.theme === 'blue' ? 'text-blue-500' : activeLeader.theme === 'emerald' ? 'text-emerald-500' : 'text-indigo-500'}`}>
                    {activeLeader.role}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Experience
                    </span>
                    <p className="text-sm font-bold text-slate-800">
                      {activeLeader.exp}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Delivery
                    </span>
                    <p className="text-sm font-bold text-slate-800">
                      {activeLeader.projects}
                    </p>
                  </div>
                </div>

                <div>
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLeader.tech.map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[10px] font-bold shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group shadow-inner">
                  <Terminal className="absolute right-4 top-4 w-12 h-12 text-slate-800 opacity-20 group-hover:opacity-40 transition-opacity" />
                  <pre className="font-mono text-[10px] md:text-xs text-green-400 whitespace-pre-wrap leading-relaxed relative z-10">
                    {terminalLog}
                    <span className="inline-block w-1.5 h-3 bg-green-400 ml-1 animate-pulse" />
                  </pre>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
