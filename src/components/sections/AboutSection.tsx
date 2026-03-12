import { Container, Typography } from "@mui/material";
import { SectionHeading } from "../ui/SectionHeading";
import { StatPill } from "../ui/StatPill";

const aboutPoints = [
  {
    label: "Focus",
    text: "Interfacce chiare, credibili e costruite per sostenere davvero il valore del brand.",
  },
  {
    label: "Approccio",
    text: "Scelte visive controllate, attenzione al ritmo e una forte cura per equilibrio e leggibilità.",
  },
  {
    label: "Obiettivo",
    text: "Dare al business una presenza digitale più matura, più ordinata e più convincente.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />

      <Container maxWidth="xl" className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 xl:grid-cols-[0.95fr_1.05fr] xl:gap-20">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow="About"
                title="Progetto interfacce con rigore visivo e sviluppo frontend con attenzione reale al dettaglio."
                description="Lavoro tra web design e frontend development con un’idea semplice: un’interfaccia ben costruita deve sembrare naturale, chiara e inevitabile. Ogni scelta dovrebbe rafforzare la percezione del brand, non complicarla."
              />

              <Typography
                sx={{
                  mt: 4,
                  color: "text.secondary",
                  lineHeight: 1.9,
                }}
              >
                Mi concentro su siti e prodotti digitali in cui la forma ha il compito
                di sostenere il contenuto, non di distrarlo. Questo significa
                tipografia più controllata, spaziature più precise, sistemi UI
                coerenti e un’esecuzione tecnica pulita. Il risultato è un’esperienza
                che comunica affidabilità anche nei dettagli più piccoli.
              </Typography>

              <div className="mt-8 flex flex-wrap gap-3">
                <StatPill value="UI systems" label="componenti modulari e coerenti" />
                <StatPill value="Pixel care" label="attenzione reale a ritmo e proporzioni" />
                <StatPill value="Business sense" label="design utile, non decorativo" />
              </div>
            </div>

            <div className="grid content-start gap-10 xl:pt-6">
              <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
                <div className="flex justify-start md:justify-center">
                  <div className="relative flex h-48 w-40 items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(56,189,248,0.12),rgba(168,85,247,0.08))] md:h-56 md:w-44">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(125,211,252,0.16),transparent_35%)]" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-2xl font-semibold tracking-tight text-white">
                      LF
                    </div>
                  </div>
                </div>

                <div className="max-w-xl">
                  <Typography variant="h4" sx={{ fontWeight: 650, lineHeight: 1.12 }}>
                    Un approccio sobrio, preciso e orientato alla qualità percepita.
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2.5,
                      color: "text.secondary",
                      lineHeight: 1.9,
                    }}
                  >
                    Cerco un equilibrio netto tra impatto visivo, chiarezza e credibilità.
                    Il mio lavoro è utile quando un progetto ha bisogno di un’immagine
                    più matura, di una struttura più ordinata e di un frontend che
                    trasmetta solidità invece di improvvisazione.
                  </Typography>
                </div>
              </div>

              <div className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
                {aboutPoints.map((point) => (
                  <div key={point.label} className="max-w-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {point.label}
                    </div>
                    <Typography
                      sx={{
                        mt: 2,
                        color: "rgba(241,245,249,0.82)",
                        lineHeight: 1.85,
                      }}
                    >
                      {point.text}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}