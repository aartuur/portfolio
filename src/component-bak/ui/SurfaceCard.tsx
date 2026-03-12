// src/components/ui/SurfaceCard.tsx
import React from "react";

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SurfaceCard({
  children,
  className = "",
}: SurfaceCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}