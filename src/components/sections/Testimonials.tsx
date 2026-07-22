"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const testimonialsData = {
  en: [
    {
      id: 1,
      name: "Rizky Pratama",
      position: "CTO",
      company: "FinTech Solutions",
      avatar: "/avatar-rizky.png",
      rating: 5,
      review:
        "ZELLIO built our core payment dashboard. The level of professionalism, clean code, and speed of delivery exceeded our expectations. The real-time tracking graphs load instantly.",
    },
    {
      id: 2,
      name: "Sari Dewi Kusuma",
      position: "Product Director",
      company: "RetailFlow Indonesia",
      avatar: "/avatar-sari.png",
      rating: 5,
      review:
        "We hired them to build our multi-vendor e-commerce platform and admin portal. The system is extremely fast, responsive on mobile, and scales beautifully during high-traffic flash sales.",
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "CEO",
      company: "LogiChain Logistics",
      avatar: "/avatar-budi.png",
      rating: 5,
      review:
        "Their custom ERP system streamlined our logistics operations. The admin dashboard displays real-time tracking data across 5 provinces flawlessly. Our operational efficiency increased by 30%.",
    },
    {
      id: 4,
      name: "Anisa Rahman",
      position: "Co-Founder",
      company: "EduSpace Platform",
      avatar: "/avatar-anisa.png",
      rating: 5,
      review:
        "They designed and built our SaaS web platform from scratch. The UI/UX is outstanding, and the backend is highly scalable. A truly elite tech partner that delivers what they promise.",
    },
  ],
  id: [
    {
      id: 1,
      name: "Rizky Pratama",
      position: "CTO",
      company: "FinTech Solutions",
      avatar: "/avatar-rizky.png",
      rating: 5,
      review:
        "ZELLIO membangun dashboard pembayaran utama kami. Profesionalisme, kerapihan kode, dan kecepatan kerjanya di luar ekspektasi kami. Grafik pemantauan real-time langsung termuat tanpa loading.",
    },
    {
      id: 2,
      name: "Sari Dewi Kusuma",
      position: "Product Director",
      company: "RetailFlow Indonesia",
      avatar: "/avatar-sari.png",
      rating: 5,
      review:
        "Kami memercayakan pembuatan platform e-commerce multi-vendor dan portal admin kami kepada mereka. Sistemnya sangat cepat, responsif di HP, dan stabil saat traffic melonjak tinggi.",
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "CEO",
      company: "LogiChain Logistics",
      avatar: "/avatar-budi.png",
      rating: 5,
      review:
        "Sistem ERP kustom mereka mempermudah operasional logistik kami. Dashboard admin menampilkan data pelacakan armada di 5 provinsi secara real-time. Efisiensi operasional kami naik 30%!",
    },
    {
      id: 4,
      name: "Anisa Rahman",
      position: "Co-Founder",
      company: "EduSpace Platform",
      avatar: "/avatar-anisa.png",
      rating: 5,
      review:
        "Mereka merancang dan membangun platform web SaaS kami dari nol. Desain UI/UX-nya luar biasa dan backend-nya sangat stabil. Mitra teknologi terpercaya yang benar-benar memberikan hasil nyata.",
    },
  ]
};

const localText = {
  en: {
    bgText: "CLIENT STORIES CLIENT STORIES",
    badge: "Testimonials"
  },
  id: {
    bgText: "APA KATA MEREKA APA KATA MEREKA",
    badge: "Ulasan Klien"
  }
};

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const testimonials = testimonialsData[language];
  const text = localText[language];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <div id="testimonials" ref={containerRef} className="h-[400vh] w-full relative bg-[#0B1120]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="absolute w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <motion.div 
          style={{ x: bgX }} 
          className="absolute top-[25%] md:top-[20%] left-0 whitespace-nowrap opacity-[0.03] pointer-events-none select-none flex"
        >
          <h1 className="text-[30vw] md:text-[25vw] font-black text-white leading-none tracking-tighter">
            {text.bgText}
          </h1>
        </motion.div>

        <motion.div 
          style={{ x }} 
          className="flex h-full w-[400vw] lg:w-[240vw] items-center relative z-10"
        >
          {testimonials.map((t, i) => (
            <div 
              key={t.id} 
              className="w-[100vw] lg:w-[60vw] h-full flex flex-col items-center justify-center px-4 md:px-12"
            >
               <div className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-[0_0_80px_rgba(37,99,235,0.06)] flex flex-col gap-6 relative group hover:bg-white/[0.05] transition-colors duration-500">
                  
                  <Quote className="text-blue-500/10 w-24 h-24 absolute top-6 right-6 rotate-180 pointer-events-none transition-transform duration-700 group-hover:scale-110" />

                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10 relative flex-shrink-0">
                      {t.avatar ? (
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl font-bold text-white">
                          {t.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5">{t.name}</h3>
                      <p className="text-blue-400 font-medium text-xs md:text-sm tracking-wide">
                        {t.position} <span className="text-slate-500 mx-1">•</span> {t.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1.5 relative z-10">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed relative z-10">
                    "{t.review}"
                  </p>

               </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 md:w-72 h-1 bg-white/10 rounded-full overflow-hidden">
           <motion.div 
             style={{ scaleX: scrollYProgress }} 
             className="h-full bg-blue-500 origin-left" 
           />
        </div>

        <div className="absolute top-28 md:top-36 left-0 w-full flex justify-center pointer-events-none">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2.5 flex items-center gap-3 shadow-lg">
             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
             <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{text.badge}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
