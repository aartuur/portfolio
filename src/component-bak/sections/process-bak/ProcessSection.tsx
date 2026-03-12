import { Box, Container, Stack, Typography } from "@mui/material";
import SouthEastRoundedIcon from "@mui/icons-material/SouthEastRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AdsClickRoundedIcon from "@mui/icons-material/AdsClickRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import { ProcessCard } from "./ProcessCard";

const steps = [
  {
    number: "01",
    title: "Analisi e direzione",
    description:
      "Capire il tuo business, il pubblico e gli obiettivi del sito per definire una direzione chiara prima di progettare.",
  },
  {
    number: "02",
    title: "Struttura e contenuti",
    description:
      "Organizzare pagine e contenuti in modo strategico per rendere il messaggio più chiaro, più leggibile e più convincente.",
  },
  {
    number: "03",
    title: "Design e sviluppo",
    description:
      "Trasformare la strategia in un sito moderno, pulito e credibile, curato nel design, nella leggibilità e nell’esperienza mobile.",
  },
  {
    number: "04",
    title: "Pubblicazione e supporto",
    description:
      "Mettere online il progetto, ottimizzare gli ultimi dettagli e accompagnarti nella fase iniziale con supporto e continuità.",
  },
];

const highlights = [
  "Direzione chiara fin dal primo step",
  "Meno attrito decisionale durante il progetto",
  "Design e sviluppo allineati alla strategia",
];

const metrics = [
  { value: "4", label: "fasi essenziali" },
  { value: "1", label: "direzione chiara" },
  { value: "100%", label: "focus sul risultato" },
];

export function ProcessSection() {
  return (
    <Box
      component="section"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <Container maxWidth="xl">
        <Box
          className="relative overflow-hidden rounded-[2rem] border"
          sx={{
            borderColor: "rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(10,14,24,0.92) 0%, rgba(8,12,20,0.98) 100%)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.03) inset, 0 30px 120px rgba(0,0,0,0.34)",
          }}
        >
          <ProcessAmbientBackground />

          <Box className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="grid gap-10 xl:grid-cols-[minmax(0,0.88fr)_minmax(420px,1.12fr)] xl:gap-12">
              <div className="relative">
                <ProcessLeftColumn />
              </div>

              <div className="relative">
                <div className="grid gap-4">
                  {steps.map((step, index) => (
                    <ProcessCard
                      key={step.number}
                      number={step.number}
                      title={step.title}
                      description={step.description}
                      isLast={index === steps.length - 1}
                    />
                  ))}
                </div>

                <ProcessEditorialOutro />
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function ProcessLeftColumn() {
  return (
    <div className="relative max-w-[760px]">
      <Stack direction="row" spacing={1.25} alignItems="center">
        <SmallPill icon={<AutoAwesomeRoundedIcon sx={{ fontSize: 15 }} />}>
          Metodo
        </SmallPill>
        <SmallPill>Come lavoriamo</SmallPill>
      </Stack>

      <Typography
        variant="h2"
        sx={{
          mt: 3,
          maxWidth: "11ch",
          fontWeight: 700,
          letterSpacing: "-0.055em",
          lineHeight: 0.98,
          color: "rgba(255,255,255,0.98)",
          fontSize: {
            xs: "2.15rem",
            sm: "3rem",
            lg: "4rem",
          },
        }}
      >
        Un processo ricco,
        <span
          style={{
            display: "block",
            background:
              "linear-gradient(90deg, #ffffff 0%, #d8e4ff 45%, #8be8ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ma sempre chiaro.
        </span>
      </Typography>

      <Typography
        sx={{
          mt: 3,
          maxWidth: "62ch",
          fontSize: { xs: "1rem", sm: "1.06rem" },
          lineHeight: 1.85,
          color: "rgba(255,255,255,0.68)",
        }}
      >
        Ogni progetto ha bisogno di ordine, visione e controllo. Per questo il
        lavoro non si limita alla parte visiva: parte dall’analisi, passa per
        la struttura e arriva a un risultato coerente, leggibile e pronto a
        funzionare davvero.
      </Typography>

      <ProcessFloatingMockup />

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {metrics.map((item) => (
          <MetricCard key={item.label} value={item.value} label={item.label} />
        ))}
      </div>

      <div className="mt-8 grid gap-3">
        {highlights.map((item) => (
          <FeatureRow key={item} text={item} />
        ))}
      </div>

      <Box
        className="mt-8 rounded-[1.6rem] border p-5 sm:p-6"
        sx={{
          borderColor: "rgba(255,255,255,0.08)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.025) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2.5, sm: 3 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(139,232,255,0.78)",
              }}
            >
              Cosa ottieni
            </Typography>

            <Typography
              sx={{
                mt: 1.2,
                maxWidth: "42ch",
                fontSize: { xs: "1rem", sm: "1.02rem" },
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.74)",
              }}
            >
              Un percorso leggibile dall’inizio al lancio, con step precisi,
              priorità ordinate e una sensazione costante di avanzamento.
            </Typography>
          </Box>

          <Box
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(135deg, rgba(125,211,252,0.16), rgba(167,139,250,0.1))",
              boxShadow: "0 14px 40px rgba(0,0,0,0.22)",
            }}
          >
            <SouthEastRoundedIcon
              sx={{
                fontSize: 20,
                color: "rgba(255,255,255,0.88)",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

function ProcessFloatingMockup() {
  return (
    <Box className="relative mt-8">
      <Box
        className="relative overflow-hidden rounded-[1.8rem] border"
        sx={{
          borderColor: "rgba(255,255,255,0.08)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.025))",
          boxShadow:
            "0 30px 70px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top left, rgba(125,211,252,0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(167,139,250,0.16), transparent 30%)",
          }}
        />

        <div className="relative p-4 sm:p-5">
          <Stack direction="row" spacing={1} alignItems="center">
            <Dot />
            <Dot />
            <Dot />
          </Stack>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <Box
              className="rounded-[1.4rem] border p-4"
              sx={{
                borderColor: "rgba(255,255,255,0.08)",
                backgroundColor: "rgba(255,255,255,0.035)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.48)",
                }}
              >
                Preview
              </Typography>

              <Typography
                sx={{
                  mt: 1.2,
                  maxWidth: "16ch",
                  fontSize: { xs: "1.15rem", sm: "1.35rem" },
                  lineHeight: 1.15,
                  letterSpacing: "-0.04em",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Direzione, struttura e un’interfaccia credibile.
              </Typography>

              <Box
                className="mt-4 rounded-[1.2rem]"
                sx={{
                  height: 180,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="absolute left-4 right-4 top-4 rounded-xl"
                  style={{
                    height: 18,
                    background: "rgba(255,255,255,0.08)",
                  }}
                />
                <div
                  className="absolute left-4 top-12 rounded-xl"
                  style={{
                    width: "58%",
                    height: 18,
                    background: "rgba(255,255,255,0.14)",
                  }}
                />
                <div
                  className="absolute left-4 top-17 rounded-xl"
                  style={{
                    width: "72%",
                    height: 12,
                    background: "rgba(255,255,255,0.07)",
                  }}
                />
                <div
                  className="absolute left-4 top-24 rounded-[1rem]"
                  style={{
                    width: 110,
                    height: 38,
                    background:
                      "linear-gradient(90deg, rgba(125,211,252,0.24), rgba(167,139,250,0.18))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-[1rem]"
                  style={{
                    height: 70,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                />
              </Box>
            </Box>

            <div className="grid gap-4">
              <MiniInfoCard
                icon={<AdsClickRoundedIcon sx={{ fontSize: 18 }} />}
                title="Struttura leggibile"
                text="Le informazioni vengono ordinate per guidare attenzione, comprensione e azione."
              />
              <MiniInfoCard
                icon={<BoltRoundedIcon sx={{ fontSize: 18 }} />}
                title="Esecuzione fluida"
                text="Ogni step riduce l’incertezza e rende il progetto più semplice da approvare."
              />
            </div>
          </div>
        </div>
      </Box>

      <Box
        aria-hidden="true"
        className="absolute -right-4 -top-5 hidden rounded-full xl:block"
        sx={{
          width: 120,
          height: 120,
          background:
            "radial-gradient(circle, rgba(139,232,255,0.18) 0%, rgba(139,232,255,0.04) 45%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
    </Box>
  );
}

function ProcessEditorialOutro() {
  return (
    <Box
      className="relative mt-6 overflow-hidden rounded-[1.75rem] border p-5 sm:p-6"
      sx={{
        borderColor: "rgba(255,255,255,0.08)",
        background:
          "linear-gradient(135deg, rgba(125,211,252,0.07), rgba(255,255,255,0.025) 45%, rgba(167,139,250,0.06))",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(125,211,252,0.10), transparent 70%)",
        }}
      />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 3 }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "flex-end" }}
        className="relative"
      >
        <Box>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Chiusura
          </Typography>

          <Typography
            sx={{
              mt: 1.2,
              maxWidth: "42ch",
              fontSize: { xs: "1rem", sm: "1.02rem" },
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.76)",
            }}
          >
            Il risultato non è solo un sito più bello, ma un progetto più
            ordinato, più comprensibile e molto più facile da portare avanti con
            fiducia.
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.2}>
          <TagChip label="Metodo" />
          <TagChip label="Chiarezza" />
          <TagChip label="Controllo" />
        </Stack>
      </Stack>
    </Box>
  );
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Box
      className="rounded-[1.3rem] border p-4"
      sx={{
        borderColor: "rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.4rem", sm: "1.7rem" },
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.96)",
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          mt: 0.6,
          fontSize: "0.92rem",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.62)",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function FeatureRow({ text }: { text: string }) {
  return (
    <Box
      className="flex items-start gap-3 rounded-[1.2rem] border px-4 py-3"
      sx={{
        borderColor: "rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.025)",
      }}
    >
      <Box
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
        sx={{
          background:
            "linear-gradient(135deg, rgba(125,211,252,0.16), rgba(167,139,250,0.12))",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <BlurOnRoundedIcon
          sx={{ fontSize: 18, color: "rgba(255,255,255,0.84)" }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: "0.96rem",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.74)",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function MiniInfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Box
      className="rounded-[1.35rem] border p-4"
      sx={{
        borderColor: "rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.03)",
      }}
    >
      <Box
        className="flex h-10 w-10 items-center justify-center rounded-2xl"
        sx={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.88)",
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          mt: 1.8,
          fontSize: "1rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.94)",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 0.8,
          fontSize: "0.92rem",
          lineHeight: 1.75,
          color: "rgba(255,255,255,0.64)",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function SmallPill({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <Box
      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5"
      sx={{
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.74)",
        backdropFilter: "blur(8px)",
      }}
    >
      {icon}
      <Typography
        component="span"
        sx={{
          fontSize: "0.78rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

function TagChip({ label }: { label: string }) {
  return (
    <Box
      className="rounded-full px-3 py-1.5"
      sx={{
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "rgba(255,255,255,0.04)",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.72)",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

function Dot() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 9,
        height: 9,
        borderRadius: 999,
        background: "rgba(255,255,255,0.16)",
      }}
    />
  );
}

function ProcessAmbientBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 12% 18%, rgba(125,211,252,0.12), transparent 24%),
            radial-gradient(circle at 85% 20%, rgba(167,139,250,0.10), transparent 22%),
            radial-gradient(circle at 70% 75%, rgba(125,211,252,0.08), transparent 20%),
            linear-gradient(to bottom, rgba(255,255,255,0.02), transparent 30%)
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -left-16 top-24 h-56 w-56 rounded-full blur-3xl"
        style={{
          background: "rgba(125,211,252,0.10)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: "rgba(167,139,250,0.10)",
        }}
      />
    </>
  );
}