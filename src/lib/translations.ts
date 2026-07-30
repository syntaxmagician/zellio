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
  | "general.viewPortfolio"
  | "general.allServices"
  | string; // allow dynamic keys

export const translations: Record<"en" | "id", any> = {
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
      
      "custom-website-development": "Custom Website Development",
      "company-profile-website": "Company Profile Website",
      "landing-page-development": "Landing Page Development",
      "e-commerce-development": "E-Commerce Development",
      "custom-web-application": "Custom Web Application",
      "admin-analytics-dashboards": "Admin & Analytics Dashboards",
      "mobile-app-development": "Mobile App Development",
      "erp-system-development": "ERP System Development",
      "crm-system-development": "CRM System Development",
      "hris-payroll-system": "HRIS & Payroll System",
      "inventory-management-system": "Inventory Management System",
      "saas-platform-development": "SaaS Platform Development",
      "ui-ux-product-design": "UI/UX & Product Design",
      "ai-automation-development": "AI & Automation Development",
      "cloud-infrastructure-devops": "Cloud Infrastructure & DevOps",

      desc: {
        "custom-website-development": "We build stunning, ultra-fast websites that look great on any screen and help your business make a lasting impression online.",
        "company-profile-website": "A professional digital home for your company. We help you build instant trust and introduce your business values to the world.",
        "landing-page-development": "Beautiful, focused landing pages designed specifically to turn your ad campaign clicks into actual leads and customers.",
        "e-commerce-development": "Your own custom online store, fully equipped with automated shipping rates, secure payment gateways, and a clean checkout experience.",
        "custom-web-application": "Tailored web applications built to simplify your team's workflow, manage business data, or bring your next SaaS product to life.",
        "admin-analytics-dashboards": "Clean data dashboards that turn complex spreadsheets into visual, easy-to-read charts so you can monitor your business in real-time.",
        "mobile-app-development": "Responsive, native-feeling iOS and Android mobile apps designed with a focus on ease of use and smooth performance.",
        "erp-system-development": "A unified system to organize your finance, inventory, HR, and operations. We connect all your department workflows in one place.",
        "crm-system-development": "Keep track of customer leads, log sales progress, and automate email follow-ups to make selling a breeze for your team.",
        "hris-payroll-system": "Simplify HR work by automating employee clock-ins, leave approvals, payroll calculations, and digital payslip delivery.",
        "inventory-management-system": "Say goodbye to pen and paper. Track stock levels, warehouse movements, and low-stock alerts automatically and accurately.",
        "saas-platform-development": "We take care of the complex stuff like multi-tenant setups, separate customer databases, and automated Stripe billing for your SaaS.",
        "ui-ux-product-design": "Interactive Figma wireframes, real user tests, and premium design systems to ensure your product is a joy for people to use.",
        "ai-automation-development": "We integrate smart AI tools and automated pipelines into your daily operations to handle repetitive tasks for your team.",
        "cloud-infrastructure-devops": "Secure, reliable cloud setups on AWS or GCP. We ensure your application is scalable, safe, and lightning fast.",
      },
      
      deep: {
        "custom-website-development": {
          problem: "Businesses often struggle with outdated, slow, or generic websites that fail to convert visitors into clients. In today's digital landscape, a slow website means lost revenue, and a generic template diminishes brand trust and authority.",
          target: "Forward-thinking brands, corporate entities, and agencies looking to establish a dominant online presence that reflects their premium market positioning.",
          methodology: "We start with a deep dive into your brand's identity and goals. Our design team creates high-fidelity wireframes in Figma, ensuring every visual element aligns with your brand. Once approved, our engineering team builds the site using modern frameworks like React and Next.js, optimizing every asset for lightning-fast loading speeds and flawless SEO architecture.",
          faqs: [
            { q: "Do you use templates like WordPress?", a: "No, we build completely custom frontend architectures using Next.js and React to ensure maximum performance, security, and unique branding." },
            { q: "Is the website optimized for mobile?", a: "Absolutely. We follow a mobile-first approach, ensuring that your website is responsive, fast, and intuitive on all devices, from smartphones to ultra-wide monitors." },
            { q: "Will I be able to update content myself?", a: "Yes. We integrate modern Headless CMS solutions (like Sanity or Strapi) that give you a highly intuitive dashboard to manage your content without touching code." }
          ]
        },
        "e-commerce-development": {
          problem: "Many online retailers suffer from high cart abandonment rates due to clunky checkout processes, slow page loads, and poor mobile experiences. Off-the-shelf platforms often lack the flexibility needed to scale operations, manage complex inventories, and integrate local shipping/payment gateways seamlessly.",
          target: "Retail brands, B2B distributors, and direct-to-consumer (D2C) businesses seeking to scale their sales operations with a robust, high-converting digital storefront.",
          methodology: "We approach e-commerce by mapping the entire customer journey from product discovery to checkout. We implement advanced caching for instant product loads, secure payment gateway integrations (Midtrans, Xendit, Stripe), and automated shipping calculators. We also build bespoke admin dashboards to help your team manage orders, inventory, and customer data efficiently.",
          faqs: [
            { q: "Can you integrate local Indonesian payment gateways?", a: "Yes, we have extensive experience integrating local payment gateways like Midtrans, Xendit, and Doku, supporting Virtual Accounts, QRIS, e-Wallets, and Credit Cards." },
            { q: "How do you handle shipping rate calculations?", a: "We integrate with shipping aggregators (like RajaOngkir or Biteship) to provide real-time, accurate shipping rates based on the customer's location and product weight." },
            { q: "Can the store handle flash sales with high traffic?", a: "Yes. We design the infrastructure using scalable cloud services and robust database caching strategies to ensure the site remains stable during high-traffic events." }
          ]
        },
        "erp-system-development": {
          problem: "As companies grow, they often rely on disjointed software for accounting, HR, and inventory. This fragmentation causes data silos, manual data entry errors, and a lack of real-time visibility into the company's overall health.",
          target: "Mid-to-large scale enterprises, manufacturing companies, and distributors struggling with operational bottlenecks and fragmented data systems.",
          methodology: "We begin with a thorough audit of your current standard operating procedures (SOPs). We map out the data flow between departments. Then, we architect a centralized database system and build custom modules tailored to your specific workflows—be it finance, procurement, or human resources. We prioritize role-based access control and strict data security protocols throughout the development.",
          faqs: [
            { q: "Is a custom ERP better than off-the-shelf software like SAP?", a: "A custom ERP is built around your specific workflows, eliminating the need to change your business processes to fit the software. It also avoids expensive, recurring user-license fees." },
            { q: "How secure is the financial data?", a: "We implement banking-grade security standards, including database encryption, strict role-based access control (RBAC), and continuous security auditing." },
            { q: "Can you migrate data from our old systems?", a: "Yes, we handle complex data migrations from legacy systems or spreadsheets, ensuring data integrity and a smooth transition to the new ERP." }
          ]
        },
        "mobile-app-development": {
          problem: "Reaching customers on the go is critical, but poorly built mobile apps drain batteries, crash frequently, and suffer from low retention rates. Building separate apps for iOS and Android can also double development time and costs.",
          target: "Startups, consumer brands, and enterprises aiming to create deep, persistent engagement with their user base through a dedicated presence on their smartphones.",
          methodology: "We leverage cross-platform frameworks like Flutter or React Native to build applications that perform natively on both iOS and Android from a single codebase. Our UX team focuses on thumb-friendly navigation and intuitive gestures. We conduct rigorous testing on real devices to ensure stable performance, low battery consumption, and seamless offline capabilities.",
          faqs: [
            { q: "Do you develop for both iOS and Android?", a: "Yes, we build for both platforms simultaneously using cross-platform technologies, which significantly reduces development time and ensures a consistent user experience." },
            { q: "Will you help us publish the app to the App Store and Google Play?", a: "Absolutely. We manage the entire deployment process, including store listing optimization, review compliance, and setup of developer accounts." },
            { q: "Can the app work offline?", a: "Depending on the requirements, we can implement local databases (like SQLite) and background sync protocols so users can access core features without an internet connection." }
          ]
        },
        "cloud-infrastructure-devops": {
          problem: "Unpredictable server crashes, slow response times during traffic spikes, and cumbersome manual deployment processes cause significant downtime and engineering frustration. Security vulnerabilities in infrastructure can also lead to catastrophic data breaches.",
          target: "High-traffic platforms, SaaS companies, and enterprise systems that require 99.9% uptime, strict security compliance, and automated scaling capabilities.",
          methodology: "We design cloud architectures based on the principles of high availability and fault tolerance. We containerize your applications using Docker and orchestrate them with Kubernetes. We implement Continuous Integration and Continuous Deployment (CI/CD) pipelines using tools like GitHub Actions or GitLab CI, enabling your team to deploy updates safely and automatically without downtime.",
          faqs: [
            { q: "Which cloud providers do you work with?", a: "We are proficient in Amazon Web Services (AWS), Google Cloud Platform (GCP), and DigitalOcean, tailoring the choice to your specific scale and budget requirements." },
            { q: "How do you handle sudden traffic spikes?", a: "We configure auto-scaling groups and load balancers that automatically provision additional server resources when traffic increases, and scale down when it subsides to optimize costs." },
            { q: "Do you provide ongoing server monitoring?", a: "Yes, we set up robust monitoring and alerting systems using tools like Prometheus and Grafana to proactively address issues before they affect your users." }
          ]
        },
        // Fallback detailed content for other services to avoid thin content
        "default": {
          problem: "Many organizations struggle with generic, off-the-shelf software solutions that do not fit their unique operational requirements. This leads to inefficient workflows, data silos, and a poor user experience for both employees and customers, ultimately hindering growth and competitive advantage.",
          target: "Businesses and organizations that require specialized, high-performance digital solutions to overcome specific operational challenges and accelerate their digital transformation journey.",
          methodology: "Our approach is rooted in deep collaboration. We start by analyzing your specific business challenges and user needs. Our engineering and design teams then work in tandem to prototype, build, and test a tailored solution. We utilize modern, scalable technologies and agile methodologies to ensure rapid delivery, continuous feedback, and a final product that perfectly aligns with your strategic goals.",
          faqs: [
            { q: "How long does a typical project take?", a: "Timelines vary based on complexity, but most projects are delivered within 6 to 12 weeks. We provide a detailed roadmap during the initial consultation." },
            { q: "Do you provide post-launch support and maintenance?", a: "Yes, we offer comprehensive SLA packages for continuous monitoring, bug fixing, security updates, and feature enhancements." },
            { q: "Who owns the intellectual property (IP) of the software?", a: "Upon project completion and final payment, the intellectual property and source code are fully transferred to you." }
          ]
        }
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
      
      "custom-website-development": "Pengembangan Web Kustom",
      "company-profile-website": "Website Profil Perusahaan",
      "landing-page-development": "Pengembangan Landing Page",
      "e-commerce-development": "Pengembangan E-Commerce",
      "custom-web-application": "Aplikasi Web Kustom",
      "admin-analytics-dashboards": "Dashboard Admin & Analitik",
      "mobile-app-development": "Pembuatan Aplikasi Mobile",
      "erp-system-development": "Pengembangan Sistem ERP",
      "crm-system-development": "Pengembangan Sistem CRM",
      "hris-payroll-system": "Sistem HRIS & Payroll",
      "inventory-management-system": "Sistem Manajemen Inventaris",
      "saas-platform-development": "Pengembangan Platform SaaS",
      "ui-ux-product-design": "Desain UI/UX & Produk",
      "ai-automation-development": "Pengembangan AI & Otomatisasi",
      "cloud-infrastructure-devops": "Infrastruktur Cloud & DevOps",

      desc: {
        "custom-website-development": "Kami membuat website khusus yang elegan, cepat diakses, dan ramah Google untuk menaikkan citra profesional bisnis Anda.",
        "company-profile-website": "Website resmi perusahaan untuk membangun kepercayaan klien B2B, mengenalkan visi bisnis, dan memajang layanan Anda dengan rapi.",
        "landing-page-development": "Halaman penawaran khusus yang fokus dan cepat untuk mengubah klik iklan Google atau Meta Ads Anda menjadi pembeli potensial.",
        "e-commerce-development": "Toko online kustom yang dilengkapi dengan keranjang belanja, gerbang pembayaran aman, dan kalkulator ongkir otomatis.",
        "custom-web-application": "Sistem aplikasi web kustom untuk merapikan alur kerja internal kantor atau meluncurkan ide platform startup digital Anda.",
        "admin-analytics-dashboards": "Dashboard visualisasi data untuk mengubah laporan rumit menjadi grafik interaktif yang mudah dipantau secara real-time.",
        "mobile-app-development": "Pembuatan aplikasi Android & iOS berkualitas tinggi menggunakan Flutter atau React Native agar nyaman digunakan oleh pelanggan.",
        "erp-system-development": "Sistem terpadu untuk menyelaraskan laporan keuangan, logistik gudang, divisi HR, dan operasional bisnis dalam satu platform.",
        "crm-system-development": "Permudah tim sales melacak prospek calon pelanggan, mencatat data kontak, dan mengirim email follow-up otomatis.",
        "hris-payroll-system": "Sistem manajemen karyawan untuk mengotomatiskan absensi harian, pengajuan izin cuti, hingga pembuatan slip gaji bulanan.",
        "inventory-management-system": "Aplikasi pencatatan stok barang digital untuk memantau keluar masuk produk dan peringatan jika stok menipis secara akurat.",
        "saas-platform-development": "Pengembangan produk SaaS multi-tenant dengan pengelolaan database terpisah dan integrasi tagihan otomatis Stripe.",
        "ui-ux-product-design": "Pembuatan prototipe interaktif di Figma, riset pengguna, dan perancangan tata letak agar produk Anda terasa premium dan mudah dipakai.",
        "ai-automation-development": "Integrasi teknologi kecerdasan buatan dan bot asisten otomatis untuk menangani pekerjaan administratif harian tim Anda.",
        "cloud-infrastructure-devops": "Setup server cloud AWS/GCP yang aman, kontainerisasi Docker, serta sistem pemantauan berkala agar web Anda selalu lancar.",
      },
      
      deep: {
        "custom-website-development": {
          problem: "Banyak bisnis kesulitan karena website yang usang, lambat, atau menggunakan template generik yang gagal mengubah pengunjung menjadi klien. Di era digital ini, website yang lambat berarti hilangnya pendapatan, dan desain yang pasaran akan merusak kepercayaan merek Anda.",
          target: "Merek-merek modern, korporasi besar, dan agensi yang ingin membangun kehadiran online dominan yang mencerminkan posisi premium mereka di pasar.",
          methodology: "Kami memulai dengan menyelami identitas dan tujuan merek Anda. Tim desain kami membuat wireframe resolusi tinggi di Figma, memastikan setiap elemen visual selaras dengan citra Anda. Setelah disetujui, tim teknis kami membangun website menggunakan framework modern seperti React dan Next.js, mengoptimalkan kecepatan akses dan struktur SEO yang sempurna.",
          faqs: [
            { q: "Apakah Anda menggunakan template seperti WordPress?", a: "Tidak, kami membangun arsitektur frontend yang sepenuhnya kustom menggunakan Next.js dan React untuk menjamin performa maksimal, keamanan, dan identitas merek yang unik." },
            { q: "Apakah website ini responsif di HP?", a: "Tentu saja. Kami menerapkan pendekatan mobile-first, memastikan website Anda cepat, responsif, dan intuitif di semua perangkat, mulai dari smartphone hingga monitor layar lebar." },
            { q: "Bisakah saya memperbarui konten website sendiri?", a: "Bisa. Kami mengintegrasikan sistem CMS modern (seperti Sanity atau Strapi) yang memberi Anda dashboard intuitif untuk mengelola konten tanpa perlu menyentuh kode pemrograman." }
          ]
        },
        "e-commerce-development": {
          problem: "Banyak ritel online menderita tingkat pengabaian keranjang (cart abandonment) yang tinggi karena proses checkout yang rumit dan lambat. Platform instan seringkali kurang fleksibel untuk dikembangkan, menyulitkan manajemen stok berskala besar, dan sulit diintegrasikan dengan sistem kurir lokal.",
          target: "Merek ritel, distributor B2B, dan bisnis Direct-to-Consumer (D2C) yang ingin meningkatkan skala penjualan dengan etalase digital yang kuat dan berkonversi tinggi.",
          methodology: "Kami merancang e-commerce dengan memetakan seluruh perjalanan pelanggan dari penemuan produk hingga checkout. Kami menerapkan sistem cache tingkat lanjut untuk akses halaman instan, integrasi gerbang pembayaran aman (Midtrans, Xendit), dan kalkulator ongkir otomatis. Kami juga membuat dashboard admin khusus untuk mempermudah tim Anda mengelola pesanan dan stok.",
          faqs: [
            { q: "Bisa integrasi dengan payment gateway lokal Indonesia?", a: "Ya, kami berpengalaman mengintegrasikan payment gateway lokal seperti Midtrans, Xendit, dan Doku, yang mendukung Virtual Account, QRIS, e-Wallet, dan Kartu Kredit." },
            { q: "Bagaimana cara menghitung ongkos kirim otomatis?", a: "Kami mengintegrasikan API pihak ketiga (seperti RajaOngkir atau Biteship) untuk menampilkan tarif pengiriman yang akurat secara real-time berdasarkan lokasi pelanggan dan berat produk." },
            { q: "Apakah website aman saat terjadi flash sale?", a: "Ya. Kami merancang arsitektur cloud yang dapat diskalakan serta strategi caching database yang kuat untuk memastikan website tetap stabil meski ada lonjakan pengunjung saat flash sale." }
          ]
        },
        "erp-system-development": {
          problem: "Seiring berkembangnya perusahaan, penggunaan banyak software terpisah untuk keuangan, HR, dan gudang sering menyebabkan data yang terisolasi, kesalahan input manual, dan hilangnya visibilitas menyeluruh atas kondisi perusahaan.",
          target: "Perusahaan skala menengah ke atas, pabrik manufaktur, dan distributor yang kesulitan dengan operasional yang lambat dan sistem data yang terpecah-pecah.",
          methodology: "Kami mengawali dengan audit menyeluruh atas SOP perusahaan Anda dan memetakan alur data antar divisi. Kemudian, kami merancang database terpusat dan membangun modul khusus sesuai alur kerja Anda—baik itu keuangan, pengadaan, maupun HR. Kami sangat memprioritaskan keamanan data tingkat tinggi dan pembatasan akses pengguna.",
          faqs: [
            { q: "Apakah ERP kustom lebih baik dari software jadi seperti SAP?", a: "ERP kustom dibangun mengikuti alur kerja unik Anda, sehingga Anda tidak perlu mengubah cara kerja tim untuk menyesuaikan software. Ini juga menghemat biaya lisensi pengguna tahunan yang mahal." },
            { q: "Seberapa aman data finansial perusahaan saya?", a: "Kami menerapkan standar keamanan setara perbankan, termasuk enkripsi database, kontrol akses berbasis peran (RBAC) yang ketat, dan audit keamanan berkala." },
            { q: "Bisakah memindahkan data dari sistem kami yang lama?", a: "Tentu. Kami dapat membantu proses migrasi data yang kompleks dari sistem warisan (legacy systems) atau file Excel lama Anda ke dalam sistem ERP yang baru dengan aman." }
          ]
        },
        "mobile-app-development": {
          problem: "Menjangkau pelanggan di mana saja sangatlah penting, namun aplikasi mobile yang dibuat asal-asalan akan menguras baterai, sering crash, dan banyak dihapus pengguna. Membuat aplikasi terpisah untuk iOS dan Android juga bisa melipatgandakan biaya dan waktu pengembangan.",
          target: "Startup, merek konsumen, dan perusahaan yang ingin membangun interaksi yang dalam dan berkelanjutan dengan penggunanya melalui aplikasi smartphone khusus.",
          methodology: "Kami memanfaatkan framework lintas platform (cross-platform) seperti Flutter atau React Native untuk membangun aplikasi yang berjalan layaknya aplikasi native di iOS dan Android hanya dari satu basis kode. Fokus kami ada pada navigasi yang nyaman dan performa yang stabil. Kami melakukan pengujian ketat di perangkat nyata untuk menjamin stabilitas dan kecepatan.",
          faqs: [
            { q: "Apakah Anda membuat aplikasi untuk iOS dan Android?", a: "Ya, kami mengembangkan untuk kedua platform tersebut secara bersamaan menggunakan teknologi lintas platform, yang memangkas waktu pengembangan dan menjamin konsistensi pengalaman pengguna." },
            { q: "Apakah Anda akan membantu merilis aplikasi ke App Store?", a: "Tentu saja. Kami mengurus seluruh proses perilisan, termasuk optimasi deskripsi toko, pemenuhan syarat publikasi, dan pendaftaran akun pengembang." },
            { q: "Bisakah aplikasinya digunakan saat tidak ada internet (offline)?", a: "Bisa. Sesuai kebutuhan, kami dapat mengimplementasikan database lokal (seperti SQLite) sehingga pengguna tetap bisa mengakses fitur-fitur penting tanpa koneksi internet." }
          ]
        },
        "cloud-infrastructure-devops": {
          problem: "Server yang sering down, respon lambat saat pengunjung ramai, serta proses rilis pembaruan manual sangat membuang waktu teknisi. Selain itu, celah keamanan pada infrastruktur dapat berujung pada kebocoran data yang fatal bagi reputasi bisnis.",
          target: "Platform dengan lalu lintas tinggi, perusahaan SaaS, dan sistem enterprise yang membutuhkan jaminan uptime 99.9%, kepatuhan keamanan yang ketat, dan kemampuan ekspansi server otomatis.",
          methodology: "Kami merancang arsitektur cloud berdasarkan prinsip ketersediaan tinggi (high availability). Kami mengemas aplikasi Anda menggunakan Docker dan mengelolanya dengan Kubernetes. Kami mengimplementasikan jalur otomatisasi CI/CD, yang memungkinkan tim Anda merilis fitur baru secara aman tanpa menghentikan layanan (zero downtime).",
          faqs: [
            { q: "Layanan cloud apa saja yang biasa Anda gunakan?", a: "Kami sangat berpengalaman menggunakan Amazon Web Services (AWS), Google Cloud Platform (GCP), dan DigitalOcean, menyesuaikan dengan skala kebutuhan dan anggaran Anda." },
            { q: "Bagaimana sistem mengatasi lonjakan pengunjung mendadak?", a: "Kami mengkonfigurasi sistem auto-scaling dan penyeimbang beban (load balancer) yang secara otomatis akan menambah kapasitas server saat pengunjung ramai, dan menurunkannya saat sepi untuk menghemat biaya." },
            { q: "Apakah ada layanan pemantauan server berkelanjutan?", a: "Ya, kami menyiapkan sistem pemantauan dan peringatan otomatis menggunakan alat seperti Prometheus dan Grafana untuk mendeteksi potensi masalah sebelum berdampak pada pengguna." }
          ]
        },
        "default": {
          problem: "Banyak organisasi terjebak menggunakan software template pasaran yang tidak cocok dengan kebutuhan operasional spesifik mereka. Hal ini memicu ketidakefisienan alur kerja, silo data antar divisi, dan pengalaman pengguna yang buruk, yang akhirnya menghambat laju pertumbuhan bisnis.",
          target: "Bisnis dan instansi yang membutuhkan solusi digital khusus dan berkinerja tinggi untuk menembus tantangan operasional harian serta mempercepat transformasi digital mereka.",
          methodology: "Pendekatan kami berakar pada kolaborasi yang mendalam. Kami mulai dengan menganalisis tantangan bisnis Anda. Tim desain dan teknis kami kemudian bekerja sama merancang prototipe, membangun, dan menguji solusi yang dirancang khusus. Kami menggunakan teknologi modern untuk memastikan rilis cepat, perbaikan berkelanjutan, dan hasil akhir yang sejalan dengan target strategis Anda.",
          faqs: [
            { q: "Berapa lama waktu rata-rata pengembangan proyek?", a: "Waktu pengerjaan bervariasi sesuai kompleksitas, namun rata-rata proyek kami selesaikan dalam waktu 6 hingga 12 minggu. Kami akan memberikan peta jalan (roadmap) detail di awal." },
            { q: "Apakah ada layanan perbaikan dan pemeliharaan setelah rilis?", a: "Ya, kami menawarkan paket SLA komprehensif untuk pemantauan berkelanjutan, perbaikan bug, pembaruan keamanan, dan penambahan fitur baru." },
            { q: "Siapa yang memiliki hak cipta (IP) dari software yang dibuat?", a: "Setelah proyek selesai dan pembayaran dilunasi sepenuhnya, seluruh hak kekayaan intelektual (IP) dan source code sepenuhnya menjadi milik Anda." }
          ]
        }
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
  }
};
