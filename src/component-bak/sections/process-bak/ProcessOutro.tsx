import { Box, Typography } from "@mui/material";

export function ProcessOutro() {
  return (
    <Box
      sx={{
        mt: 4,
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.03)",
        px: 2.5,
        py: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.72)",
        }}
      >
        Il risultato è un progetto più fluido, più comprensibile e più facile da portare avanti con fiducia.
      </Typography>
    </Box>
  );
}