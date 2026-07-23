"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiGo, 
  SiFlutter, 
  SiDocker, 
  SiKubernetes, 
  SiPostgresql, 
  SiMongodb, 
  SiFigma, 
  SiTypescript 
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface TechItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "DevOps" | "Database" | "Design";
  icon: any;
  color: string;
}

const techItems: TechItem[] = [
  { id: "react", name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { id: "nextjs", name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#000000" },
  { id: "nodejs", name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { id: "go", name: "Go", category: "Backend", icon: SiGo, color: "#00ADD8" },
  { id: "flutter", name: "Flutter", category: "Frontend", icon: SiFlutter, color: "#02569B" },
  { id: "aws", name: "AWS", category: "DevOps", icon: FaAws, color: "#FF9900" },
  { id: "docker", name: "Docker", category: "DevOps", icon: SiDocker, color: "#2496ED" },
  { id: "kubernetes", name: "Kubernetes", category: "DevOps", icon: SiKubernetes, color: "#326CE5" },
  { id: "postgresql", name: "PostgreSQL", category: "Database", icon: SiPostgresql, color: "#4169E1" },
  { id: "mongodb", name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
  { id: "figma", name: "Figma", category: "Design", icon: SiFigma, color: "#F24E1E" },
  { id: "typescript", name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6" }
];

const connections = [
  { from: "react", to: "nextjs" },
  { from: "react", to: "typescript" },
  { from: "nodejs", to: "go" },
  { from: "go", to: "postgresql" },
  { from: "docker", to: "kubernetes" },
  { from: "kubernetes", to: "aws" },
  { from: "postgresql", to: "mongodb" },
  { from: "figma", to: "react" },
  { from: "flutter", to: "typescript" }
];

export default function TechEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ [key: string]: { x: number; y: number } }>({});
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateCoords);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
      const cards = containerRef.current.querySelectorAll('.tech-card');
      cards.forEach(card => observer.observe(card));
    }

    window.addEventListener("resize", updateCoords);
    return () => {
      window.removeEventListener("resize", updateCoords);
      observer.disconnect();
    };
  }, [updateCoords]);

  return (
    <section className="w-full bg-[#FAFAFA] border-t border-slate-100 relative overflow-hidden py-12 lg:py-16">
      {/* Background visual elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-100/50 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-[10px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase block mb-4">
            TECHNOLOGY ECOSYSTEM
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Architected with modern, enterprise core tools.
          </h2>
          <p className="text-sm md:text-base font-medium text-slate-500 max-w-lg mx-auto">
            We use stable, high-performance open-source systems to compose our enterprise blueprints.
          </p>
        </div>

        {/* Tech Grid */}
        <div ref={containerRef} className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 min-h-[400px]">
          
          {/* Subtle Connection Lines SVG overlay */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
            <svg className="w-full h-full" style={{ overflow: "visible" }}>
              {Object.keys(coords).length > 0 &&
                connections.map((conn, idx) => {
                  const start = coords[conn.from];
                  const end = coords[conn.to];
                  
                  if (!start || !end) return null;

                  // Determine connection activity based on hover
                  const isActive = hoveredId === conn.from || hoveredId === conn.to;
                  const dotColor = isActive ? "#3B82F6" : "#CBD5E1";
                  const lineColor = isActive ? "#60A5FA" : "#E2E8F0";
                  const duration = isActive ? 1.2 : (4 + idx * 0.5);
                  
                  return (
                    <g key={idx}>
                      <line
                        x1={start.x}
                        y1={start.y}
                        x2={end.x}
                        y2={end.y}
                        stroke={lineColor}
                        strokeWidth={isActive ? "2" : "1.5"}
                        strokeDasharray={isActive ? "6, 6" : "4, 8"}
                        style={{ transition: "all 0.3s ease" }}
                      />
                      {/* Flowing animated data dot */}
                      <motion.circle
                        r={isActive ? "3" : "2"}
                        fill={dotColor}
                        animate={{
                          cx: [start.x, end.x],
                          cy: [start.y, end.y]
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: duration,
                          ease: "linear"
                        }}
                        style={{ filter: isActive ? "drop-shadow(0 0 4px #3B82F6)" : "none" }}
                      />
                    </g>
                  );
                })}
            </svg>
          </div>

          {/* Cards */}
          {techItems.map((tech) => {
            const Icon = tech.icon;
            const isHovered = hoveredId === tech.id;
            
            return (
              <motion.div
                key={tech.id}
                onMouseEnter={() => setHoveredId(tech.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`tech-card relative group bg-white border ${isHovered ? 'border-blue-400 shadow-md ring-4 ring-blue-50' : 'border-slate-200/80 shadow-sm'} rounded-2xl p-5 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between z-10 min-h-[140px]`}
              >
                {/* Visual anchor for lines */}
                <div data-anchor={tech.id} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none" />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${tech.color}08`,
                    border: `1px solid ${tech.color}15`
                  }}
                >
                  {typeof Icon === "function" ? (
                    <Icon size={20} style={{ color: tech.color }} />
                  ) : (
                    React.createElement(Icon.type, {
                      ...Icon.props,
                      size: 20,
                      style: { color: tech.color }
                    })
                  )}
                </div>

                <div className="mt-4">
                  <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    {tech.category}
                  </span>
                  <h3 className="text-sm font-black text-slate-800 tracking-tight">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
