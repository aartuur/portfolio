// src/components/ui/SectionShell.tsx
import React from "react";

type SectionShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionShell({
  children,
  className = "",
}: SectionShellProps) {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-10 ${className}`}>
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </div>
  );
}