import { Box, Typography } from "@mui/material";
import { ProcessBadge } from "./ProcessBadge";

export function ProcessIntro() {
  const points = [
    "Sai sempre a che punto siamo e qual è il prossimo step.",
    "Ogni fase ha un obiettivo preciso, senza confusione o passaggi inutili.",
  ];

  return (
    <div className="max-w-[760px]">
      <ProcessBadge label="Metodo • come lavoriamo" />

      <div className="mt-6">
        <Typography
          variant="h2"
          sx={{
            maxWidth: "12ch",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            color: "rgba(255,255,255,0.96)",
            fontSize: {
              xs: "2rem",
              sm: "2.8rem",
              lg: "3.6rem",
            },
          }}
        >
          Un processo semplice,
          <span className="block text-white/70">
            chiaro in ogni fase.
          </span>
        </Typography>

        <Typography
          sx={{
            mt: 3,
            maxWidth: "60ch",
            fontSize: { xs: "1rem", sm: "1.05rem" },
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.68)",
          }}
        >
          Lavorare bene significa avere un metodo leggibile. Dalla prima call al
          lancio, ogni step è definito per darti visione, ordine e controllo sul progetto.
        </Typography>
      </div>

      <div className="mt-8 grid gap-3">
        {points.map((point) => (
          <Box
            key={point}
            sx={{
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.03)",
              px: 2,
              py: 1.75,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.96rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              {point}
            </Typography>
          </Box>
        ))}
      </div>
    </div>
  );
}