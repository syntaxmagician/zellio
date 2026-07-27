"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

export interface ServiceRow {
  slug: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  image: string;
}

/**
 * Services index: image, name,  what the service actually is.
 *
 * A uniform grid rather than a masonry of varying heights — the cards carry a
 * paragraph each, and ragged card heights leave the text baselines out of step
 * across a row, which reads as sloppy rather than editorial.
 */
export default function ServiceIndexList({ rows }: { rows: ServiceRow[] }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".svc-card", {
        y: 34,
        opacity: 0,
        duration: 0.75,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 82%", once: true },
      });
    },
    { scope }
  );

  return (
    <div
      ref={scope}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-14"
    >
      {rows.map((row, i) => (
        <Link
          key={row.slug}
          href={`/services/${row.slug}`}
          className="svc-card group flex flex-col"
        >
          <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
            <Image
              src={row.image}
              alt={row.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <span className="absolute top-4 left-4 font-mono text-[10px] font-bold tabular-nums text-white bg-slate-950/45 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <ArrowUpRight size={20} />
            </span>
          </div>

          <div className="pt-5 flex flex-col flex-1">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] mb-3">
              <span className="text-blue-600 font-bold">{row.category}</span>
              <span className="w-px h-3 bg-slate-200" />
              <span className="text-slate-400">{row.duration}</span>
            </div>

            <h3 className="text-lg lg:text-xl font-black tracking-tight text-slate-900 leading-snug transition-colors duration-300 group-hover:text-blue-600">
              {row.title}
            </h3>

            <p className="mt-3 text-[14px] leading-relaxed text-slate-500 font-medium line-clamp-3">
              {row.description}
            </p>

            {/* Rule grows from the left as a quiet click affordance */}
            <span className="mt-5 block h-px w-full bg-slate-200 relative overflow-hidden">
              <span className="absolute inset-y-0 left-0 w-full bg-slate-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
