// src/components/sections/services/ServicesCard.tsx
import SurfaceCard from "../../ui/SurfaceCard";
import type { ServiceItem } from "./services.data";

type ServicesCardProps = {
  service: ServiceItem;
  featured?: boolean;
};

type ToneKey = ServiceItem["tone"];

const toneStyles: Record<
  ToneKey,
  {
    glow: string;
    badge: string;
    dot: string;
    ring: string;
    soft: string;
  }
> = {
  cyan: {
    glow:
      "from-cyan-300/20 via-cyan-400/10 to-transparent border-cyan-400/15",
    badge: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
    dot: "from-cyan-300 via-sky-400 to-blue-500",
    ring: "ring-cyan-400/20",
    soft: "bg-cyan-400/10",
  },
  violet: {
    glow:
      "from-violet-300/20 via-violet-400/10 to-transparent border-violet-400/15",
    badge: "border-violet-400/20 bg-violet-400/10 text-violet-200",
    dot: "from-violet-300 via-fuchsia-400 to-indigo-500",
    ring: "ring-violet-400/20",
    soft: "bg-violet-400/10",
  },
  blue: {
    glow:
      "from-blue-300/20 via-blue-400/10 to-transparent border-blue-400/15",
    badge: "border-blue-400/20 bg-blue-400/10 text-blue-200",
    dot: "from-sky-300 via-blue-400 to-indigo-500",
    ring: "ring-blue-400/20",
    soft: "bg-blue-400/10",
  },
};

function EyebrowBadge({
  label,
  tone,
}: {
  label: string;
  tone: ToneKey;
}) {
  return (
    <div
      className={[
        "inline-flex w-fit rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
        toneStyles[tone].badge,
      ].join(" ")}
    >
      {label}
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-[118px] rounded-2xl border border-white/10 bg-white/[0.045] px-3.5 py-3 text-right backdrop-blur-sm">
      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">
        {label}
      </div>
      <div className="mt-1.5 text-base font-semibold tracking-[-0.03em] text-white sm:text-lg">
        {value}
      </div>
    </div>
  );
}

function PointItem({
  point,
  tone,
}: {
  point: string;
  tone: ToneKey;
}) {
  return (
    <li className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3.5 transition-all duration-300 hover:border-white/12 hover:bg-white/[0.05]">
      <span
        aria-hidden="true"
        className={[
          "mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r",
          toneStyles[tone].dot,
        ].join(" ")}
      />
      <span className="text-sm leading-6 text-slate-200">{point}</span>
    </li>
  );
}

function FeaturedSignal({
  label,
  value,
  progress,
}: {
  label: string;
  value: string;
  progress: string;
}) {
  return (
    <div className="rounded-[1.15rem] border border-white/8 bg-white/[0.04] p-4 backdrop-blur-sm">
      <div className="text-[12px] uppercase tracking-[0.12em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-[1.7rem] font-semibold tracking-[-0.05em] text-white">
        {value}
      </div>
      <div className="mt-4 h-2 rounded-full bg-white/10">
        <div className={`h-full rounded-full bg-white/35 ${progress}`} />
      </div>
    </div>
  );
}

function FeaturedPanel({ tone }: { tone: ToneKey }) {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md">
      <div
        aria-hidden="true"
        className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl ${toneStyles[tone].soft}`}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
              Impatto del progetto
            </div>
            <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
              Struttura, percezione e fiducia
            </div>
          </div>

          <div
            className={[
              "rounded-full border px-3 py-1 text-[11px] font-medium text-white/80",
              toneStyles[tone].badge,
            ].join(" ")}
          >
            Premium
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-sm text-slate-400">Chiarezza</div>
            <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              Alta
            </div>
            <div className="mt-4 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[82%] rounded-full bg-white/35" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-sm text-slate-400">Credibilità</div>
            <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              Forte
            </div>
            <div className="mt-4 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[76%] rounded-full bg-white/35" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-sm text-slate-400">Esperienza</div>
            <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              Fluida
            </div>
            <div className="mt-4 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[72%] rounded-full bg-white/35" />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-400">Percorso utente</div>
              <div className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Mobile-first
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-white/70" />
              <div className="h-px flex-1 bg-white/15" />
              <div className="h-3 w-3 rounded-full bg-white/50" />
              <div className="h-px flex-1 bg-white/15" />
              <div className="h-3 w-3 rounded-full bg-white/30" />
            </div>

            <div className="mt-3 grid grid-cols-3 text-xs text-slate-500">
              <span>Scoperta</span>
              <span className="text-center">Chiarezza</span>
              <span className="text-right">Contatto</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="text-sm text-slate-400">Segnali visivi</div>
            <div className="mt-4 flex gap-2">
              <div className="h-10 flex-1 rounded-xl bg-white/10" />
              <div className="h-10 flex-1 rounded-xl bg-white/[0.07]" />
              <div className="h-10 flex-1 rounded-xl bg-white/[0.05]" />
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-full w-[68%] rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesCard({
  service,
  featured = false,
}: ServicesCardProps) {
  const tone = toneStyles[service.tone];

  return (
    <SurfaceCard
      className={[
        "group relative h-full overflow-hidden p-6 sm:p-7",
        featured ? "min-h-[100%]" : "",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${tone.glow}`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/6 blur-3xl transition-transform duration-500 group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 left-0 h-28 w-28 rounded-full bg-white/[0.03] blur-3xl"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <EyebrowBadge label={service.eyebrow} tone={service.tone} />
          <MetricCard
            label={service.metricLabel}
            value={service.metricValue}
          />
        </div>

        <div className="mt-7">
          <h3
            className={[
              "text-white font-semibold tracking-[-0.04em]",
              featured
                ? "max-w-[15ch] text-[2rem] leading-[1.02] sm:text-[2.2rem]"
                : "max-w-[18ch] text-2xl leading-[1.08] sm:text-[1.75rem]",
            ].join(" ")}
          >
            {service.title}
          </h3>

          <p
            className={[
              "mt-4 text-slate-300",
              featured
                ? "max-w-[60ch] text-[15px] leading-7"
                : "max-w-[58ch] text-sm leading-7 sm:text-[15px]",
            ].join(" ")}
          >
            {service.description}
          </p>
        </div>

        <ul
          className={[
            "grid gap-3",
            featured ? "mt-8 sm:grid-cols-2" : "mt-8",
          ].join(" ")}
        >
          {service.points.map((point) => (
            <PointItem key={point} point={point} tone={service.tone} />
          ))}
        </ul>

        {featured ? (
          <div className="mt-8 space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <FeaturedSignal
                label="Esperienza mobile"
                value="First"
                progress="w-[78%]"
              />
              <FeaturedSignal
                label="Posizionamento"
                value="Chiaro"
                progress="w-[66%]"
              />
            </div>

            <FeaturedPanel tone={service.tone} />
          </div>
        ) : (
          <div className="mt-auto pt-8">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/30" />
              Progetto pensato per conversione, chiarezza e scalabilità
            </div>
          </div>
        )}
      </div>
    </SurfaceCard>
  );
}