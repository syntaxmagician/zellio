export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.services"
  | "nav.whyUs"
  | "nav.portfolio"
  | "nav.contact"
  | "nav.startProject"
  | "nav.available"
  | "hero.badge"
  | "hero.titlePre"
  | "hero.titleAcc"
  | "hero.desc"
  | "hero.explore"
  | "hero.contact"
  | "service.whyChoose"
  | "service.timeline"
  | "service.tier"
  | "service.note"
  | "service.viewAll"
  | "service.elevate"
  | "service.custom-website-development"
  | "service.company-profile-website"
  | "service.landing-page-development"
  | "service.e-commerce-development"
  | "service.custom-web-application"
  | "service.admin-analytics-dashboards"
  | "service.mobile-app-development"
  | "service.erp-system-development"
  | "service.crm-system-development"
  | "service.hris-payroll-system"
  | "service.inventory-management-system"
  | "service.saas-platform-development"
  | "service.ui-ux-product-design"
  | "service.ai-automation-development"
  | "service.cloud-infrastructure-devops"
  | "service.desc.custom-website-development"
  | "service.desc.company-profile-website"
  | "service.desc.landing-page-development"
  | "service.desc.e-commerce-development"
  | "service.desc.custom-web-application"
  | "service.desc.admin-analytics-dashboards"
  | "service.desc.mobile-app-development"
  | "service.desc.erp-system-development"
  | "service.desc.crm-system-development"
  | "service.desc.hris-payroll-system"
  | "service.desc.inventory-management-system"
  | "service.desc.saas-platform-development"
  | "service.desc.ui-ux-product-design"
  | "service.desc.ai-automation-development"
  | "service.desc.cloud-infrastructure-devops"
  | "service.choose.title"
  | "service.choose.desc"
  | "service.estim.title"
  | "general.viewPortfolio"
  | "general.allServices";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      whyUs: "Why Us",
      portfolio: "Portfolio",
      contact: "Contact",
      startProject: "Start Project",
      available: "Available for new projects",
    },
    hero: {
      badge: "Trusted Technology Partner",
      titlePre: "Transforming Ideas Into",
      titleAcc: "Digital Solutions",
      desc: "ZELLIO is a professional technology partner delivering custom websites, high-performance dashboards, mobile apps, and robust IT solutions for your business.",
      explore: "Explore Services",
      contact: "Contact Us",
    },
    service: {
      whyChoose: "Why Choose Our",
      timeline: "Estimated Timeline",
      tier: "Service Tier",
      note: "Note: Final timeline and pricing are subject to project complexity and specific technical requirements.",
      viewAll: "View All Services",
      elevate: "Elevate your digital presence.",
      "custom-web-development": "Custom Web Development",
      "admin-analytics-dashboards": "Admin & Analytics Dashboards",
      "mobile-app-development": "Mobile App Development",
      "custom-it-systems": "Custom IT Systems",
      "cloud-infrastructure-devops": "Cloud Infrastructure & DevOps",
      "ui-ux-product-design": "UI/UX & Product Design",
      desc: {
        "custom-web-development": "Modern, fast, and SEO-friendly corporate websites, landing pages, and web portals built with React and Next.js.",
        "admin-analytics-dashboards": "Interactive data dashboards, custom CRM/ERP interfaces, and business intelligence panels with real-time analytics.",
        "mobile-app-development": "Native-grade Android and iOS applications developed using Flutter and React Native for a seamless user experience.",
        "custom-it-systems": "Robust backend architectures, custom database designs, integration of third-party APIs, and legacy system migrations.",
        "cloud-infrastructure-devops": "Reliable AWS, GCP, or Azure setup, Docker containerization, Kubernetes orchestration, and continuous integration (CI/CD) pipelines.",
        "ui-ux-product-design": "Figma mockups, user research, wireframing, custom design systems, and rapid prototyping to wow your target users.",
      },
      choose: {
        title: "Why Choose Our Services?",
        desc: "As a trusted tech partner, ZELLIO ensures that every line of code written for your project meets global standards for speed, security, and scalability.",
      },
      estim: {
        title: "Project Estimation",
      }
    },
    general: {
      viewPortfolio: "View Our Work",
      allServices: "View All Services"
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      services: "Layanan",
      whyUs: "Kenapa Kami",
      portfolio: "Portofolio",
      contact: "Kontak",
      startProject: "Mulai Proyek",
      available: "Siap berkolaborasi untuk proyek baru",
    },
    hero: {
      badge: "Mitra Teknologi Terpercaya",
      titlePre: "Ubah Ide Menjadi",
      titleAcc: "Solusi Digital",
      desc: "ZELLIO adalah mitra teknologi terpercaya yang siap membantu Anda merancang dan membangun website kustom, dashboard canggih, aplikasi mobile, hingga infrastruktur server andal.",
      explore: "Jelajahi Layanan",
      contact: "Hubungi Kami",
    },
    service: {
      whyChoose: "Kenapa Pilih Layanan",
      timeline: "Estimasi Waktu",
      tier: "Kelas Layanan",
      note: "Catatan: Durasi pengerjaan dan biaya akhir disesuaikan dengan tingkat kesulitan serta kebutuhan spesifik proyek Anda.",
      viewAll: "Lihat Semua Layanan",
      elevate: "Tingkatkan reputasi digital bisnis Anda.",
      "custom-web-development": "Pengembangan Web Kustom",
      "admin-analytics-dashboards": "Dashboard Admin & Analitik",
      "mobile-app-development": "Pembuatan Aplikasi Mobile",
      "custom-it-systems": "Sistem IT & Database",
      "cloud-infrastructure-devops": "Infrastruktur Cloud & DevOps",
      "ui-ux-product-design": "Desain UI/UX & Produk",
      desc: {
        "custom-web-development": "Website perusahaan yang modern, super cepat, dan dioptimalkan untuk SEO demi meningkatkan branding digital Anda secara maksimal.",
        "admin-analytics-dashboards": "Dashboard data interaktif dan sistem CRM/ERP kustom untuk memonitor performa bisnis Anda secara praktis dan real-time.",
        "mobile-app-development": "Aplikasi Android dan iOS yang dibuat dengan teknologi terbaru seperti Flutter atau React Native demi pengalaman pengguna yang luar biasa.",
        "custom-it-systems": "Arsitektur backend yang kokoh, integrasi API, dan perancangan database kustom agar operasional bisnis berjalan lebih mulus.",
        "cloud-infrastructure-devops": "Pengaturan server andal (AWS, GCP, Azure), Docker, serta CI/CD untuk memastikan performa aplikasi Anda stabil kapan pun.",
        "ui-ux-product-design": "Desain UI/UX yang estetik, wireframe, dan prototipe modern untuk memanjakan visual para pengguna target Anda.",
      },
      choose: {
        title: "Kenapa Pilih Layanan Kami?",
        desc: "Sebagai mitra IT terpercaya, ZELLIO memastikan setiap baris kode yang ditulis selalu memenuhi standar global dalam hal kecepatan, keamanan, dan skalabilitas.",
      },
      estim: {
        title: "Estimasi Proyek",
      }
    },
    general: {
      viewPortfolio: "Lihat Portofolio",
      allServices: "Lihat Semua Layanan"
    }
  },
};
