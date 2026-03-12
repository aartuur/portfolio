// src/components/ui/SectionBadge.tsx
import { Chip } from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

type SectionBadgeProps = {
  label: string;
};

export default function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
      <Chip
        icon={<AutoAwesomeRoundedIcon />}
        label={label}
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