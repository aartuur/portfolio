// src/components/ui/SecondaryButton.tsx
import React from "react";
import { Button } from "@mui/material";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
};

export default function SecondaryButton({
  children,
  onClick,
  fullWidth = false,
}: SecondaryButtonProps) {
  return (
    <Button
      variant="outlined"
      endIcon={<NorthEastRoundedIcon />}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        textTransform: "none",
        borderRadius: "999px",
        px: 3.2,
        py: 1.45,
        fontSize: "0.98rem",
        fontWeight: 700,
        color: "#eff6ff",
        borderColor: "rgba(255,255,255,0.14)",
        backgroundColor: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(10px)",
        "&:hover": {
          borderColor: "rgba(255,255,255,0.26)",
          backgroundColor: "rgba(255,255,255,0.06)",
        },
      }}
    >
      {children}
    </Button>
  );
}