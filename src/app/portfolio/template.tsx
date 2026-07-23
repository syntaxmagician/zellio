"use client";

import { motion } from "framer-motion";

export default function PortfolioTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 
        GPU-Accelerated Multi-Column Curtain Sweep Transition!
        We animate 'scaleY' with 'origin-top' instead of 'height' to prevent layout reflows,
        ensuring 120fps smooth transitions.
      */}
      <div className="fixed inset-0 z-[9999] flex pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              duration: 0.7,
              delay: i * 0.06,
              ease: [0.76, 0, 0.24, 1], // Awwwards-style easing
            }}
            style={{ originY: 0 }}
            className="flex-1 bg-[#0F172A] border-r border-white/5 last:border-0 relative will-change-transform"
          >
             <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* Page Content Fade & Scale (removed heavy filter: blur for perfect performance) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
