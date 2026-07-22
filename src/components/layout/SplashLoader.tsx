"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SplashLoader() {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-[#FAFAFA] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Soft glowing light-mode blue orb behind the logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <Image
          src="/digifore.png"
          alt="Digifore Logo"
          width={280}
          height={100}
          className="object-contain relative z-10"
          priority
        />
      </motion.div>
      
      {/* Loading Bar at the bottom (Light theme compatible) */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[3px] bg-slate-200 rounded-full overflow-hidden"
      >
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "circOut" }}
          className="w-full h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
