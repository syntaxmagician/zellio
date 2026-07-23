"use client";

import React, { useEffect, useRef } from "react";

/**
 * A fast, lightweight 3D Simplex Noise implementation for slowly evolving wind/current layouts.
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

interface DataNode {
  strandIndex: number;
  t: number;
  speed: number;
  size: number;
  color: string;
  glowColor: string;
}

export default function AuroraFlowHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const simplex = new SimplexNoise();

    // 80 parallel strands forming the sweeping wind layout
    const NUM_STRANDS = 80;
    const strandsOffsets: { offsetAngle: number; spreadScale: number; color: string; width: number }[] = [];

    // Colors mapping from requested palette
    const colors = [
      "rgba(34, 211, 238, 0.09)",   // Ice Cyan
      "rgba(59, 130, 246, 0.08)",   // Electric Blue
      "rgba(167, 139, 250, 0.08)",  // Soft Violet
      "rgba(99, 102, 241, 0.07)",   // Soft Indigo
      "rgba(226, 232, 240, 0.06)"   // Light Gray
    ];

    for (let i = 0; i < NUM_STRANDS; i++) {
      strandsOffsets.push({
        offsetAngle: (i - NUM_STRANDS / 2) * 0.025,
        spreadScale: (i / NUM_STRANDS) * 45 - 22,
        color: colors[i % colors.length],
        width: Math.random() * 0.8 + 0.4 // Hairline widths
      });
    }

    // Volumetric cloud layer properties
    const clouds = [
      { color: "rgba(167, 139, 250, 0.03)", xFactor: 0.72, yFactor: 0.28, radiusFactor: 0.22, speedX: 0.0001, speedY: 0.00015 }, // Violet
      { color: "rgba(34, 211, 238, 0.025)", xFactor: 0.65, yFactor: 0.58, radiusFactor: 0.28, speedX: -0.00012, speedY: 0.00008 }, // Cyan
      { color: "rgba(99, 102, 241, 0.025)", xFactor: 0.82, yFactor: 0.42, radiusFactor: 0.24, speedX: 0.00007, speedY: -0.0001 }  // Indigo
    ];

    // Data Nodes traveling along splines
    const nodes: DataNode[] = [];
    const NUM_NODES = 16;
    const nodeGlowColors = [
      { base: "#22D3EE", glow: "rgba(34, 211, 238, 0.75)" }, // Cyan
      { base: "#3B82F6", glow: "rgba(59, 130, 246, 0.75)" }, // Electric Blue
      { base: "#C084FC", glow: "rgba(192, 132, 252, 0.75)" } // Violet
    ];

    for (let i = 0; i < NUM_NODES; i++) {
      const glowPair = nodeGlowColors[i % nodeGlowColors.length];
      nodes.push({
        strandIndex: Math.floor(Math.random() * NUM_STRANDS),
        t: Math.random(),
        speed: Math.random() * 0.0008 + 0.0005, // Exceptionally slow, organic movement
        size: Math.random() * 1.5 + 1.2,
        color: glowPair.base,
        glowColor: glowPair.glow
      });
    }

    // Parallax mouse coordinates
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

      // Warm start drawing white canvas
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);
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

    let time = 0;
    let animationFrameId: number;

    // Cubic Bezier interpolation
    const getBezierPoint = (p0: Point2D, p1: Point2D, p2: Point2D, p3: Point2D, t: number): Point2D => {
      const oneMinusT = 1 - t;
      const temp0 = oneMinusT * oneMinusT * oneMinusT;
      const temp1 = 3 * oneMinusT * oneMinusT * t;
      const temp2 = 3 * oneMinusT * t * t;
      const temp3 = t * t * t;
      return {
        x: temp0 * p0.x + temp1 * p1.x + temp2 * p2.x + temp3 * p3.x,
        y: temp0 * p0.y + temp1 * p1.y + temp2 * p2.y + temp3 * p3.y
      };
    };

    const render = () => {
      // 1. Redraw clean background base
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, width, height);

      time += 0.0018; // Very slow time evolution

      // 2. Draw blurred volumetric light clouds
      ctx.globalCompositeOperation = "multiply";
      for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i];
        const cx = width * (cloud.xFactor + Math.sin(time * 0.8 + i) * 0.04);
        const cy = height * (cloud.yFactor + Math.cos(time * 0.7 - i) * 0.04);
        const r = Math.min(width, height) * (cloud.radiusFactor + Math.sin(time * 0.4 + i) * 0.02);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, cloud.color);
        grad.addColorStop(0.5, cloud.color.replace(/[\d.]+\)$/, "0.01)"));
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      // Define standard control points for the diagonal S-curve
      // Starts offscreen top-right, sweeps down-left towards center, curves out bottom-right
      const p0 = { x: width * 0.9, y: -150 };
      const p1 = { x: width * 0.42, y: height * 0.22 };
      const p2 = { x: width * 0.48, y: height * 0.68 };
      const p3 = { x: width * 1.05, y: height * 1.15 };

      // Pre-calculate strand spline coordinate lists for rendering and data node mapping
      const strandsPaths: Point2D[][] = [];
      const segmentResolution = 60; // Smooth curve segments

      for (let sIndex = 0; sIndex < NUM_STRANDS; sIndex++) {
        const offset = strandsOffsets[sIndex];
        const points: Point2D[] = [];

        for (let step = 0; step <= segmentResolution; step++) {
          const t = step / segmentResolution;

          // Base spline coordinate
          const basePt = getBezierPoint(p0, p1, p2, p3, t);

          // Apply parallel spreading and Simplex wave dynamics
          const noiseVal = simplex.noise3D(
            t * 1.5,
            sIndex * 0.04,
            time * 0.5
          ) * 22;

          const dxSpread = Math.cos(t * Math.PI + offset.offsetAngle) * offset.spreadScale;
          const dySpread = Math.sin(t * Math.PI + offset.offsetAngle) * offset.spreadScale;

          let sx = basePt.x + dxSpread + noiseVal;
          let sy = basePt.y + dySpread + noiseVal * 0.6;

          // Parallax Mouse interaction: Bends lines away from kursor
          const dxMouse = sx - mouseX;
          const dyMouse = sy - mouseY;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
          const influenceRadius = 160;

          if (distMouse < influenceRadius) {
            const push = ((influenceRadius - distMouse) / influenceRadius) * 22;
            sx += (dxMouse / distMouse) * push;
            sy += (dyMouse / distMouse) * push;
          }

          points.push({ x: sx, y: sy });
        }
        strandsPaths.push(points);
      }

      // 3. Draw Translucent Aurora Ribbons (Thick blurred glass backgrounds)
      ctx.globalCompositeOperation = "screen";
      for (let i = 0; i < 4; i++) {
        const targetStrand = strandsPaths[Math.floor(i * (NUM_STRANDS / 4.5))];
        if (!targetStrand || targetStrand.length === 0) continue;

        ctx.beginPath();
        ctx.moveTo(targetStrand[0].x, targetStrand[0].y);
        for (let j = 1; j < targetStrand.length - 1; j++) {
          const xc = (targetStrand[j].x + targetStrand[j + 1].x) / 2;
          const yc = (targetStrand[j].y + targetStrand[j + 1].y) / 2;
          ctx.quadraticCurveTo(targetStrand[j].x, targetStrand[j].y, xc, yc);
        }

        ctx.strokeStyle = "rgba(34, 211, 238, 0.02)"; // ultra soft cyan glow
        ctx.lineWidth = 26;
        ctx.stroke();

        ctx.strokeStyle = "rgba(167, 139, 250, 0.015)"; // violet accent
        ctx.lineWidth = 14;
        ctx.stroke();
      }
      ctx.globalCompositeOperation = "source-over";

      // 4. Draw primary hairline splines
      for (let sIndex = 0; sIndex < NUM_STRANDS; sIndex++) {
        const path = strandsPaths[sIndex];
        const offset = strandsOffsets[sIndex];

        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);

        for (let j = 1; j < path.length - 1; j++) {
          const xc = (path[j].x + path[j + 1].x) / 2;
          const yc = (path[j].y + path[j + 1].y) / 2;
          ctx.quadraticCurveTo(path[j].x, path[j].y, xc, yc);
        }

        ctx.strokeStyle = offset.color;
        ctx.lineWidth = offset.width;
        ctx.stroke();
      }

      // 5. Draw glowing data nodes traveling along splines
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.t += node.speed;
        if (node.t > 1) {
          node.t = 0;
          node.strandIndex = Math.floor(Math.random() * NUM_STRANDS);
        }

        const path = strandsPaths[node.strandIndex];
        if (!path) continue;

        // Fetch exact position on the path based on parameter t
        const pathLen = path.length - 1;
        const indexFloat = node.t * pathLen;
        const indexLow = Math.floor(indexFloat);
        const indexHigh = Math.min(pathLen, indexLow + 1);
        const weight = indexFloat - indexLow;

        const pLow = path[indexLow];
        const pHigh = path[indexHigh];

        if (!pLow || !pHigh) continue;

        const nodeX = pLow.x + (pHigh.x - pLow.x) * weight;
        const nodeY = pLow.y + (pHigh.y - pLow.y) * weight;

        // Draw node with volumetric bloom glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, node.size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.glowColor;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
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
      {/* Background soft radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,1)_100%)] pointer-events-none" />
      
      {/* Fine monochrome grid at 2% opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.95 }}
      />
    </div>
  );
}
