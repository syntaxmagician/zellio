"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    badge: "Collaborate",
    title: "Let's build something exceptional.",
    subtitle: "Have an ambitious project in mind? We'd love to partner with you to engineer it to life. Fill in the form and our strategy team will reach out.",
    form: {
      fullName: "Full Name",
      namePlaceholder: "Your full name",
      company: "Company",
      companyPlaceholder: "Company name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone",
      phonePlaceholder: "+62 ...",
      budget: "Project Budget",
      budgetPlaceholder: "Select a range...",
      message: "Tell us about your project",
      messagePlaceholder: "What are you looking to build? Describe your goals...",
      submit: "Initiate Project",
    },
    cards: {
      location: "Jakarta, Indonesia",
      status: "Available for new projects",
      projects: "120+ projects delivered",
      response: "Average response < 12h"
    }
  },
  id: {
    badge: "Kolaborasi",
    title: "Mari bangun sesuatu yang luar biasa.",
    subtitle: "Memiliki proyek ambisius? Kami ingin bermitra dengan Anda untuk mewujudkannya. Isi formulir dan tim strategi kami akan segera menghubungi Anda.",
    form: {
      fullName: "Nama Lengkap",
      namePlaceholder: "Nama lengkap Anda",
      company: "Perusahaan",
      companyPlaceholder: "Nama perusahaan",
      email: "Email",
      emailPlaceholder: "anda@email.com",
      phone: "Telepon",
      phonePlaceholder: "+62 ...",
      budget: "Anggaran Proyek",
      budgetPlaceholder: "Pilih rentang...",
      message: "Ceritakan proyek Anda",
      messagePlaceholder: "Sistem apa yang ingin Anda bangun? Deskripsikan tujuan Anda...",
      submit: "Mulai Proyek",
    },
    cards: {
      location: "Jakarta, Indonesia",
      status: "Tersedia untuk proyek baru",
      projects: "120+ proyek selesai",
      response: "Respon rata-rata < 12 jam"
    }
  }
};

const budgetRanges = [
  { label: "< $5,000", value: "< $5,000" },
  { label: "$5,000 - $15,000", value: "$5,000 - $15,000" },
  { label: "$15,000 - $50,000", value: "$15,000 - $50,000" },
  { label: "> $50,000", value: "> $50,000" }
];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Behance", url: "https://behance.net" }
];

export default function Contact() {
  const { language } = useLanguage();
  const text = localText[language];

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailTo = "marketing@zellio.id";
    const subject = "Contact Form Submission";
    const body = `Full Name\n${form.name || ""}\n\nCompany\n${form.company || ""}\n\nEmail\n${form.email || ""}\n\nPhone\n${form.phone || ""}\n\nProject Budget\n${form.budget || ""}\n\nMessage\n${form.message || ""}`;

    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setForm({ name: "", company: "", email: "", phone: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#FAFAFA] border-t border-slate-200/50">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* LEFT SIDE: Premium (65%) */}
          <div className="col-span-1 lg:col-span-7 order-2 lg:order-1 flex flex-col justify-between">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-100/50 p-8 lg:p-10">

              {/* Header inside Form Container */}
              <div className="max-w-xl mb-8">
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-blue-600 mb-3 block">
                  {text.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
                  {text.title}
                </h2>
                <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
                  {text.subtitle}
                </p>
              </div>

              {/* Spacious, Luxurious Inputs */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                    >
                      {text.form.fullName}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={text.form.namePlaceholder}
                      className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none transition-colors duration-300 font-medium"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                    >
                      {text.form.company}
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder={text.form.companyPlaceholder}
                      className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none transition-colors duration-300 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                    >
                      {text.form.email}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={text.form.emailPlaceholder}
                      className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none transition-colors duration-300 font-medium"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                    >
                      {text.form.phone}
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={text.form.phonePlaceholder}
                      className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none transition-colors duration-300 font-medium"
                    />
                  </div>
                </div>

                {/* Project Budget Selection */}
                {/* <div>
                  <label
                    htmlFor="contact-budget"
                    className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                  >
                    {text.form.budget}
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none transition-colors duration-300 font-medium cursor-pointer"
                  >
                    <option value="" disabled className="text-slate-400">
                      {text.form.budgetPlaceholder}
                    </option>
                    {budgetRanges.map((range) => (
                      <option key={range.value} value={range.value} className="text-slate-900">
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div> */}

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2 block"
                  >
                    {text.form.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={text.form.messagePlaceholder}
                    className="w-full px-0 py-2 bg-transparent border-b border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 outline-none transition-colors duration-300 font-medium resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm uppercase tracking-widest rounded-xl transition-all duration-300 shadow-lg shadow-slate-950/15"
                  >
                    {text.form.submit}
                  </motion.button>
                </div>
              </form>

            </div>

            {/* Social Links (Elegant bottom alignment) */}
            <div className="flex flex-wrap gap-8 items-center mt-6 px-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative font-mono text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors py-1 overflow-hidden"
                >
                  {link.name}
                  {/* Underline slide hover animation */}
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-slate-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Immersive Trust Photography (35%) */}
          <div className="col-span-1 lg:col-span-5 order-1 lg:order-2 flex flex-col">
            <div className="w-full h-[350px] lg:h-full min-h-[550px] rounded-[32px] overflow-hidden shadow-xl relative bg-slate-200">

              {/* Premium Startup Workspace Image */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Zellio Consulting Office"
                className="w-full h-full object-cover"
              />

              {/* Dark subtle overlay for contrast */}
              <div className="absolute inset-0 bg-slate-950/20" />

              {/* Overlaid Floating Info Cards */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between items-start pointer-events-none">

                {/* Top left card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-lg border border-white/40 flex items-center gap-2"
                >
                  <span className="text-xs">📍</span>
                  <span className="text-xs font-bold text-slate-900 font-mono tracking-tight">
                    {text.cards.location}
                  </span>
                </motion.div>

                {/* Bottom group container */}
                <div className="w-full space-y-4">
                  {/* Middle Left Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-lg border border-white/40 inline-flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-900 font-mono uppercase tracking-wider">
                      {text.cards.status}
                    </span>
                  </motion.div>

                  {/* Bottom double card row */}
                  <div className="flex flex-wrap gap-4 w-full">
                    {/* Projects delivered */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-slate-950/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-slate-800 text-white flex-1 min-w-[140px]"
                    >
                      <div className="text-xs text-amber-400 mb-0.5">★★★★★</div>
                      <div className="text-[11px] font-bold font-mono tracking-tight uppercase">
                        {text.cards.projects}
                      </div>
                    </motion.div>

                    {/* Response rate */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/40 flex-1 min-w-[140px]"
                    >
                      <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-0.5">
                        Response Rate
                      </div>
                      <div className="text-[11px] font-bold text-slate-900 font-mono tracking-tight uppercase">
                        {text.cards.response}
                      </div>
                    </motion.div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
