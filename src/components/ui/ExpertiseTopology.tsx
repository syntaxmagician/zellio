"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Node {
  id: number;
  x: number;
  y: number;
  label: string;
}

interface Topology {
  nodes: Node[];
  connections: [number, number][]; // pairs of node ids
}

const topologies: Topology[] = [
  // 0: Web Development
  {
    nodes: [
      { id: 0, x: 100, y: 200, label: "Browser" },
      { id: 1, x: 220, y: 130, label: "CDN Edge" },
      { id: 2, x: 340, y: 200, label: "API Gateway" },
      { id: 3, x: 460, y: 130, label: "App Server" },
      { id: 4, x: 520, y: 270, label: "Database" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 4]]
  },
  // 1: Dashboards
  {
    nodes: [
      { id: 0, x: 100, y: 120, label: "UI Widgets" },
      { id: 1, x: 250, y: 200, label: "Analytics Parser" },
      { id: 2, x: 380, y: 100, label: "REST/GraphQL API" },
      { id: 3, x: 320, y: 300, label: "Realtime Engine" },
      { id: 4, x: 500, y: 200, label: "Data Warehouse" }
    ],
    connections: [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]]
  },
  // 2: Mobile App
  {
    nodes: [
      { id: 0, x: 100, y: 130, label: "iOS Native Client" },
      { id: 1, x: 100, y: 270, label: "Android Native Client" },
      { id: 2, x: 280, y: 200, label: "API Sync Gateway" },
      { id: 3, x: 440, y: 130, label: "Push Service" },
      { id: 4, x: 520, y: 270, label: "Cloud Sync DB" }
    ],
    connections: [[0, 2], [1, 2], [2, 3], [2, 4], [3, 4]]
  },
  // 3: Custom IT Systems
  {
    nodes: [
      { id: 0, x: 100, y: 200, label: "Event Ingress" },
      { id: 1, x: 240, y: 200, label: "Message Queue" },
      { id: 2, x: 360, y: 110, label: "Worker Pool" },
      { id: 3, x: 460, y: 290, label: "ERP / CRM Sync" },
      { id: 4, x: 540, y: 200, label: "Notification Desk" }
    ],
    connections: [[0, 1], [1, 2], [1, 3], [2, 4], [3, 4]]
  },
  // 4: Cloud Infrastructure
  {
    nodes: [
      { id: 0, x: 100, y: 200, label: "Load Balancer" },
      { id: 1, x: 240, y: 130, label: "K8s Nodes" },
      { id: 2, x: 380, y: 200, label: "Redis Cache" },
      { id: 3, x: 480, y: 270, label: "SQL Cluster" },
      { id: 4, x: 520, y: 110, label: "S3 Object Store" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [1, 4], [3, 4]]
  },
  // 5: UI/UX & Product Design
  {
    nodes: [
      { id: 0, x: 120, y: 140, label: "Wireframe Grid" },
      { id: 1, x: 240, y: 260, label: "Prototype Links" },
      { id: 2, x: 360, y: 140, label: "Design Tokens" },
      { id: 3, x: 480, y: 260, label: "Asset Packager" },
      { id: 4, x: 520, y: 140, label: "Dev Handoff Portal" }
    ],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 4]]
  }
];

interface ExpertiseTopologyProps {
  activeIndex: number;
}

export default function ExpertiseTopology({ activeIndex }: ExpertiseTopologyProps) {
  const containerRef = useRef<SVGSVGElement>(null);
  
  // Parallax coordinates matching mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 40, stiffness: 140, mass: 1.2 };
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

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

  const currentTopology = topologies[activeIndex] || topologies[0];
  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <div 
      className="w-full max-w-[700px] aspect-[4/3] relative flex items-center justify-center overflow-visible"
      style={{ perspective: 1500 }}
    >
      {/* 3D World container */}
      <motion.div
        className="w-full h-full relative"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Ambient background grid lines inside the visualization canvas */}
        <div className="absolute inset-0 opacity-[0.03] border border-slate-900/10 pointer-events-none rounded-3xl z-0" 
             style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

        <motion.svg
          ref={containerRef}
          viewBox="0 0 600 400"
          className="w-full h-full relative z-10 overflow-visible"
        >
          {/* Defs for gradients & path filters */}
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Connection Lines (Paths) */}
          {currentTopology.connections.map(([fromId, toId], idx) => {
            const fromNode = currentTopology.nodes.find(n => n.id === fromId);
            const toNode = currentTopology.nodes.find(n => n.id === toId);

            if (!fromNode || !toNode) return null;

            // Generate clean curved layout paths (bezier curves)
            const getPathD = (n1: Node, n2: Node) => {
              const dx = n2.x - n1.x;
              const dy = n2.y - n1.y;
              const cx1 = n1.x + dx * 0.4;
              const cy1 = n1.y + dy * 0.1;
              const cx2 = n1.x + dx * 0.6;
              const cy2 = n1.y + dy * 0.9;
              return `M ${n1.x} ${n1.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${n2.x} ${n2.y}`;
            };

            return (
              <g key={`connection-${idx}`}>
                {/* Background Shadow line for thickness */}
                <motion.path
                  stroke="#E2E8F0"
                  strokeWidth="2.5"
                  fill="none"
                  animate={{ d: getPathD(fromNode, toNode) }}
                  transition={{ duration: 0.8, ease: premiumEase }}
                />

                {/* Animated active path (gradient stroke) */}
                <motion.path
                  stroke="url(#blueGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4 6"
                  animate={{ 
                    d: getPathD(fromNode, toNode),
                    strokeDashoffset: [0, -30]
                  }}
                  transition={{ 
                    d: { duration: 0.8, ease: premiumEase },
                    strokeDashoffset: { duration: 1.5, ease: "linear", repeat: Infinity }
                  }}
                />
              </g>
            );
          })}

          {/* Nodes (Circles + Labels) */}
          {currentTopology.nodes.map((node) => {
            return (
              <motion.g
                key={`node-${node.id}`}
                layout
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Node Outer Pulsing Aura */}
                <motion.circle
                  r="16"
                  fill="rgba(59, 130, 246, 0.08)"
                  stroke="rgba(59, 130, 246, 0.15)"
                  strokeWidth="1"
                  animate={{
                    cx: node.x,
                    cy: node.y,
                    scale: [1, 1.25, 1]
                  }}
                  transition={{
                    cx: { duration: 0.8, ease: premiumEase },
                    cy: { duration: 0.8, ease: premiumEase },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: node.id * 0.4 }
                  }}
                />

                {/* Node Core */}
                <motion.circle
                  r="6.5"
                  fill="#FFFFFF"
                  stroke="#2563EB"
                  strokeWidth="3.5"
                  style={{ filter: "drop-shadow(0 4px 8px rgba(37, 99, 235, 0.15))" }}
                  animate={{
                    cx: node.x,
                    cy: node.y
                  }}
                  transition={{ duration: 0.8, ease: premiumEase }}
                  whileHover={{ scale: 1.3 }}
                />

                {/* Node Text Label (Floating underneath) */}
                <motion.g
                  animate={{ x: node.x, y: node.y + 24 }}
                  transition={{ duration: 0.8, ease: premiumEase }}
                >
                  {/* Subtle Label Background for crisp rendering */}
                  <rect
                    x="-65"
                    y="-10"
                    width="130"
                    height="20"
                    fill="#FFFFFF"
                    rx="6"
                    opacity="0.85"
                  />
                  <text
                    textAnchor="middle"
                    className="fill-slate-700 font-mono text-[9px] font-bold tracking-wider uppercase"
                  >
                    {node.label}
                  </text>
                </motion.g>
              </motion.g>
            );
          })}
        </motion.svg>
      </motion.div>
    </div>
  );
}
