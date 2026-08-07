"use client";

import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { testimonials } from "@/lib/data";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const localText = {
  en: {
    badge: "TESTIMONIAL",
    title: "What They Say",
  },
  id: {
    badge: "TESTIMONIAL",
    title: "Apa Kata Mereka",
  },
};

export default function Testimonials() {
  const { language } = useLanguage();
  const text = localText[language];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll to the active index when it changes
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const cards = container.querySelectorAll(".man-stat-card");
      if (cards && cards[activeIndex]) {
        const card = cards[activeIndex] as HTMLElement;
        const containerWidth = container.clientWidth;
        const cardWidth = card.clientWidth;
        
        // Center the active card or scroll to its starting position
        const targetScrollLeft = card.offsetLeft - (containerWidth - cardWidth) / 2;
        
        container.scrollTo({
          left: Math.max(0, targetScrollLeft),
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#06101E] via-[#0E2A47] to-[#1D4ED8] overflow-hidden relative">
      {/* Decorative colored ambient glows to match the design style */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-stretch relative z-10">
        
        {/* Left Column */}
        <div className="flex-shrink-0 w-full lg:w-[300px] flex flex-col justify-between text-center lg:text-left z-10 py-2">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-300 block mb-2 relative">
              {text.badge}
              <span className="block w-10 h-[2.5px] bg-cyan-400 mt-2 mx-auto lg:mx-0"></span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mt-4">
              {text.title}
            </h2>
          </div>
          
          <div className="hidden lg:flex gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 shadow-sm transition-all active:scale-95 cursor-pointer"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white text-blue-600 hover:bg-slate-100 flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer border border-white/40 font-bold"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Right Column: Carousel */}
        <div className="flex-1 w-full overflow-hidden relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 pt-2 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`man-stat-card snap-start shrink-0 w-[300px] sm:w-[380px] rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 min-h-[220px] ${
                  activeIndex === i 
                    ? "bg-white/[0.08] backdrop-blur-xl border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.15)] scale-[1.01]" 
                    : "bg-white/[0.02] backdrop-blur-md border border-white/5 opacity-60 scale-[0.98]"
                }`}
              >
                <div className="mb-6">
                  <p className="text-[14px] leading-relaxed text-slate-200 font-medium">
                    {language === "en" ? t.quote_en : t.quote_id}
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={15} className="fill-yellow-400 text-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* Circle Avatar (Initials instead of photo) */}
                    <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-extrabold text-sm uppercase">
                      {t.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                    
                    <div>
                      <h4 className="font-extrabold text-[13px] text-white uppercase tracking-wider">
                        {t.name}
                      </h4>
                      <p className="text-[10px] font-bold tracking-widest text-[#38bdf8] mt-1 uppercase">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-center gap-4 mt-6">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 hover:bg-white/10 hover:border-white/20 shadow-sm transition-all active:scale-95"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#2563EB] hover:bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transition-all active:scale-95"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Global style to hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
