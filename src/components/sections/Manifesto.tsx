"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap, useGSAP } from "@/lib/gsap";

const localText = {
  en: {
    badge: "Who We Are",
    statement:
      "ZELLIO is a software engineering and design studio. We partner with founders and enterprises to build digital products that hold up — under load, under audit, and under years of change.",
    stats: [
      { label: "Projects Delivered", value: "150+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Enterprise Clients", value: "50+" },
      { label: "Years Experience", value: "8+" },
    ],
  },
  id: {
    badge: "Siapa Kami",
    statement:
      "ZELLIO adalah studio rekayasa perangkat lunak dan desain. Kami bermitra dengan founder dan perusahaan untuk membangun produk digital yang tetap tangguh — di bawah beban, audit, dan perubahan bertahun-tahun.",
    stats: [
      { label: "Proyek Selesai", value: "15+" },
      { label: "Kepuasan Klien", value: "98%" },
      { label: "Klien Perusahaan", value: "10+" },
      { label: "Tahun Pengalaman", value: "4+" },
    ],
  },
};

function splitStat(value: string): { target: number; suffix: string } {
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  return { target, suffix };
}

export default function Manifesto() {
  const { language } = useLanguage();
  const text = localText[language];
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Words brighten from ghost to ink as the statement scrolls through.
        gsap.fromTo(
          ".man-word",
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.4,
            ease: "none",
            scrollTrigger: {
              trigger: ".man-statement",
              start: "top 78%",
              end: "bottom 45%",
              scrub: 0.4,
            },
          }
        );

        // Stat counters roll up once when the row enters. Zero them out first so
        // the count is always visible, never a jump from the SSR final value.
        gsap.utils.toArray<HTMLElement>(".man-stat-value").forEach((el) => {
          const target = Number(el.dataset.target ?? 0);
          const suffix = el.dataset.suffix ?? "";
          const state = { value: 0 };
          el.textContent = `0${suffix}`;
          gsap.to(state, {
            value: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: { trigger: ".man-stats", start: "top 82%", once: true },
            onUpdate: () => {
              el.textContent = `${Math.round(state.value)}${suffix}`;
            },
          });
        });

        gsap.from(".man-stat", {
          y: 18,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".man-stats", start: "top 88%", once: true },
        });
      });
    },
    { scope: sectionRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="relative bg-white border-t border-slate-200/60 py-24 lg:py-36 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-blue-600 mb-8 block">
          {text.badge}
        </span>

        <h2
          id="about-heading"
          className="man-statement max-w-5xl text-2xl sm:text-4xl lg:text-[3.4rem] font-black text-slate-900 tracking-tight leading-[1.18] lg:leading-[1.15]"
        >
          {text.statement.split(" ").map((word, i) => (
            <span key={`${language}-${i}`} className="man-word inline-block mr-[0.28em]">
              {word}
            </span>
          ))}
        </h2>

        <div className="man-stats mt-16 lg:mt-24 pt-10 border-t border-slate-200/70 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {text.stats.map((stat) => {
            const { target, suffix } = splitStat(stat.value);
            return (
              <div key={stat.label} className="man-stat">
                <div
                  className="man-stat-value stat-number text-4xl sm:text-5xl font-black tracking-tighter text-slate-900"
                  data-target={target}
                  data-suffix={suffix}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
