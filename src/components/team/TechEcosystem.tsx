"use client";

import { useLanguage } from "@/context/LanguageContext";
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

const localText = {
  en: {
    badge: "TECHNOLOGY ECOSYSTEM",
    title: "Architected with modern,\nproduction core tools.",
    subtitle: "We use stable, high-performance open-source systems to compose our production blueprints."
  },
  id: {
    badge: "EKOSISTEM TEKNOLOGI",
    title: "Dirancang dengan perkakas\nmodern berstandar korporat.",
    subtitle: "Kami menggunakan sistem sumber terbuka yang stabil dan berkinerja tinggi untuk merakit solusi perangkat lunak kami."
  }
};

const topRow = [
  { name: "React", icon: SiReact, category: "FRONTEND", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, category: "FRONTEND", color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, category: "BACKEND", color: "#339933" },
  { name: "Go", icon: SiGo, category: "BACKEND", color: "#00ADD8" },
  { name: "Flutter", icon: SiFlutter, category: "FRONTEND", color: "#02569B" },
  { name: "AWS", icon: FaAws, category: "DEVOPS", color: "#FF9900" },
];

const bottomRow = [
  { name: "Docker", icon: SiDocker, category: "DEVOPS", color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, category: "DEVOPS", color: "#326CE5" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "DATABASE", color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, category: "DATABASE", color: "#47A248" },
  { name: "Figma", icon: SiFigma, category: "DESIGN", color: "#F24E1E" },
  { name: "TypeScript", icon: SiTypescript, category: "FRONTEND", color: "#3178C6" },
];

const TechCard = ({ tech }: { tech: any }) => (
  <div className="w-[280px] h-[120px] bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center gap-3 transition-colors duration-300 relative group overflow-hidden shrink-0 mx-3 backdrop-blur-sm">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)` }} />
    <tech.icon size={36} style={{ color: tech.color }} className="group-hover:scale-110 transition-transform duration-300 relative z-10" />
    <div className="text-center relative z-10">
      <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase block mb-1">{tech.category}</span>
      <span className="text-sm font-bold text-slate-200">{tech.name}</span>
    </div>
  </div>
);

export default function TechEcosystem() {
  const { language } = useLanguage();
  const text = localText[language as "en" | "id"] || localText.en;

  // Duplicate arrays to make seamless scrolling
  const topRowDuplicated = [...topRow, ...topRow, ...topRow, ...topRow];
  const bottomRowDuplicated = [...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <section className="w-full bg-[#030712] py-24 md:py-32 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 mb-16 md:mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-blue-500 mb-4 block"
        >
          {text.badge}
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight mb-6 whitespace-pre-line leading-[1.1]"
        >
          {text.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-slate-400 max-w-2xl"
        >
          {text.subtitle}
        </motion.p>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 w-full flex flex-col gap-6 overflow-hidden">
        {/* Shadow overlays for edge fading */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />

        {/* Row 1 (Moving Left) */}
        {/* Item width: 280px + (mx-3 = 24px) = 304px. Set of 6 items = 1824px */}
        <div className="flex w-max group">
          <motion.div
            animate={{ x: [0, -1824] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            className="flex group-hover:duration-[100s] transition-all"
          >
            {topRowDuplicated.map((tech, i) => (
              <TechCard key={`${tech.name}-top-${i}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 (Moving Right) */}
        <div className="flex w-max group">
          <motion.div
            animate={{ x: [-1824, 0] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex group-hover:duration-[100s] transition-all"
          >
            {bottomRowDuplicated.map((tech, i) => (
              <TechCard key={`${tech.name}-bot-${i}`} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
