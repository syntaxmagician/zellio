"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Palette,
} from "lucide-react";
import { whyChooseItems } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  ShieldAlert,
  CalendarCheck,
  Palette,
};

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden relative">
      <div className="section-container relative z-10 max-w-7xl mx-auto">
        
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] mb-6 tracking-tight">
            The Digifore Advantage
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            We combine elite engineering with an agile, transparent development process to guarantee your project's success.
          </p>
        </motion.div>

        {/* ── BOLD PHILOSOPHY CALLOUT ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="max-w-4xl mx-auto mb-20 p-6 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#FFF7ED] via-[#FFF1F2]/80 to-transparent border border-[#FECDD3] flex flex-col md:flex-row items-center gap-6 shadow-xl shadow-rose-500/[0.02]"
        >
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-600 shrink-0 shadow-inner">
            <ShieldAlert size={28} />
          </div>
          <div>
            <h4 className="text-lg font-black text-slate-800 mb-1 tracking-tight flex items-center gap-2">
              Invest in Quality, Avoid Broken Systems
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Banyak bisnis terjebak dengan penawaran pembuatan sistem murah yang akhirnya berakhir kacau — kode tidak bisa dikembangkan, sistem sering <i>crash</i>, dan proyek mangkrak. Kami di Digifore percaya bahwa sistem IT adalah investasi jangka panjang bisnis Anda. Kami membangun fondasi kode yang kokoh, aman, dan siap berkembang dari awal.
            </p>
          </div>
        </motion.div>

        {/* ── PART 1: WHY CHOOSE US (Minimalist Borderless Highlights) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25, scale: 0.95, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="group relative flex gap-5 items-start p-4 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-gray-100 cursor-default"
              >
                <div className="w-14 h-14 rounded-[20px] flex items-center justify-center shrink-0 border border-slate-200 bg-white group-hover:bg-gradient-to-br group-hover:from-[#9FA1FF] group-hover:to-[#2563EB] group-hover:border-transparent transition-colors duration-300 shadow-sm">
                  {Icon && <Icon size={24} className="text-[#2563EB] group-hover:text-white transition-colors duration-300" />}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-extrabold text-[#0F172A] mb-2 group-hover:text-[#9FA1FF] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
