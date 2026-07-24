"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function TeamCTA() {
  return (
    <section className="w-full bg-[#FAFAFA] border-t border-slate-100 relative overflow-hidden py-16 lg:py-24 text-center">
      {/* Visual background accents */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <span className="text-[10px] font-mono font-bold text-slate-400 tracking-[0.2em] uppercase block mb-6">
          JOIN THE SQUAD
        </span>
        
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.05] mb-8">
          Want to build products that matter?
        </h2>
        
        <p className="text-base sm:text-lg font-medium text-slate-500 leading-relaxed max-w-2xl mx-auto mb-6">
          We're always looking for engineers who care about quality, performance, and craftsmanship. If you're ready to engineer the future of enterprise software, let's talk.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="/contact" className="w-full sm:w-auto">
            <button className="w-full group flex items-center justify-center gap-2 bg-[#0F172A] text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(15,23,42,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(15,23,42,0.4)] hover:-translate-y-0.5 transition-all duration-300">
              View Careers
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
          
          <a href="/contact" className="w-full sm:w-auto">
            <button className="w-full group flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 transition-all duration-300">
              <MessageSquare size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
              Start a Conversation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
