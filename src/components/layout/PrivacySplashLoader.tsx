"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const policySteps = [
  "LOADING SECURITY AUDIT PROTOCOLS...",
  "RESOLVING LEGAL SCHEMA STRUCTURE...",
  "VERIFYING ENCRYPTION DECR-ALGO-V3...",
  "GDPR / CCPA COMPLIANCE SCAN: COMPLETED",
  "DECRYPTING LEGAL BLUEPRINT PLAIN-TEXT...",
  "DECRYPTION PROTOCOL COMPLETE."
];

export default function PrivacySplashLoader() {
  const [stepIndex, setStepIndex] = useState(0);
  const [matrixText, setMatrixText] = useState("");

  // Terminal step progression
  useEffect(() => {
    const isBot = typeof navigator !== "undefined" && /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|chrome-lighthouse|lighthouse/i.test(navigator.userAgent);
    if (isBot || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStepIndex(policySteps.length - 1);
      return;
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < policySteps.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 380);

    return () => clearInterval(interval);
  }, []);

  // Matrix-like code rain generation
  useEffect(() => {
    const chars = "0101XYZ##$$--//[]{}<>*+%$@!";
    const interval = setInterval(() => {
      let result = "";
      for (let i = 0; i < 15; i++) {
        let row = "";
        for (let j = 0; j < 32; j++) {
          row += chars[Math.floor(Math.random() * chars.length)];
        }
        result += row + "\n";
      }
      setMatrixText(result);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[99999] bg-[#0A0A0B] flex flex-col justify-between p-6 md:p-12 overflow-hidden pointer-events-auto font-mono text-indigo-400"
    >
      {/* Top Left: Terminal Status */}
      <div className="flex items-center gap-3 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse" />
        <span className="text-[10px] md:text-xs tracking-[0.2em] text-indigo-400/80 uppercase font-bold">
          DOCUMENT SCAN // DECRYPTING
        </span>
      </div>

      {/* Center: Matrix Data Rain Panel + Log stream side-by-side */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl mx-auto w-full px-4">
        
        {/* Left: Code Rain Screen */}
        <div className="relative w-full max-w-sm h-48 border border-indigo-500/10 rounded-2xl bg-[#09090c] p-4 overflow-hidden flex flex-col justify-center">
          <pre className="text-[9px] md:text-[10px] leading-relaxed text-indigo-500/25 pointer-events-none select-none text-center font-mono whitespace-pre font-bold">
            {matrixText}
          </pre>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent pointer-events-none" />
          
          {/* Scanning line */}
          <motion.div 
            className="absolute left-0 right-0 h-[2px] bg-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Right: Diagnostic logs */}
        <div className="flex-1 flex flex-col justify-center min-w-0 w-full lg:w-auto h-40">
          <div className="flex flex-col gap-2.5">
            {policySteps.map((log, index) => (
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
                  index === policySteps.length - 1 
                    ? "text-white font-bold" 
                    : "text-indigo-400/60"
                }`}
              >
                {index <= stepIndex && (
                  <span className="mr-3 text-indigo-400/30">DECR_{String(index + 1).padStart(2, '0')}</span>
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
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-indigo-400/40 uppercase font-semibold">
            LEGAL ARCHITECTURE
          </span>
          <span className="text-xs tracking-[0.1em] text-indigo-400/30">
            COMPLIANCE-SCHEMAS-v1.0
          </span>
        </div>
        
        <div className="text-xs md:text-sm font-mono text-indigo-400/50 flex items-center gap-2">
          DECRYPT: {Math.min(100, Math.floor(((stepIndex + 1) / policySteps.length) * 100))}%
        </div>
      </div>
    </motion.div>
  );
}
