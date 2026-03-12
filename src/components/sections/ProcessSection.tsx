import * as React from "react";
import {
  ButtonBase,
  Chip,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { processSteps } from "../../data/siteData";

const processSignals = [
  {
    icon: <TimelineRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Chiaro",
  },
  {
    icon: <VerifiedRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Coerente",
  },
  {
    icon: <RocketLaunchRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Fluido",
  },
];

const fallbackSteps = [
  {
    number: "01",
    title: "Analisi",
    description: "Capisco obiettivi, contesto e priorità del progetto.",
  },
  {
    number: "02",
    title: "Strategia",
    description: "Definisco struttura, direzione e logica del sito.",
  },
  {
    number: "03",
    title: "Design",
    description: "Traduco tutto in un’interfaccia chiara e distintiva.",
  },
  {
    number: "04",
    title: "Sviluppo",
    description: "Realizzo un sito solido, veloce e credibile.",
  },
];

const nodePositions = [
  "left-[8%] top-[16%] md:left-[12%] md:top-[18%]",
  "right-[8%] top-[14%] md:right-[12%] md:top-[20%]",
  "left-[10%] bottom-[14%] md:left-[16%] md:bottom-[18%]",
  "right-[10%] bottom-[12%] md:right-[14%] md:bottom-[16%]",
];

export function ProcessSection() {
  const steps = processSteps?.length >= 4 ? processSteps : fallbackSteps;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeStep = steps[activeIndex];

  return (
    <section
      id="processo"
      className="relative min-h-[100svh] overflow-hidden bg-[#060b14]"
    >
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_34%)]" />
      <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <div className="absolute left-[18%] top-[18%] h-[18rem] w-[18rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[14%] bottom-[16%] h-[18rem] w-[18rem] rounded-full bg-violet-400/10 blur-3xl" />

      <Container
        maxWidth={false}
        className="relative flex min-h-[100svh] items-center px-5 md:px-8 xl:px-12"
      >
        <div className="relative mx-auto h-[100svh] w-full max-w-[1600px]">
          <div className="pointer-events-none absolute left-6 top-6 z-20 md:left-10 md:top-10">
            <Typography className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/34">
              Processo
            </Typography>

            <Typography className="mt-4 text-2xl font-semibold leading-[1.02] text-white md:text-3xl xl:text-4xl">
              Un sistema
              <br />
              semplice.
            </Typography>

            <div className="mt-5 flex flex-wrap gap-2">
              {processSignals.map((item) => (
                <Chip
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  variant="outlined"
                  sx={{
                    color: "rgba(255,255,255,0.76)",
                    borderColor: "rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    height: 34,
                    "& .MuiChip-icon": {
                      color: "rgba(255,255,255,0.56)",
                    },
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-0 hidden md:block">
            <div className="absolute left-1/2 top-1/2 h-px w-[42%] -translate-x-1/2 -translate-y-1/2 bg-white/[0.05]" />
            <div className="absolute left-1/2 top-1/2 h-[42%] w-px -translate-x-1/2 -translate-y-1/2 bg-white/[0.05]" />
          </div>

          <div className="absolute left-1/2 top-1/2 z-10 w-[min(92vw,620px)] -translate-x-1/2 -translate-y-1/2">
            <CoreProcessPanel
              number={activeStep.number}
              title={activeStep.title}
              description={activeStep.description}
              activeIndex={activeIndex}
              total={steps.length}
            />
          </div>

          {steps.slice(0, 4).map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={step.number}
                className={`absolute z-20 ${nodePositions[index]} w-[240px] md:w-[260px] xl:w-[280px]`}
              >
                <ProcessNode
                  number={step.number}
                  title={step.title}
                  active={isActive}
                  onActivate={() => setActiveIndex(index)}
                />
              </div>
            );
          })}

          <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 w-[min(92vw,560px)] -translate-x-1/2 md:bottom-10">
            <div className="mx-auto flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
              {steps.slice(0, 4).map((step, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isActive ? "w-14 bg-white/80" : "w-2.5 bg-white/24 hover:bg-white/40"
                    }`}
                    aria-label={`Vai allo step ${step.number}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CoreProcessPanel({
  number,
  title,
  description,
  activeIndex,
  total,
}: {
  number: string;
  title: string;
  description: string;
  activeIndex: number;
  total: number;
}) {
  return (
    <Paper
      elevation={0}
      className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl md:p-8 xl:p-10"
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)",
        boxShadow:
          "0 24px 80px rgba(0,0,0,0.24), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute right-5 top-4 text-[5rem] font-semibold tracking-[-0.08em] text-white/[0.05] md:text-[7rem] xl:text-[8rem]">
        {number}
      </div>

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
            <AutoAwesomeRoundedIcon sx={{ fontSize: 14 }} />
            Step {number}
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium text-white/34">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <Typography
            sx={{
              fontWeight: 650,
              letterSpacing: "-0.05em",
              lineHeight: 0.95,
              color: "rgba(255,255,255,0.97)",
              fontSize: {
                xs: "2.4rem",
                md: "3.8rem",
                xl: "5rem",
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 2.5,
              maxWidth: "34ch",
              color: "rgba(255,255,255,0.58)",
              lineHeight: 1.9,
              fontSize: {
                xs: "0.95rem",
                md: "1.05rem",
              },
            }}
          >
            {description}
          </Typography>
        </div>

        <div className="mt-10 flex items-center gap-4 md:mt-12">
          <div className="h-px flex-1 bg-white/10" />
          <div className="h-2 w-2 rounded-full bg-white/50" />
          <div className="h-px w-16 bg-white/10" />
        </div>
      </div>
    </Paper>
  );
}

function ProcessNode({
  number,
  title,
  active,
  onActivate,
}: {
  number: string;
  title: string;
  active?: boolean;
  onActivate?: () => void;
}) {
  return (
    <ButtonBase
      disableRipple
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className="block w-full rounded-[26px] text-left"
      sx={{ borderRadius: "26px" }}
    >
      <Paper
        elevation={0}
        className={`group relative overflow-hidden rounded-[26px] border p-4 transition duration-300 md:p-5 ${
          active
            ? "border-cyan-300/20 bg-white/[0.08]"
            : "border-white/8 bg-white/[0.035] hover:border-white/14 hover:bg-white/[0.05]"
        }`}
        sx={{
          backdropFilter: "blur(14px)",
          boxShadow: active
            ? "0 18px 50px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.04)"
            : "inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]" />
        </div>

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/26">
              {number}
            </div>
            <Typography className="mt-2 text-base font-semibold text-white md:text-lg">
              {title}
            </Typography>
          </div>

          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
              active
                ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-100"
                : "border-white/10 bg-white/[0.03] text-white/28"
            }`}
          >
            <ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />
          </div>
        </div>
      </Paper>
    </ButtonBase>
  );
}