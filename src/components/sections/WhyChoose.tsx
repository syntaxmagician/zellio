"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const localText = {
  en: {
    label: "WHY QUALITY MATTERS",
    manifesto: "Many software projects fail not because of technology, but because they are built with rushed architecture, short-term thinking, and code that cannot evolve. Cheap software often becomes the most expensive business decision. At ZELLIO, we engineer software that remains maintainable, scalable, secure, and reliable for years.",
    principles: [
      {
        title: "Elite Engineers",
        description: "Our team consists of top-tier full-stack developers, UI/UX designers, and cloud architects working dedicatedly for your project."
      },
      {
        title: "Modern Technology Stack",
        description: "We leverage cutting-edge tech stacks (React, Next.js, Node, TypeScript) for maximum performance, security, and scalability."
      },
      {
        title: "Enterprise Security",
        description: "Security is integrated into every layer from day one, adhering to global standards and protecting your digital infrastructure."
      },
      {
        title: "Reliable Delivery",
        description: "We combine elite engineering with an agile, transparent development process to guarantee your project's success on time."
      }
    ]
  },
  id: {
    label: "MENGAPA KUALITAS PENTING",
    manifesto: "Banyak proyek perangkat lunak gagal bukan karena teknologinya, melainkan karena dibangun dengan arsitektur yang terburu-buru, pemikiran jangka pendek, dan kode yang tidak dapat berkembang. Perangkat lunak murah sering kali menjadi keputusan bisnis yang paling mahal. Di ZELLIO, kami merancang perangkat lunak yang tetap dapat dipelihara, berskala besar, aman, dan andal selama bertahun-tahun.",
    principles: [
      {
        title: "Insinyur Elit",
        description: "Tim kami terdiri dari pengembang full-stack, desainer UI/UX, dan arsitek cloud tingkat atas yang bekerja secara dedikatif untuk proyek Anda."
      },
      {
        title: "Teknologi Modern",
        description: "Kami memanfaatkan teknologi terbaru (React, Next.js, Node, TypeScript) demi performa, keamanan, dan skalabilitas sistem yang maksimal."
      },
      {
        title: "Keamanan Enterprise",
        description: "Keamanan diintegrasikan ke dalam setiap lapisan sejak hari pertama, mematuhi standar global dan melindungi infrastruktur digital Anda."
      },
      {
        title: "Pengiriman Andal",
        description: "Kami memadukan rekayasa teknologi elit dengan proses pengembangan yang transparan dan tangkas untuk menjamin keberhasilan proyek Anda tepat waktu."
      }
    ]
  }
};

/**
 * High-performance HTML5 Canvas Interactive Constellation Creator
 * As the user moves the mouse, it spawns temporary nodes that form glowing constellations.
 */
const NetworkVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const mouse = { x: -1000, y: -1000 };
    let lastSpawn = { x: -1000, y: -1000 };
    const MAX_BASE_NODES = 45;

    class Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      isCursor: boolean;
      life: number;
      maxLife: number;

      constructor(x: number, y: number, isCursor: boolean = false) {
        this.x = x;
        this.y = y;
        this.isCursor = isCursor;
        this.radius = isCursor ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.maxLife = isCursor ? 120 : Infinity;
        this.life = this.maxLife;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (!this.isCursor) {
          if (this.x < 0 || this.x > width) this.vx *= -1;
          if (this.y < 0 || this.y > height) this.vy *= -1;
        } else {
          this.life--;
        }

        // Subtle gravity pull toward the current mouse position
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          this.x += dx * force * 0.03;
          this.y += dy * force * 0.03;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        const opacity = this.isCursor ? (this.life / this.maxLife) * 0.9 : 0.3;
        ctx.fillStyle = `rgba(37, 99, 235, ${opacity})`;
        ctx.fill();
        
        // Outer glow for cursor-spawned nodes
        if (this.isCursor) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${(this.life / this.maxLife) * 0.25})`;
          ctx.fill();
        }
      }
    }

    let nodes: Node[] = [];

    const init = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      nodes = Array.from({ length: MAX_BASE_NODES }, () => new Node(Math.random() * width, Math.random() * height, false));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Clean dead cursor nodes
      nodes = nodes.filter(n => n.life > 0);

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 130) {
            let opacity = (1 - dist / 130) * 0.3;
            
            // If either node is spawned by the cursor, the connection glows bright blue
            if (nodes[i].isCursor || nodes[j].isCursor) {
               const lifeFactor = nodes[i].isCursor ? (nodes[i].life / nodes[i].maxLife) : (nodes[j].life / nodes[j].maxLife);
               opacity = (1 - dist / 130) * 0.7 * lifeFactor;
               ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            } else {
               // Background stars are very faint and more slate-colored
               ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.4})`;
            }

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => { n.update(); n.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      
      // Spawn a new constellation node every 20px of cursor movement
      const distFromLast = Math.hypot(mouse.x - lastSpawn.x, mouse.y - lastSpawn.y);
      if (distFromLast > 20) { 
        nodes.push(new Node(mouse.x, mouse.y, true));
        lastSpawn = { x: mouse.x, y: mouse.y };
      }
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />;
};


export default function WhyChoose() {
  const { language } = useLanguage();
  const text = localText[language];
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [clickedIdxs, setClickedIdxs] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const containerTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerTrackRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
  const premiumEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

  const words = [
    { text: "Invest", color: "text-slate-900" },
    { text: "in", color: "text-slate-900" },
    { text: "Quality.", color: "text-slate-900" },
    { text: "Avoid", color: "text-slate-900" },
    { text: "Broken", color: "text-blue-600" },
    { text: "Systems.", color: "text-blue-600" },
  ];

  return (
    <section id="why-choose" className="py-16 lg:py-24 bg-[#FFFFFF] overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Label */}
        <span className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-[0.2em] uppercase text-blue-600 mb-4 block">
          {text.label}
        </span>

        {/* Viewport-Dominating Manifesto Headline */}
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }} // Reduced restriction so it always triggers
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter leading-[1.05] mb-8 max-w-[1200px]"
        >
          {words.map((w, idx) => (
            <span key={idx} className="inline-block overflow-hidden py-1 mr-3 md:mr-5">
              <motion.span
                variants={{
                  hidden: { y: "120%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: premiumEase } }
                }}
                className={`inline-block ${w.color}`}
              >
                {w.text}
              </motion.span>
            </span>
          ))}
        </motion.h2>

        {/* Manifesto Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45, ease: premiumEase }}
          className="text-slate-500 font-medium text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mb-16"
        >
          {text.manifesto}
        </motion.p>

        {/* 
          FULL-WIDTH INTERACTIVE NETWORK CANVAS 
          Fixed Height to prevent it from becoming gigantic on wide screens
        */}
        <div ref={containerTrackRef} className="w-full relative overflow-hidden my-12 lg:my-16">
          <motion.div
            style={{ scale }}
            className="w-full h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] rounded-[32px] md:rounded-[40px] overflow-hidden border border-slate-200/60 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)] relative bg-white"
          >
            {/* Subtle base texture for the network */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(37,99,235,0.02),transparent)] pointer-events-none z-0" />
            <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />
            
            <div className="absolute inset-0 z-10">
              <NetworkVisualizer />
            </div>
            
            {/* Soft fade borders to blend out the nodes at the edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />

          </motion.div>
        </div>

        {/* MINIMALIST ENGINEERING PRINCIPLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12 lg:mt-16">
          {text.principles.map((principle, idx) => {
            const isHovered = hoveredIdx === idx;
            const isClicked = clickedIdxs.includes(idx);
            const isVisible = isHovered || isClicked || isMobile;

            const handleToggleClick = () => {
              if (clickedIdxs.includes(idx)) {
                setClickedIdxs(clickedIdxs.filter(i => i !== idx));
              } else {
                setClickedIdxs([...clickedIdxs, idx]);
              }
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: premiumEase }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={handleToggleClick}
                className="flex flex-col pt-8 border-t border-slate-200/80 cursor-pointer min-h-[160px] group select-none"
              >
                <span className="text-[10px] font-mono font-bold text-slate-400 mb-4 block group-hover:text-blue-600 transition-colors duration-300">
                  0{idx + 1}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                  {principle.title}
                </h3>
                <div className="overflow-hidden">
                  <motion.p
                    className="text-slate-500 font-medium text-sm md:text-base leading-relaxed mt-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isVisible ? "auto" : 0, 
                      opacity: isVisible ? 1 : 0 
                    }}
                    transition={{ duration: 0.35, ease: premiumEase }}
                  >
                    {principle.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
