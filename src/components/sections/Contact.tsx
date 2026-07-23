"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  User,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    badge: "Contact Us",
    title: "Get In Touch",
    desc: "Ready to build your next big idea? Tell us about your project requirements and we'll get back to you shortly.",
    info: [
      {
        icon: MapPin,
        label: "Address",
        value: "Jl. Blk. Duku, No.93, Cibubur",
      },
      { icon: Phone, label: "Phone", value: "085158945811" },
      { icon: Mail, label: "Email", value: "marketing@zellio.id" },
      {
        icon: Clock,
        label: "Business Hours",
        value: "Mon – Fri, 09:00 – 18:00 WIB",
      },
    ],
    form: {
      fullName: "Full Name",
      namePlaceholder: "Your full name",
      company: "Company",
      companyPlaceholder: "Company name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone",
      phonePlaceholder: "+62 ...",
      message: "Message",
      messagePlaceholder: "Tell us about your project requirements...",
      submit: "Send Message",
      alert: "Thank you! We'll get back to you shortly."
    }
  },
  id: {
    badge: "Hubungi Kami",
    title: "Mari Berkolaborasi",
    desc: "Siap mewujudkan ide besar Anda selanjutnya? Ceritakan kebutuhan proyek Anda dan tim kami akan segera menghubungi Anda.",
    info: [
      {
        icon: MapPin,
        label: "Alamat",
        value: "Jl. Blk. Duku, No.93, Cibubur",
      },
      { icon: Phone, label: "Telepon", value: "085158945811" },
      { icon: Mail, label: "Email", value: "marketing@zellio.id" },
      {
        icon: Clock,
        label: "Jam Operasional",
        value: "Sen – Jum, 09:00 – 18:00 WIB",
      },
    ],
    form: {
      fullName: "Nama Lengkap",
      namePlaceholder: "Nama lengkap Anda",
      company: "Perusahaan",
      companyPlaceholder: "Nama perusahaan",
      email: "Email",
      emailPlaceholder: "anda@email.com",
      phone: "Telepon",
      phonePlaceholder: "+62 ...",
      message: "Pesan",
      messagePlaceholder: "Ceritakan detail kebutuhan proyek Anda...",
      submit: "Kirim Pesan",
      alert: "Terima kasih! Kami akan segera menghubungi Anda."
    }
  }
};

export default function Contact() {
  const { language } = useLanguage();
  const text = localText[language];

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailTo = "marketing@zellio.id";
    const subject = "Contact Form Submission";
    const body = `Full Name\n${form.name || ""}\n\nCompany\n${form.company || ""}\n\nEmail\n${form.email || ""}\n\nPhone\n${form.phone || ""}\n\nMessage\n${form.message || ""}`;

    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    
    setForm({ name: "", company: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-28 bg-white">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-[#2563EB] text-xs font-semibold uppercase tracking-widest mb-4 border border-teal-100">
            {text.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-4">
            {text.title}
          </h2>
          <p className="text-[#64748B] leading-relaxed">
            {text.desc}
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left – Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-5 mb-8">
              {text.info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-0.5">
                      {label}
                    </div>
                    <div className="text-sm font-medium text-[#0F172A]">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-[220px]">
              <iframe
                title="ZELLIO Office Location"
                src="https://maps.google.com/maps?q=-6.3611275,106.8747062&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5 block"
                >
                  {text.form.fullName}
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                  />
                  <input
                    id="contact-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={text.form.namePlaceholder}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:ring-2 focus:ring-[#9FA1FF]/20 focus:border-[#9FA1FF] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="contact-company"
                  className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5 block"
                >
                  {text.form.company}
                </label>
                <div className="relative">
                  <Building2
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                  />
                  <input
                    id="contact-company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={text.form.companyPlaceholder}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:ring-2 focus:ring-[#9FA1FF]/20 focus:border-[#9FA1FF] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5 block"
                  >
                    {text.form.email}
                  </label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                    />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={text.form.emailPlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:ring-2 focus:ring-[#9FA1FF]/20 focus:border-[#9FA1FF] outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5 block"
                  >
                    {text.form.phone}
                  </label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]"
                    />
                    <input
                      id="contact-phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={text.form.phonePlaceholder}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:ring-2 focus:ring-[#9FA1FF]/20 focus:border-[#9FA1FF] outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1.5 block"
                >
                  {text.form.message}
                </label>
                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute left-3.5 top-3.5 text-[#94A3B8]"
                  />
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={text.form.messagePlaceholder}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:ring-2 focus:ring-[#9FA1FF]/20 focus:border-[#9FA1FF] outline-none transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#2563EB] to-[#9FA1FF] text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                <Send size={16} />
                {text.form.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
