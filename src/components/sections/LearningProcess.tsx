"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  MessageSquare,
  BookOpen,
  ClipboardCheck,
  Award,
} from "lucide-react";
import { learningSteps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  ClipboardList,
  MessageSquare,
  BookOpen,
  ClipboardCheck,
  Award,
};

export default function LearningProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-28 bg-white overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-4 border border-teal-100">
            Learning Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Your Journey With{" "}
            <span className="gradient-text">Digifore</span>
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            A structured, end-to-end learning experience designed to take you
            from enrollment to certification.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div ref={ref} className="hidden md:block relative">
          {/* Progress line */}
          <div className="absolute top-[52px] left-0 right-0 h-[2px] bg-gray-100">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              className="h-full bg-gradient-to-r from-[#2563EB] via-[#9FA1FF] to-[#2563EB] rounded-full"
            />
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {learningSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="w-[104px] h-[104px] rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mb-4 shadow-lg shadow-black/5 group cursor-default hover:border-[#9FA1FF] transition-colors">
                    <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#9FA1FF] group-hover:to-[#2563EB] transition-colors">
                      {Icon && (
                        <Icon
                          size={26}
                          className="text-[#9FA1FF] group-hover:text-white transition-colors"
                        />
                      )}
                    </div>
                  </div>
                  {/* Step number */}
                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1">
                    Step {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed max-w-[140px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (vertical) */}
        <div className="md:hidden space-y-1">
          {learningSteps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                {/* Vertical line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-violet-50 border-2 border-violet-100 flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon size={20} className="text-[#9FA1FF]" />}
                  </div>
                  {i < learningSteps.length - 1 && (
                    <div className="w-[2px] h-12 bg-gradient-to-b from-[#9FA1FF]/30 to-gray-100" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <span className="text-xs font-bold text-[#2563EB]">
                    Step {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#64748B]">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
