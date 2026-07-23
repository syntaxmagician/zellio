"use client";

import React, { useEffect, useRef } from "react";

/**
 * A fast, lightweight 3D Simplex Noise implementation.
 * Avoids the need to install heavy external math libraries.
 */
class SimplexNoise {
  private p: Uint8Array;
  private perm: Uint8Array;
  private permMod12: Uint8Array;

  constructor() {
    this.p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) {
      this.p[i] = Math.floor(Math.random() * 256);
    }
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = (this.perm[i] % 12);
    }
  }

  private dot(g: number[], x: number, y: number, z: number) {
    return g[0] * x + g[1] * y + g[2] * z;
  }

  public noise3D(xin: number, yin: number, zin: number) {
    const F3 = 1.0 / 3.0;
    const G3 = 1.0 / 6.0;
    const grad3 = [
      [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
      [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
      [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
    ];

    let n0, n1, n2, n3;
    const s = (xin + yin + zin) * F3;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const k = Math.floor(zin + s);
    const t = (i + j + k) * G3;
    const X0 = i - t;
    const Y0 = j - t;
    const Z0 = k - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;
    const z0 = zin - Z0;

    let i1, j1, k1;
    let i2, j2, k2;

    if (x0 >= y0) {
      if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
      else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
      else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
    } else {
      if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
      else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
      else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
    }

    const x1 = x0 - i1 + G3;
    const y1 = y0 - j1 + G3;
    const z1 = z0 - k1 + G3;
    const x2 = x0 - i2 + 2.0 * G3;
    const y2 = y0 - j2 + 2.0 * G3;
    const z2 = z0 - k2 + 2.0 * G3;
    const x3 = x0 - 1.0 + 3.0 * G3;
    const y3 = y0 - 1.0 + 3.0 * G3;
    const z3 = z0 - 1.0 + 3.0 * G3;

    const ii = i & 255;
    const jj = j & 255;
    const kk = k & 255;

    let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0) n0 = 0.0;
    else {
      t0 *= t0;
      n0 = t0 * t0 * this.dot(grad3[this.permMod12[ii + this.perm[jj + this.perm[kk]]]], x0, y0, z0);
    }

    let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0) n1 = 0.0;
    else {
      t1 *= t1;
      n1 = t1 * t1 * this.dot(grad3[this.permMod12[ii + i1 + this.perm[jj + j1 + this.perm[kk + k1]]]], x1, y1, z1);
    }

    let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0) n2 = 0.0;
    else {
      t2 *= t2;
      n2 = t2 * t2 * this.dot(grad3[this.permMod12[ii + i2 + this.perm[jj + j2 + this.perm[kk + k2]]]], x2, y2, z2);
    }

    let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0) n3 = 0.0;
    else {
      t3 *= t3;
      n3 = t3 * t3 * this.dot(grad3[this.permMod12[ii + 1 + this.perm[jj + 1 + this.perm[kk + 1]]]], x3, y3, z3);
    }

    return 32.0 * (n0 + n1 + n2 + n3);
  }
}

interface Point2D {
  x: number;
  y: number;
}

class Ribbon {
  seedX: number;
  seedY: number;
  speed: number;
  width: number;
  color: string;
  age: number;
  maxAge: number;
  layer: number;

  constructor(w: number, h: number, isInitial = false) {
    this.seedX = isInitial ? Math.random() * w : -150 - Math.random() * 200;
    this.seedY = Math.random() * h;
    this.age = 0;
    this.maxAge = Math.random() * 400 + 300;

    const r = Math.random();
    if (r < 0.35) {
      // 1. Background layer: Very slow, very thin, low opacity gray
      this.layer = 0;
      this.speed = Math.random() * 0.4 + 0.3;
      this.width = 0.5;
      this.color = "rgba(148, 163, 184, 0.05)"; // light slate gray
    } else if (r < 0.85) {
      // 2. Middle layer: Primary ribbons, standard speed/color
      this.layer = 1;
      this.speed = Math.random() * 0.6 + 0.6;
      this.width = 0.85;
      this.color = "rgba(15, 23, 42, 0.04)"; // low opacity dark slate
    } else {
      // 3. Foreground layer: Brighter, slightly faster, brand blue accents
      this.layer = 2;
      this.speed = Math.random() * 0.8 + 0.9;
      this.width = 1.2;
      // 40% chance of brand blue, 60% chance of darker navy accent
      this.color = Math.random() < 0.40
        ? "rgba(37, 99, 235, 0.12)" // brand blue
        : "rgba(15, 23, 42, 0.07)"; // darker navy accent
    }
  }

  update(w: number, h: number) {
    this.seedX += this.speed;
    this.age++;

    // Recycle ribbon when off-screen or too old
    if (this.seedX > w + 200 || this.seedY > h + 150 || this.seedY < -150 || this.age > this.maxAge) {
      this.seedX = -150;
      this.seedY = Math.random() * h;
      this.age = 0;
    }
  }
}

export default function FlowFieldHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let ribbons: Ribbon[] = [];
    const NUM_RIBBONS = 220; // Perfect balance for thousands of overlapping lines
    const simplex = new SimplexNoise();

    // Mouse coordinate caching
    let mouseX = -1000;
    let mouseY = -1000;

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

      // Render fresh white canvas
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      // Initialize ribbons across the screen width on first load
      ribbons = [];
      for (let i = 0; i < NUM_RIBBONS; i++) {
        ribbons.push(new Ribbon(width, height, true));
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let zTime = 0;
    let animationFrameId: number;

    const render = () => {
      // Clear screen to pure white. No trailing fades needed since we redraw complete curves!
      // This guarantees ultra-crisp hairline renders without any blurry trails.
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      zTime += 0.8; // Time evolutionary z-axis

      // Math Config for Streamline tracing
      const steps = 18; // Number of bezier segment steps
      const stepSize = 25; // Length of each segment step
      const noiseScale = 0.0006; // Very low frequency for calm wind currents

      // Draw ribbons layer by layer (Z-index ordering)
      for (let layerId = 0; layerId < 3; layerId++) {
        const activeRibbons = ribbons.filter((r) => r.layer === layerId);

        for (let rIndex = 0; rIndex < activeRibbons.length; rIndex++) {
          const ribbon = activeRibbons[rIndex];
          ribbon.update(width, height);

          // Trace streamline path starting at ribbon seed
          const points: Point2D[] = [];
          let currentX = ribbon.seedX;
          let currentY = ribbon.seedY;

          points.push({ x: currentX, y: currentY });

          // Horizontal/diagonal wind vector bias
          const windVx = 1.6;
          const windVy = 0.25;

          for (let step = 0; step < steps; step++) {
            // Calculate Simplex vector (Curl Noise) at current coordinates
            const nx = currentX * noiseScale;
            const ny = currentY * noiseScale;
            const nz = zTime * 0.0008;

            const n1 = simplex.noise3D(nx, ny + 0.001, nz);
            const n2 = simplex.noise3D(nx, ny - 0.001, nz);
            const curlX = (n1 - n2) / 0.002;

            const n3 = simplex.noise3D(nx + 0.001, ny, nz);
            const n4 = simplex.noise3D(nx - 0.001, ny, nz);
            const curlY = -(n3 - n4) / 0.002;

            // Combine wind current bias + curl dynamics
            let vx = windVx + curlX * 0.95;
            let vy = windVy + curlY * 0.65;

            // Normalize velocity to keep step sizes predictable
            const length = Math.sqrt(vx * vx + vy * vy) || 1;
            vx = (vx / length) * stepSize;
            vy = (vy / length) * stepSize;

            let nextX = currentX + vx;
            let nextY = currentY + vy;

            // Subtle Mouse Repulsion/Repelling vector
            const dxMouse = nextX - mouseX;
            const dyMouse = nextY - mouseY;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            const influenceRadius = 140;

            if (distMouse < influenceRadius) {
              const pushForce = ((influenceRadius - distMouse) / influenceRadius) * 28;
              // Push point away from cursor perpendicular/outwards
              nextX += (dxMouse / distMouse) * pushForce;
              nextY += (dyMouse / distMouse) * pushForce;
            }

            points.push({ x: nextX, y: nextY });
            currentX = nextX;
            currentY = nextY;
          }

          // Draw the traced points as a smooth multi-segment bezier path
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);

          // Draw quadratic curves through points for extreme fluidity
          for (let i = 1; i < points.length - 1; i++) {
            const xc = (points[i].x + points[i + 1].x) / 2;
            const yc = (points[i].y + points[i + 1].y) / 2;
            ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
          }
          
          ctx.lineWidth = ribbon.width;
          ctx.strokeStyle = ribbon.color;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 z-0 overflow-hidden bg-white">
      {/* Background radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)] pointer-events-none opacity-80" />
      
      {/* Invisible engineering grid overlay at 2% opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      
      {/* Dynamic Ribbon Flow Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.95 }}
      />

      {/* Edge blending gradients */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
