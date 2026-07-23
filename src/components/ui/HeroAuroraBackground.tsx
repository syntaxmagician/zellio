"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * -------------------------------------------------------------
 * CONSTANTS & PROCEDURAL GENERATION
 * -------------------------------------------------------------
 * We use a deterministic pseudo-random generator so that the SVGs 
 * render exactly the same on Server and Client, avoiding hydration errors.
 */

const getSeededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// 4 Core Master S-Curves shifted further RIGHT (x > 500) so they do not bleed into the left side.
// The curves sweep gently from upper right to lower right.
const MASTER_BUNDLES = [
  { path: "M 950 -200 C 650 300, 600 700, 1000 1200", spread: 40 },
  { path: "M 900 -200 C 500 400, 700 600, 950 1200", spread: 60 },
  { path: "M 1050 -200 C 700 200, 500 800, 1050 1200", spread: 50 },
  { path: "M 850 -200 C 550 150, 750 900, 900 1200", spread: 45 },
];

// Extremely subtle colors: 95% white/slate, 5% faint blue
const STRAND_COLORS = [
  "#FFFFFF", // Pure white
  "#FFFFFF", // Pure white
  "#F8FAFC", // Slate 50
  "#F0F9FF", // Sky 50
  "#E0F2FE", // Sky 100
  "#FFFFFF", // Pure white
];

interface Strand {
  id: number;
  d: string;
  color: string;
  width: number;
  opacity: number;
  offsetX: number;
  offsetY: number;
}

// Procedurally generate hundreds of offset hairline strands around the core curves
const generateStrands = (layer: 'mid' | 'fore'): Strand[] => {
  const strands: Strand[] = [];
  const strandCount = layer === 'fore' ? 60 : 40; // 100 strands total
  
  for (let i = 0; i < strandCount; i++) {
    const bundle = MASTER_BUNDLES[i % MASTER_BUNDLES.length];
    
    const r1 = getSeededRandom(i * 12.9898 + (layer === 'fore' ? 100 : 0));
    const r2 = getSeededRandom(i * 78.233 + (layer === 'fore' ? 100 : 0));
    
    // Calculate lateral spread to create a "ribbon bundle" effect
    const offsetX = (r1 - 0.5) * bundle.spread;
    const offsetY = (r2 - 0.5) * bundle.spread;
    
    const color = STRAND_COLORS[i % STRAND_COLORS.length];
    
    // Foreground strands are thinner and sharper, midground are slightly thicker
    const width = layer === 'fore' ? (0.2 + r1 * 0.6) : (0.5 + r1 * 1.5);
    const opacity = layer === 'fore' ? (0.05 + r2 * 0.25) : (0.02 + r2 * 0.15);
    
    strands.push({
      id: i,
      d: bundle.path,
      color,
      width,
      opacity,
      offsetX,
      offsetY,
    });
  }
  return strands;
};

const foreStrands = generateStrands('fore');
const midStrands = generateStrands('mid');

// Tiny photons traveling along the master curves
const PHOTONS = [
  { path: MASTER_BUNDLES[0].path, color: "#FFFFFF", size: 2.5, duration: "32s", delay: "0s" },
  { path: MASTER_BUNDLES[1].path, color: "#22D3EE", size: 1.5, duration: "45s", delay: "10s" }, // Soft Cyan
  { path: MASTER_BUNDLES[2].path, color: "#8B5CF6", size: 2.0, duration: "38s", delay: "5s" },  // Soft Violet
  { path: MASTER_BUNDLES[3].path, color: "#E0F2FE", size: 3.0, duration: "50s", delay: "15s" },
  
  // Reverse paths (data flowing backwards upwards)
  { path: "M 1000 1200 C 300 700, 400 300, 900 -200", color: "#FFFFFF", size: 2.0, duration: "40s", delay: "12s" },
  { path: "M 950 1200 C 400 600, 200 400, 850 -200", color: "#E0F2FE", size: 1.5, duration: "55s", delay: "20s" },
];


export default function HeroAuroraBackground() {
  const [isDesktop, setIsDesktop] = useState(true);

  // Responsive scaling to preserve battery/CPU on mobile by disabling heavy mouse events
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Soft Parallax Configuration (Imperceptible depth shift)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { damping: 100, stiffness: 50, mass: 3 });
  const smoothY = useSpring(mouseY, { damping: 100, stiffness: 50, mass: 3 });
  
  const parallaxMidX = useTransform(smoothX, [0, 1], [15, -15]);
  const parallaxMidY = useTransform(smoothY, [0, 1], [15, -15]);
  const parallaxForeX = useTransform(smoothX, [0, 1], [30, -30]);
  const parallaxForeY = useTransform(smoothY, [0, 1], [30, -30]);

  useEffect(() => {
    if (!isDesktop) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, mouseX, mouseY]);


  return (
    <div 
      className="absolute top-0 right-0 w-full md:w-[55%] h-full overflow-hidden pointer-events-none z-0 flex items-center justify-center"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, transparent 20%, black 55%, black 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 20%, black 55%, black 100%)"
      }}
    >
      <div className="w-full h-full relative">
        
        {/* Ambient Volume Core Background (Very faint Deep Navy to Indigo base) */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-10%] w-[120%] h-[120%] blur-[120px]"
          style={{
            background: "radial-gradient(circle at 60% 40%, rgba(55, 48, 163, 0.05) 0%, rgba(15, 23, 42, 0.02) 40%, transparent 70%)"
          }}
        />

        {/* Master SVG Canvas containing all ribbons, fibers, and photons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
            className="w-[120%] h-[120%] min-w-[900px]"
          >
            <defs>
              {/* Premium Cinematic Lighting Gradients */}
              <linearGradient id="glowNavyIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3730A3" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="glowIndigoCyan" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3730A3" stopOpacity="0.0" />
                <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="glowViolet" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.2" />
              </linearGradient>
              
              {/* Realistic Bloom and Depth of Field Filters */}
              <filter id="bloom" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="dof-mid" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>

            {/* 
              1. VOLUMETRIC BACKGROUND LAYER 
              Thick, deeply blurred paths providing the "liquid light" base.
            */}
            <motion.g
              animate={{ x: [0, 10, 0], y: [0, 15, 0], opacity: [0.25, 0.35, 0.25] }}
              transition={{ duration: 55, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d={MASTER_BUNDLES[0].path} stroke="url(#glowNavyIndigo)" strokeWidth="120" fill="none" style={{ filter: 'blur(60px)', opacity: 0.2 }} />
              <path d={MASTER_BUNDLES[1].path} stroke="url(#glowIndigoCyan)" strokeWidth="140" fill="none" style={{ filter: 'blur(80px)', opacity: 0.15 }} />
              <path d={MASTER_BUNDLES[2].path} stroke="url(#glowViolet)" strokeWidth="90" fill="none" style={{ filter: 'blur(50px)', opacity: 0.2 }} />
            </motion.g>

            {/* 
              2. MIDGROUND THREADS (Depth of Field)
              Soft-focused bundle of fibers rendered behind the sharp foreground.
            */}
            <motion.g
              style={{ x: isDesktop ? parallaxMidX : 0, y: isDesktop ? parallaxMidY : 0 }}
              animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
              transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
              filter="url(#dof-mid)"
            >
              {midStrands.map((strand) => (
                <path
                  key={`mid-${strand.id}`}
                  d={strand.d}
                  stroke={strand.color}
                  strokeWidth={strand.width}
                  fill="none"
                  transform={`translate(${strand.offsetX}, ${strand.offsetY})`}
                  style={{ opacity: strand.opacity }}
                  strokeLinecap="round"
                />
              ))}
            </motion.g>

            {/* 
              3. FOREGROUND THREADS
              Hyper-crisp hairline strands forming the main optical fiber ribbon structure.
            */}
            <motion.g
              style={{ x: isDesktop ? parallaxForeX : 0, y: isDesktop ? parallaxForeY : 0 }}
              animate={{ x: [0, 12, 0], y: [0, -12, 0], scale: [1, 1.01, 1] }}
              transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
            >
              {foreStrands.map((strand) => (
                <path
                  key={`fore-${strand.id}`}
                  d={strand.d}
                  stroke={strand.color}
                  strokeWidth={strand.width}
                  fill="none"
                  transform={`translate(${strand.offsetX}, ${strand.offsetY})`}
                  style={{ opacity: strand.opacity }}
                  strokeLinecap="round"
                />
              ))}
            </motion.g>

            {/* 
              4. MICROSCOPIC PHOTON PARTICLES
              Subtle light data flowing through the fiber lines.
            */}
            <motion.g
              style={{ x: isDesktop ? parallaxForeX : 0, y: isDesktop ? parallaxForeY : 0 }}
              animate={{ x: [0, 12, 0], y: [0, -12, 0] }}
              transition={{ duration: 60, repeat: Infinity, ease: "easeInOut" }}
            >
              {PHOTONS.map((photon, idx) => (
                <circle 
                  key={`photon-${idx}`} 
                  r={photon.size} 
                  fill={photon.color} 
                  filter="url(#bloom)"
                  style={{ mixBlendMode: 'screen' }}
                >
                  <animateMotion 
                    dur={photon.duration} 
                    repeatCount="indefinite" 
                    path={photon.path} 
                    begin={photon.delay} 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0; 0.8; 0.8; 0" 
                    keyTimes="0; 0.2; 0.8; 1" 
                    dur={photon.duration} 
                    repeatCount="indefinite" 
                    begin={photon.delay} 
                  />
                </circle>
              ))}
            </motion.g>

          </svg>
        </div>

      </div>
    </div>
  );
}
