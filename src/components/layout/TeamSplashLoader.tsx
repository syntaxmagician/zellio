"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLogs = [
  "Initializing ZELLIO engineering core...",
  "Loading architecture blueprints...",
  "Compiling system binaries...",
  "Assembling multidisciplinary team...",
  "Establishing secure connection...",
  "SYSTEM READY."
];

export default function TeamSplashLoader() {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const isBot = typeof navigator !== "undefined" && /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|chrome-lighthouse|lighthouse/i.test(navigator.userAgent);
    if (isBot || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLogIndex(terminalLogs.length - 1);
      return;
    }

    // ~1500ms total timeout from page.tsx — 6 logs, ~230ms each.
    const interval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < terminalLogs.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 230);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100vh",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[99999] bg-[#0A0A0B] flex flex-col justify-between p-6 md:p-12 overflow-hidden pointer-events-auto font-mono"
    >
      {/* Top Left: Terminal Status */}
      <div className="flex items-center gap-3 pointer-events-none">
        <span className="w-2 h-2 rounded-sm bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
        <span className="text-[10px] md:text-xs tracking-[0.2em] text-emerald-400/80 uppercase font-bold">
          TERMINAL // ACTIVE
        </span>
      </div>

      {/* Center: Terminal Log Stream */}
      <div className="flex-1 flex flex-col justify-center relative max-w-3xl mx-auto w-full px-4">
        <div className="flex flex-col gap-2">
          {terminalLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={
                index <= logIndex 
                  ? { opacity: 1, x: 0 } 
                  : { opacity: 0, x: -10 }
              }
              transition={{ duration: 0.1 }}
              className={`text-sm md:text-lg tracking-wide ${
                index === terminalLogs.length - 1 
                  ? "text-blue-400 font-bold mt-4" 
                  : "text-slate-400"
              }`}
            >
              {index <= logIndex && (
                <span className="mr-3 text-slate-600">[{String(index + 1).padStart(2, '0')}:{(index * 142).toString().padStart(3, '0')}]</span>
              )}
              {index <= logIndex && log}
            </motion.div>
          ))}
          {logIndex < terminalLogs.length - 1 && (
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
              className="w-3 h-5 bg-emerald-500 mt-2 ml-14"
            />
          )}
        </div>
      </div>

      {/* Bottom Row: Hash Signature */}
      <div className="flex justify-between items-end pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-slate-500 uppercase font-semibold">
            ENGINEERING DIVISION
          </span>
          <span className="text-xs tracking-[0.1em] text-slate-600">
            ZELLIO-CORE-v2.0
          </span>
        </div>
        
        <div className="text-xs md:text-sm font-mono text-slate-600 flex items-center gap-2">
          LOAD: {Math.min(100, Math.floor(((logIndex + 1) / terminalLogs.length) * 100))}%
        </div>
      </div>
    </motion.div>
  );
}
