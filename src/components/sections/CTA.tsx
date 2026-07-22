"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="pt-20 pb-8 lg:pt-24 lg:pb-12 bg-[#0F172A] relative overflow-hidden">
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

        </motion.div>
      </div>
    </section>
  );
}
