"use client";

import {
  ArrowUp,
  Globe,
  MessageSquare,
  Share2,
  Video,
  Code2,
} from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Digifore", href: "#about" },
    { label: "Vision & Mission", href: "#vision-mission" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Services: [
    { label: "UI/UX Design", href: "#services" },
    { label: "Custom Web Dev", href: "#services" },
    { label: "Admin Dashboards", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "Enterprise Systems", href: "#services" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Client Portal", href: "#" },
    { label: "FAQs", href: "#faq" },
    { label: "System Status", href: "#" },
  ],
  Contact: [
    { label: "Get in Touch", href: "#contact" },
    { label: "Request a Quote", href: "#contact" },
    { label: "Partnerships", href: "#" },
    { label: "Support Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const socials = [
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: MessageSquare, href: "#", label: "Twitter" },
  { icon: Share2, href: "#", label: "Instagram" },
  { icon: Video, href: "#", label: "YouTube" },
  { icon: Code2, href: "#", label: "GitHub" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center mb-5 group">
              <img src="/digifore.png" alt="Digifore Logo" className="h-9 w-auto object-contain brightness-0 invert group-hover:opacity-90 transition-opacity duration-300" />
            </a>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Empowering businesses through custom software engineering, premium dashboards, and scalable IT systems.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © {new Date().getFullYear()} DIGIFORE. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[#64748B] hover:text-white transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
