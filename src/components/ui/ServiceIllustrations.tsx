"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface IllustrationProps {
  isHovered: boolean;
}

const SLOW_EASE = [0.16, 1, 0.3, 1] as const;
const STROKE_COLOR = "#0F172A";
const ACCENT_COLOR = "#2563EB";

// 1. Isometric Stack (Web Development) - Like FIG 0.2
export const WebDevIllustration: React.FC<IllustrationProps> = ({ isHovered }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Isometric plate path: Center at (50, 50), width 60, height 34.6
  // Points: Top(50, 32.7), Right(80, 50), Bottom(50, 67.3), Left(20, 50)
  const platePath = "M 50 32.7 L 80 50 L 50 67.3 L 20 50 Z";

  return (
    <div 
      ref={ref} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative perspective-[1000px] flex items-center justify-center cursor-default"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full absolute inset-0 flex items-center justify-center"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-[85%] h-[85%] overflow-visible" strokeLinejoin="round" aria-hidden="true" focusable="false">
          
          {/* Base Block (Bottom) */}
          <motion.g animate={{ opacity: isHovered ? 1 : 0.6 }} transition={{ duration: 0.8, ease: SLOW_EASE }}>
            {/* Left face */}
            <path d="M 20 50 L 50 67.3 L 50 75 L 20 57.7 Z" stroke={STROKE_COLOR} strokeWidth="0.8" />
            {/* Right face */}
            <path d="M 50 67.3 L 80 50 L 80 57.7 L 50 75 Z" stroke={STROKE_COLOR} strokeWidth="0.8" />
          </motion.g>

          {/* Stacked Plates */}
          {[1, 2, 3, 4].map((i) => (
            <motion.path
              key={i}
              d={platePath}
              stroke={STROKE_COLOR}
              strokeWidth="0.8"
              fill="#ffffff"
              initial={{ y: 0 }}
              animate={{ 
                y: isHovered ? -i * 5 : -i * 2.5,
                opacity: isHovered ? 1 : 0.6 + (i * 0.1)
              }}
              transition={{ duration: 1.5, ease: SLOW_EASE }}
              style={{ transform: `translateY(${-i * 5}px)` }}
            />
          ))}

          {/* Top Plate with Cutout */}
          <motion.g
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -25 : -12.5 }}
            transition={{ duration: 1.5, ease: SLOW_EASE }}
          >
            {/* Outline of top plate */}
            <path d={platePath} stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" opacity="0.9" />
            
            {/* Isometric Cutout (Ellipse) */}
            {/* cx=50, cy=50, rx=18, ry=10.4 */}
            <ellipse cx="50" cy="50" rx="18" ry="10.4" stroke={STROKE_COLOR} strokeWidth="0.8" fill="none" />
            
            {/* Inner horizontal isometric lines inside the cutout */}
            <motion.g animate={{ opacity: isHovered ? 1 : 0.3 }} transition={{ duration: 1.5 }}>
              <path d="M 38 48 L 56 58.4" stroke={ACCENT_COLOR} strokeWidth="0.8" />
              <path d="M 44 46 L 62 56.4" stroke={ACCENT_COLOR} strokeWidth="0.8" />
              <path d="M 50 44 L 68 54.4" stroke={ACCENT_COLOR} strokeWidth="0.8" />
            </motion.g>
          </motion.g>

          {/* Vertical dashed alignment line */}
          <motion.line 
            x1="50" y1="20" x2="50" y2="75" 
            stroke={STROKE_COLOR} strokeWidth="0.5" strokeDasharray="2 3"
            animate={{ opacity: isHovered ? 0.4 : 0.1 }}
          />

        </svg>
      </motion.div>
    </div>
  );
};

// 2. Admin Dashboard (Isometric Bar Chart)
export const DashboardIllustration: React.FC<IllustrationProps> = ({ isHovered }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" fill="none" className="w-[85%] h-[85%] overflow-visible" strokeLinejoin="round" aria-hidden="true" focusable="false">
        {/* Isometric Grid Floor */}
        <motion.g animate={{ opacity: isHovered ? 0.8 : 0.4 }} transition={{ duration: 0.8, ease: SLOW_EASE }}>
          {/* Base plane */}
          <path d="M 15 65 L 50 85 L 85 65 L 50 45 Z" stroke={STROKE_COLOR} strokeWidth="0.8" />
          {/* Grid lines */}
          <path d="M 26.6 58.3 L 61.6 78.3 M 38.3 51.6 L 73.3 71.6" stroke={STROKE_COLOR} strokeWidth="0.4" opacity="0.5" />
          <path d="M 38.3 78.3 L 73.3 58.3 M 26.6 71.6 L 61.6 51.6" stroke={STROKE_COLOR} strokeWidth="0.4" opacity="0.5" />
        </motion.g>

        {/* Vertical Bars */}
        {/* Bar 1 */}
        <motion.g animate={{ y: isHovered ? 0 : 5, opacity: isHovered ? 1 : 0.6 }} transition={{ duration: 1.5, ease: SLOW_EASE, delay: 0 }}>
          <path d="M 30 55 L 38 59.6 L 38 40 L 30 35.4 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
          <path d="M 38 59.6 L 46 55 L 46 35.4 L 38 40 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
          <path d="M 30 35.4 L 38 40 L 46 35.4 L 38 30.8 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
        </motion.g>

        {/* Bar 2 (Taller) */}
        <motion.g animate={{ y: isHovered ? 0 : 8, opacity: isHovered ? 1 : 0.6 }} transition={{ duration: 1.5, ease: SLOW_EASE, delay: 0.1 }}>
          <path d="M 45 63.6 L 53 68.2 L 53 35 L 45 30.4 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
          <path d="M 53 68.2 L 61 63.6 L 61 30.4 L 53 35 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
          <path d="M 45 30.4 L 53 35 L 61 30.4 L 53 25.8 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
        </motion.g>

        {/* Bar 3 */}
        <motion.g animate={{ y: isHovered ? 0 : 4, opacity: isHovered ? 1 : 0.6 }} transition={{ duration: 1.5, ease: SLOW_EASE, delay: 0.2 }}>
          <path d="M 60 72.2 L 68 76.8 L 68 50 L 60 45.4 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
          <path d="M 68 76.8 L 76 72.2 L 76 45.4 L 68 50 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
          <path d="M 60 45.4 L 68 50 L 76 45.4 L 68 40.8 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
        </motion.g>

        {/* Floating Line Trend */}
        <motion.path
          d="M 38 25 L 53 15 L 68 30"
          stroke={ACCENT_COLOR}
          strokeWidth="1.2"
          fill="none"
          initial={{ pathLength: 0.2 }}
          animate={{ pathLength: isHovered ? 1 : 0.4, opacity: isHovered ? 1 : 0.5 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {/* Trend Dots */}
        <motion.circle cx="38" cy="25" r="1.5" fill={STROKE_COLOR} animate={{ opacity: isHovered ? 1 : 0.2 }} />
        <motion.circle cx="53" cy="15" r="1.5" fill={STROKE_COLOR} animate={{ opacity: isHovered ? 1 : 0.2 }} />
        <motion.circle cx="68" cy="30" r="1.5" fill={STROKE_COLOR} animate={{ opacity: isHovered ? 1 : 0.2 }} />
      </svg>
    </div>
  );
};

// 3. Mobile App (Isometric Phone Frame)
export const MobileAppIllustration: React.FC<IllustrationProps> = ({ isHovered }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" fill="none" className="w-[85%] h-[85%] overflow-visible" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <motion.g animate={{ y: isHovered ? 2 : -2 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
          
          {/* Base Phone Body */}
          <motion.g animate={{ opacity: isHovered ? 1 : 0.6 }} transition={{ duration: 0.8 }}>
            <path d="M 30 70 L 70 47 L 70 27 L 30 50 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 30 70 L 70 47 L 70 49 L 30 72 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#f8fafc" />
            <path d="M 30 70 L 30 72 L 28 71 L 28 49 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#f1f5f9" />
          </motion.g>

          {/* Floating UI Screen */}
          <motion.g
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -12 : -4, opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 1.5, ease: SLOW_EASE }}
          >
            <path d="M 32 67 L 68 46.2 L 68 29 L 32 49.8 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            
            {/* Screen Inner Elements */}
            <path d="M 36 62 L 64 45.8" stroke={STROKE_COLOR} strokeWidth="0.5" opacity="0.3" />
            <path d="M 36 58 L 56 46.4" stroke={STROKE_COLOR} strokeWidth="0.5" opacity="0.3" />
            
            {/* Accent Notification Tile */}
            <motion.path 
              d="M 45 42 L 60 33.3 L 60 28 L 45 36.6 Z" 
              stroke={ACCENT_COLOR} 
              strokeWidth="0.8" 
              fill="#ffffff"
              animate={{ y: isHovered ? -4 : 0 }}
              transition={{ duration: 1.5, ease: SLOW_EASE }}
            />
          </motion.g>

          {/* Connection Lines */}
          <motion.g animate={{ opacity: isHovered ? 0.3 : 0.1 }} transition={{ duration: 0.8 }}>
            <line x1="32" y1="67" x2="32" y2="55" stroke={STROKE_COLOR} strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="68" y1="46.2" x2="68" y2="34.2" stroke={STROKE_COLOR} strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="68" y1="29" x2="68" y2="17" stroke={STROKE_COLOR} strokeWidth="0.5" strokeDasharray="1 2" />
            <line x1="32" y1="49.8" x2="32" y2="37.8" stroke={STROKE_COLOR} strokeWidth="0.5" strokeDasharray="1 2" />
          </motion.g>

        </motion.g>
      </svg>
    </div>
  );
};

// 4. Custom IT Systems (Isometric Node Lattice)
export const ITSystemsIllustration: React.FC<IllustrationProps> = ({ isHovered }) => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % 6);
    }, 1000); // Shift every 1s
    return () => clearInterval(interval);
  }, []);

  const targets = [
    { x: 50, y: 30, color: "#3B82F6" },   // 0: Top
    { x: 75, y: 44.4, color: "#10B981" }, // 1: Top Right
    { x: 75, y: 73.3, color: "#F59E0B" }, // 2: Bottom Right
    { x: 50, y: 87.7, color: "#8B5CF6" }, // 3: Bottom
    { x: 25, y: 73.3, color: "#06B6D4" }, // 4: Bottom Left
    { x: 25, y: 44.4, color: "#F97316" }  // 5: Top Left
  ];

  const target = targets[activeLine];

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" fill="none" className="w-[85%] h-[85%] overflow-visible" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <motion.g 
          animate={{ 
            y: [0, -3, 0],
            opacity: isHovered ? 1 : 0.5 
          }} 
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 } 
          }}
        >
          
          {/* Back edges */}
          <path d="M 50 30 L 75 44.4 L 75 73.3" stroke={STROKE_COLOR} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.5" />
          <path d="M 50 30 L 25 44.4 L 25 73.3" stroke={STROKE_COLOR} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.5" />
          
          {/* Front edges */}
          <path d="M 50 87.7 L 75 73.3 L 50 58.8 Z" stroke={STROKE_COLOR} strokeWidth="0.8" />
          <path d="M 50 87.7 L 25 73.3 L 50 58.8 Z" stroke={STROKE_COLOR} strokeWidth="0.8" />
          <path d="M 50 58.8 L 75 44.4" stroke={STROKE_COLOR} strokeWidth="0.8" />
          <path d="M 50 58.8 L 25 44.4" stroke={STROKE_COLOR} strokeWidth="0.8" />
          <path d="M 50 58.8 L 50 30" stroke={STROKE_COLOR} strokeWidth="0.8" />
          
          {/* Rotating and drawing spoke line */}
          <motion.line 
            key={activeLine}
            x1="50" 
            y1="58.8" 
            x2={target.x} 
            y2={target.y}
            stroke={target.color} 
            strokeWidth="1.2" 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />

          {/* Nodes with pulse scaling synced to the active rotating beam */}
          <motion.circle 
            cx="50" cy="30" r="1.5" fill="#ffffff" 
            stroke={activeLine === 0 ? targets[0].color : STROKE_COLOR} 
            strokeWidth="1" 
            animate={{ scale: activeLine === 0 ? 1.5 : 1 }} 
            transition={{ duration: 0.3 }} 
          />
          <motion.circle 
            cx="25" cy="44.4" r="1.5" fill="#ffffff" 
            stroke={activeLine === 5 ? targets[5].color : STROKE_COLOR} 
            strokeWidth="1" 
            animate={{ scale: activeLine === 5 ? 1.5 : 1 }} 
            transition={{ duration: 0.3 }} 
          />
          <motion.circle 
            cx="75" cy="44.4" r="1.5" fill="#ffffff" 
            stroke={activeLine === 1 ? targets[1].color : STROKE_COLOR} 
            strokeWidth="1" 
            animate={{ scale: activeLine === 1 ? 1.5 : 1 }} 
            transition={{ duration: 0.3 }} 
          />
          <motion.circle 
            cx="25" cy="73.3" r="1.5" fill="#ffffff" 
            stroke={activeLine === 4 ? targets[4].color : STROKE_COLOR} 
            strokeWidth="1" 
            animate={{ scale: activeLine === 4 ? 1.5 : 1 }} 
            transition={{ duration: 0.3 }} 
          />
          <motion.circle 
            cx="75" cy="73.3" r="1.5" fill="#ffffff" 
            stroke={activeLine === 2 ? targets[2].color : STROKE_COLOR} 
            strokeWidth="1" 
            animate={{ scale: activeLine === 2 ? 1.5 : 1 }} 
            transition={{ duration: 0.3 }} 
          />
          <motion.circle 
            cx="50" cy="87.7" r="1.5" fill="#ffffff" 
            stroke={activeLine === 3 ? targets[3].color : STROKE_COLOR} 
            strokeWidth="1" 
            animate={{ scale: activeLine === 3 ? 1.5 : 1 }} 
            transition={{ duration: 0.3 }} 
          />
          
          <motion.circle 
            cx="50" cy="58.8" r="2" fill="#ffffff" 
            stroke={target.color} 
            strokeWidth="1.5" 
            animate={{ scale: isHovered ? [1, 1.3, 1] : [1, 1.15, 1] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
          />

        </motion.g>
      </svg>
    </div>
  );
};

// 5. Cloud DevOps (Isometric Clustered Cubes) - Like FIG 0.3
export const CloudDevOpsIllustration: React.FC<IllustrationProps> = ({ isHovered }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" fill="none" className="w-[85%] h-[85%] overflow-visible" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <motion.g animate={{ opacity: isHovered ? 1 : 0.5 }} transition={{ duration: 0.8, ease: SLOW_EASE }}>
          
          {/* Back Cube */}
          <motion.g animate={{ y: isHovered ? -2 : 0 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
            <path d="M 50 25 L 65 33.6 L 50 42.2 L 35 33.6 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 35 33.6 L 50 42.2 L 50 59.5 L 35 50.9 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 50 42.2 L 65 33.6 L 65 50.9 L 50 59.5 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <circle cx="50" cy="33.6" r="1" fill={ACCENT_COLOR} />
          </motion.g>

          {/* Left Cube */}
          <motion.g animate={{ y: isHovered ? 2 : 0 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
            <path d="M 32 45 L 47 53.6 L 32 62.2 L 17 53.6 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 17 53.6 L 32 62.2 L 32 79.5 L 17 70.9 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 32 62.2 L 47 53.6 L 47 70.9 L 32 79.5 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
          </motion.g>

          {/* Right Cube */}
          <motion.g animate={{ y: isHovered ? 1 : -1 }} transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
            <path d="M 68 45 L 83 53.6 L 68 62.2 L 53 53.6 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 53 53.6 L 68 62.2 L 68 70.9 L 53 62.2 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 68 62.2 L 83 53.6 L 83 62.2 L 68 70.9 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
          </motion.g>

          {/* Front Small Cube */}
          <motion.g animate={{ y: isHovered ? -1 : 1 }} transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}>
            <path d="M 50 60 L 62 66.9 L 50 73.8 L 38 66.9 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 38 66.9 L 50 73.8 L 50 85.3 L 38 78.4 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <path d="M 50 73.8 L 62 66.9 L 62 78.4 L 50 85.3 Z" stroke={STROKE_COLOR} strokeWidth="0.8" fill="#ffffff" />
            <circle cx="50" cy="66.9" r="1" fill={ACCENT_COLOR} />
          </motion.g>

        </motion.g>
      </svg>
    </div>
  );
};

// 6. UI UX (Isometric Vertical Blades) - Like FIG 0.4
export const UIDesignIllustration: React.FC<IllustrationProps> = ({ isHovered }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" fill="none" className="w-[85%] h-[85%] overflow-visible" strokeLinejoin="round" aria-hidden="true" focusable="false">
        <motion.g animate={{ opacity: isHovered ? 1 : 0.6 }} transition={{ duration: 0.8, ease: SLOW_EASE }}>
          
          {/* Series of vertical plates stepped isometrically */}
          {/* Each plate shifts X by 4, Y by 2.3 */}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => {
            const h = 40 + (i === 6 ? 15 : i === 5 ? 10 : i * -5); // Variable heights to create the wave shape
            const x = 20 + i * 8;
            const y = 60 + i * 4.6;
            
            return (
              <motion.g 
                key={i}
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, isHovered ? -16 : -7, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut", 
                  delay: i * 0.15 
                }}
              >
                {/* Left face */}
                <path d={`M ${x} ${y} L ${x-4} ${y-2.3} L ${x-4} ${y-2.3-h} L ${x} ${y-h} Z`} stroke={STROKE_COLOR} strokeWidth="0.6" fill="#ffffff" />
                {/* Right face */}
                <path d={`M ${x} ${y} L ${x+4} ${y-2.3} L ${x+4} ${y-2.3-h} L ${x} ${y-h} Z`} stroke={STROKE_COLOR} strokeWidth="0.6" fill="#ffffff" />
                {/* Top face */}
                <path d={`M ${x} ${y-h} L ${x-4} ${y-2.3-h} L ${x} ${y-4.6-h} L ${x+4} ${y-2.3-h} Z`} stroke={STROKE_COLOR} strokeWidth="0.6" fill="#ffffff" />
              </motion.g>
            );
          })}

          {/* Alignment guide line */}
          <motion.path 
            d="M 20 60 L 68 87.6" 
            stroke={ACCENT_COLOR} 
            strokeWidth="0.8" 
            strokeDasharray="2 2"
            animate={{ opacity: isHovered ? 1 : 0.3 }}
            transition={{ duration: 0.8 }}
          />

        </motion.g>
      </svg>
    </div>
  );
};
