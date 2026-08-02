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
      "e-commerce-development": "E-Commerce Development",
      "mobile-app-development": "Mobile App Development",
      "erp-system-development": "ERP System Development",
      "crm-system-development": "CRM System Development",
      "hris-payroll-system": "HRIS & Payroll System",
      "saas-platform-development": "SaaS Platform Development",

      desc: {
        "custom-website-development": "We build stunning, ultra-fast websites that look great on any screen and help your business make a lasting impression online.",
        "company-profile-website": "A professional digital home for your company. We help you build instant trust and introduce your business values to the world.",
        "e-commerce-development": "Your own custom online store, fully equipped with automated shipping rates, secure payment gateways, and a clean checkout experience.",
        "mobile-app-development": "Responsive, native-feeling iOS and Android mobile apps designed with a focus on ease of use and smooth performance.",
        "erp-system-development": "A unified system to organize your finance, inventory, HR, and operations. We connect all your department workflows in one place.",
        "crm-system-development": "Keep track of customer leads, log sales progress, and automate email follow-ups to make selling a breeze for your team.",
        "hris-payroll-system": "Simplify HR work by automating employee clock-ins, leave approvals, payroll calculations, and digital payslip delivery.",
        "saas-platform-development": "We take care of the complex stuff like multi-tenant setups, separate customer databases, and automated Stripe billing for your SaaS.",
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
        "company-profile-website": {
          problem: "Many businesses fail to convey their value proposition clearly online, leading potential B2B partners and high-value clients to turn to competitors with more professional digital representations.",
          target: "Established businesses, professional service firms, and industrial enterprises looking to project credibility, corporate identity, and attract institutional clients.",
          methodology: "We design a tailored experience that tells your company's story. We focus on structured information architecture, clean typography, fast page loads, and clear call-to-actions that guide prospects directly to your sales team.",
          faqs: [
            { q: "What should be included in a company profile website?", a: "Typically, it includes your mission, core services, leadership team profile, past case studies, and clear contact forms. We customize this based on your industry." },
            { q: "Is the site SEO-friendly?", a: "Yes, we implement complete meta tagging, schema markup, and speed optimizations so your business ranks high on search engines for brand queries." },
            { q: "Can we add careers/blog pages later?", a: "Yes, we build modularly, allowing you to expand your website with new sub-pages or sections easily." }
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
        "crm-system-development": {
          problem: "Sales teams often lose track of leads due to messy spreadsheets and disconnected communications, resulting in missed follow-ups and lost revenue opportunities.",
          target: "Sales departments, real estate agencies, and service providers looking to streamline lead capture, track deals, and improve customer retention.",
          methodology: "We build intuitive CRM systems centered around your sales funnel. We integrate communication logs, lead scoring, and automated task reminders, ensuring your sales agents can focus on closing deals rather than data entry.",
          faqs: [
            { q: "Can we integrate this with our website?", a: "Yes, we connect the CRM directly with your landing pages and contact forms to capture leads automatically." },
            { q: "Can we automate follow-up emails?", a: "Absolutely. We set up automated email triggers based on sales stages or lead activity to maintain persistent contact." },
            { q: "How secure is client contact data?", a: "We enforce strict database access control, data encryption, and role-based permissions to protect your proprietary lead database." }
          ]
        },
        "hris-payroll-system": {
          problem: "Manual HR tasks like tracking attendance, managing leave requests, and calculating monthly salaries are time-consuming and prone to human errors.",
          target: "Growing teams and operations managers who want to reduce administrative overhead and streamline employee management.",
          methodology: "We design a centralized HR platform that automates routine workflows. We build modules for digital attendance, automated leave approval paths, and a flexible payroll engine that calculates taxes and generates payslips instantly.",
          faqs: [
            { q: "How is employee attendance tracked?", a: "We support GPS-based clock-in via mobile devices, barcode scans, or integration with physical fingerprint devices." },
            { q: "Does the system calculate Indonesian taxes (PPH 21)?", a: "Yes, the payroll engine is custom-configured to calculate PPH 21 and BPJS deductions accurately." },
            { q: "Is employee data private and secure?", a: "Yes, we implement strict role-based access control (RBAC), ensuring that financial and salary records are only visible to authorized HR admins." }
          ]
        },
        "saas-platform-development": {
          problem: "Launching a SaaS product requires solving complex infrastructure hurdles like tenant isolation, secure subscription billing, and API quota management before you can even launch your core feature.",
          target: "Tech startup founders and enterprises looking to launch commercial subscription-based software applications.",
          methodology: "We build secure, multi-tenant SaaS foundations. We integrate robust database separation patterns, Stripe subscription engines with webhook sync, and clean billing analytics so you can focus entirely on your core product value.",
          faqs: [
            { q: "How is data isolated between different tenants?", a: "We implement tenant-keyed database isolation or separate database schemas to guarantee that no user can ever access another tenant's data." },
            { q: "Can we support different subscription tiers?", a: "Yes, we build flexible plan configurations (monthly/yearly, seat-based, or usage-based billing) integrated with major payment portals." },
            { q: "How do you handle API security?", a: "We deploy secure JWT token management, API key rotation schemes, and rate limiters to protect your platform from malicious requests." }
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
      "e-commerce-development": "Pengembangan E-Commerce",
      "mobile-app-development": "Pembuatan Aplikasi Mobile",
      "erp-system-development": "Pengembangan Sistem ERP",
      "crm-system-development": "Pengembangan Sistem CRM",
      "hris-payroll-system": "Sistem HRIS & Payroll",
      "saas-platform-development": "Pengembangan Platform SaaS",

      desc: {
        "custom-website-development": "Kami membuat website khusus yang elegan, cepat diakses, dan ramah Google untuk menaikkan citra profesional bisnis Anda.",
        "company-profile-website": "Website resmi perusahaan untuk membangun kepercayaan klien B2B, mengenalkan visi bisnis, dan memajang layanan Anda dengan rapi.",
        "e-commerce-development": "Toko online kustom yang dilengkapi dengan keranjang belanja, gerbang pembayaran aman, dan kalkulator ongkir otomatis.",
        "mobile-app-development": "Pembuatan aplikasi Android & iOS berkualitas tinggi menggunakan Flutter atau React Native agar nyaman digunakan oleh pelanggan.",
        "erp-system-development": "Sistem terpadu untuk menyelaraskan laporan keuangan, logistik gudang, divisi HR, dan operasional bisnis dalam satu platform.",
        "crm-system-development": "Permudah tim sales melacak prospek calon pelanggan, mencatat data kontak, dan mengirim email follow-up otomatis.",
        "hris-payroll-system": "Sistem manajemen karyawan untuk mengotomatiskan absensi harian, pengajuan izin cuti, hingga pembuatan slip gaji bulanan.",
        "saas-platform-development": "Pengembangan produk SaaS multi-tenant dengan pengelolaan database terpisah dan integrasi tagihan otomatis Stripe.",
      },

      deep: {
        "custom-website-development": {
          problem: "Banyak bisnis kesulitan karena website yang usang, lambat, atau menggunakan template generik yang gagal mengubah pengunjung menjadi klien. Di era digital ini, website yang lambat berarti hilangnya pendapatan, dan desain yang pasaran akan merusak kepercayaan merek Anda.",
          target: "Merek-merek modern, korporasi besar, dan agensi yang ingin membangun kehadiran online dominan yang mencerminkan posisi premium mereka di pasar.",
          methodology: "Kami memulai dengan menyelami identitas dan tujuan merek Anda. Tim desain kami membuat wireframe resolusi tinggi di Figma, memastikan setiap elemen visual selaras dengan citra Anda. Setelah disetujui, tim teknis kami membangun website menggunakan framework modern seperti React dan Next.js, mengoptimalkan kecepatan akses dan struktur SEO yang sempurna.",
          faqs: [
            { q: "Apakah Anda menggunakan template seperti WordPress?", a: "Tidak, kami membangun arsitektur frontend yang sepenuhnya kustom menggunakan Next.js and React untuk menjamin performa maksimal, keamanan, dan identitas merek yang unik." },
            { q: "Apakah website ini responsif di HP?", a: "Tentu saja. Kami menerapkan pendekatan mobile-first, memastikan website Anda cepat, responsif, dan intuitif di semua perangkat, mulai dari smartphone hingga monitor layar lebar." },
            { q: "Bisakah saya memperbarui konten website sendiri?", a: "Bisa. Kami mengintegrasikan sistem CMS modern (seperti Sanity atau Strapi) yang memberi Anda dashboard intuitif untuk mengelola konten tanpa perlu menyentuh kode pemrograman." }
          ]
        },
        "company-profile-website": {
          problem: "Banyak bisnis gagal menyampaikan keunikan mereka secara jelas di internet, membuat calon mitra B2B atau klien besar ragu dan akhirnya memilih kompetitor yang profil digitalnya terlihat lebih meyakinkan dan profesional.",
          target: "Perusahaan skala menengah ke atas, firma profesional, dan bisnis manufaktur yang ingin meningkatkan citra kredibilitas tinggi di hadapan klien korporat.",
          methodology: "Kami mendesain profil perusahaan digital yang bercerita. Fokus kami ada pada penyusunan struktur informasi yang padat, tipografi bersih yang elegan, loading super cepat, serta tombol kontak terarah yang menghubungkan prospek langsung dengan tim sales Anda.",
          faqs: [
            { q: "Apa saja isi website profil perusahaan yang ideal?", a: "Mencakup sejarah, visi misi, produk/jasa unggulan, profil jajaran manajemen, portofolio kerja, serta halaman kontak yang jelas. Kami dapat menyiapkannya secara kustom sesuai industri Anda." },
            { q: "Apakah website ini ramah pencarian Google (SEO)?", a: "Tentu saja. Kami menerapkan tagging meta lengkap, skema markup Google, serta optimasi kecepatan agar nama perusahaan Anda menduduki peringkat teratas saat dicari." },
            { q: "Dapatkah kami menambah sub-halaman karir atau berita nanti?", a: "Ya. Arsitektur website kami rancang secara modular, sehingga mempermudah penambahan bagian baru tanpa perlu membuat ulang dari awal." }
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
        "mobile-app-development": {
          problem: "Menjangkau pelanggan di mana saja sangatlah penting, namun aplikasi mobile yang dibuat asal-asalan akan menguras baterai, sering crash, dan banyak dihapus pengguna. Membuat aplikasi terpisah untuk iOS dan Android juga bisa melipatgandakan biaya dan waktu pengembangan.",
          target: "Startup, merek konsumen, dan perusahaan yang ingin membangun interaksi yang dalam dan berkelanjutan dengan penggunanya melalui aplikasi smartphone khusus.",
          methodology: "Kami memanfaatkan framework lintas platform (cross-platform) seperti Flutter atau React Native untuk membangun aplikasi yang berjalan layaknya aplikasi native di iOS and Android hanya dari satu basis kode. Fokus kami ada pada navigasi yang nyaman dan performa yang stabil. Kami melakukan pengujian ketat di perangkat nyata untuk menjamin stabilitas dan kecepatan.",
          faqs: [
            { q: "Apakah Anda membuat aplikasi untuk iOS dan Android?", a: "Ya, kami mengembangkan untuk kedua platform tersebut secara bersamaan menggunakan teknologi lintas platform, yang memangkas waktu pengembangan dan menjamin konsistensi pengalaman pengguna." },
            { q: "Apakah Anda akan membantu merilis aplikasi ke App Store?", a: "Tentu saja. Kami mengurus seluruh proses perilisan, termasuk optimasi deskripsi toko, pemenuhan syarat publikasi, dan pendaftaran akun pengembang." },
            { q: "Bisakah aplikasinya digunakan saat tidak ada internet (offline)?", a: "Bisa. Sesuai kebutuhan, kami dapat mengimplementasikan database lokal (seperti SQLite) sehingga pengguna tetap bisa mengakses fitur-fitur penting tanpa koneksi internet." }
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
        "crm-system-development": {
          problem: "Tim sales sering kali kehilangan prospek karena pencatatan manual yang berantakan di spreadsheet, mengakibatkan tindak lanjut yang terlambat dan hilangnya potensi penjualan.",
          target: "Divisi sales, agen properti, dan penyedia jasa yang ingin merapikan alur prospek masuk, melacak negosiasi, dan meningkatkan retensi pelanggan.",
          methodology: "Kami membangun sistem CRM intuitif yang disesuaikan dengan corong penjualan (sales funnel) Anda. Kami menyatukan log obrolan, pengingat tugas otomatis, dan laporan performa sales dalam satu dashboard terintegrasi.",
          faqs: [
            { q: "Apakah CRM ini bisa dihubungkan ke website kami?", a: "Ya, kami menghubungkan CRM secara langsung dengan formulir kontak website Anda agar data prospek masuk secara otomatis." },
            { q: "Bisa mengirimkan email follow-up otomatis?", a: "Tentu saja. Kami mengonfigurasi pemicu email otomatis berdasarkan tahapan prospek untuk membantu tim sales menjaga komunikasi." },
            { q: "Bagaimana keamanan data kontak pelanggan kami?", a: "Kami menerapkan enkripsi database dan pembatasan hak akses karyawan agar basis data pelanggan Anda terlindungi dengan aman." }
          ]
        },
        "hris-payroll-system": {
          problem: "Tugas HR manual seperti melacak kehadiran, menyetujui izin cuti, dan menghitung gaji bulanan membutuhkan waktu lama serta rentan kesalahan hitung.",
          target: "Perusahaan dengan tim yang terus berkembang dan manajer operasional yang ingin memotong birokrasi administratif karyawan.",
          methodology: "Kami merancang platform HRIS terpusat untuk mengotomatiskan alur kerja harian HR. Kami membuat modul absensi digital, persetujuan cuti otomatis, dan mesin penggajian (payroll) yang menghitung pajak serta BPJS secara instan.",
          faqs: [
            { q: "Bagaimana cara pencatatan absensi karyawan?", a: "Kami mendukung absensi berbasis lokasi GPS melalui HP, pemindaian kode QR, maupun integrasi dengan mesin sidik jari fisik." },
            { q: "Apakah sistem ini mendukung perhitungan pajak PPh 21?", a: "Ya, mesin payroll kami dikonfigurasi untuk menghitung potongan PPh 21 dan BPJS Ketenagakerjaan/Kesehatan secara akurat sesuai regulasi Indonesia." },
            { q: "Bagaimana keamanan data pribadi karyawan?", a: "Kami menerapkan kontrol akses ketat sehingga data slip gaji dan catatan pribadi hanya dapat diakses oleh admin HR yang berwenang." }
          ]
        },
        "saas-platform-development": {
          problem: "Meluncurkan produk SaaS membutuhkan penyelesaian masalah infrastruktur yang rumit seperti pemisahan data penyewa (tenant), sistem tagihan langganan, dan manajemen kuota API sebelum Anda sempat membuat fitur utama.",
          target: "Founder startup teknologi dan perusahaan yang ingin merilis produk perangkat lunak berbasis langganan komersial.",
          methodology: "Kami membangun fondasi SaaS multi-tenant yang aman. Kami mengintegrasikan pola pemisahan database, mesin langganan Stripe/Xendit dengan sinkronisasi webhook, dan analitik tagihan agar Anda bisa fokus sepenuhnya pada nilai produk.",
          faqs: [
            { q: "Bagaimana data dipisahkan antar penyewa (tenant) berbeda?", a: "Kami menerapkan isolasi database dengan kunci tenant atau skema database terpisah untuk menjamin data tidak akan pernah bocor antar penyewa." },
            { q: "Apakah sistem mendukung berbagai tingkatan paket langganan?", a: "Tentu. Kami merancang konfigurasi paket yang fleksibel (bulanan/tahunan, kuota pengguna, atau tagihan berbasis penggunaan) terintegrasi dengan portal pembayaran." },
            { q: "Bagaimana cara menangani keamanan API?", a: "Kami menerapkan manajemen token JWT yang aman, skema rotasi kunci API, serta pembatas laju kueri (rate limiter) untuk melindungi sistem Anda dari serangan luar." }
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
