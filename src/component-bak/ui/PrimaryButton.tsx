// src/components/ui/PrimaryButton.tsx
import React from "react";
import { Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
};

export default function PrimaryButton({
  children,
  onClick,
  fullWidth = false,
}: PrimaryButtonProps) {
  return (
    <Button
      variant="contained"
      endIcon={<ArrowForwardRoundedIcon />}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        textTransform: "none",
        borderRadius: "999px",
        px: 3.2,
        py: 1.45,
        fontSize: "0.98rem",
        fontWeight: 700,
        color: "#06111f",
        background: "linear-gradient(135deg, #ffffff 0%, #bff4ff 100%)",
        boxShadow: "0 20px 60px rgba(72, 187, 255, 0.24)",
        "&:hover": {
          background: "linear-gradient(135deg, #ffffff 0%, #d8f8ff 100%)",
        },
      }}
    >
      {children}
    </Button>
  );
}