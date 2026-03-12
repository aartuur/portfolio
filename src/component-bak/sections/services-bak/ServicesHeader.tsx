// src/components/sections/services/ServicesHeader.tsx

import SectionBadge from "../../ui/SectionBadge";
import SectionText from "../../ui/SectionText";
import SectionTitle from "../../ui/SectionTitle";

function HeaderStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-md">
      <div className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[1.75rem]">
        {value}
      </div>
      <div className="mt-2 text-sm leading-6 text-slate-400">{label}</div>
    </div>
  );
}

function HeaderPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3.5 backdrop-blur-sm">
      <span
        aria-hidden="true"
        className="mt-2 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[linear-gradient(90deg,#7dd3fc,#60a5fa,#818cf8)]"
      />
      <span className="text-sm leading-6 text-slate-200">{children}</span>
    </div>
  );
}

function FloatingOrb({
  className,
  innerClassName = "",
}: {
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full border border-white/10 bg-white/[0.03] shadow-[0_10px_50px_rgba(0,0,0,0.18)] backdrop-blur-md ${className ?? ""}`}
    >
      <div
        className={`absolute inset-[18%] rounded-full border border-white/10 ${innerClassName}`}
      />
    </div>
  );
}

function FloatingGlassCard({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-[1.4rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md ${className ?? ""}`}
    >
      <div className="p-4">
        <div className="h-2 w-16 rounded-full bg-white/12" />
        <div className="mt-4 h-2 w-24 rounded-full bg-white/10" />
        <div className="mt-2 h-2 w-20 rounded-full bg-white/10" />
        <div className="mt-5 flex gap-2">
          <div className="h-8 w-8 rounded-full bg-cyan-400/15" />
          <div className="h-8 w-8 rounded-full bg-violet-400/15" />
          <div className="h-8 w-8 rounded-full bg-blue-400/15" />
        </div>
      </div>
    </div>
  );
}

function AccentGrid({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-[1.6rem] border border-white/8 bg-white/[0.02] backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:22px_22px] opacity-40" />
    </div>
  );
}

export default function ServicesHeader() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.02] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      {/* Base atmospheric background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(167,139,250,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_30%)]"
      />

      {/* Soft large blobs */}
      <div
        aria-hidden="true"
        className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-40px] top-[-20px] h-56 w-56 rounded-full bg-violet-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-80px] right-[18%] h-56 w-56 rounded-full bg-blue-400/10 blur-3xl"
      />

      {/* Decorative objects */}
      <FloatingOrb
        className="left-[46%] top-10 hidden h-16 w-16 lg:block"
        innerClassName="bg-[radial-gradient(circle,rgba(125,211,252,0.25),transparent_70%)]"
      />

      <FloatingOrb
        className="right-10 top-24 hidden h-24 w-24 xl:block"
        innerClassName="bg-[radial-gradient(circle,rgba(167,139,250,0.22),transparent_70%)]"
      />

      <FloatingGlassCard className="right-8 top-8 hidden w-[190px] rotate-[8deg] xl:block" />
      <FloatingGlassCard className="bottom-8 left-[48%] hidden w-[150px] -rotate-[10deg] lg:block" />

      <AccentGrid className="bottom-10 right-[28%] hidden h-28 w-28 rotate-[10deg] lg:block" />

      {/* Hairlines / subtle structure */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-[22%] h-px w-28 bg-gradient-to-r from-white/0 via-white/12 to-white/0"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[18%] right-0 h-px w-36 bg-gradient-to-l from-white/0 via-white/12 to-white/0"
      />

      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-start">
        {/* Left column */}
        <div className="max-w-[820px]">
          <SectionBadge label="Servizi • siti web premium per piccole imprese" />

          <div className="mt-6">
            <SectionTitle className="max-w-[16ch] text-balance">
              Cosa facciamo per rendere il tuo business
              <span className="block bg-gradient-to-r from-white via-[#c6d2ff] to-[#7fe6ff] bg-clip-text text-transparent">
                più credibile, chiaro e competitivo online.
              </span>
            </SectionTitle>

            <SectionText className="mt-6 max-w-[62ch] text-pretty">
              Progettiamo siti web pensati per piccole imprese, professionisti e
              attività locali che vogliono presentarsi meglio, spiegare con più
              chiarezza i propri servizi e trasformare la presenza online in uno
              strumento concreto di fiducia, posizionamento e crescita.
            </SectionText>
          </div>
        </div>

        {/* Right column */}
        <div className="relative lg:pt-2">
          <div className="grid gap-3 sm:grid-cols-2">
            <HeaderStat
              value="Più chiarezza"
              label="Messaggio, struttura e contenuti pensati per farti capire subito."
            />
            <HeaderStat
              value="Più fiducia"
              label="Un’esperienza visiva più credibile, ordinata e professionale."
            />
          </div>

          <div className="mt-4 grid gap-3">
            <HeaderPoint>
              Struttura strategica delle pagine per spiegare bene cosa fai e per
              chi lo fai.
            </HeaderPoint>

            <HeaderPoint>
              Design premium e linguaggio visivo coerente per distinguerti da
              soluzioni improvvisate o generiche.
            </HeaderPoint>

            <HeaderPoint>
              Focus su mobile, leggibilità, percezione del valore e conversione.
            </HeaderPoint>
          </div>
        </div>
      </div>
    </div>
  );
}