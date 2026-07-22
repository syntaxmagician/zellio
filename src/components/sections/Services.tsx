"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Monitor,
  Server,
  Layers,
  Cloud,
  GitBranch,
  Shield,
  Brain,
  BarChart2,
  Smartphone,
  Clock,
  Signal,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Palette,
  Monitor,
  Server,
  Layers,
  Cloud,
  GitBranch,
  Shield,
  Brain,
  BarChart2,
  Smartphone,
};

const categories = [
  "All",
  ...Array.from(new Set(servicesData.map((p) => p.category))),
];

export default function Services() {
  const [active, setActive] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? servicesData
      : servicesData.filter((p) => p.category === active);

  return (
    <section id="services" className="py-24 lg:py-28 bg-[#F8FAFC]">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-50 text-[#9FA1FF] text-xs font-semibold uppercase tracking-widest mb-4 border border-violet-100">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Custom{" "}
            <span className="gradient-text">IT Solutions</span>
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            From design to deployment, we offer end-to-end IT services
            to build modern web, mobile, and custom systems for your business.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                active === cat
                  ? "bg-gradient-to-r from-[#2563EB] to-[#9FA1FF] text-white shadow-lg shadow-violet-500/20"
                  : "bg-white text-[#64748B] hover:bg-violet-50 hover:text-[#9FA1FF] border border-gray-100 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((program, i) => {
              const Icon = iconMap[program.icon];
              const isHovered = hoveredId === program.id;

              return (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, y: 25, scale: 0.96, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  onMouseEnter={() => setHoveredId(program.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group bg-white rounded-[32px] border border-slate-100 p-6 relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:border-slate-200/80 flex flex-col justify-between cursor-pointer min-h-[380px]"
                >
                  {/* Soft Background Glow */}
                  <div 
                    className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-[48px] opacity-10 transition-all duration-700 pointer-events-none"
                    style={{ 
                      backgroundColor: program.color,
                      transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                      opacity: isHovered ? 0.18 : 0.08
                    }}
                  />
                  
                  {/* Abstract Grid Pattern */}
                  <div 
                    className="absolute inset-0 opacity-[0.015] group-hover:opacity-[0.03] transition-opacity pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                  />

                  <div>
                    {/* Top row: Icon & Category */}
                    <div className="flex items-center justify-between mb-8">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative transition-all duration-500 shadow-sm border"
                        style={{ 
                          backgroundColor: isHovered ? program.color : `${program.color}08`, 
                          borderColor: isHovered ? 'transparent' : `${program.color}25`,
                          transform: isHovered ? 'scale(1.05) rotate(3deg)' : 'scale(1) rotate(0deg)'
                        }}
                      >
                        <div 
                          className="absolute inset-0 blur-md opacity-25 rounded-2xl transition-opacity duration-500"
                          style={{ 
                            backgroundColor: program.color,
                            opacity: isHovered ? 0.5 : 0
                          }}
                        />
                        {Icon && (
                          <Icon
                            size={24}
                            className="relative z-10 transition-colors duration-500"
                            style={{ color: isHovered ? '#FFFFFF' : program.color }}
                          />
                        )}
                      </div>

                      <span
                        className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all duration-300"
                        style={{ 
                          color: program.color, 
                          backgroundColor: `${program.color}10`,
                          borderColor: `${program.color}25`
                        }}
                      >
                        {program.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-slate-900 transition-colors leading-tight">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium line-clamp-3">
                      {program.description}
                    </p>
                  </div>

                  <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-3 py-3 border-t border-b border-slate-50 mb-6">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                        <Clock size={14} className="text-slate-300" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-200" />
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                        <Signal size={14} className="text-slate-300" />
                        <span>{program.level}</span>
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="flex items-center justify-between pt-1">
                      <span 
                        className="text-sm font-extrabold transition-colors duration-300"
                        style={{ color: isHovered ? program.color : '#475569' }}
                      >
                        Discuss Project
                      </span>
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                        style={{ 
                          backgroundColor: isHovered ? program.color : 'transparent',
                          borderColor: isHovered ? 'transparent' : '#F1F5F9',
                          transform: isHovered ? 'translateX(2px)' : 'translateX(0)'
                        }}
                      >
                        <ArrowRight 
                          size={16} 
                          className="transition-all duration-300"
                          style={{ color: isHovered ? '#FFFFFF' : '#94A3B8' }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
