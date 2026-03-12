// src/components/sections/services/ServicesHighlight.tsx

import SurfaceCard from "../../ui/SurfaceCard";

function HighlightBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
      <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300" />
      {label}
    </div>
  );
}

function HighlightStat({
  label,
  value,
  barWidth,
}: {
  label: string;
  value: string;
  barWidth: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-20 w-20 rounded-full bg-white/[0.04] blur-2xl"
      />
      <div className="relative">
        <div className="text-[12px] uppercase tracking-[0.12em] text-slate-500">
          {label}
        </div>
        <div className="mt-2 text-[1.7rem] font-semibold tracking-[-0.05em] text-white">
          {value}
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className={`h-full rounded-full bg-white/30 ${barWidth}`} />
        </div>
      </div>
    </div>
  );
}

function InsightItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm">
      <div className="text-sm font-medium text-white">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-400">{text}</div>
    </div>
  );
}

function SignalPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm">
      {children}
    </div>
  );
}

export default function ServicesHighlight() {
  return (
    <SurfaceCard className="relative overflow-hidden p-6 sm:p-7 lg:p-8">
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.09),rgba(99,102,241,0.07),rgba(255,255,255,0.01))]" />
      <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[-30px] top-10 h-44 w-44 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="absolute bottom-[-70px] right-[18%] h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />

      {/* Decorative objects */}
      <div className="absolute left-[42%] top-10 hidden h-16 w-16 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md lg:block">
        <div className="absolute inset-[18%] rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(125,211,252,0.25),transparent_70%)]" />
      </div>

      <div className="absolute right-8 top-8 hidden w-[180px] rotate-[8deg] rounded-[1.3rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-md xl:block">
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

      <div className="absolute bottom-10 right-[30%] hidden h-24 w-24 rotate-[10deg] rounded-[1.3rem] border border-white/8 bg-white/[0.02] backdrop-blur-sm lg:block">
        <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
      </div>

      {/* Hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute left-0 top-[24%] h-px w-28 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
      <div className="absolute bottom-[20%] right-0 h-px w-36 bg-gradient-to-l from-white/0 via-white/10 to-white/0" />

      <div className="relative grid gap-8 xl:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] xl:items-start">
        {/* Left */}
        <div className="max-w-[760px]">
          <HighlightBadge label="Approccio" />

          <h3 className="mt-5 max-w-[15ch] text-[2rem] font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-[2.4rem]">
            Un sito non deve solo essere bello.
            <span className="mt-2 block bg-gradient-to-r from-white via-slate-200 to-cyan-100 bg-clip-text text-transparent">
              Deve far sembrare il tuo business più solido.
            </span>
          </h3>

          <p className="mt-5 max-w-[60ch] text-[15px] leading-7 text-slate-300">
            Costruiamo esperienze digitali pulite, moderne e rassicuranti, con
            un linguaggio visivo che migliora la percezione del brand e aiuta il
            cliente a capire subito il valore della tua attività.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <SignalPill>Più autorevolezza</SignalPill>
            <SignalPill>Più chiarezza</SignalPill>
            <SignalPill>Più fiducia</SignalPill>
            <SignalPill>Più continuità visiva</SignalPill>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="grid gap-4 sm:grid-cols-3">
            <HighlightStat
              label="Immagine"
              value="Premium"
              barWidth="w-[76%]"
            />
            <HighlightStat
              label="Messaggio"
              value="Più chiaro"
              barWidth="w-[70%]"
            />
            <HighlightStat
              label="Contatti"
              value="Più fluidi"
              barWidth="w-[66%]"
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
            <InsightItem
              title="Percezione più forte"
              text="Design, gerarchia e tono visivo lavorano insieme per trasmettere ordine, cura e affidabilità."
            />
            <InsightItem
              title="Esperienza più chiara"
              text="Ogni sezione aiuta il visitatore a orientarsi meglio e a capire subito cosa offri."
            />
          </div>
        </div>
      </div>

      {/* Bottom closure */}
      <div className="relative mt-8 grid gap-4 border-t border-white/8 pt-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                Obiettivo
              </div>
              <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white">
                Trasformare la presenza online in uno strumento di fiducia
              </div>
            </div>
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200">
              Focus
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="text-sm text-slate-400">Credibilità</div>
              <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                Alta
              </div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="text-sm text-slate-400">Chiarezza</div>
              <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                Forte
              </div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
              <div className="text-sm text-slate-400">Esperienza</div>
              <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                Fluida
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.35rem] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm">
          <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
            Percorso utente
          </div>
          <div className="mt-3 text-base font-semibold tracking-[-0.03em] text-white">
            Dal primo impatto al contatto
          </div>

          <div className="mt-5 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-white/70" />
            <div className="h-px flex-1 bg-white/15" />
            <div className="h-3 w-3 rounded-full bg-white/50" />
            <div className="h-px flex-1 bg-white/15" />
            <div className="h-3 w-3 rounded-full bg-white/30" />
          </div>

          <div className="mt-3 grid grid-cols-3 text-xs text-slate-500">
            <span>Impatto</span>
            <span className="text-center">Chiarezza</span>
            <span className="text-right">Azione</span>
          </div>

          <div className="mt-5 grid gap-2">
            <div className="h-10 rounded-xl bg-white/10" />
            <div className="h-10 rounded-xl bg-white/[0.07]" />
            <div className="h-10 rounded-xl bg-white/[0.05]" />
          </div>
        </div>
      </div>
    </SurfaceCard>
  );
}