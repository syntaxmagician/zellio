"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare } from "lucide-react";

const localText = {
  en: {
    hashtag: "#AlwaysThere",
    slogan: "Accelerating Your Digital Growth!",
    btnConsult: "Consult Now",
    btnContact: "Contact Us"
  },
  id: {
    hashtag: "#SelaluAda",
    slogan: "Bersama Kesuksesan Bisnis Anda!",
    btnConsult: "Konsultasi Sekarang",
    btnContact: "Hubungi Kami"
  }
};

export default function Banner() {
  const { language } = useLanguage();
  const text = localText[language];

  return (
    <section className="w-full bg-[#0B2545] border-y border-blue-900/40 relative overflow-hidden py-8 md:py-10">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[100px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative z-10">
        
        {/* Left Side: Photo + Slogan */}
        <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
          
          {/* Circular Bob-cut Asian Woman Avatar (Pemanis) */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue-400/30 flex-shrink-0 shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
            <Image 
              src="/cute-asian-woman.png" 
              alt="Zellio Consultant" 
              fill 
              className="object-cover object-top scale-110"
              sizes="80px"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-blue-400 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
              {text.hashtag}
            </span>
            <h3 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-tight">
              {text.slogan}
            </h3>
          </div>

        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto justify-start md:justify-end flex-wrap sm:flex-nowrap">
          
          {/* Premium Green Button (Consultation instead of Coba Gratis) */}
          <a 
            href="#contact"
            className="flex-1 sm:flex-none text-center bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            {text.btnConsult}
          </a>

          {/* White WhatsApp/Contact Button */}
          <a 
            href="#contact"
            className="flex-1 sm:flex-none text-center bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-lg border border-slate-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <MessageSquare size={16} className="text-slate-600" />
            <span>{text.btnContact}</span>
          </a>

        </div>

      </div>
    </section>
  );
}
