"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";

const faqItems = [
  {
    q: "What types of software projects do you handle?",
    a: "We design and build custom web applications, responsive corporate websites, analytics dashboards, mobile applications (iOS/Android), and robust enterprise backend systems.",
    tag: "Services",
  },
  {
    q: "What technologies do you use?",
    a: "We specialize in modern tech stacks, primarily React, Next.js, TypeScript, TailwindCSS, and Node.js for frontend and backend. For databases, we use PostgreSQL and MongoDB, and we host on secure cloud platforms like AWS and GCP.",
    tag: "Tech Stack",
  },
  {
    q: "How long does a typical software project take?",
    a: "Corporate websites and landing pages usually take 4-6 weeks. Custom admin dashboards and SaaS applications take 8-12 weeks. Large-scale enterprise ERP or custom IT systems can take 12-16+ weeks.",
    tag: "Timeline",
  },
  {
    q: "How do you structure project pricing?",
    a: "Our pricing is project-based and depends entirely on the technical scope and timeline. After our discovery call, we provide a detailed technical proposal with a fixed-price estimate and transparent milestones.",
    tag: "Pricing",
  },
  {
    q: "Do you design the UI/UX as well?",
    a: "Yes. Every development project includes a dedicated UI/UX design phase in Figma. We create wireframes and high-fidelity prototypes for your approval before we write a single line of code.",
    tag: "Process",
  },
  {
    q: "Do you provide maintenance and support after launch?",
    a: "Absolutely. We provide 3 months of free post-launch support to monitor server performance, fix bugs, and ensure everything runs smoothly. Ongoing monthly maintenance retainers are also available.",
    tag: "Support",
  },
  {
    q: "What is your project development methodology?",
    a: "We work using agile Scrum methodologies. We divide the project into 2-week sprints and hold regular progress reviews. You will also get access to a live staging link to track development progress.",
    tag: "Process",
  },
  {
    q: "Can you migrate legacy systems to the cloud?",
    a: "Yes, our team has extensive experience migrating legacy web applications and databases to modern cloud architectures with minimal downtime and zero data loss.",
    tag: "Services",
  },
  {
    q: "How do we get started with Digifore?",
    a: "Simply fill out our contact form below or book a kickoff call. We will set up a discovery session to analyze your requirements and provide a technical proposal within 3-5 business days.",
    tag: "General",
  },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  "General":    { bg: "#EFF6FF", text: "#2563EB" },
  "Services":   { bg: "#CCFBF1", text: "#2563EB" },
  "Tech Stack": { bg: "#FFF7ED", text: "#D97706" },
  "Pricing":    { bg: "#EDE9FE", text: "#9FA1FF" },
  "Process":    { bg: "#E0F2FE", text: "#0284C7" },
  "Timeline":   { bg: "#FEE2E2", text: "#DC2626" },
  "Support":    { bg: "#DCFCE7", text: "#16A34A" },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="section-container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-5 border border-teal-100">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            Have questions about{" "}
            <span className="gradient-text">our workflow</span>?
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            Everything you need to know before starting your project. Can't find the
            answer you're looking for?{" "}
            <a href="#contact" className="text-[#2563EB] font-medium hover:underline">
              Talk to our tech team.
            </a>
          </p>
        </motion.div>

        {/* ── FAQ accordion — Two Columns ── */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {faqItems.filter((_, i) => i % 2 === 0).map((item, idx) => {
              const i = idx * 2;
              const isOpen = openIndex === i;
              const tag = tagColors[item.tag] ?? tagColors["General"];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25, scale: 0.98, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#9FA1FF]/25 bg-white shadow-lg shadow-violet-50"
                      : "border-gray-100 bg-[#F8FAFC] hover:bg-white hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Index number */}
                    <span
                      className={`text-xs font-bold w-6 flex-shrink-0 transition-colors duration-200 ${
                        isOpen ? "text-[#9FA1FF]" : "text-[#CBD5E1]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question text */}
                    <span
                      className={`flex-1 text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-[#9FA1FF]" : "text-[#0F172A]"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* Tag — hidden on mobile */}
                    <span
                      className="hidden xl:inline-flex text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tag.bg, color: tag.text }}
                    >
                      {item.tag}
                    </span>

                    {/* Toggle icon */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-[#9FA1FF] to-[#2563EB] text-white shadow-md shadow-violet-400/30"
                          : "bg-white border border-gray-200 text-[#94A3B8]"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-16 pr-6 pb-6">
                          <p className="text-[#64748B] text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {faqItems.filter((_, i) => i % 2 !== 0).map((item, idx) => {
              const i = idx * 2 + 1;
              const isOpen = openIndex === i;
              const tag = tagColors[item.tag] ?? tagColors["General"];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25, scale: 0.98, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#9FA1FF]/25 bg-white shadow-lg shadow-violet-50"
                      : "border-gray-100 bg-[#F8FAFC] hover:bg-white hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Index number */}
                    <span
                      className={`text-xs font-bold w-6 flex-shrink-0 transition-colors duration-200 ${
                        isOpen ? "text-[#9FA1FF]" : "text-[#CBD5E1]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question text */}
                    <span
                      className={`flex-1 text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                        isOpen ? "text-[#9FA1FF]" : "text-[#0F172A]"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* Tag — hidden on mobile */}
                    <span
                      className="hidden xl:inline-flex text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tag.bg, color: tag.text }}
                    >
                      {item.tag}
                    </span>

                    {/* Toggle icon */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-gradient-to-br from-[#9FA1FF] to-[#2563EB] text-white shadow-md shadow-violet-400/30"
                          : "bg-white border border-gray-200 text-[#94A3B8]"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-16 pr-6 pb-6">
                          <p className="text-[#64748B] text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-3xl mx-auto mt-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl bg-[#F8FAFC] border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-[#2563EB]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0F172A]">
                  Still have questions?
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">
                  Our team responds within 1 business day
                </div>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#9FA1FF] text-white text-sm font-semibold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
            >
              Contact Us
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
