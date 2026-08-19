"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { shouldSkipSplash } from "@/lib/splash";
import { markReady } from "@/lib/ready";

export default function SplashLoader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (shouldSkipSplash()) {
        onDone();
        return;
      }

      const tl = gsap.timeline({ 
        onComplete: () => {
          markReady();
          onDone();
        } 
      });

      // Keep background glow spheres slowly moving/pulsing in the background
      gsap.to(".sl-glow-1", { x: 40, y: -20, scale: 1.15, duration: 4, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(".sl-glow-2", { x: -50, y: 30, scale: 1.1, duration: 4.5, ease: "sine.inOut", repeat: -1, yoyo: true });
      gsap.to(".sl-glow-3", { x: 20, y: 40, scale: 1.2, duration: 4.2, ease: "sine.inOut", repeat: -1, yoyo: true });

      // 1. Letters slide in
      tl.from(".sl-letter", {
        yPercent: 115,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.05,
      })
        // 2. Tagline fades in
        .from(".sl-tag", { opacity: 0, y: 10, duration: 0.6, ease: "power2.out" }, 0.6)
        
        // 3. Letters and tagline slide up and fade away
        .to([".sl-lockup", ".sl-tag"], { opacity: 0, y: -20, duration: 0.45, ease: "power3.in" }, 1.7)
        
        // 4. Logo emerges out of liquid glass
        .fromTo(
          ".sl-burst",
          { scale: 0.8, opacity: 0 },
          { scale: 1.25, opacity: 1, duration: 0.85, ease: "power3.out" },
          1.95
        )
        // Subtle pulse focus on the logo
        .to(".sl-burst", { scale: 1.35, duration: 0.65, ease: "power2.out" }, 2.8)
        
        // 5. Fade out and dissolve the glassmorphism backdrop blur
        .to(".sl-glass", { 
          backdropFilter: "blur(0px)", 
          backgroundColor: "rgba(0,0,0,0)", 
          duration: 0.85, 
          ease: "power3.inOut" 
        }, 3.3)
        .to([".sl-glow-container", ".sl-burst"], { 
          opacity: 0, 
          scale: 1.45, 
          duration: 0.8, 
          ease: "power3.inOut" 
        }, 3.3)
        .to(root.current, { display: "none", duration: 0.1 });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="fixed inset-0 z-[99999] bg-[#070709] overflow-hidden select-none">
      {/* Background Liquid Aurora Glow Spheres */}
      <div className="sl-glow-container absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="sl-glow-1 absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-indigo-600/20 blur-[130px]" />
        <div className="sl-glow-2 absolute -bottom-[10%] -right-[10%] w-[65vw] h-[65vw] rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="sl-glow-3 absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* Glassmorphism Frosted Panel */}
      <div className="sl-glass absolute inset-0 z-20 bg-black/40 backdrop-blur-[90px]" />

      {/* Content Layer */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-6">
        
        {/* Burst Logo (Ultra HD Liquid emerging logo) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/zellio4.png"
            alt="ZELLIO Logo"
            aria-hidden="true"
            width={1200}
            height={800}
            priority
            className="sl-burst w-[min(95vw,720px)] md:w-[min(95vw,840px)] h-auto select-none opacity-0 object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {/* Text Lockup */}
        <div className="sl-lockup flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <span className="overflow-hidden block">
              <span className="sl-letter sl-z block font-black text-white leading-[0.9] tracking-tighter text-[16vw] sm:text-[12vw] md:text-[9rem] drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                Z
              </span>
            </span>
            <span className="sl-rest overflow-hidden whitespace-nowrap flex">
              {["E", "L", "L", "I", "O"].map((c, i) => (
                <span key={i} className="overflow-hidden block">
                  <span className="sl-letter block font-black text-white leading-[0.9] tracking-tighter text-[16vw] sm:text-[12vw] md:text-[9rem] drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                    {c}
                  </span>
                </span>
              ))}
            </span>
          </div>

          <span className="sl-tag mt-6 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-white/70 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Digital Engineering
          </span>
        </div>

      </div>
    </div>
  );
}
