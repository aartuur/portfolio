// src/components/sections/hero/HeroBrowserMockup.tsx
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

type MiniPanelProps = {
  title: string;
  value: string;
  tone: "cyan" | "violet";
};

type ServicePreviewCardProps = {
  title: string;
  description: string;
};

type ProgressRowProps = {
  label: string;
  value: string;
  width: string;
};

function ProgressRow({ label, value, width }: ProgressRowProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="font-medium text-slate-400">{value}</span>
      </div>
      <div className="h-2.5 rounded-full bg-white/6">
        <div
          className={`h-2.5 rounded-full bg-[linear-gradient(90deg,#a5f3fc,#60a5fa,#818cf8)] ${width}`}
        />
      </div>
    </div>
  );
}

function MetricPanel() {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-[#0c1628] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm text-slate-400">Impatto percepito del brand</div>
          <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            Alta credibilità
          </div>
        </div>
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
          business-ready
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <ProgressRow label="Aspetto professionale" value="92%" width="w-[92%]" />
        <ProgressRow label="Chiarezza dell’offerta" value="88%" width="w-[88%]" />
        <ProgressRow label="Fiducia percepita" value="95%" width="w-[95%]" />
      </div>
    </div>
  );
}

function MiniPanel({ title, value, tone }: MiniPanelProps) {
  const toneMap = {
    cyan: "from-cyan-300/30 to-cyan-400/5 text-cyan-100 border-cyan-400/20",
    violet:
      "from-violet-300/25 to-violet-400/5 text-violet-100 border-violet-400/20",
  };

  return (
    <div className={`rounded-[1.25rem] border bg-gradient-to-br p-4 ${toneMap[tone]}`}>
      <div className="text-sm text-slate-400">{title}</div>
      <div className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
        {value}
      </div>
      <div className="mt-3 h-2 w-16 rounded-full bg-white/10" />
    </div>
  );
}

function ServicePreviewCard({ title, description }: ServicePreviewCardProps) {
  return (
    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
      <div className="mb-3 h-9 w-9 rounded-xl border border-white/10 bg-white/[0.05]" />
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-1.5 text-sm leading-6 text-slate-400">{description}</div>
    </div>
  );
}

export default function HeroBrowserMockup() {
  return (
    <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#09111f]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <div className="flex w-full max-w-[280px] items-center gap-2 rounded-full border border-white/10 bg-[#0c1729] px-3 py-1.5 text-xs text-slate-400 sm:text-sm">
            <LanguageRoundedIcon sx={{ fontSize: 16 }} />
            <span className="truncate">studio-business.it</span>
          </div>
        </div>
        <div className="hidden text-xs text-slate-500 lg:block">Live Preview</div>
      </div>

      <div className="grid gap-4 p-4 sm:p-5">
        <div className="grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 sm:p-6">
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              Sito web per attività locali
            </div>
            <div className="max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-[2rem]">
              Presenza online più forte, più chiara, più professionale.
            </div>
            <div className="mt-4 h-2 w-32 rounded-full bg-white/10" />
            <div className="mt-2 h-2 w-52 rounded-full bg-white/10" />
            <div className="mt-8 flex gap-3">
              <div className="h-10 w-32 rounded-full bg-gradient-to-r from-cyan-300 to-blue-200" />
              <div className="h-10 w-28 rounded-full border border-white/10 bg-white/5" />
            </div>
          </div>

          <div className="grid gap-4">
            <MetricPanel />
            <div className="grid gap-4 sm:grid-cols-2">
              <MiniPanel title="Brand Image" value="Premium" tone="cyan" />
              <MiniPanel title="Lead Flow" value="+38%" tone="violet" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <ServicePreviewCard
            title="Design moderno"
            description="Layout puliti, gerarchia chiara e percezione premium."
          />
          <ServicePreviewCard
            title="Copy orientato alla fiducia"
            description="Messaggi semplici e credibili per convincere i clienti giusti."
          />
          <ServicePreviewCard
            title="Struttura business-first"
            description="Pagine pensate per valorizzare servizi e convertire meglio."
          />
        </div>
      </div>
    </div>
  );
}