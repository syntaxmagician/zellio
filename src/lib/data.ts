// ============================================================
// DIGIFORE – IT Services & Software House Site Data
// ============================================================

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-choose" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/#contact" },
];

export const trustedCompanies = [
  { name: "Tokopedia", abbrev: "TP" },
  { name: "Gojek", abbrev: "GJ" },
  { name: "Traveloka", abbrev: "TV" },
  { name: "Bank BRI", abbrev: "BRI" },
  { name: "Bank BCA", abbrev: "BCA" },
  { name: "Pertamina", abbrev: "PTM" },
  { name: "Telkomsel", abbrev: "TKM" },
  { name: "Astra", abbrev: "AST" },
];

export const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 8, suffix: "+", label: "Years Experience" },
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
      "We don't settle for slow. We build custom websites, dashboards, and enterprise platforms optimized for speed and high traffic.",
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
    category: "Web & Apps",
    icon: "Monitor",
    title: "Custom Web Development",
    description:
      "Modern, fast, and SEO-friendly corporate websites, landing pages, and web portals built with React and Next.js.",
    duration: "4-8 Weeks",
    level: "Premium",
    color: "#2563EB",
    bgColor: "#DBEAFE",
  },
  {
    id: 2,
    category: "Dashboard",
    icon: "BarChart2",
    title: "Admin & Analytics Dashboards",
    description:
      "Interactive data dashboards, custom CRM/ERP interfaces, and business intelligence panels with real-time analytics.",
    duration: "6-10 Weeks",
    level: "Enterprise",
    color: "#0284C7",
    bgColor: "#E0F2FE",
  },
  {
    id: 3,
    category: "Mobile",
    icon: "Smartphone",
    title: "Mobile App Development",
    description:
      "Native-grade Android and iOS applications developed using Flutter and React Native for a seamless user experience.",
    duration: "8-12 Weeks",
    level: "Premium",
    color: "#16A34A",
    bgColor: "#DCFCE7",
  },
  {
    id: 4,
    category: "Enterprise",
    icon: "Layers",
    title: "Custom IT Systems",
    description:
      "Robust backend architectures, custom database designs, integration of third-party APIs, and legacy system migrations.",
    duration: "10-16 Weeks",
    level: "Enterprise",
    color: "#D97706",
    bgColor: "#FEF3C7",
  },
  {
    id: 5,
    category: "Cloud",
    icon: "Cloud",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Reliable AWS, GCP, or Azure setup, Docker containerization, Kubernetes orchestration, and continuous integration (CI/CD) pipelines.",
    duration: "2-4 Weeks",
    level: "Enterprise",
    color: "#06B6D4",
    bgColor: "#CFFAFE",
  },
  {
    id: 6,
    category: "Design",
    icon: "Palette",
    title: "UI/UX & Product Design",
    description:
      "Figma mockups, user research, wireframing, custom design systems, and rapid prototyping to wow your target users.",
    duration: "3-6 Weeks",
    level: "Premium",
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
  },
];

// Fallback export to prevent broken imports during refactoring
export const trainingPrograms = servicesData;

export const whyChooseItems = [
  {
    icon: "Code2",
    title: "Elite Developers",
    description:
      "Our developers write clean, maintainable, and well-documented code using modern React, Node, and TypeScript ecosystems.",
    color: "#2563EB",
    bgColor: "#DBEAFE",
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

export const testimonials = [
  {
    id: 1,
    name: "Rizky Pratama",
    position: "CTO",
    company: "FinTech Solutions",
    avatar: "RP",
    rating: 5,
    review:
      "Digifore built our core payment dashboard. The level of professionalism, clean code, and speed of delivery exceeded our expectations. The real-time tracking graphs load instantly.",
    color: "#2563EB",
  },
  {
    id: 2,
    name: "Sari Dewi Kusuma",
    position: "Product Director",
    company: "RetailFlow Indonesia",
    avatar: "SD",
    rating: 5,
    review:
      "We hired them to build our multi-vendor e-commerce platform and admin portal. The system is extremely fast, responsive on mobile, and scales beautifully during high-traffic flash sales.",
    color: "#8B5CF6",
  },
  {
    id: 3,
    name: "Budi Santoso",
    position: "CEO",
    company: "LogiChain Logistics",
    avatar: "BS",
    rating: 5,
    review:
      "Their custom ERP system streamlined our logistics operations. The admin dashboard displays real-time tracking data across 5 provinces flawlessly. Our operational efficiency increased by 30%.",
    color: "#059669",
  },
  {
    id: 4,
    name: "Anisa Rahman",
    position: "Co-Founder",
    company: "EduSpace Platform",
    avatar: "AR",
    rating: 5,
    review:
      "They designed and built our SaaS web platform from scratch. The UI/UX is outstanding, and the backend is highly scalable. A truly elite software agency that delivers what they promise.",
    color: "#D97706",
  },
];
