"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ShowcaseProps {
  activeIndex: number;
}

// 8 morphing blocks to build our scenes
const NUM_BLOCKS = 8;
const NUM_PATHS = 8;

interface LayoutBlock {
  x: number;
  y: number;
  w: number;
  h: number;
  opacity: number;
  label: string;
  type: "solid" | "glass" | "dashed";
  delay?: number;
}

interface LayoutPath {
  d: string;
  opacity: number;
}

// 600x400 canvas mapping
const layouts: { blocks: LayoutBlock[]; paths: LayoutPath[] }[] = [
  // 0: Web Development
  {
    blocks: [
      { x: 40, y: 50, w: 520, h: 320, opacity: 1, label: "Browser Engine", type: "glass" },
      { x: 60, y: 70, w: 480, h: 40, opacity: 1, label: "Navigation", type: "solid" },
      { x: 60, y: 130, w: 120, h: 220, opacity: 1, label: "Sidebar", type: "solid" },
      { x: 200, y: 130, w: 340, h: 220, opacity: 1, label: "Main Content", type: "solid" },
      { x: 230, y: 160, w: 120, h: 80, opacity: 1, label: "Widget", type: "glass" },
      { x: 380, y: 160, w: 130, h: 80, opacity: 1, label: "Widget", type: "glass" },
      { x: 230, y: 260, w: 280, h: 60, opacity: 1, label: "Data Table", type: "glass" },
      { x: 300, y: 200, w: 0, h: 0, opacity: 0, label: "", type: "solid" },
    ],
    paths: [
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
    ]
  },
  // 1: Dashboards
  {
    blocks: [
      { x: 30, y: 40, w: 540, h: 320, opacity: 1, label: "Analytics Core", type: "glass" },
      { x: 50, y: 60, w: 250, h: 140, opacity: 1, label: "Revenue Bar Chart", type: "solid" },
      { x: 320, y: 60, w: 230, h: 140, opacity: 1, label: "Active Users Radial", type: "solid" },
      { x: 50, y: 220, w: 500, h: 120, opacity: 1, label: "Live Traffic Stream", type: "solid" },
      { x: 80, y: 100, w: 40, h: 80, opacity: 1, label: "", type: "glass" },
      { x: 150, y: 140, w: 40, h: 40, opacity: 1, label: "", type: "glass" },
      { x: 220, y: 80, w: 40, h: 100, opacity: 1, label: "", type: "glass" },
      { x: 435, y: 130, w: 40, h: 40, opacity: 1, label: "", type: "glass" }, // center of radial
    ],
    paths: [
      { d: "M 435 130 A 40 40 0 1 1 434 130", opacity: 0.8 }, // Radial circle
      { d: "M 395 130 A 40 40 0 0 1 435 90", opacity: 0.8 }, // Arc
      { d: "M 80 280 L 150 250 L 220 290 L 320 240 L 420 260 L 520 230", opacity: 0.8 }, // Line chart
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
    ]
  },
  // 2: Mobile App
  {
    blocks: [
      { x: 140, y: 40, w: 120, h: 260, opacity: 1, label: "iOS Native", type: "glass" },
      { x: 340, y: 40, w: 120, h: 260, opacity: 1, label: "Android Native", type: "glass" },
      { x: 150, y: 60, w: 100, h: 40, opacity: 1, label: "", type: "solid" },
      { x: 150, y: 120, w: 100, h: 160, opacity: 1, label: "Feed", type: "solid" },
      { x: 350, y: 60, w: 100, h: 40, opacity: 1, label: "", type: "solid" },
      { x: 350, y: 120, w: 100, h: 160, opacity: 1, label: "Feed", type: "solid" },
      { x: 240, y: 340, w: 120, h: 40, opacity: 1, label: "API Sync", type: "dashed" },
      { x: 300, y: 200, w: 0, h: 0, opacity: 0, label: "", type: "solid" },
    ],
    paths: [
      { d: "M 200 300 C 200 340, 240 360, 240 360", opacity: 0.8 }, // Connect iOS to API
      { d: "M 400 300 C 400 340, 360 360, 360 360", opacity: 0.8 }, // Connect Android to API
      { d: "M 260 180 C 300 150, 300 210, 340 180", opacity: 0.5 }, // Sync wave
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
    ]
  },
  // 3: IT Systems (Microservices)
  {
    blocks: [
      { x: 40, y: 160, w: 80, h: 80, opacity: 1, label: "Gateway", type: "dashed" },
      { x: 200, y: 60, w: 120, h: 60, opacity: 1, label: "Auth Service", type: "glass" },
      { x: 200, y: 170, w: 120, h: 60, opacity: 1, label: "User DB", type: "glass" },
      { x: 200, y: 280, w: 120, h: 60, opacity: 1, label: "Payment API", type: "glass" },
      { x: 380, y: 150, w: 60, h: 100, opacity: 1, label: "Kafka", type: "solid" },
      { x: 500, y: 100, w: 80, h: 60, opacity: 1, label: "Worker 1", type: "glass" },
      { x: 500, y: 240, w: 80, h: 60, opacity: 1, label: "Worker 2", type: "glass" },
      { x: 500, y: 240, w: 80, h: 60, opacity: 0, label: "", type: "glass" },
    ],
    paths: [
      { d: "M 120 200 C 160 200, 160 90, 200 90", opacity: 0.6 },
      { d: "M 120 200 L 200 200", opacity: 0.6 },
      { d: "M 120 200 C 160 200, 160 310, 200 310", opacity: 0.6 },
      { d: "M 320 90 C 350 90, 350 200, 380 200", opacity: 0.6 },
      { d: "M 320 200 L 380 200", opacity: 0.6 },
      { d: "M 320 310 C 350 310, 350 200, 380 200", opacity: 0.6 },
      { d: "M 440 200 C 470 200, 470 130, 500 130", opacity: 0.6 },
      { d: "M 440 200 C 470 200, 470 270, 500 270", opacity: 0.6 },
    ]
  },
  // 4: Cloud & DevOps
  {
    blocks: [
      { x: 260, y: 20, w: 80, h: 40, opacity: 1, label: "Ingress", type: "solid" },
      { x: 80, y: 90, w: 440, h: 260, opacity: 1, label: "Kubernetes Cluster", type: "dashed" },
      { x: 110, y: 130, w: 100, h: 80, opacity: 1, label: "Pod A", type: "glass" },
      { x: 250, y: 130, w: 100, h: 80, opacity: 1, label: "Pod B", type: "glass" },
      { x: 390, y: 130, w: 100, h: 80, opacity: 1, label: "Pod C", type: "glass" },
      { x: 110, y: 240, w: 100, h: 80, opacity: 1, label: "Replica 1", type: "solid" },
      { x: 250, y: 240, w: 100, h: 80, opacity: 1, label: "Replica 2", type: "solid" },
      { x: 390, y: 240, w: 100, h: 80, opacity: 1, label: "Replica 3", type: "solid" },
    ],
    paths: [
      { d: "M 300 60 C 300 100, 160 90, 160 130", opacity: 0.5 },
      { d: "M 300 60 C 300 100, 300 90, 300 130", opacity: 0.5 },
      { d: "M 300 60 C 300 100, 440 90, 440 130", opacity: 0.5 },
      { d: "M 160 210 L 160 240", opacity: 0.5 },
      { d: "M 300 210 L 300 240", opacity: 0.5 },
      { d: "M 440 210 L 440 240", opacity: 0.5 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
    ]
  },
  // 5: UI/UX (Figma style)
  {
    blocks: [
      { x: 60, y: 60, w: 480, h: 280, opacity: 1, label: "Frame 1", type: "glass" },
      { x: 80, y: 80, w: 440, h: 120, opacity: 1, label: "Hero Image Cover", type: "solid" },
      { x: 80, y: 220, w: 200, h: 20, opacity: 1, label: "", type: "solid" },
      { x: 80, y: 260, w: 320, h: 16, opacity: 1, label: "", type: "solid" },
      { x: 80, y: 300, w: 140, h: 16, opacity: 1, label: "", type: "solid" },
      { x: 74, y: 74, w: 452, h: 132, opacity: 1, label: "Selected Layer", type: "dashed" },
      { x: 50, y: 50, w: 4, h: 4, opacity: 1, label: "", type: "solid" }, // anchors
      { x: 546, y: 346, w: 4, h: 4, opacity: 1, label: "", type: "solid" },
    ],
    paths: [
      { d: "M 40 40 L 40 360", opacity: 0.3 }, // Grid lines
      { d: "M 40 40 L 560 40", opacity: 0.3 },
      { d: "M 560 40 L 560 360", opacity: 0.3 },
      { d: "M 40 360 L 560 360", opacity: 0.3 },
      { d: "M 250 140 L 250 140", opacity: 0 }, // Crosshair (could use a path)
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
      { d: "M 0 0 L 0 0", opacity: 0 },
    ]
  }
];

export default function ProceduralShowcase({ activeIndex }: ShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom Parallax Physics for the entire block
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 100, mass: 1.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

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

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const activeLayout = layouts[activeIndex] || layouts[0];
  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <div 
      className="w-full h-full min-h-[500px] flex items-center justify-center relative perspective-[1800px]"
      ref={containerRef}
    >
      <motion.div
        className="w-full max-w-[600px] aspect-[16/11] relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Procedural Animation Canvas */}
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 600 400" className="w-full h-full overflow-visible">
            {/* Morphing Connection Lines */}
            {activeLayout.paths.map((pathData, idx) => (
              <motion.path
                key={`path-${idx}`}
                stroke="#3B82F6"
                strokeWidth="2"
                fill="none"
                animate={{
                  d: pathData.d,
                  opacity: pathData.opacity
                }}
                transition={{ duration: 1.0, ease: premiumEase }}
                style={{ transformStyle: "preserve-3d" }}
              />
            ))}
          </svg>
        </div>

        {/* Morphing HTML Blocks */}
        {activeLayout.blocks.map((block, idx) => {
          let bgClass = "";
          let borderClass = "";
          let shadowClass = "";

          if (block.type === "glass") {
            bgClass = "bg-white/80 backdrop-blur-md";
            borderClass = "border border-blue-500/20";
            shadowClass = "shadow-[0_8px_30px_rgb(0,0,0,0.04)]";
          } else if (block.type === "solid") {
            bgClass = "bg-slate-50";
            borderClass = "border border-slate-200/50";
            shadowClass = "";
          } else if (block.type === "dashed") {
            bgClass = "bg-blue-500/5";
            borderClass = "border-2 border-dashed border-blue-500/30";
            shadowClass = "";
          }

          return (
            <motion.div
              key={`block-${idx}`}
              className={`absolute rounded-xl flex items-start justify-start p-3 ${bgClass} ${borderClass} ${shadowClass} overflow-hidden`}
              animate={{
                x: block.x,
                y: block.y,
                width: block.w,
                height: block.h,
                opacity: block.opacity
              }}
              transition={{ 
                duration: 1.0, 
                ease: premiumEase,
                delay: block.delay || (idx * 0.02)
              }}
              style={{
                transformStyle: "preserve-3d",
                translateZ: block.type === "glass" ? 20 : (block.type === "solid" ? 10 : 0)
              }}
            >
              <motion.span
                animate={{ opacity: block.opacity }}
                transition={{ duration: 0.8 }}
                className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap"
              >
                {block.label}
              </motion.span>
            </motion.div>
          );
        })}
        
      </motion.div>
    </div>
  );
}
