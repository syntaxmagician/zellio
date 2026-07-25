"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { servicesData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import {
  WebDevIllustration,
  DashboardIllustration,
  MobileAppIllustration,
  ITSystemsIllustration,
  CloudDevOpsIllustration,
  UIDesignIllustration
} from "../ui/ServiceIllustrations";

const illustrationMap: Record<number, React.FC<{ isHovered: boolean }>> = {
  1: WebDevIllustration,
  2: DashboardIllustration,
  3: MobileAppIllustration,
  4: ITSystemsIllustration,
  5: CloudDevOpsIllustration,
  6: UIDesignIllustration
};

const localText = {
  en: {
    expertise: "OUR EXPERTISE",
    custom: "Custom IT Solutions",
    desc: "Purpose-built engineering for modern enterprises. From scalable backend architectures to pixel-perfect interfaces, we build software that drives momentum.",
  },
  id: {
    expertise: "KEAHLIAN KAMI",
    custom: "Solusi IT Kustom",
    desc: "Rekayasa perangkat lunak untuk perusahaan modern. Dari arsitektur backend yang dapat diskalakan hingga antarmuka yang sempurna, kami membangun sistem yang memacu pertumbuhan.",
  }
};

const getSlug = (title: string) => 
  title.toLowerCase().replace(/[\s&/]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

const BlueprintGrid = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F172A" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
  </svg>
);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

interface ServiceColumnProps {
  program: typeof servicesData[0];
  index: number;
  t: (key: TranslationKey) => string;
}

const ServiceColumn: React.FC<ServiceColumnProps> = ({ program, index, t }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Illustration = illustrationMap[program.id];
  const titleKey = `service.${getSlug(program.title)}` as TranslationKey;
  const descKey = `service.desc.${getSlug(program.title)}` as TranslationKey;

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col items-start text-left group cursor-default px-6 py-6 lg:px-6 lg:py-8 transition-colors duration-500"
    >
      {/* Index */}
      <span className="font-mono text-[10px] text-slate-500 font-bold mb-4 tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        FIG 0{index + 1}
      </span>

      {/* Illustration */}
      <div className="relative mb-6 w-full flex items-center justify-start h-[160px] opacity-100 transition-opacity duration-500">
        <div className="w-full h-full transform origin-left scale-110">
          {Illustration && <Illustration isHovered={isHovered} />}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[16px] font-bold text-slate-800 group-hover:text-[#0F172A] transition-colors duration-300 tracking-tight leading-snug mb-2">
        {t(titleKey)}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-slate-500 leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        {t(descKey)}
      </p>
    </motion.div>
  );
};

export default function Services() {
  const { language, t } = useLanguage();
  const text = localText[language];

  return (
    <section id="services" className="relative py-20 lg:py-24 bg-[#ffffff] overflow-hidden border-t border-slate-200/40">
      {/* Background blueprint grid */}
      <BlueprintGrid />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mb-12 lg:mb-16 text-left"
        >
          <span className="text-[11px] font-mono font-bold text-slate-500 tracking-[0.25em] uppercase mb-4 block">
            {text.expertise}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-semibold text-[#0F172A] tracking-tight leading-tight mb-4">
            {text.custom}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-slate-600 font-medium leading-relaxed max-w-2xl">
            {text.desc}
          </p>
        </motion.div>

        {/* 6-Column Linear Grid */}
        <div className="border-t border-b border-slate-200/50">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/50"
          >
            {servicesData.slice(0, 6).map((program, index) => (
              <ServiceColumn 
                key={program.id} 
                program={program} 
                index={index} 
                t={t} 
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
