"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Target,
  Globe,
  Award,
  Users,
  TrendingUp,
  Eye,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Target,
  Globe,
  Award,
  Users,
  TrendingUp,
};

const localText = {
  en: {
    visionBadge: "Our Vision",
    missionBadgePre: "Our Mission — 0",
    bgVision: "Vision",
    bgMission: "Mission",
    items: [
      {
        type: "vision" as const,
        icon: "Eye",
        title: "Our Vision",
        subtitle: "To be the Top Digital Solutions Agency in Southeast Asia",
        description:
          "We envision a digital landscape where businesses of all sizes can leverage robust, scalable, and premium IT solutions to accelerate their growth and dominate their respective markets.",
        tags: ["Scalable Tech", "World-Class Quality", "Enterprise Solutions"],
      },
      {
        type: "mission" as const,
        icon: "Target",
        title: "Client-Centric Solutions",
        subtitle: "",
        description: "We design and build every system tailored specifically to your business flow and strategic requirements.",
        tags: [],
      },
      {
        type: "mission" as const,
        icon: "Globe",
        title: "Global Coding Standards",
        subtitle: "",
        description: "Our team adheres to strict international coding standards, ensuring highly clean, maintainable, and scalable codebases.",
        tags: [],
      },
      {
        type: "mission" as const,
        icon: "Award",
        title: "High-Performance Systems",
        subtitle: "",
        description: "We don't settle for slow. We build custom websites, dashboards, and enterprise platforms optimized for speed and high traffic.",
        tags: [],
      },
      {
        type: "mission" as const,
        icon: "Users",
        title: "Expert Tech Engineers",
        subtitle: "",
        description: "Our squad consists of top-tier full-stack developers, UI/UX designers, and cloud architects working dedicatedly for your project.",
        tags: [],
      },
      {
        type: "mission" as const,
        icon: "TrendingUp",
        title: "Continuous Tech Innovation",
        subtitle: "",
        description: "We constantly adopt the latest tech stacks and security patches to keep your digital infrastructure ahead of competitors.",
        tags: [],
      }
    ]
  },
  id: {
    visionBadge: "Visi Kami",
    missionBadgePre: "Misi Kami — 0",
    bgVision: "Visi",
    bgMission: "Misi",
    items: [
      {
        type: "vision" as const,
        icon: "Eye",
        title: "Visi Kami",
        subtitle: "Menjadi Agensi Solusi Digital Terbaik di Asia Tenggara",
        description:
          "Kami membayangkan ekosistem digital di mana semua bisnis dapat memanfaatkan solusi IT premium dan stabil untuk mempercepat pertumbuhan dan mendominasi pasarnya.",
        tags: ["Teknologi Stabil", "Kualitas Kelas Dunia", "Solusi Enterprise"],
      },
      {
        type: "mission" as const,
        icon: "Target",
        title: "Solusi Berpusat Pada Klien",
        subtitle: "",
        description: "Kami merancang dan membangun setiap sistem yang disesuaikan secara khusus dengan alur kerja dan kebutuhan strategis bisnis Anda.",
        tags: [],
      },
      {
        type: "mission" as const,
        icon: "Globe",
        title: "Standar Koding Global",
        subtitle: "",
        description: "Tim kami mematuhi standar koding internasional yang ketat untuk memastikan struktur kode yang bersih, mudah dikelola, dan stabil.",
        tags: [],
      },
      {
        type: "mission" as const,
        icon: "Award",
        title: "Sistem Berperforma Tinggi",
        subtitle: "",
        description: "Kami pantang membuat sistem lambat. Kami membangun website kustom, dashboard, dan platform enterprise yang cepat dan tahan banting saat diakses ribuan orang.",
        tags: [],
      },
      {
        type: "mission" as const,
        icon: "Users",
        title: "Tim IT Ahli",
        subtitle: "",
        description: "Tim kami diisi oleh full-stack developer papan atas, desainer UI/UX, dan arsitek cloud yang fokus mendedikasikan keterampilannya untuk proyek Anda.",
        tags: [],
      },
      {
        type: "mission" as const,
        icon: "TrendingUp",
        title: "Inovasi Teknologi Berkelanjutan",
        subtitle: "",
        description: "Kami terus mengadopsi teknologi dan sistem keamanan terbaru agar infrastruktur digital Anda selalu selangkah lebih maju dari kompetitor.",
        tags: [],
      }
    ]
  }
};

export default function VisionMission() {
  return (
    <section id="vision-mission" className="bg-[#F8FAFC]">
      {/* ══════════════════════════════════════
          VISION & MISSION — Unified Scroll Story
      ══════════════════════════════════════ */}
      <VisionMissionScroll />
    </section>
  );
}

function VisionMissionScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const text = localText[language];
  const combinedItems = text.items;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 6 items total (1 Vision + 5 Missions)
    const index = Math.min(Math.floor(latest * 6), 5);
    setActiveIndex(index);
  });

  return (
    <div ref={containerRef} className="relative mt-8 h-[800vh] w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#F8FAFC]">
        {/* Dynamic Glowing Background Orbs */}
        <div className={`absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] transition-all duration-1000 pointer-events-none ${combinedItems[activeIndex].type === "vision" ? "bg-[#9FA1FF]/20" : "bg-[#2563EB]/10"
          }`} />
        <div className={`absolute -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] transition-all duration-1000 pointer-events-none ${combinedItems[activeIndex].type === "vision" ? "bg-[#2563EB]/10" : "bg-[#2563EB]/15"
          }`} />

        {/* Abstract Dotted Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        />

        {/* Dynamic Watermark Text */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center transition-all duration-700">
          <span className={`text-[12vw] font-black uppercase select-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b transition-colors duration-1000 ${combinedItems[activeIndex].type === "vision"
            ? "from-[#9FA1FF]/25 to-[#F8FAFC]"
            : "from-slate-300/40 to-[#F8FAFC]"
            }`}>
            {combinedItems[activeIndex].type === "vision" ? text.bgVision : text.bgMission}
          </span>
        </div>

        {/* Dynamic Section Header Indicator */}
        <div className="mb-12 text-center z-10 relative h-12 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`text-lg md:text-xl font-black uppercase tracking-[0.4em] ${
                combinedItems[activeIndex].type === "vision"
                  ? "text-indigo-900"
                  : "text-blue-900"
              }`}
            >
              {combinedItems[activeIndex].type === "vision" ? text.visionBadge : `${text.missionBadgePre}${activeIndex}`}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Centered Content Display */}
        <div className="relative w-full max-w-5xl min-h-[500px] md:min-h-[420px] flex items-center justify-center z-10 px-4">
          <AnimatePresence mode="wait">
            {combinedItems.map((item, index) => {
              if (index !== activeIndex) return null;
              const Icon = iconMap[item.icon];

              // Custom Animation Renderer based on Icon Type
              const renderIconAnimation = () => {
                if (item.type === "vision" || item.icon === "Eye") {
                  return (
                    <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                      <motion.div animate={{ scale: [0.8, 1.8], opacity: [0.7, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }} className="absolute w-24 h-24 border-2 border-indigo-500/30 rounded-full" />
                      <motion.div animate={{ scale: [0.8, 1.8], opacity: [0.7, 0] }} transition={{ duration: 2.5, delay: 1.25, repeat: Infinity, ease: "easeOut" }} className="absolute w-24 h-24 border-2 border-indigo-500/30 rounded-full" />
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-28 h-28 rounded-full border-2 border-dashed border-indigo-500/60" />
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute w-20 h-20 rounded-full border border-indigo-400/40 flex items-start justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,1)] -mt-1.5" />
                      </motion.div>
                      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute w-28 h-28 bg-indigo-500/20 rounded-full blur-xl" />
                      <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-indigo-500 flex items-center justify-center shadow-[0_0_25px_rgba(99,102,241,0.3)] overflow-hidden z-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white" />
                        {Icon && <Icon size={28} className="text-indigo-600 relative z-10 drop-shadow-sm" />}
                      </div>
                    </div>
                  );
                }

                if (item.icon === "Target") {
                  return (
                    <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                      <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.2, 0.8] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute w-20 h-20 border-2 border-rose-500/50 rounded-full" />
                      <motion.div animate={{ rotate: 90 }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2, ease: "circInOut" }} className="absolute w-28 h-28 border-4 border-t-transparent border-b-transparent border-rose-500/70 rounded-full" />
                      <div className="absolute w-full h-[1px] bg-rose-500/20" />
                      <div className="absolute h-full w-[1px] bg-rose-500/20" />
                      <div className="relative w-16 h-16 rounded-full bg-white border-2 border-rose-500 flex items-center justify-center shadow-[0_0_30px_rgba(244,63,94,0.3)] z-10">
                        {Icon && <Icon size={28} className="text-rose-600 drop-shadow-sm" />}
                      </div>
                    </div>
                  );
                }

                if (item.icon === "Globe") {
                  return (
                    <div className="relative w-36 h-36 mb-6 flex items-center justify-center" style={{ perspective: "1000px" }}>
                      <motion.div animate={{ rotateX: 360, rotateY: 180 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-28 h-28 border-[1.5px] border-blue-400/50 rounded-full" style={{ transformStyle: "preserve-3d" }} />
                      <motion.div animate={{ rotateY: 360, rotateZ: 90 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute w-28 h-28 border-[1.5px] border-blue-400/50 rounded-full" style={{ transformStyle: "preserve-3d" }} />
                      <motion.div animate={{ rotateZ: -360, rotateX: 45 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-28 h-28 border-[1.5px] border-blue-400/50 rounded-full" style={{ transformStyle: "preserve-3d" }} />
                      <div className="absolute w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
                      <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10">
                        {Icon && <Icon size={28} className="text-blue-600 drop-shadow-sm" />}
                      </div>
                    </div>
                  );
                }

                if (item.icon === "Award") {
                  return (
                    <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                      <motion.div animate={{ y: [-10, -35], opacity: [0, 1, 0], scale: [0.5, 1.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="absolute top-4 left-6 text-amber-400 text-xl pointer-events-none">✨</motion.div>
                      <motion.div animate={{ y: [-10, -45], opacity: [0, 1, 0], scale: [0.5, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }} className="absolute top-8 right-4 text-amber-500 text-lg pointer-events-none">✨</motion.div>
                      <motion.div animate={{ scale: [1, 1.2, 1], filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-28 h-28 bg-amber-400/20 rounded-full blur-xl" />
                      <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative w-16 h-16 rounded-xl bg-gradient-to-tr from-amber-50 to-yellow-50 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.4)] z-10">
                        {Icon && <Icon size={28} className="text-amber-600 drop-shadow-sm" />}
                      </motion.div>
                    </div>
                  );
                }

                if (item.icon === "Users") {
                  return (
                    <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                      <motion.div animate={{ x: [-8, 12, -8], y: [-12, -4, -12] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-2 left-6 w-3 h-3 bg-fuchsia-400 rounded-full shadow-[0_0_12px_rgba(232,121,249,1)]" />
                      <motion.div animate={{ x: [12, -6, 12], y: [-6, 12, -6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-2 right-6 w-4 h-4 bg-fuchsia-500 rounded-full shadow-[0_0_12px_rgba(217,70,239,1)]" />
                      <motion.div animate={{ x: [-6, 6, -6], y: [12, -12, 12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-6 left-4 w-2 h-2 bg-fuchsia-300 rounded-full shadow-[0_0_10px_rgba(240,171,252,1)]" />

                      <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-24 h-24 border border-fuchsia-500/40 rounded-full" />
                      <div className="absolute w-28 h-28 bg-fuchsia-500/10 rounded-full blur-xl" />
                      <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-fuchsia-500 flex items-center justify-center shadow-[0_0_25px_rgba(217,70,239,0.3)] z-10">
                        {Icon && <Icon size={28} className="text-fuchsia-600 drop-shadow-sm" />}
                      </div>
                    </div>
                  );
                }

                if (item.icon === "TrendingUp") {
                  return (
                    <div className="relative w-36 h-36 mb-6 flex items-center justify-center overflow-hidden rounded-full">
                      <motion.div animate={{ x: [-100, 100], y: [100, -100] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px]" />
                      <motion.div animate={{ x: [-100, 100], y: [100, -100] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px] ml-12" />
                      <div className="absolute w-28 h-28 bg-emerald-500/15 rounded-full blur-xl" />
                      <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)] z-10">
                        {Icon && <Icon size={28} className="text-emerald-600 drop-shadow-sm" />}
                      </div>
                    </div>
                  );
                }

                // Fallback
                return (
                  <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-28 h-28 border-2 border-dashed border-teal-400/50 rounded-full" />
                    <div className="relative w-16 h-16 rounded-2xl bg-white border-2 border-teal-500 flex items-center justify-center shadow-[0_0_25px_rgba(20,184,166,0.3)] z-10">
                      {Icon && <Icon size={28} className="text-teal-600 drop-shadow-sm" />}
                    </div>
                  </div>
                );
              };

              if (item.type === "vision") {
                return (
                  <motion.div
                    key="vision-slide"
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-8"
                  >
                    {renderIconAnimation()}

                    {/* Premium Typography */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 mb-6 max-w-4xl leading-normal py-2 tracking-tight">
                      {item.subtitle}
                    </h3>

                    <p className="text-slate-500 font-medium text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                      {item.description}
                    </p>

                    {/* Highlight Tags */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full bg-white text-indigo-600 text-xs sm:text-sm font-bold tracking-wide uppercase border border-indigo-100 shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              // Mission items
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-8"
                >
                  {renderIconAnimation()}

                  {/* Premium Typography */}
                  <h3 className="text-3xl sm:text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 mb-6 py-2 leading-snug tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 font-medium text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Progress Dots Indicator */}
        <div className="flex gap-3 mt-10 z-10 relative">
          {combinedItems.map((item, index) => (
            <div
              key={index}
              className={`h-2.5 rounded-full transition-all duration-500 ${index === activeIndex
                ? item.type === "vision"
                  ? "w-10 bg-[#9FA1FF]"
                  : "w-10 bg-[#D9F9DF]"
                : "w-2.5 bg-gray-200"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
