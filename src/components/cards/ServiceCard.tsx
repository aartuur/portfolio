import * as React from "react";
import { Chip, Typography } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

type ServiceCardProps = {
  index: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: React.ReactNode;
};

export function ServiceCard({
  index,
  title,
  description,
  outcomes,
  icon,
}: ServiceCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.028] p-6 transition duration-300 hover:border-white/16 hover:bg-white/[0.04] md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.028),rgba(255,255,255,0))]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-100">
            {icon}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/24">
              {index}
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/30 transition duration-300 group-hover:border-white/14 group-hover:text-white/60">
              <ArrowOutwardRoundedIcon sx={{ fontSize: 17 }} />
            </div>
          </div>
        </div>

        <div className="mt-7">
          <Typography
            className="text-white"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.35rem" },
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 2.25,
              color: "rgba(255,255,255,0.58)",
              lineHeight: 1.9,
              fontSize: "0.96rem",
            }}
            className="max-w-[34ch]"
          >
            {description}
          </Typography>
        </div>

        <div className="mt-8 border-t border-white/8 pt-5">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/24">
            Risultato
          </div>

          <div className="flex flex-wrap gap-2.5">
            {outcomes.map((outcome) => (
              <Chip
                key={outcome}
                label={outcome}
                size="small"
                sx={{
                  height: 32,
                  color: "rgba(248,250,252,0.9)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "999px",
                  "& .MuiChip-label": {
                    px: 1.5,
                    fontSize: "0.76rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  },
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}