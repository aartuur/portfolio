// src/components/sections/hero/HeroFloatingCard.tsx
import React from "react";

type HeroFloatingCardProps = {
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function HeroFloatingCard({
  title,
  eyebrow,
  description,
  className = "",
  children,
}: HeroFloatingCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#0b1323]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md ${className}`}
    >
      {eyebrow ? (
        <div className="text-xs uppercase tracking-[0.16em] text-slate-500">
          {eyebrow}
        </div>
      ) : null}
      {title ? (
        <div className="mt-2 text-lg font-semibold tracking-[-0.02em] text-white">
          {title}
        </div>
      ) : null}
      {description ? (
        <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
      ) : null}
      {children}
    </div>
  );
}