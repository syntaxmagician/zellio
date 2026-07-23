"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function ProceduralArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for that heavy, premium inertial feel
  const springConfig = { damping: 40, stiffness: 120, mass: 1.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  // Shared animation timeline configuration (16s Loop)
  const duration = 16;
  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-[800px] aspect-[4/3] relative flex items-center justify-center select-none overflow-visible"
      style={{ perspective: 1800 }}
    >
      {/* 3D World Space */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        
        {/* Layer 0: Invisible Engineering Grid (Background) */}
        <motion.div 
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          style={{ transform: "translateZ(-80px)" }}
        >
          <svg viewBox="0 0 800 600" className="w-full h-full opacity-45">
            {/* Horizontal Blueprint Lines */}
            {[100, 200, 300, 400, 500].map((y, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0" y1={y} x2="800" y2={y}
                stroke="#475569" strokeWidth="1.2" strokeDasharray="6 8"
                animate={{
                  opacity: [0, 0.6, 0.6, 0],
                  pathLength: [0, 1, 1, 0]
                }}
                transition={{ duration, times: [0, 0.1, 0.9, 1], repeat: Infinity, ease }}
              />
            ))}
            {/* Vertical Blueprint Lines */}
            {[150, 300, 450, 650].map((x, i) => (
              <motion.line
                key={`v-${i}`}
                x1={x} y1="0" x2={x} y2="600"
                stroke="#475569" strokeWidth="1.2" strokeDasharray="6 8"
                animate={{
                  opacity: [0, 0.6, 0.6, 0],
                  pathLength: [0, 1, 1, 0]
                }}
                transition={{ duration, times: [0, 0.1, 0.9, 1], repeat: Infinity, ease }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Layer 1: Base Platform */}
        <motion.div
          className="absolute w-[600px] h-[400px] bg-slate-100/30 border-2 border-slate-300/60 backdrop-blur-lg rounded-3xl"
          style={{ transform: "translateZ(0px)" }}
          animate={{
            scale: [0.85, 1, 1, 0.85],
            opacity: [0, 1, 1, 0],
            borderRadius: ["40px", "32px", "32px", "40px"]
          }}
          transition={{ duration, times: [0, 0.15, 0.85, 1], repeat: Infinity, ease }}
        >
          {/* Edge Highlights */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]" />
        </motion.div>

        {/* Layer 2: UI Blocks Assembly */}
        
        {/* Sidebar Component */}
        <motion.div
          className="absolute left-1/2 top-1/2 bg-white/80 backdrop-blur-2xl border-2 border-slate-300/80 rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] flex flex-col gap-4 p-4"
          style={{ transform: "translateZ(30px) translate(-50%, -50%)" }}
          animate={{
            width: [0, 140, 140, 0],
            height: [0, 320, 320, 0],
            x: [0, -210, -210, 0],
            y: [0, 0, 0, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration, times: [0.1, 0.25, 0.75, 0.9], repeat: Infinity, ease }}
        >
          {/* Mock sidebar lines drawing in */}
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i}
              className="h-3 bg-slate-200/80 rounded-full"
              animate={{ width: ["0%", "100%", "100%", "0%"] }}
              transition={{ duration, times: [0.25 + i * 0.01, 0.35 + i * 0.01, 0.65 + i * 0.01, 0.75 + i * 0.01], repeat: Infinity, ease }}
            />
          ))}
        </motion.div>

        {/* Header Component */}
        <motion.div
          className="absolute left-1/2 top-1/2 bg-white/80 backdrop-blur-2xl border-2 border-slate-300/80 rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] flex items-center px-6"
          style={{ transform: "translateZ(35px) translate(-50%, -50%)" }}
          animate={{
            width: [0, 420, 420, 0],
            height: [0, 60, 60, 0],
            x: [0, 80, 80, 0],
            y: [0, -130, -130, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration, times: [0.12, 0.27, 0.73, 0.88], repeat: Infinity, ease }}
        >
          <motion.div 
            className="w-7 h-7 rounded-full bg-blue-500/25 border-2 border-blue-500/50 shrink-0"
            animate={{ scale: [0, 1, 1, 0] }}
            transition={{ duration, times: [0.27, 0.35, 0.65, 0.73], repeat: Infinity, ease }}
          />
        </motion.div>

        {/* Main DataGrid Component */}
        <motion.div
          className="absolute left-1/2 top-1/2 bg-white/60 backdrop-blur-2xl border-2 border-slate-300/80 rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.08)] flex flex-col gap-4 p-6"
          style={{ transform: "translateZ(25px) translate(-50%, -50%)" }}
          animate={{
            width: [0, 420, 420, 0],
            height: [0, 240, 240, 0],
            x: [0, 80, 80, 0],
            y: [0, 40, 40, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{ duration, times: [0.15, 0.3, 0.7, 0.85], repeat: Infinity, ease }}
        >
          {/* Mock data rows */}
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={`row-${i}`}
              className="w-full flex items-center gap-4"
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{ duration, times: [0.3 + i * 0.02, 0.4 + i * 0.02, 0.6 + i * 0.02, 0.7 + i * 0.02], repeat: Infinity, ease }}
            >
              <div className="w-6 h-6 rounded bg-slate-300 shrink-0" />
              <div className="flex-1 h-3.5 bg-slate-200/50 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-slate-400"
                  animate={{ width: ["0%", `${55 + Math.random() * 35}%`, `${55 + Math.random() * 35}%`, "0%"] }}
                  transition={{ duration, times: [0.4, 0.5, 0.6, 0.7], repeat: Infinity, ease }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Layer 3: Connection Paths (Drawn dynamically) */}
        <motion.div 
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          style={{ transform: "translateZ(50px)" }}
        >
          <svg viewBox="0 0 800 600" className="w-full h-full opacity-80">
            {/* Line from Sidebar to DataGrid */}
            <motion.path
              d="M 270 300 C 350 300, 350 340, 480 340"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3.5"
              strokeDasharray="6 6"
              animate={{
                pathLength: [0, 0, 1, 1, 0, 0],
                opacity: [0, 0, 0.85, 0.85, 0, 0]
              }}
              transition={{ duration, times: [0, 0.35, 0.45, 0.55, 0.65, 1], repeat: Infinity, ease }}
            />
          </svg>
        </motion.div>

        {/* Layer 4: Overlay Node (Floating highly-lifted component) */}
        <motion.div
          className="absolute left-1/2 top-1/2 bg-slate-900 border-2 border-slate-700 rounded-2xl shadow-[0_24px_48px_-8px_rgba(0,0,0,0.22)] flex flex-col items-center justify-center gap-3"
          style={{ transform: "translateZ(80px) translate(-50%, -50%)" }}
          animate={{
            width: [0, 160, 160, 0],
            height: [0, 100, 100, 0],
            x: [0, 220, 220, 0],
            y: [0, -40, -40, 0],
            opacity: [0, 1, 1, 0],
            rotateY: [10, 0, 0, 10]
          }}
          transition={{ duration, times: [0, 0.4, 0.6, 1], repeat: Infinity, ease }}
        >
          {/* Inner details for Overlay */}
          <motion.div 
            className="w-9 h-9 rounded-full border-[3.5px] border-blue-500 border-t-transparent"
            animate={{ rotate: 360, opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ 
              rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
              opacity: { duration, times: [0, 0.45, 0.5, 0.55, 0.6, 1], repeat: Infinity }
            }}
          />
          <motion.div 
            className="text-[11px] text-slate-200 font-mono tracking-widest font-bold uppercase"
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ duration, times: [0, 0.45, 0.5, 0.55, 0.6, 1], repeat: Infinity }}
          >
            Deploying
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}
