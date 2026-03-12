// src/components/sections/hero/HeroBadge.tsx
import { Chip } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

export default function HeroBadge() {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
      <Chip
        icon={<AutoAwesomeRoundedIcon />}
        label="Micro web agency • design premium per piccole imprese"
        sx={{
          color: "#dbeafe",
          bgcolor: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          fontWeight: 600,
          letterSpacing: "0.01em",
          height: 36,
          ".MuiChip-icon": { color: "#7dd3fc" },
        }}
      />
    </div>
  );
}