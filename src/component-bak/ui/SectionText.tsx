// src/components/ui/SectionText.tsx
import React from "react";

type SectionTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionText({
  children,
  className = "",
}: SectionTextProps) {
  return (
    <p className={`text-base leading-8 text-slate-300 sm:text-lg ${className}`}>
      {children}
    </p>
  );
}