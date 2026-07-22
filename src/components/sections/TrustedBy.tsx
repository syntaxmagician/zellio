"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companyLogos = [
  { name: "Elogs", src: "/elogs.png" },
  { name: "Eureka", src: "/eurekalogo.png" },
  { name: "Jaja.id", src: "/jajaid.png" },
  { name: "Masdis", src: "/masdis.png" },
  { name: "Race", src: "/race.png" },
];

function LogoChip({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center justify-center px-6 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm flex-shrink-0 mx-3 select-none cursor-default hover:border-blue-200 hover:shadow-md transition-all duration-300 group h-[64px] min-w-[150px]">
      <Image 
        src={src} 
        alt={name} 
        width={120} 
        height={40} 
        className="max-h-[32px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
      />
    </div>
  );
}

export default function TrustedBy() {
  // Duplicate the array so the marquee loops seamlessly
  const doubled = [...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos];

  return (
    <div className="w-full pb-4">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-xs font-semibold text-[#94A3B8] uppercase tracking-[0.2em] mb-8"
      >
        Trusted by Companies &amp; Organizations
      </motion.p>

      {/* Marquee ticker */}
      <div className="overflow-hidden marquee-fade relative w-full">
        <div className="animate-marquee">
          {doubled.map((company, i) => (
            <LogoChip key={`${company.name}-${i}`} name={company.name} src={company.src} />
          ))}
        </div>
      </div>
    </div>
  );
}
