"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap, useGSAP } from "@/lib/gsap";
import { isReady } from "@/lib/ready";

const localText = {
  en: {
    eyebrow: "Software Engineering & Design Studio",
    slogan: ["BUILD", "DIGITAL", "SYSTEMS", "THAT LAST."],
    description:
      "Modern websites, custom applications, and enterprise software built with performance, scalability, and exceptional user experience in mind",
    primaryBtn: "Start Your Project",
    secondaryBtn: "Explore Our Work",
    scroll: "Scroll",
    foot: "10 Clients — 9 Industries",
  },
  id: {
    eyebrow: "Studio Rekayasa Perangkat Lunak & Desain",
    slogan: ["BANGUN", "SISTEM", "DIGITAL", "YANG ABADI."],
    description:
      "Kami membangun website modern, aplikasi web & mobile custom, serta perangkat lunak enterprise yang membantu bisnis berkembang dengan lebih cepat dan terukur.",
    primaryBtn: "Mulai Proyek",
    secondaryBtn: "Lihat Portofolio",
    scroll: "Scroll",
    foot: "10 Klien — 9 Industri",
  },
};

export default function HeroV2() {
  const { language } = useLanguage();
  const text = localText[language];
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ---- Intro timeline (plays once the splash releases the page) ----
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });

        tl.from(".hero-eyebrow", { y: 18, opacity: 0, duration: 0.6 })
          .from(
            ".hero-line",
            { yPercent: 120, duration: 1, stagger: 0.09 },
            "-=0.35"
          )
          .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, "-=0.55")
          .from(".hero-cta", { y: 16, opacity: 0, duration: 0.7 }, "-=0.5")
          .fromTo(
            ".hero-video-clip",
            { clipPath: "inset(0% 0% 0% 100%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "expo.out" },
            0.25
          )
          // Lands early rather than last — it used to appear ~5s after load,
          // by which point the reader has usually scrolled past it.
          .from(".hero-foot", { y: 12, opacity: 0, duration: 0.6 }, 0.5);

        // The splash now plays on every visit, so wait for it — unless it has
        // already finished (e.g. this is a remount after a language switch).
        let fallback: ReturnType<typeof setTimeout> | undefined;
        const play = () => tl.play();
        if (isReady()) {
          play();
        } else {
          window.addEventListener("zellio:ready", play, { once: true });
          fallback = setTimeout(play, 4000);
        }

        // ---- Scroll-linked exit: copy drifts up, video sinks slower ----
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          })
          .to(".hero-copy", { y: -90, opacity: 0 }, 0)
          .to(".hero-video-wrap", { y: 140, scale: 1.06 }, 0);

        // Scroll hint: the wheel dot falls and fades, then restarts.
        gsap
          .timeline({ repeat: -1, repeatDelay: 0.4 })
          .fromTo(
            ".hero-scroll-dash",
            { y: 0, opacity: 0 },
            { opacity: 1, duration: 0.22, ease: "power1.out" },
            0
          )
          .to(".hero-scroll-dash", { y: 16, duration: 1.05, ease: "power2.inOut" }, 0)
          .to(".hero-scroll-dash", { opacity: 0, duration: 0.35, ease: "power1.in" }, 0.7);

        // A slow bob on the body keeps the cue alive between dot cycles.
        gsap.to(".hero-mouse", {
          y: 4,
          duration: 1.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        return () => {
          window.removeEventListener("zellio:ready", play);
          if (fallback) clearTimeout(fallback);
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [".hero-eyebrow", ".hero-line", ".hero-desc", ".hero-cta", ".hero-foot"],
          { clearProps: "all" }
        );
      });
    },
    { scope: sectionRef, dependencies: [language], revertOnUpdate: true }
  );

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col bg-white overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(148, 163, 184, 0.025) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.025) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    >
      {/* Right-side vertical video, masked into the paper. The 4K source has
          headroom to spare at full-bleed, so object-cover only ever shrinks it. */}
      <div className="hero-video-wrap absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0 will-change-transform">
        <div
          className="hero-video-clip w-full h-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, transparent 40%, black 55%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, transparent 40%, black 55%, black 100%)",
          }}
        >
          <video
            src="/vertical_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{
              transform: "translate3d(0, 0, 0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>

      {/* Copy block */}
      <div className="hero-copy flex-1 w-full flex flex-col justify-center pt-32 lg:pt-24 pb-24 lg:pb-16 px-6 relative z-10 pointer-events-none will-change-transform">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 w-full max-w-[1400px] mx-auto items-center pointer-events-auto">
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center">
            <p className="hero-eyebrow flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-slate-500">
                {text.eyebrow}
              </span>
            </p>

            <h1 className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.75rem] font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              {text.slogan.map((word, idx) => (
                <span key={idx} className="block overflow-hidden py-1">
                  <span className="hero-line block will-change-transform">{word}</span>
                </span>
              ))}
            </h1>

            <p className="hero-desc text-slate-500 font-medium text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mb-10 pr-4">
              {text.description}
            </p>

            <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="/contact"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-2xl transition-all duration-300"
              >
                <span>{text.primaryBtn}</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
              <a
                href="#work"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-2xl border border-slate-200 transition-all duration-300"
              >
                {text.secondaryBtn}
              </a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 h-full w-full pointer-events-none" />
        </div>
      </div>

      {/* Scroll cue only. The client/industry count moved to TrustedBy, where
          it belongs — down here it sat below the fold on shorter screens. */}
      <div className="hero-foot absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-6 pb-8 flex items-end">
          <div className="flex items-center gap-4">
            {/* Mouse outline with a wheel dot travelling down it. The dot is
                offset with a margin rather than -translate-x-1/2, because GSAP
                writes to `transform` and would wipe out the centring. */}
            <span className="hero-mouse relative block w-[26px] h-[42px] rounded-full border-2 border-slate-400/90">
              <span className="hero-scroll-dash absolute left-1/2 -ml-[1.5px] top-[7px] block w-[3px] h-[8px] rounded-full bg-blue-600" />
            </span>
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.28em] uppercase text-slate-700">
              {text.scroll}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
