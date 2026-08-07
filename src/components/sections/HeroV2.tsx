"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { gsap, useGSAP } from "@/lib/gsap";
import { isReady } from "@/lib/ready";

const localText = {
  en: {
    eyebrow: "Greetings! We Are ZELLIO",
    slogan: ["Building digital", "systems that last."],
    description:
      "We are a creative team of designers, developers, and strategists building elevated websites and scalable custom platforms.",
    primaryBtn: "Get to know us",
    secondaryBtn: "Explore Our Work",
    scroll: "Scroll",
    foot: "5 Clients — 12+ Projects",
  },
  id: {
    eyebrow: "HAI ! KAMI ADALAH ZELLIO",
    slogan: ["Membangun sistem", "digital yang abadi."],
    description:
      "Kami adalah tim desainer, developer, dan arsitek perangkat lunak yang membangun sistem digital premium berstandar industri.",
    primaryBtn: "Mulai proyek",
    secondaryBtn: "Lihat Portofolio",
    scroll: "Scroll",
    foot: "5 Klien — 12+ Proyek",
  },
};

export default function HeroV2() {
  const { language } = useLanguage();
  const text = localText[language];
  const sectionRef = useRef<HTMLElement>(null);
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const sync = () => setAllowVideo(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ---- Intro timeline (plays once the splash releases the page) ----
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } });

        tl.fromTo(".hero-meta", { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
          .from(
            ".hero-line",
            { yPercent: 120, duration: 1, stagger: 0.09 },
            "-=0.35"
          )
          .fromTo(
            ".hero-pill",
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" },
            "-=0.5"
          )
          .fromTo(
            ".hero-meta-bottom",
            { y: 10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
            "-=0.4"
          )
          .from(".hero-eyebrow", { y: 14, opacity: 0, duration: 0.5 }, "-=0.3")
          .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, "-=0.45")
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
          [".hero-eyebrow", ".hero-line", ".hero-desc", ".hero-cta", ".hero-foot", ".hero-meta", ".hero-pill", ".hero-meta-bottom"],
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
      className="relative min-h-screen w-full flex flex-col bg-[#121212] overflow-hidden"
    >
      {/* Background Typography - Faded Outline */}
      <div className="absolute right-[-10%] top-[10%] lg:top-[15%] text-[45vw] lg:text-[28vw] font-black leading-none pointer-events-none select-none opacity-80"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.03)", color: "transparent" }}>
        Z E L L
      </div>
      <div className="absolute right-[-15%] bottom-[5%] lg:bottom-[5%] text-[45vw] lg:text-[28vw] font-black leading-none pointer-events-none select-none opacity-80"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.03)", color: "transparent" }}>
        I O
      </div>


      {/* Abstract geometric circle */}
      <div className="absolute right-[-20%] top-[-10%] w-[80vw] h-[80vw] rounded-full border border-white/5 pointer-events-none" />
      {/* Decorative Particles */}
      <div className="absolute left-[5%] top-[20%] flex gap-2 text-slate-600/50 text-xs font-mono pointer-events-none">
        + + +
      </div>
      <div className="absolute right-[25%] top-[30%] flex flex-col gap-2 text-slate-600/50 text-xs font-mono pointer-events-none">
        <span>+</span>
        <span>+</span>
      </div>

      {/* Background Video — desktop only; mobile uses static atmosphere (saves ~14MB on PSI). */}
      <div className="hero-video-wrap absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 will-change-transform" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(37,99,235,0.12),transparent_55%),linear-gradient(135deg,#121212_0%,#1a1a1a_50%,#0c0c0c_100%)]" />
        {allowVideo && (
          <video
            src="/cinematic.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="hero-video-clip absolute inset-0 w-full h-full object-cover opacity-[0.22]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/75 to-transparent" />
      </div>

      {/* Copy block with Editorial Asymmetrical Grid */}
      <div className="hero-copy flex-1 w-full flex flex-col justify-center pt-40 lg:pt-44 pb-24 lg:pb-16 px-6 lg:px-12 relative z-10 pointer-events-none will-change-transform">
        <div className="w-full max-w-[1400px] mx-auto pointer-events-auto relative">

          {/* Top Left Label (Studio Intro) */}
          <div className="hero-meta absolute top-[-50px] lg:top-[-80px] left-0 flex flex-col gap-2 opacity-0">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#60A5FA] uppercase">[ 01 // STUDIO INTRODUCTION ]</span>
            <span className="text-[10px] font-mono tracking-widest text-slate-300">EST. 2025</span>
          </div>

          {/* Asymmetric Header */}
          <div className="flex flex-col w-full mb-12 lg:mb-16">
            <h1 className="flex flex-col text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[4.2rem] xl:text-[5rem] 2xl:text-[6rem] font-black text-white tracking-tighter leading-[0.9] uppercase">
              {/* First Line */}
              <span className="block overflow-hidden py-1 relative">
                <span className="hero-line block will-change-transform relative z-10">
                  {text.slogan[0]}
                </span>
              </span>

              {/* Second Line (Indented) */}
              <span className="block py-1 relative lg:ml-[15%] flex items-center gap-4 lg:gap-8">
                <span className="hero-line block will-change-transform flex items-center flex-wrap gap-4 lg:gap-8">
                  {/* Inline pill badge */}
                  <span className="hero-pill hidden md:flex shrink-0 items-center justify-center px-6 py-2 lg:py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] lg:text-xs font-mono font-bold tracking-[0.2em] text-[#93C5FD] mb-1 lg:mb-0 opacity-0">
                    We're Ready
                  </span>
                  {(() => {
                    const words = text.slogan[1].split(" ");
                    const lastWord = words[words.length - 1];
                    const otherWords = words.slice(0, -1).join(" ");
                    return (
                      <>
                        {otherWords}{" "}
                        <span className="relative inline-block">
                          {lastWord}
                        </span>
                      </>
                    );
                  })()}
                </span>
              </span>
            </h1>
          </div>

          {/* Split Bottom Grid: Description on the right */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 mt-8 lg:mt-20">

            {/* Rotating Text Ring — editorial stamp, agency style */}
            <div className="hidden lg:flex absolute left-[28%] top-[35%] -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none" aria-hidden="true">
              <svg className="w-52 h-52" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false">
                <defs>
                  <path id="text-circle-path" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
                </defs>
                {/* Rotating text ring */}
                <g className="text-ring-rotate" style={{ transformOrigin: '100px 100px' }}>
                  <text
                    fontSize="11.2"
                    fill="rgba(255,255,255,0.85)"
                    fontFamily="'Space Mono', 'Courier New', monospace"
                    fontWeight="400"
                    letterSpacing="3.2"
                  >
                    <textPath href="#text-circle-path">
                      ZELLIO STUDIO ✦ SYSTEM · DEVELOP · STRATEGY ✦
                    </textPath>
                  </text>
                </g>
                {/* Center sparkle — 4-point star */}
                <g className="center-sparkle" style={{ transformOrigin: '100px 100px' }}>
                  <path
                    d="M100 88 L102.5 97.5 L112 100 L102.5 102.5 L100 112 L97.5 102.5 L88 100 L97.5 97.5 Z"
                    fill="rgba(255,255,255,0.85)"
                  />
                </g>
              </svg>
              <style>{`
                @keyframes text-ring-spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                .text-ring-rotate {
                  animation: text-ring-spin 22s linear infinite;
                }
                @keyframes sparkle-breathe {
                  0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.6; }
                  50% { transform: scale(1.15) rotate(45deg); opacity: 1; }
                }
                .center-sparkle {
                  animation: sparkle-breathe 4s ease-in-out infinite;
                }
              `}</style>
            </div>

            {/* Left side meta tags (Coordinates etc) */}
            <div className="hidden lg:flex col-span-5 flex-col justify-end gap-1 pb-4">
              <span className="hero-meta-bottom text-[10px] font-mono text-slate-300 uppercase tracking-widest">HQ: JAKARTA, INDONESIA</span>
              <span className="hero-meta-bottom text-[10px] font-mono text-slate-300 uppercase tracking-widest">SYS: ACTIVE V2.0</span>
            </div>

            {/* Right side Description + CTA */}
            <div className="relative col-span-1 lg:col-span-6 lg:col-start-7 flex flex-col items-start lg:border-l lg:border-white/10 lg:pl-12 pt-2">
              <p className="hero-eyebrow mb-5 text-[#60A5FA] font-bold text-[10px] lg:text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                {/* On mobile, show it inline next to the text */}
                <span className="lg:hidden inline-flex items-center text-white shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" role="presentation" focusable="false">
                    <path d="M12 4v16M4 12h16" strokeLinecap="round" className="animate-[pulse_1.8s_ease-in-out_infinite]" />
                    <circle cx="12" cy="12" r="6" strokeWidth="1" strokeDasharray="3 2" className="animate-[spin_12s_linear_infinite]" />
                  </svg>
                </span>
                <span>{text.eyebrow}</span>
              </p>

              <p className="hero-desc text-slate-300 font-medium text-base lg:text-xl leading-relaxed max-w-lg mb-10">
                {text.description}
              </p>

              <div className="hero-cta">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-bold text-[11px] lg:text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                  <span>{text.primaryBtn}</span>
                  <span className="group-hover:rotate-45 transition-transform duration-300 text-lg leading-none">+</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll cue (Baunfire style vertical text) */}
      <div className="hero-foot absolute bottom-0 right-4 lg:right-10 z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-4 pb-12">
          <span className="hero-mouse text-[10px] lg:text-[11px] font-mono font-bold tracking-[0.4em] uppercase text-white/70"
            style={{ writingMode: "vertical-rl" }}>
            {text.scroll}
          </span>
          <div className="relative h-16 w-[2px] overflow-hidden bg-white/10 rounded-full">
            <span className="hero-scroll-dash absolute top-0 left-0 block w-full h-1/2 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
