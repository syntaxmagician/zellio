"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Intro loader, ZELLIO cut of the dd.nyc pattern:
 *   1. the long lockup writes itself in
 *   2. it collapses down to the single brand letter
 *   3. that letter blows up while the panel splits open on the page
 *
 * The mark is real type rather than the logo PNG so it stays crisp at 20x.
 */
export default function SplashLoader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        onDone();
        return;
      }

      const tl = gsap.timeline({ onComplete: onDone });

      tl.from(".sl-letter", {
        yPercent: 115,
        duration: 0.75,
        ease: "power4.out",
        stagger: 0.045,
      })
        .from(".sl-tag", { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" }, 0.45)
        .to(".sl-tag", { opacity: 0, duration: 0.3, ease: "power2.in" }, 1.15)
        // "ELLIO" retracts into the Z — width, not opacity, so the Z re-centres
        .to(".sl-rest", { width: 0, duration: 0.6, ease: "power3.inOut" }, 1.25)
        .to(".sl-z", { scale: 1.15, duration: 0.6, ease: "power3.inOut" }, 1.25)
        // the letter hands off to the oversized version sitting behind the panels
        .to(".sl-lockup", { opacity: 0, duration: 0.25, ease: "power2.in" }, 1.95)
        .fromTo(
          ".sl-burst",
          { scale: 0.45, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.85, ease: "power3.out" },
          1.9
        )
        // panel splits at the horizon, page shows through the gap
        .to(".sl-panel-top", { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, 2.1)
        .to(".sl-panel-bottom", { yPercent: 100, duration: 0.9, ease: "power4.inOut" }, 2.1)
        .to(".sl-burst", { opacity: 0, duration: 0.45, ease: "power2.in" }, 2.5);
    },
    { scope: root }
  );

  return (
    <div ref={root} className="fixed inset-0 z-[99999] overflow-hidden">
      {/* Brand mark — hidden behind the panels until they part.
          The glyph is only ~15% of this PNG's canvas, so the image is drawn at
          roughly its native width to keep the mark itself pixel-sharp; the
          transparent surround simply overflows. */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <Image
          src="/zellio_logo.png"
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          priority
          className="sl-burst w-[1536px] max-w-none h-auto select-none opacity-0"
        />
      </div>

      <div className="sl-panel-top absolute top-0 left-0 w-full h-1/2 bg-[#F4F4F5] z-20" />
      <div className="sl-panel-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#F4F4F5] z-20" />

      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-6">
        <div className="sl-lockup flex items-center justify-center">
          {/* each letter gets its own overflow-hidden reveal mask */}
          <span className="overflow-hidden block">
            <span className="sl-letter sl-z block font-black text-slate-900 leading-[0.9] tracking-tighter text-[19vw] sm:text-[13vw] md:text-[9rem]">
              Z
            </span>
          </span>
          <span className="sl-rest overflow-hidden whitespace-nowrap flex">
            {["E", "L", "L", "I", "O"].map((c, i) => (
              <span key={i} className="overflow-hidden block">
                <span className="sl-letter block font-black text-slate-900 leading-[0.9] tracking-tighter text-[19vw] sm:text-[13vw] md:text-[9rem]">
                  {c}
                </span>
              </span>
            ))}
          </span>
        </div>

        <span className="sl-tag mt-5 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.42em] text-slate-400">
          Digital Engineering
        </span>
      </div>
    </div>
  );
}
