"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap, useGSAP } from "@/lib/gsap";

interface StackLayer {
  label: { en: string; id: string };
  items: string[];
}

// Every name below appears in shipped ZELLIO projects (see portfolio tags).
const layers: StackLayer[] = [
  {
    label: { en: "Interface", id: "Antarmuka" },
    items: ["React", "Next.js", "Vue.js", "Angular", "React Native", "TailwindCSS"],
  },
  {
    label: { en: "Application", id: "Aplikasi" },
    items: ["Node.js", "Go", "Java Spring", "Laravel", "Express", "WebSockets"],
  },
  {
    label: { en: "Data", id: "Data" },
    items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "Redis", "Firebase"],
  },
  {
    label: { en: "Infrastructure", id: "Infrastruktur" },
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Nginx", "CI/CD"],
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
        gsap.from(".stack-row", {
          y: 22,
          opacity: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".stack-rows", start: "top 82%", once: true },
        });
        gsap.from(".stack-head", {
          y: 18,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        });
      });
    },
    { scope: sectionRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <section
      id="stack"
      ref={sectionRef}
      aria-labelledby="stack-heading"
      className="relative bg-white border-t border-slate-200/60 py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="stack-head flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 lg:mb-14">
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

        {/* Layer diagram */}
        <div className="stack-rows">
          {layers.map((layer) => (
            <div
              key={layer.label.en}
              className="stack-row group grid grid-cols-1 sm:grid-cols-12 gap-y-2 gap-x-6 items-baseline border-t border-slate-200/70 py-5 sm:py-6 hover:bg-slate-50/70 transition-colors duration-300 sm:px-4 sm:-mx-4 rounded-lg"
            >
              <span className="sm:col-span-3 lg:col-span-2 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-blue-600 transition-colors duration-300">
                {layer.label[language]}
              </span>
              <div className="sm:col-span-9 lg:col-span-10 flex flex-wrap gap-x-3 gap-y-2">
                {layer.items.map((item, i) => (
                  <span key={item} className="flex items-baseline gap-3">
                    <span className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
                      {item}
                    </span>
                    {i < layer.items.length - 1 && (
                      <span className="text-slate-300 select-none" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t border-slate-200/70" />
        </div>
      </div>
    </section>
  );
}
