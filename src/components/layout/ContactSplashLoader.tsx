"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const connectionSteps = [
  "CONNECTING TO SECURE GATEWAY...",
  "RESOLVING ZELLIO ROUTE...",
  "SHIELD AUDIT STATUS: OK",
  "HANDSHAKE REQUESTED...",
  "DECRYPTING COMMS PORT...",
  "CONNECTION SECURED."
];

export default function ContactSplashLoader() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < connectionSteps.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 380);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[99999] bg-[#0A0A0B] flex flex-col justify-between p-6 md:p-12 overflow-hidden pointer-events-auto font-mono text-[#00E5FF]"
    >
      {/* Top Left: Terminal Status */}
      <div className="flex items-center gap-3 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.8)] animate-pulse" />
        <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#00E5FF]/80 uppercase font-bold">
          LINK STATUS // HANDSHAKE
        </span>
      </div>

      {/* Center: Radar Scanning Graphic + Log console side-by-side */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto w-full px-4">
        
        {/* Left: Radar Scanning Scope */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 flex items-center justify-center border border-[#00E5FF]/20 rounded-full">
          {/* Concentric rings */}
          <div className="absolute w-[80%] h-[80%] border border-[#00E5FF]/10 rounded-full" />
          <div className="absolute w-[60%] h-[60%] border border-[#00E5FF]/10 rounded-full" />
          <div className="absolute w-[40%] h-[40%] border border-[#00E5FF]/10 rounded-full" />
          <div className="absolute w-[20%] h-[20%] border border-[#00E5FF]/10 rounded-full" />
          
          {/* Crosshairs */}
          <div className="absolute w-full h-[1px] bg-[#00E5FF]/15" />
          <div className="absolute h-full w-[1px] bg-[#00E5FF]/15" />
          
          {/* Radar sweeping line */}
          <motion.div 
            className="absolute top-0 bottom-0 left-1/2 w-1/2 origin-left bg-gradient-to-r from-[#00E5FF]/20 to-transparent"
            style={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />

          {/* Random blips */}
          <AnimatePresence>
            {stepIndex >= 1 && (
              <motion.div 
                key="blip-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                className="absolute top-[25%] left-[30%] w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
              />
            )}
            {stepIndex >= 3 && (
              <motion.div 
                key="blip-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5, delay: 0.5 }}
                className="absolute bottom-[35%] right-[25%] w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Right: Terminal logs */}
        <div className="flex-1 flex flex-col justify-center min-w-0 w-full lg:w-auto h-40">
          <div className="flex flex-col gap-2.5">
            {connectionSteps.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={
                  index <= stepIndex 
                    ? { opacity: 1, x: 0 } 
                    : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.15 }}
                className={`text-xs md:text-sm tracking-wide font-mono ${
                  index === connectionSteps.length - 1 
                    ? "text-white font-bold" 
                    : "text-[#00E5FF]/60"
                }`}
              >
                {index <= stepIndex && (
                  <span className="mr-3 text-[#00E5FF]/30">LOG_{String(index + 1).padStart(2, '0')}</span>
                )}
                {index <= stepIndex && log}
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row: Minimalist footer */}
      <div className="flex justify-between items-end pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-[#00E5FF]/40 uppercase font-semibold">
            COMMUNICATION DIVISION
          </span>
          <span className="text-xs tracking-[0.1em] text-[#00E5FF]/30">
            PORT-8443-HANDSHAKE
          </span>
        </div>
        
        <div className="text-xs md:text-sm font-mono text-[#00E5FF]/50 flex items-center gap-2">
          SIGNAL: {Math.min(100, Math.floor(((stepIndex + 1) / connectionSteps.length) * 100))}%
        </div>
      </div>
    </motion.div>
  );
}
