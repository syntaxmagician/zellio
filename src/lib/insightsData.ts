// ============================================================
// ZELLIO – Insights & Craft Case Study Data
// ============================================================

export interface StoryDetail {
  introduction: string;
  challenge: string;
  approach: string;
  impact: string;
}

export interface Story {
  slug: string;
  category: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  buttonText: string;
  duration: string;
  author: string;
  date: string;
  readTime: string;
  techStack: string[];
  id: {
    title: string;
    desc: string;
    buttonText: string;
    details: StoryDetail;
  };
  en: {
    title: string;
    desc: string;
    buttonText: string;
    details: StoryDetail;
  };
}

export const insightsData: Story[] = [
  {
    slug: "synergy-in-motion",
    category: "CULTURE",
    title: "Synergy in Motion",
    desc: "Behind ZELLIO's blueprints are teams working in a unified rhythm to craft digital assets that are as robust as they are beautiful.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    tags: ["Collaboration", "Agile", "Team"],
    buttonText: "Read Story",
    duration: "Ongoing",
    author: "ZELLIO Culture Team",
    date: "July 15, 2026",
    readTime: "4 Min Read",
    techStack: ["Slack", "Figma", "Jira", "Notion"],
    id: {
      title: "Sinergi dalam Aksi",
      desc: "Di balik cetak biru ZELLIO terdapat tim-tim yang bekerja dalam ritme yang terpadu untuk merancang aset digital yang kokoh sekaligus indah.",
      buttonText: "Baca Selengkapnya",
      details: {
        introduction: "Di balik setiap baris kode yang stabil dan setiap desain antarmuka yang elegan di ZELLIO, terdapat proses kolaborasi yang intim. Kami percaya bahwa rekayasa perangkat lunak bukan sekadar pekerjaan teknis individu, melainkan simfoni kerja sama tim yang berjalan dalam satu irama. Kami membangun lingkungan kerja yang inklusif di mana pemikiran kritis dihargai dan setiap kontribusi dihargai.",
        challenge: "Menyelaraskan komunikasi antara desainer UI/UX, teknisi backend, dan tim QA sering kali menjadi tantangan terbesar dalam agensi perangkat lunak. Tanpa sinkronisasi yang baik, detail fungsional sering kali hilang dalam transisi desain ke kode. Selain itu, perbedaan zona waktu dan gaya kerja dapat menghambat kemajuan proyek.",
        approach: "Kami menerapkan metodologi Agile yang disederhanakan dengan siklus iterasi harian. Setiap pagi dimulai dengan sinkronisasi kilat 10 menit untuk mendeteksi hambatan teknis secara dini, didukung oleh platform kolaborasi terintegrasi. Kami juga menggunakan sesi tinjauan desain bersama secara teratur untuk memastikan keselarasan visual.",
        impact: "Hasilnya adalah pengurangan waktu revisi hingga 40% dan peningkatan akurasi translasi desain visual ke kode produksi hingga 100%. Tim bekerja dengan kepuasan tinggi dan tingkat retensi karyawan kami mencapai rekor tertinggi."
      }
    },
    en: {
      title: "Synergy in Motion",
      desc: "Behind ZELLIO's blueprints are teams working in a unified rhythm to craft digital assets that are as robust as they are beautiful.",
      buttonText: "Read Story",
      details: {
        introduction: "Behind every stable line of code and elegant interface at ZELLIO lies an intimate process of collaboration. We believe that software engineering is not just isolated technical labor, but a team symphony operating in unison. We foster an inclusive environment where critical thinking is encouraged and every contribution is valued.",
        challenge: "Bridging the communication gap between UI/UX designers, backend engineers, and QA specialists is often the biggest hurdle in software agencies. Without proper synchronization, critical design details get lost in translation. Time-zone differences and varied working styles can also create drag.",
        approach: "We implement a streamlined Agile methodology featuring tight daily iterations. Each morning starts with a 10-minute standup to spot technical bottlenecks early, backed by integrated collaboration platforms. We also hold regular co-design reviews to ensure absolute visual alignment.",
        impact: "This approach reduced revision loops by 40% and improved design-to-code accuracy to 100%. The team operates with high satisfaction, leading to our highest-ever employee retention rates."
      }
    }
  },
  {
    slug: "crafting-the-foundation",
    category: "ENGINEERING",
    title: "Crafting the Foundation",
    desc: "We focus on clean, documented, and resilient systems. A calm, focused environment leads to the highest quality of structural integrity.",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop",
    tags: ["Architecture", "Focus", "Quality"],
    buttonText: "Read Story",
    duration: "Continuous",
    author: "Core Architecture Group",
    date: "June 28, 2026",
    readTime: "5 Min Read",
    techStack: ["TypeScript", "Next.js", "Docker", "ESLint"],
    id: {
      title: "Membangun Fondasi Kokoh",
      desc: "Fokus kami adalah pada sistem yang bersih, terdokumentasi, dan tangguh. Lingkungan yang tenang melahirkan kualitas struktur terbaik.",
      buttonText: "Baca Selengkapnya",
      details: {
        introduction: "Rekayasa perangkat lunak yang hebat tidak dibangun dalam ketergesaan. Di ZELLIO, kami mendedikasikan waktu untuk merancang arsitektur sistem yang bersih dan terdokumentasi dengan baik sebelum kode pertama ditulis. Kami percaya bahwa fondasi yang kokoh adalah kunci stabilitas jangka panjang.",
        challenge: "Banyak perusahaan menghadapi 'utang teknis' (technical debt) yang menumpuk karena kode yang ditulis terburu-buru demi mengejar tenggat waktu. Akibatnya, sistem menjadi sulit diperbarui, lambat, dan rentan terhadap celah keamanan seiring pertumbuhan bisnis.",
        approach: "Kami menerapkan standar pemrograman global yang ketat, termasuk tinjauan kode sejawat (peer reviews) secara wajib, integrasi pengujian otomatis (CI/CD), dan arsitektur modular yang memisahkan logika bisnis dari lapisan presentasi.",
        impact: "Sistem yang kami bangun memiliki tingkat kegagalan produksi mendekati nol. Waktu yang dibutuhkan untuk menambahkan fitur baru berkurang hingga 50% karena kode kami mudah dipahami oleh pengembang mana pun."
      }
    },
    en: {
      title: "Crafting the Foundation",
      desc: "We focus on clean, documented, and resilient systems. A calm, focused environment leads to the highest quality of structural integrity.",
      buttonText: "Read Story",
      details: {
        introduction: "Great software engineering is not built in a rush. At ZELLIO, we dedicate time to craft clean and well-documented system architectures before the first line of code is written. We believe a strong foundation is the key to long-term stability.",
        challenge: "Many companies face mounting 'technical debt' due to rushed code written under tight deadlines. Consequently, systems become difficult to update, sluggish, and vulnerable to security flaws as the business scales.",
        approach: "We enforce strict global coding standards, including mandatory peer code reviews, automated integration testing (CI/CD), and modular architecture that cleanly separates business logic from the presentation layer.",
        impact: "The systems we build maintain a near-zero production failure rate. The development time needed for adding new features was reduced by 50% because our codebase remains highly readable and maintainable."
      }
    }
  },
  {
    slug: "anatomy-of-modern-crm",
    category: "PRODUCT",
    title: "The Anatomy of a Modern CRM",
    desc: "Re-engineering customer management starts with understanding the human element. Every great system begins with simple sketches and ideas.",
    img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop",
    tags: ["CRM", "Strategy", "UX"],
    buttonText: "View Case Study",
    duration: "3 Months",
    author: "Product Strategy Lab",
    date: "May 12, 2026",
    readTime: "6 Min Read",
    techStack: ["React", "PostgreSQL", "Node.js", "Tailwind CSS"],
    id: {
      title: "Anatomi CRM Modern",
      desc: "Merancang ulang manajemen pelanggan dimulai dengan memahami aspek manusiawi. Sistem hebat lahir dari coretan ide sederhana.",
      buttonText: "Lihat Studi Kasus",
      details: {
        introduction: "Manajemen Hubungan Pelanggan (CRM) sering kali dianggap sebagai sistem yang rumit, dipenuhi tombol membingungkan, dan tidak ramah pengguna. ZELLIO membedah ulang paradigma ini untuk membangun CRM yang intuitif dan berfokus pada efisiensi kerja staf penjualan.",
        challenge: "CRM konvensional sering diabaikan oleh tim sales karena terlalu rumit untuk memasukkan data transaksi harian. Hal ini menyebabkan hilangnya data berharga dan ketidakakuratan laporan penjualan perusahaan.",
        approach: "Kami melakukan riset langsung di lapangan untuk memetakan alur kerja tim sales. Kami merancang antarmuka bersih dengan fitur pengenalan suara, otomatisasi input data, serta dasbor visual yang memberikan gambaran performa secara instan.",
        impact: "Peningkatan produktivitas tim sales hingga 35% karena waktu administrasi berkurang drastis. Manajemen perusahaan kini mendapatkan laporan analisis pasar yang jauh lebih akurat dan real-time."
      }
    },
    en: {
      title: "The Anatomy of a Modern CRM",
      desc: "Re-engineering customer management starts with understanding the human element. Every great system begins with simple sketches and ideas.",
      buttonText: "View Case Study",
      details: {
        introduction: "Customer Relationship Management (CRM) tools are often criticized for being overly complex, cluttered, and frustrating to use. ZELLIO re-engineered this paradigm to build an intuitive CRM that prioritizes real-world sales team workflows.",
        challenge: "Conventional CRMs are frequently ignored by sales representatives because logging daily interactions is tedious. This causes data loss and leads to highly inaccurate corporate sales forecasting.",
        approach: "We conducted active field research to map actual sales agent workflows. Based on this, we designed a clean interface featuring voice-to-text logging, automated data capture, and an instant visual performance dashboard.",
        impact: "Sales team productivity increased by 35% due to a drastic reduction in administrative overhead. Executive leadership now receives highly accurate, real-time sales pipeline reports."
      }
    }
  },
  {
    slug: "pixels-with-purpose",
    category: "DESIGN",
    title: "Pixels with Purpose",
    desc: "Before any pixels are pushed, we map out user journeys on paper. Rigorous planning ensures that our interfaces are highly intuitive.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    tags: ["UI/UX", "Research", "Wireframe"],
    buttonText: "Read Story",
    duration: "Ongoing",
    author: "Creative UX Studio",
    date: "April 05, 2026",
    readTime: "4 Min Read",
    techStack: ["Figma", "Adobe CC", "Miro", "Principle"],
    id: {
      title: "Piksel dengan Makna",
      desc: "Sebelum menyentuh layar, kami memetakan perjalanan pengguna di atas kertas. Perencanaan matang memastikan antarmuka yang intuitif.",
      buttonText: "Baca Selengkapnya",
      details: {
        introduction: "Desain yang hebat bukan hanya tentang keindahan visual, tetapi tentang bagaimana produk tersebut bekerja. Di ZELLIO, kami tidak memulai proses desain langsung di depan komputer. Kami memulainya dengan mendengarkan pengguna dan mencoret sketsa di atas kertas.",
        challenge: "Banyak produk digital gagal karena desainer langsung fokus pada estetika warna dan elemen tanpa memikirkan kemudahan navigasi pengguna. Hal ini menyebabkan tingginya angka pengguna yang meninggalkan aplikasi di tengah jalan.",
        approach: "Kami melakukan wawancara mendalam dengan pengguna target, merancang prototipe kertas dengan ketelitian tinggi, dan melakukan uji coba kegunaan secara berkala untuk mengevaluasi setiap interaksi sebelum masuk ke tahap pengodean.",
        impact: "Desain kami menghasilkan peningkatan metrik retensi pengguna hingga 60% dan memangkas waktu orientasi pengguna baru menjadi di bawah dua menit tanpa bantuan tim support."
      }
    },
    en: {
      title: "Pixels with Purpose",
      desc: "Before any pixels are pushed, we map out user journeys on paper. Rigorous planning ensures that our interfaces are highly intuitive.",
      buttonText: "Read Story",
      details: {
        introduction: "Great design is not just about visual aesthetics; it is about how a product works. At ZELLIO, we never start the design process in front of a screen. We begin by listening to users and sketching wireframes on paper.",
        challenge: "Many digital products fail because designers rush into colors and details without resolving the core navigation paths. This leads to user confusion and very high drop-off rates.",
        approach: "We conduct deep user interviews, map out detailed interactive wireframes, and run continuous usability tests to evaluate and refine micro-interactions before handing assets over to developers.",
        impact: "Our designs yielded a 60% increase in user retention metrics and cut new user onboarding time to under two minutes, eliminating the need for extensive support documentation."
      }
    }
  },
  {
    slug: "unified-mobile-ecosystems",
    category: "MOBILE",
    title: "Unified Mobile Ecosystems",
    desc: "Creating seamless experiences across devices requires a holistic view of the entire operational workspace and human interaction.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
    tags: ["Mobile", "Ecosystem", "Human"],
    buttonText: "View Case Study",
    duration: "4 Months",
    author: "Mobile Engineering Group",
    date: "March 18, 2026",
    readTime: "5 Min Read",
    techStack: ["React Native", "Expo", "Redux Toolkit", "GraphQL"],
    id: {
      title: "Ekosistem Mobile Terpadu",
      desc: "Menciptakan pengalaman mulus di berbagai perangkat menuntut pandangan holistik terhadap seluruh ruang kerja operasional.",
      buttonText: "Lihat Studi Kasus",
      details: {
        introduction: "Di era mobilitas tinggi, aplikasi seluler tidak boleh berjalan sendiri. Aplikasi tersebut harus menjadi bagian integral dari ekosistem digital perusahaan, terhubung secara instan dengan sistem web dan server utama.",
        challenge: "Menjaga konsistensi data secara real-time antara aplikasi mobile dan portal web admin sering kali membebani jaringan dan baterai perangkat pengguna. Selain itu, sinkronisasi luring (offline sync) merupakan tantangan teknis yang berat.",
        approach: "Kami membangun arsitektur sinkronisasi data pintar yang menggunakan antrean lokal (local database queue) saat offline dan menyinkronkan data secara otomatis saat koneksi internet kembali pulih tanpa membebani memori.",
        impact: "Aplikasi mobile kami berjalan mulus bahkan di daerah dengan koneksi internet terbatas. Efisiensi operasional lapangan meningkat sebesar 45% berkat akses informasi yang andal."
      }
    },
    en: {
      title: "Unified Mobile Ecosystems",
      desc: "Creating seamless experiences across devices requires a holistic view of the entire operational workspace and human interaction.",
      buttonText: "View Case Study",
      details: {
        introduction: "In a mobile-first world, apps cannot exist in isolation. They must be an integrated branch of a company's digital ecosystem, syncing instantly with centralized web dashboards and main databases.",
        challenge: "Maintaining real-time data consistency between mobile units and the admin web platform often drains bandwidth and battery. Additionally, robust offline synchronization is exceptionally difficult to implement.",
        approach: "We engineered a smart local-first sync pipeline that caches transactions locally during network drops and syncs them automatically in background queues once connectivity is restored.",
        impact: "Our mobile apps perform flawlessly in low-connectivity areas. Operational field efficiency rose by 45% because field workers can trust the data displayed on their screens."
      }
    }
  },
  {
    slug: "microservices-vs-monoliths",
    category: "INFRASTRUCTURE",
    title: "Microservices vs Monoliths",
    desc: "Our architectural philosophy is mirrored in the spaces we design: clean, scalable, transparent, and built to withstand massive capacity.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Scaling", "Cloud", "Space"],
    buttonText: "Read Story",
    duration: "Continuous",
    author: "Infrastructure Dev Group",
    date: "February 22, 2026",
    readTime: "5 Min Read",
    techStack: ["Kubernetes", "AWS", "gRPC", "Go"],
    id: {
      title: "Mikroservis vs Monolit",
      desc: "Filosofi arsitektur infrastruktur kami tercermin dalam sistem yang bersih, skalabel, transparan, dan tahan beban tinggi.",
      buttonText: "Baca Selengkapnya",
      details: {
        introduction: "Memilih arsitektur server yang tepat adalah keputusan krusial yang menentukan masa depan produk digital. ZELLIO membantu perusahaan menyeimbangkan pilihan antara kestabilan monolit dan fleksibilitas mikroservis.",
        challenge: "Banyak perusahaan bermigrasi ke mikroservis terlalu dini, sehingga menciptakan kompleksitas yang tidak perlu dan pembengkakan biaya infrastruktur cloud tanpa peningkatan kinerja yang signifikan.",
        approach: "Kami melakukan analisis beban sistem secara mendalam. Kami merekomendasikan arsitektur modular monolit pada tahap awal, dan secara bertahap memisahkan modul-modul berbeban tinggi menjadi servis terpisah ketika trafik melonjak.",
        impact: "Penghematan biaya server bulanan hingga 30% serta jaminan stabilitas sistem yang mampu menangani lonjakan transaksi mendadak tanpa kendala operasional."
      }
    },
    en: {
      title: "Microservices vs Monoliths",
      desc: "Our architectural philosophy is mirrored in the spaces we design: clean, scalable, transparent, and built to withstand massive capacity.",
      buttonText: "Read Story",
      details: {
        introduction: "Choosing the correct backend architecture is a critical crossroad for any digital business. ZELLIO guides enterprises through the trade-offs between monolithic simplicity and microservices flexibility.",
        challenge: "Many companies migrate to microservices prematurely, leading to unnecessary complex orchestrations and ballooning cloud bills without actual performance improvements.",
        approach: "We conduct deep query and traffic analysis. We advocate for a modular monolith starting point, selectively decoupling high-demand business features into isolated services only when demand spikes.",
        impact: "This strategic alignment reduced monthly server costs by 30% while ensuring the architecture easily scales during sudden transactional peaks without degradation."
      }
    }
  },
  {
    slug: "rapid-prototyping-labs",
    category: "INNOVATION",
    title: "Rapid Prototyping Labs",
    desc: "Transforming raw ideas into prototypes is a collaborative celebration. We believe the best digital products are born from strong human connections.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    tags: ["Prototyping", "R&D", "Culture"],
    buttonText: "Read Story",
    duration: "2 Weeks",
    author: "Innovation Lab",
    date: "January 14, 2026",
    readTime: "4 Min Read",
    techStack: ["Next.js", "Supabase", "Vercel", "Tailwind CSS"],
    id: {
      title: "Laboratorium Prototipe Cepat",
      desc: "Mengubah ide mentah menjadi prototipe adalah perayaan kolaboratif. Produk terbaik lahir dari hubungan kerja sama yang erat.",
      buttonText: "Baca Selengkapnya",
      details: {
        introduction: "Dalam bisnis digital, kecepatan validasi ide adalah segalanya. Melalui divisi Lab Prototipe Cepat ZELLIO, kami membantu founder membuktikan konsep bisnis mereka menjadi produk nyata dalam waktu singkat.",
        challenge: "Proses validasi ide sering kali memakan waktu berbulan-bulan karena terjebak dalam diskusi teori dan dokumen perencanaan yang terlalu panjang tanpa melihat wujud produk yang sebenarnya.",
        approach: "Kami merancang siklus R&D kilat 2 minggu: minggu pertama fokus pada penentuan alur inti dan desain antarmuka dasar, minggu kedua diisi dengan pengodean intensif untuk meluncurkan Minimum Viable Product (MVP) yang fungsional.",
        impact: "Founder dapat mempresentasikan prototipe nyata ke calon investor atau pengguna awal dalam 14 hari, mempercepat siklus pendanaan dan keputusan arah pengembangan produk."
      }
    },
    en: {
      title: "Rapid Prototyping Labs",
      desc: "Transforming raw ideas into prototypes is a collaborative celebration. We believe the best digital products are born from strong human connections.",
      buttonText: "Read Story",
      details: {
        introduction: "In the startup landscape, validating ideas rapidly is the difference between survival and failure. ZELLIO's Innovation Lab helps founders materialize raw concepts into testable products in record time.",
        challenge: "Validating business hypotheses often takes months, bogged down by excessive market research documents and theoretical discussions instead of hands-on product usage.",
        approach: "We design a focused 2-week sprint: Week 1 maps the core user flows and high-fidelity mockups, and Week 2 is dedicated to coding an interactive MVP for real user testing.",
        impact: "Founders can pitch a working prototype to stakeholders or initial investors in just 14 days, accelerating funding rounds and product feedback loops."
      }
    }
  }
];
