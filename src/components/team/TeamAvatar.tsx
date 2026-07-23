"use client";

import React from "react";

interface AvatarProps {
  name: "vico" | "samuel" | "cavendio" | "rendra" | "cynthia" | "kenji" | "sarah";
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
    sarah: "Mia" // QA female
  };

  const seed = seedMap[name] || name;
  const avatarUrl = `https://api.dicebear.com/7.x/micah/svg?seed=${seed}&backgroundColor=transparent`;

  return (
    <img 
      src={avatarUrl} 
      alt={`${name} avatar`} 
      className={className}
      style={{ objectFit: 'contain' }}
      loading="lazy"
    />
  );
}
