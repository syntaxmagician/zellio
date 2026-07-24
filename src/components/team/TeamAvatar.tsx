"use client";

import React from "react";
import Image from "next/image";

interface AvatarProps {
  name: "vico" | "samuel" | "cavendio" | "rendra" | "cynthia" | "kenji" | "sarah" | "hasyim";
  className?: string;
}

export default function TeamAvatar({ name, className = "w-full h-full" }: AvatarProps) {
  // Map names to specific seeds for consistent, premium 3D human appearances
  const seedMap: Record<string, string> = {
    vico: "Felix", // Sharp, professional tech lead
    samuel: "Oliver", // Friendly, glasses, frontend
    cavendio: "Jack", // Casual backend engineer
    rendra: "George", // Cloud architect
    cynthia: "Sophia", // Creative female
    kenji: "Leo", // Systems engineer
    sarah: "Mia", // QA female
    hasyim: "hasyim" // Backend & server
  };

  const seed = seedMap[name] || name;
  const extraParams = name === "hasyim" ? "&hair=mrT,mrClean" : "";
  const avatarUrl = `https://api.dicebear.com/7.x/micah/svg?seed=${seed}&backgroundColor=transparent${extraParams}`;

  return (
    <Image 
      src={avatarUrl} 
      alt={`${name} avatar`} 
      width={100}
      height={100}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
