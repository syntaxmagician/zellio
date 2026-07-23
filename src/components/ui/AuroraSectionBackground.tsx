"use client";

import React, { useEffect, useRef } from "react";

export default function AuroraSectionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);
    resize();

    let time = 0;
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.002;

      // Soft diagonal aurora light gradients
      ctx.globalCompositeOperation = "screen";

      // Cyan cloud
      const cx1 = width * 0.2 + Math.sin(time) * 100;
      const cy1 = height * 0.8 + Math.cos(time * 0.8) * 100;
      const r1 = Math.min(width, height) * 0.6;
      const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
      grad1.addColorStop(0, "rgba(34, 211, 238, 0.035)");
      grad1.addColorStop(1, "rgba(34, 211, 238, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Violet cloud
      const cx2 = width * 0.8 + Math.cos(time * 1.2) * 100;
      const cy2 = height * 0.2 + Math.sin(time * 0.7) * 100;
      const r2 = Math.min(width, height) * 0.7;
      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
      grad2.addColorStop(0, "rgba(167, 139, 250, 0.03)");
      grad2.addColorStop(1, "rgba(167, 139, 250, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Light trails (diagonal from bottom-left to top-right)
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const offset = i * 150;
        const startX = -200 + offset + Math.sin(time * 2 + i) * 50;
        const startY = height + 200 - offset;
        const endX = width + 200;
        const endY = -200 + offset;
        
        const opacity = (Math.sin(time * 3 + i * 2) + 1) * 0.03;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        // Add a slight bezier curve to the line to make it organic
        ctx.bezierCurveTo(
          startX + width * 0.3, startY - height * 0.1,
          endX - width * 0.3, endY + height * 0.1,
          endX, endY
        );
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
        ctx.stroke();
      }
      
      ctx.globalCompositeOperation = "source-over";
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
