"use client";

import { useRef } from "react";
import type { ComponentType, CSSProperties } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap, useGSAP } from "@/lib/gsap";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiSpring,
  SiLaravel,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiNginx,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
// Oracle, WebSockets and CI/CD have no brand mark in Simple Icons
// (trademark-pruned or not a product) — neutral glyphs stand in.
import { Database, Waypoints, Infinity as InfinityIcon } from "lucide-react";

interface TechItem {
  name: string;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  /** Tuned for a white background — a few official hexes are dark-UI only. */
  color: string;
}

interface StackLayer {
  label: { en: string; id: string };
  items: TechItem[];
}

// Every name below appears in shipped ZELLIO projects (see portfolio tags).
const layers: StackLayer[] = [
  {
    label: { en: "Interface", id: "Antarmuka" },
    items: [
      { name: "React", icon: SiReact, color: "#087EA4" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#3FA372" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "React Native", icon: SiReact, color: "#087EA4" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#0891B2" },
    ],
  },
  {
    label: { en: "Application", id: "Aplikasi" },
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Go", icon: SiGo, color: "#007D9C" },
      { name: "Java Spring", icon: SiSpring, color: "#5E9E32" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "WebSockets", icon: Waypoints, color: "#475569" },
    ],
  },
  {
    label: { en: "Data", id: "Data" },
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
      { name: "Oracle", icon: Database, color: "#C74634" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#D82C20" },
      { name: "Firebase", icon: SiFirebase, color: "#F57C00" },
    ],
  },
  {
    label: { en: "Infrastructure", id: "Infrastruktur" },
    items: [
      { name: "AWS", icon: FaAws, color: "#E08600" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "CI/CD", icon: InfinityIcon, color: "#475569" },
    ],
  },
];

const localText = {
  en: {
    badge: "Technology Stack",
    headline: "Every layer, covered.",
    desc: "From the pixels down to the infrastructure they run on — one team owns the whole system.",
  },
  id: {
    badge: "Teknologi Kami",
    headline: "Semua lapisan, kami pegang.",
    desc: "Dari piksel di layar sampai infrastruktur di baliknya — satu tim memegang keseluruhan sistem.",
  },
};

export default function TechStack() {
  const { language } = useLanguage();
  const text = localText[language];
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".stack-head", {
          y: 18,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        });

        // Column rules draw themselves left-to-right, then the entries land
        // under them. Motion happens once on arrival — nothing loops.
        gsap.from(".ts-rule", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".ts-grid", start: "top 84%", once: true },
        });
        gsap.from(".ts-colhead", {
          y: 14,
          opacity: 0,
          duration: 0.55,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: ".ts-grid", start: "top 84%", once: true },
        });
        gsap.from(".ts-item", {
          y: 16,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: { each: 0.035, from: "start" },
          scrollTrigger: { trigger: ".ts-grid", start: "top 80%", once: true },
        });
      });
    },
    { scope: sectionRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <section
      id="tech"
      ref={sectionRef}
      aria-labelledby="stack-heading"
      className="relative bg-white border-t border-slate-200/60 py-20 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="stack-head flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-4 block">
              {text.badge}
            </span>
            <h2
              id="stack-heading"
              className="text-3xl sm:text-4xl md:text-[3rem] font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              {text.headline}
            </h2>
          </div>
          <p className="max-w-md text-[15px] md:text-base text-slate-500 leading-relaxed font-medium lg:text-right lg:pb-2">
            {text.desc}
          </p>
        </div>

        {/* Four columns, one per layer — 24 entries land in a 4x6 field with
            no repetition and nothing in perpetual motion. */}
        <div className="ts-grid grid grid-cols-2 lg:grid-cols-4 gap-x-8 xl:gap-x-12 gap-y-14 mt-16 lg:mt-20">
          {layers.map((layer, colIndex) => (
            <div key={layer.label.en} className="ts-col">
              <div className="ts-colhead flex items-baseline gap-3">
                <span className="font-mono text-[10px] font-bold text-slate-300 tabular-nums">
                  {String(colIndex + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] uppercase text-slate-900">
                  {layer.label[language]}
                </span>
              </div>
              <div className="ts-rule h-px bg-slate-900/15 mt-4 mb-7" />

              <ul className="flex flex-col gap-5">
                {layer.items.map((item) => (
                  <li
                    key={item.name}
                    className="ts-item group flex items-center gap-3.5 transition-transform duration-300 hover:translate-x-1.5"
                  >
                    <item.icon
                      className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: item.color }}
                    />
                    <span className="text-[17px] lg:text-lg font-bold text-slate-700 tracking-tight group-hover:text-slate-950 transition-colors duration-300">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
