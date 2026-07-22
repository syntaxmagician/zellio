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

const deliverablesMap: Record<number, string[]> = {
  1: [
    "Single Page Applications (SPA)",
    "SEO & Core Web Vitals",
    "Custom API & Headless CMS",
    "Responsive & Fluid Layouts",
  ],
  2: [
    "Real-time Analytics Panels",
    "Custom CRM & ERP Solutions",
    "Financial Data Visualization",
    "Role-Based Access Control",
  ],
  3: [
    "Cross-Platform (iOS & Android)",
    "Push Notifications & Deep Linking",
    "Offline Support & Sync",
    "App Store Publishing",
  ],
  4: [
    "Database Architecture Design",
    "Third-Party API Integrations",
    "Legacy System Migration",
    "High-Concurrency Backend APIs",
  ],
  5: [
    "AWS / GCP / Azure Setup",
    "Docker & Kubernetes Deployments",
    "CI/CD Pipeline Automation",
    "Server Monitoring & Security",
  ],
  6: [
    "Figma Interactive Prototypes",
    "Wireframing & User Journey",
    "Design System Creation",
    "Usability Testing & Iteration",
  ],
};

export default function Services() {
  const [activeId, setActiveId] = useState<number>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];
  const ActiveIcon = iconMap[activeService.icon];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden">
      <div className="section-container max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 border border-blue-100 shadow-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight">
              Custom <span className="text-[#2563EB]">IT Solutions</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#64748B] max-w-md leading-relaxed font-medium md:text-right mx-auto md:mx-0">
            From design to deployment, we offer end-to-end IT services to build modern web, mobile, and custom systems for your business.
          </p>
        </motion.div>

        {/* Interactive Split-Screen Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative">

          {/* Mobile Navigation (Horizontal Scroll) */}
          <div className="flex md:hidden overflow-x-auto gap-3 pb-4 snap-x hide-scrollbar">
            {servicesData.map((program) => {
              const isActive = activeId === program.id;
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveId(program.id)}
                  className={`relative flex-shrink-0 snap-start px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ${isActive ? "text-white shadow-md" : "bg-white text-slate-500 border border-slate-200 hover:text-slate-900"
                    }`}
                  style={isActive ? { backgroundColor: program.color, borderColor: program.color } : {}}
                >
                  {program.title}
                </button>
              );
            })}
          </div>

          {/* Desktop Navigation (Vertical List) */}
          <div className="hidden md:flex flex-col gap-2 md:col-span-5 lg:col-span-4">
            {servicesData.map((program, i) => {
              const isActive = activeId === program.id;
              const Icon = iconMap[program.icon];
              return (
                <button
                  key={program.id}
                  onClick={() => setActiveId(program.id)}
                  className={`relative flex items-center gap-4 w-full p-4 lg:p-5 rounded-2xl transition-all duration-300 text-left group ${isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-600 hover:bg-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBgDesktop"
                      className="absolute inset-0 bg-white border border-slate-200/80 shadow-md rounded-2xl"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 text-[11px] font-mono font-bold opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className={`relative z-10 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-slate-50' : 'bg-transparent group-hover:bg-slate-50'}`}>
                    {Icon && <Icon size={16} style={{ color: isActive ? program.color : '#94A3B8' }} className="transition-colors duration-300" />}
                  </div>

                  <span className="relative z-10 font-black text-sm lg:text-base tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    {program.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Showcase Panel (Glassmorphic Detail Card) */}
          <div className="md:col-span-7 lg:col-span-8 h-full">
            <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden flex flex-col h-full min-h-[460px] w-full">

              {/* Dynamic Abstract Background Glow */}
              <motion.div
                key={`glow-${activeId}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[80px] pointer-events-none"
                style={{ backgroundColor: activeService.color }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col h-full relative z-10"
                >
                  {/* Header Row: Icon & Meta */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8 sm:mb-10">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{
                        backgroundColor: `${activeService.color}15`,
                        border: `1px solid ${activeService.color}30`,
                      }}
                    >
                      <ActiveIcon size={28} style={{ color: activeService.color }} />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="text-[10px] sm:text-xs font-bold px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 uppercase tracking-widest">
                        {activeService.duration}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 uppercase tracking-widest">
                        {activeService.level}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium mb-10 max-w-2xl">
                    {activeService.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-10">
                    <h4 className="text-[11px] sm:text-xs font-black text-slate-400 mb-5 uppercase tracking-[0.2em]">
                      Key Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {deliverablesMap[activeService.id].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: activeService.color }}
                          />
                          <span className="text-[13px] sm:text-sm font-bold text-slate-700 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTA */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
