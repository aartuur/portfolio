import * as React from "react";
import Typography from "@mui/material/Typography";
import { PremiumSurface } from "../ui/PremiumSurface";

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <PremiumSurface className="group relative h-full overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.02] p-7 transition duration-300 hover:border-white/14 hover:bg-white/[0.03]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sky-200">
            {icon}
          </div>

          <span className="text-[11px] uppercase tracking-[0.18em] text-white/22">
            Value
          </span>
        </div>

        <Typography
          variant="h6"
          sx={{
            mt: 3,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
          className="text-white"
        >
          {title}
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "text.secondary",
            lineHeight: 1.85,
            fontSize: "0.98rem",
          }}
          className="max-w-[32ch]"
        >
          {description}
        </Typography>

        <div className="mt-6 pt-5 border-t border-white/8">
          <div className="flex items-center gap-2 text-sm text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/90" />
            Più chiarezza, più fiducia
          </div>
        </div>
      </div>
    </PremiumSurface>
  );
}