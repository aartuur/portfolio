import * as React from "react";
import { cx } from "../../utils/cx";

type PremiumSurfaceProps = {
  children: React.ReactNode;
  className?: string;
};

export function PremiumSurface({ children, className }: PremiumSurfaceProps) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(3,7,18,0.45)] backdrop-blur-xl",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02)_35%,rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-px rounded-[27px] border border-white/5" />
      <div className="relative">{children}</div>
    </div>
  );
}