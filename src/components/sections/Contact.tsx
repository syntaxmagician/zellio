"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Jl.+Blk.+Duku+No.93+Cibubur+Jakarta";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

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
      location: "Cibubur, Jakarta",
      status: "Available for new projects",
      projects: "120+ projects delivered",
      response: "Average response < 12h"
    },
    contact: {
      label: "Contact Info",
      address: "Jl. Blk. Duku, No.93, Cibubur",
      viewMap: "View on Google Maps"
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
      location: "Cibubur, Jakarta",
      status: "Tersedia untuk proyek baru",
      projects: "120+ proyek selesai",
      response: "Respon rata-rata < 12 jam"
    },
    contact: {
      label: "Info Kontak",
      address: "Jl. Blk. Duku, No.93, Cibubur",
      viewMap: "Lihat di Google Maps"
    }
  }
};

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    <path d="M15 12v1.5c0 1.38-1.12 2.5-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V12" />
  </svg>
);

const budgetRanges = [
  { label: "< $5,000", value: "< $5,000" },
  { label: "$5,000 - $15,000", value: "$5,000 - $15,000" },
  { label: "$15,000 - $50,000", value: "$15,000 - $50,000" },
  { label: "> $50,000", value: "> $50,000" }
];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: LinkedinIcon },
  { name: "GitHub", url: "https://github.com", icon: GithubIcon },
  { name: "Instagram", url: "https://instagram.com", icon: InstagramIcon },
  { name: "Threads", url: "https://threads.com", icon: ThreadsIcon }
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

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

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
                  className="group relative flex items-center gap-2 font-mono text-[11px] font-bold text-slate-500 hover:text-slate-900 transition-colors py-1 overflow-hidden"
                >
                  <link.icon className="w-3.5 h-3.5" />
                  {link.name}
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

                {/* Top left card — clickable Google Maps */}
                <motion.a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.04 }}
                  className="bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-lg border border-white/40 flex items-center gap-2 pointer-events-auto cursor-pointer hover:bg-white transition-colors"
                >
                  <span className="text-xs">📍</span>
                  <span className="text-xs font-bold text-slate-900 font-mono tracking-tight">
                    {text.cards.location}
                  </span>
                </motion.a>

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

                  {/* Contact Info Cards inside image */}
                  <div className="w-full space-y-2.5 pointer-events-auto">
                    {/* Email row */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/40 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-3 h-3 text-blue-600" />
                        </div>
                        <a
                          href="mailto:marketing@zellio.id"
                          className="text-[11px] font-bold text-slate-800 font-mono tracking-tight hover:text-blue-600 transition-colors truncate"
                        >
                          marketing@zellio.id
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("marketing@zellio.id", "email")}
                        className="flex-shrink-0 w-6 h-6 rounded-md bg-slate-100 hover:bg-blue-100 flex items-center justify-center transition-colors cursor-pointer"
                        title="Copy email"
                      >
                        <AnimatePresence mode="wait">
                          {copiedKey === "email" ? (
                            <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                              <Check className="w-3 h-3 text-emerald-600" />
                            </motion.span>
                          ) : (
                            <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                              <Copy className="w-3 h-3 text-slate-500" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </motion.div>

                    {/* Phone row */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-white/40 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                          <WhatsappIcon className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <a
                          href="tel:+6285158945811"
                          className="text-[11px] font-bold text-slate-800 font-mono tracking-tight hover:text-emerald-600 transition-colors truncate"
                        >
                          085158945811
                        </a>
                      </div>
                      <button
                        onClick={() => copyToClipboard("085158945811", "phone")}
                        className="flex-shrink-0 w-6 h-6 rounded-md bg-slate-100 hover:bg-emerald-100 flex items-center justify-center transition-colors cursor-pointer"
                        title="Copy phone"
                      >
                        <AnimatePresence mode="wait">
                          {copiedKey === "phone" ? (
                            <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                              <Check className="w-3 h-3 text-emerald-600" />
                            </motion.span>
                          ) : (
                            <motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                              <Copy className="w-3 h-3 text-slate-500" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </motion.div>

                    {/* Address → Google Maps */}
                    <motion.a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ scale: 1.01 }}
                      className="bg-slate-950/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-slate-800 flex items-center gap-2.5 cursor-pointer block"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-3 h-3 text-rose-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-white font-mono tracking-tight">
                          Jl. Blk. Duku, No.93, Cibubur
                        </div>
                        <div className="text-[9px] font-mono text-slate-400 mt-0.5">
                          {text.contact.viewMap} →
                        </div>
                      </div>
                    </motion.a>
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
