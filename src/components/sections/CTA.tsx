"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Blue glow top-right */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#2563EB]/12 blur-3xl" />
      {/* Violet glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#9FA1FF]/8 blur-3xl" />
      {/* Teal glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#D9F9DF]/12 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Badge – teal accent */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D9F9DF]" />
            <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-widest">
              Start Today
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Ready to Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#9FA1FF] to-[#2563EB]">
              Your Next System?
            </span>
          </h2>

          <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
            Partner with Digifore to transform your ideas into scalable custom systems, stunning dashboards, and high-performance apps.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary CTA – Blue to Violet */}
            <a
              href="#services"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#9FA1FF] text-white font-semibold rounded-2xl shadow-lg shadow-violet-500/25 hover:shadow-violet-500/45 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>
            {/* Secondary CTA – Teal outline */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 text-[#2563EB] font-semibold rounded-2xl border border-[#B5BAFF]/30 hover:bg-[#D9F9DF]/10 hover:border-[#B5BAFF]/60 transition-all duration-200"
            >
              <Mail size={18} />
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
