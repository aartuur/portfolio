import { Chip } from "@mui/material";

type ProcessBadgeProps = {
  label: string;
};

export function ProcessBadge({ label }: ProcessBadgeProps) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        height: 34,
        borderRadius: "999px",
        color: "rgba(255,255,255,0.88)",
        border: "1px solid rgba(255,255,255,0.12)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        backdropFilter: "blur(10px)",
        "& .MuiChip-label": {
          px: 1.5,
          fontSize: "0.72rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontWeight: 600,
        },
      }}
    />
  );
}