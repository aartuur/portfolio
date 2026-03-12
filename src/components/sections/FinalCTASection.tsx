import {
  Button,
  Container,
  Stack,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

const steps = [
  {
    title: "Primo contatto",
    description:
      "Mi scrivi con una panoramica rapida del progetto, del contesto e di ciò che vuoi migliorare.",
  },
  {
    title: "Confronto iniziale",
    description:
      "Ti rispondo con alcune domande mirate per capire meglio obiettivi, priorità e tipo di presenza che vuoi costruire.",
  },
  {
    title: "Direzione chiara",
    description:
      "Se il progetto è adatto, definiamo il modo giusto per impostarlo con più ordine, più qualità e più coerenza.",
  },
];

export function FinalCTASection() {
  return (
    <section id="contatti" className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />

      <Container maxWidth="xl" className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 xl:grid-cols-[0.95fr_1.05fr] xl:gap-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                <EmailRoundedIcon sx={{ fontSize: 14, color: "#93C5FD" }} />
                Disponibile per nuovi incarichi
              </div>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.15rem", md: "3.25rem" },
                  lineHeight: 1.02,
                  maxWidth: 760,
                }}
              >
                Se vuoi dare al tuo sito una presenza più forte, più ordinata e più credibile, questo è il momento giusto per iniziare.
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  lineHeight: 1.9,
                  maxWidth: 680,
                }}
              >
                Il primo passo è semplice. Bastano poche informazioni ben date per capire
                se il progetto ha direzione, potenziale e le basi giuste per essere
                costruito nel modo corretto.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 5, width: { xs: "100%", sm: "auto" } }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowOutwardRoundedIcon />}
                  sx={{
                    color: "#06111F",
                    background:
                      "linear-gradient(135deg, rgba(238,246,255,1), rgba(135,198,255,1), rgba(161,149,255,0.96))",
                    boxShadow: "0 16px 44px rgba(113,184,255,0.24)",
                    "&:hover": {
                      boxShadow: "0 20px 48px rgba(113,184,255,0.3)",
                      background:
                        "linear-gradient(135deg, rgba(246,250,255,1), rgba(148,206,255,1), rgba(172,161,255,1))",
                    },
                  }}
                >
                  Scrivimi per il progetto
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<LanguageRoundedIcon />}
                  sx={{
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "rgba(241,245,249,0.92)",
                    backgroundColor: "transparent",
                    "&:hover": {
                      borderColor: "rgba(255,255,255,0.18)",
                      backgroundColor: "rgba(255,255,255,0.04)",
                    },
                  }}
                >
                  hello@lucaferri.studio
                </Button>
              </Stack>
            </div>

            <div className="xl:pt-4">
              <div className="border-l border-white/10 pl-6 md:pl-8">
                <div className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Come si parte
                </div>

                <Stepper
                  orientation="vertical"
                  activeStep={-1}
                  sx={{
                    backgroundColor: "transparent",
                    "& .MuiStep-root": {
                      padding: 0,
                    },
                    "& .MuiStepLabel-root": {
                      alignItems: "flex-start",
                      padding: 0,
                    },
                    "& .MuiStepLabel-iconContainer": {
                      paddingRight: "14px",
                      paddingTop: "2px",
                    },
                    "& .MuiStepIcon-root": {
                      color: "rgba(255,255,255,0.18)",
                    },
                    "& .MuiStepIcon-text": {
                      fill: "rgba(255,255,255,0.9)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    },
                    "& .MuiStepLabel-label": {
                      color: "rgba(248,250,252,0.96)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    },
                    "& .MuiStepContent-root": {
                      borderColor: "rgba(255,255,255,0.1)",
                      marginLeft: "12px",
                      paddingLeft: "22px",
                      paddingBottom: "26px",
                    },
                  }}
                >
                  {steps.map((step) => (
                    <Step key={step.title} expanded>
                      <StepLabel>{step.title}</StepLabel>
                      <StepContent>
                        <Typography
                          sx={{
                            mt: 1.25,
                            maxWidth: 520,
                            color: "text.secondary",
                            lineHeight: 1.9,
                          }}
                        >
                          {step.description}
                        </Typography>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}