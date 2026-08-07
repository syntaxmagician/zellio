"use client";

import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";

type LazyVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  src: string;
  /** Start loading when this fraction of the element is visible (0–1). */
  rootMargin?: string;
};

/**
 * Defers network fetch for below-the-fold videos until near viewport.
 * Keeps Lighthouse payload and main-thread work down on first paint.
 */
export default function LazyVideo({
  src,
  rootMargin = "200px",
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  ...rest
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setActiveSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [src, rootMargin]);

  useEffect(() => {
    const node = ref.current;
    if (!node || !activeSrc || !autoPlay) return;
    void node.play().catch(() => {
      /* autoplay can be blocked; muted+playsInline usually succeeds */
    });
  }, [activeSrc, autoPlay]);

  return (
    <video
      ref={ref}
      src={activeSrc}
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload="none"
      aria-hidden="true"
      {...rest}
    />
  );
}
