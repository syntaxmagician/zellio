"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, PenTool, Cpu, ShieldAlert, Sparkles, Smartphone, Terminal, Braces, Rocket, Eye } from "lucide-react";
import TeamAvatar from "./TeamAvatar";

interface Member {
  name: string;
  id: "cynthia" | "kenji" | "sarah" | "alwi";
  role: string;
  exp: string;
  projects: string;
  skills: string[];
  nftIcon: React.ElementType;
  nftColor: string;
  nftType: string;
  linkedin?: string;
}

const members: Member[] = [
  {
    name: "Alwi Rianto",
    id: "alwi",
    role: "Partnership & Engineering Contributor",
    exp: "2 Years+",
    projects: "3+ Projects",
    skills: ["Partnership", "Mobile App", "Collaboration"],
    nftIcon: Braces,
    nftColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    nftType: "CONTRIBUTOR",
    linkedin: "https://www.linkedin.com/in/alwian-rianto-8929a02aa/"
  }
];

export default function EngineeringTeam() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#FAFAFA] border-t border-slate-100 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[10px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase block mb-2">
            ENGINEERING Team / Contributors
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            The core contributors squad.
          </h2>
        </div>

        {/* Editorial Masonry/Grid Layout (Blueprint wireframe) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200/60">

          {members.map((member, index) => {
            const Icon = member.nftIcon;
            const isHovered = hoveredId === member.name;

            return (
              <motion.div
                key={member.name}
                onMouseEnter={() => setHoveredId(member.name)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative bg-transparent border-r border-b border-slate-200/60 p-6 transition-all duration-300 flex flex-col gap-4 group hover:bg-slate-50/50"
              >
                {/* NFT Portrait (Human Avatar) */}
                <div className="w-full aspect-square rounded-xl bg-slate-950 border border-slate-800 relative overflow-hidden flex flex-col justify-end group/avatar">
                  <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />

                  {/* Portrait zoom animation */}
                  <TeamAvatar name={member.id} className="w-[110%] h-[110%] relative z-10 transform scale-110 group-hover/avatar:scale-[1.03] transition-transform duration-700 mx-auto origin-bottom" />

                  {/* Dynamic Terminal Scanning Overlay on Hover */}
                  <div className={`absolute inset-0 bg-slate-950/90 z-20 p-4 flex flex-col justify-start select-none pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="font-mono text-[9px] text-emerald-400 leading-relaxed tracking-wider">
                      <div className="animate-pulse mb-1 opacity-90">&gt; INITIALIZING CORE...</div>
                      <div className="opacity-80">STATION_ID: {member.id.toUpperCase()}</div>
                      <div className="opacity-60">PING: {12 + (index % 5) * 3}ms (ACTIVE)</div>
                      <div className="opacity-50">gRPC STREAM: CONNECTED</div>
                      <div className="opacity-40">LOAD: {(14.2 + (index % 7) * 2.1).toFixed(1)}% CPU</div>
                      <div className="opacity-30 mt-2">&gt; docker compose up</div>
                      <div className="opacity-20">&gt; mounting volumes...</div>
                      <div className="opacity-10">&gt; system ready.</div>
                    </div>
                  </div>

                  {/* Top-Right Badge */}
                  <div className="absolute top-2 right-2 font-mono text-[6px] text-slate-400 bg-slate-900/80 backdrop-blur border border-slate-800 px-1.5 py-0.5 rounded z-30 transition-opacity duration-300">
                    {member.nftType}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[8px] font-mono font-bold text-slate-400 tracking-wider block uppercase">
                      {member.role}
                    </span>
                    <h3 className="text-sm font-black text-slate-800 tracking-tight mt-0.5">
                      {member.linkedin ? (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
                          {member.name}
                          <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                      ) : (
                        member.name
                      )}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2 py-2 border-y border-slate-100">
                    <div>
                      <span className="text-[7px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                        EXP
                      </span>
                      <p className="text-[10px] font-bold text-slate-700">
                        {member.exp}
                      </p>
                    </div>
                    <div>
                      <span className="text-[7px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                        PROJECTS
                      </span>
                      <p className="text-[10px] font-bold text-slate-700">
                        {member.projects}
                      </p>
                    </div>
                  </div>

                  {/* Technology chips animated upward on hover */}
                  <div>
                    <span className="text-[7px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                      STATIONS & TECHS
                    </span>
                    <div className="h-[48px] overflow-hidden relative w-full">
                      <motion.div
                        animate={{
                          y: isHovered ? -20 : 0
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="flex flex-wrap gap-1 items-start"
                      >
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600 text-[9px] font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </motion.div>

                      {/* Extra info that slides in from below */}
                      <motion.div
                        initial={{ y: 24 }}
                        animate={{
                          y: isHovered ? 0 : 24
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 right-0 flex items-center gap-1 text-[8px] font-mono font-bold text-blue-500"
                      >
                        <Eye className="w-3 h-3" />
                        <span>ACTIVE IN CLUSTER</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
