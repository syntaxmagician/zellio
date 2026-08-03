// ============================================================
// ZELLIO – IT Services & Digital Agency Site Data
// ============================================================

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-choose" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 4, suffix: "+", label: "Core Tech Stacks" },
  { value: 12, suffix: "+", label: "Production Systems" },
  { value: 5, suffix: "", label: "Dedicated Engineers" },
  { value: 3, suffix: "+", label: "Years Experience" },
];

export const missionItems = [
  {
    icon: "Target",
    title: "Client-Centric Solutions",
    description:
      "We design and build every system tailored specifically to your business flow and strategic requirements.",
  },
  {
    icon: "Globe",
    title: "Global Coding Standards",
    description:
      "Our team adheres to strict international coding standards, ensuring highly clean, maintainable, and scalable codebases.",
  },
  {
    icon: "Award",
    title: "High-Performance Systems",
    description:
      "We don't settle for slow. We build custom websites, dashboards, and scalable platforms optimized for speed and high traffic.",
  },
  {
    icon: "Users",
    title: "Expert Tech Engineers",
    description:
      "Our squad consists of top-tier full-stack developers, UI/UX designers, and cloud architects working dedicatedly for your project.",
  },
  {
    icon: "TrendingUp",
    title: "Continuous Tech Innovation",
    description:
      "We constantly adopt the latest tech stacks and security patches to keep your digital infrastructure ahead of competitors.",
  },
];

export const servicesData = [
  {
    id: 1,
    category: "Website",
    icon: "Monitor",
    title: "Custom Website Development",
    description: "Kami merancang website profesional yang elegan dan super cepat untuk membantu bisnis Anda tampil memukau di dunia digital.",
    duration: "4-6 Weeks",
    level: "Premium",
    color: "#2563EB",
    bgColor: "#FFEBEA",
    heroMedia: { type: "image" as const, url: "/hero/service_custom_web.jpg" }
  },
  {
    id: 2,
    category: "Website",
    icon: "Globe",
    title: "Company Profile Website",
    description: "Kesan pertama itu penting. Kami bantu merangkum identitas perusahaan Anda menjadi sebuah website yang profesional dan tepercaya.",
    duration: "3-5 Weeks",
    level: "Premium",
    color: "#2563EB",
    bgColor: "#FFEBEA",
    heroMedia: { type: "image" as const, url: "/hero/service_company_profile.jpg" }
  },
  {
    id: 4,
    category: "Website",
    icon: "ShoppingBag",
    title: "E-Commerce Development",
    description: "Toko online milik Anda sendiri, lengkap dengan fitur pembayaran otomatis, penghitungan ongkos kirim, dan manajemen stok yang rapi.",
    duration: "6-10 Weeks",
    level: "Production",
    color: "#ec4899",
    bgColor: "#fce7f3",
    heroMedia: { type: "image" as const, url: "/hero/service_ecommerce.jpg" }
  },
  {
    id: 7,
    category: "Mobile",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Aplikasi mobile responsif untuk iOS dan Android yang tidak hanya terlihat bagus, tapi juga sangat nyaman saat digunakan.",
    duration: "8-12 Weeks",
    level: "Premium",
    color: "#10b981",
    bgColor: "#d1fae5",
    heroMedia: { type: "image" as const, url: "/hero/service_mobile_app.jpg" }
  },
  {
    id: 8,
    category: "System",
    icon: "Database",
    title: "ERP System Development",
    description: "Sistem pusat yang cerdas untuk menghubungkan keuangan, inventaris, dan operasional harian dalam satu platform terintegrasi.",
    duration: "12-24 Weeks",
    level: "Production",
    color: "#dc2626",
    bgColor: "#fee2e2",
    heroMedia: { type: "image" as const, url: "/hero/service_erp.jpg" }
  },
  {
    id: 9,
    category: "System",
    icon: "Users",
    title: "CRM System Development",
    description: "Sistem manajemen agar tim sales Anda dapat melacak prospek dan berinteraksi dengan pelanggan secara lebih terorganisir.",
    duration: "8-16 Weeks",
    level: "Production",
    color: "#4f46e5",
    bgColor: "#e0e7ff",
    heroMedia: { type: "image" as const, url: "/hero/service_crm.jpg" }
  },
  {
    id: 10,
    category: "System",
    icon: "UserCheck",
    title: "HRIS & Payroll System",
    description: "Sistem HR modern untuk menyederhanakan manajemen absensi, pengaturan cuti, hingga pendistribusian slip gaji bulanan.",
    duration: "10-18 Weeks",
    level: "Production",
    color: "#06b6d4",
    bgColor: "#cffafe",
    heroMedia: { type: "image" as const, url: "/hero/service_hris.jpg" }
  },
  {
    id: 12,
    category: "SaaS",
    icon: "Cpu",
    title: "SaaS Platform Development",
    description: "Pengembangan platform SaaS menyeluruh, mencakup sistem pembayaran berlangganan yang aman dan arsitektur pengguna yang andal.",
    duration: "12-20 Weeks",
    level: "Production",
    color: "#a855f7",
    bgColor: "#f3e8ff",
    heroMedia: { type: "image" as const, url: "/hero/service_saas.jpg" }
  }
];

// Fallback export to prevent broken imports during refactoring
export const trainingPrograms = servicesData;

export const whyChooseItems = [
  {
    icon: "Code2",
    title: "Dedicated Engineers",
    description:
      "Our developers write clean, maintainable, and well-documented code using modern React, Node, and TypeScript ecosystems.",
    color: "#2563EB",
    bgColor: "#FFEBEA",
  },
  {
    icon: "Cpu",
    title: "Cutting-Edge Tech Stack",
    description:
      "We build on fast, lightweight frameworks like Next.js, TailwindCSS, Node.js, and Postgres to ensure peak performance.",
    color: "#06B6D4",
    bgColor: "#CFFAFE",
  },
  {
    icon: "ShieldAlert",
    title: "Robust Security Standards",
    description:
      "We implement data encryption, secure auth (OAuth/JWT), sanitization, and run security tests before final deployment.",
    color: "#22C55E",
    bgColor: "#DCFCE7",
  },
  {
    icon: "CalendarCheck",
    title: "Agile & On-Time Delivery",
    description:
      "We deliver in milestones using Scrum methodologies, giving you full visibility and ensuring we launch on schedule.",
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
  },
];

export const developmentProcess = [
  {
    step: 1,
    title: "Consultation & Discovery",
    description: "Understand your business requirements, user persona, and technical scope.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "UI/UX Design",
    description: "Create interactive Figma prototypes and custom wireframes for your approval.",
    icon: "Palette",
  },
  {
    step: 3,
    title: "Development",
    description: "Agile sprints of clean coding, frontend building, and robust backend integrations.",
    icon: "Code2",
  },
  {
    step: 4,
    title: "QA & Testing",
    description: "Rigorous performance, security, responsive, and cross-browser testing.",
    icon: "ClipboardCheck",
  },
  {
    step: 5,
    title: "Deployment & Support",
    description: "Cloud deployment, SEO optimization, and 3 months of free maintenance support.",
    icon: "Award",
  },
];

// Fallback export
export const learningSteps = developmentProcess;

export const testimonials: any[] = [];
