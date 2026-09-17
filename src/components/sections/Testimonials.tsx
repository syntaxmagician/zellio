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
    <section className="py-20 lg:py-28 bg-[#EEF5FF] text-slate-900 overflow-hidden relative border-y border-[#D6E6FE]">
      {/* Decorative colored ambient light */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-[#3B82F6]/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-[#60A5FA]/15 blur-[90px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-stretch relative z-10">
        
        {/* Left Column */}
        <div className="flex-shrink-0 w-full lg:w-[320px] flex flex-col justify-between text-center lg:text-left z-10 py-2">
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-mono font-extrabold tracking-[0.22em] text-blue-600 uppercase">
                {text.badge}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {text.title}
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-3 leading-relaxed hidden lg:block">
              {language === "en"
                ? "Direct feedback from founders and tech leads who built with ZELLIO."
                : "Pengalaman nyata dari founder dan tech lead yang membangun sistem bersama ZELLIO."}
            </p>
          </div>
          
          <div className="hidden lg:flex gap-3 mt-8">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/90 border border-blue-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:bg-white shadow-sm transition-all active:scale-95 cursor-pointer"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-600/25 transition-all active:scale-95 cursor-pointer font-bold"
              aria-label="Next"
            >
              <ArrowRight size={18} />
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
                className={`man-stat-card snap-start shrink-0 w-[300px] sm:w-[380px] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 min-h-[240px] ${
                  activeIndex === i 
                    ? "bg-white border border-blue-200/80 shadow-[0_16px_36px_rgba(37,99,235,0.1)] scale-[1.01]" 
                    : "bg-white/70 border border-blue-100/70 opacity-60 scale-[0.98]"
                }`}
              >
                <div className="mb-6">
                  <p className="text-[14px] leading-relaxed text-slate-700 font-medium">
                    "{language === "en" ? t.quote_en : t.quote_id}"
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 border-t border-slate-100 pt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={14} className="fill-amber-400 text-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3.5">
                    {/* Circle Avatar Badge */}
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs uppercase tracking-wider shadow-sm shadow-blue-600/20">
                      {t.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-[13px] text-slate-900 uppercase tracking-wider">
                        {t.name}
                      </h3>
                      <p className="text-[10.5px] font-bold tracking-wider text-blue-600 mt-0.5 uppercase">
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex lg:hidden justify-center gap-3 mt-6">
            <button 
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-blue-200 flex items-center justify-center text-slate-700 hover:bg-slate-50 transition-all active:scale-95"
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-600/20 transition-all active:scale-95"
              aria-label="Next"
            >
              <ArrowRight size={18} />
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
