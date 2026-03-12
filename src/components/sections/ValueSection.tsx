import { Container } from "@mui/material";
import { ArrowRight, Sparkles, ShieldCheck, Gauge } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Presenza più autorevole",
    text: "Un design più curato alza subito la qualità percepita e rende il business più solido agli occhi di chi visita il sito.",
  },
  {
    icon: ShieldCheck,
    title: "Offerta più comprensibile",
    text: "Contenuti, struttura e gerarchie chiare aiutano a capire rapidamente cosa fai, per chi lo fai e perché dovrebbero contattarti.",
  },
  {
    icon: Gauge,
    title: "Base più ordinata per crescere",
    text: "Un sito ben progettato non è solo più bello: è più coerente, più attuale e più adatto ad accompagnare l’evoluzione del business.",
  },
];

const highlights = [
  "Più fiducia al primo impatto",
  "Più chiarezza nel messaggio",
  "Più coerenza tra immagine e valore reale",
];

export function ValueSection() {
  return (
    <section className="relative overflow-hidden bg-[#060b14] py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(56,189,248,0.08),transparent_26%),radial-gradient(circle_at_82%_16%,rgba(99,102,241,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <Container maxWidth="xl" className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 xl:grid-cols-[0.9fr_1.1fr] xl:gap-24">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                Perché funziona
              </div>

              <h2 className="mt-8 max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-5xl">
                Un sito che fa capire meglio il valore della tua impresa.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-white/62 md:text-lg">
                Dopo l’impatto iniziale della hero, qui serve più ordine.
                Meno effetto scenico, più chiarezza. Questa sezione spiega in
                modo semplice cosa migliora davvero: percezione, comprensione e
                qualità complessiva della presenza online.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contatti"
                  className="inline-flex items-center gap-2 rounded-full bg-[#d9f5ff] px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5"
                >
                  Parliamo del tuo progetto
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-white/80 transition duration-300 hover:bg-white/[0.04]"
                >
                  Guarda il portfolio
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-white/10 bg-white/[0.025] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/35">
                    Cosa cambia davvero
                  </p>
                </div>

                <div className="divide-y divide-white/10">
                  {pillars.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="grid gap-5 py-7 md:grid-cols-[56px_1fr_auto] md:items-start md:gap-6"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                          <Icon className="h-5 w-5 text-cyan-100" />
                        </div>

                        <div className="max-w-xl">
                          <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-white/60 md:text-[15px]">
                            {item.text}
                          </p>
                        </div>

                        <div className="hidden md:block">
                          <span className="text-sm font-medium tracking-[-0.03em] text-white/20">
                            0{index + 1}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-2 border-t border-white/10 pt-6">
                  <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/72"
                      >
                        <span className="h-2 w-2 rounded-full bg-cyan-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
            <InfoCard
              label="Credibilità"
              text="Un aspetto più ordinato e contemporaneo rende il business più serio e più affidabile."
            />
            <InfoCard
              label="Chiarezza"
              text="Chi arriva sul sito capisce più velocemente l’offerta, i punti forti e il prossimo passo da fare."
            />
            <InfoCard
              label="Coerenza"
              text="Immagine, contenuto e struttura lavorano insieme per rappresentare meglio il valore reale dell’impresa."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-4 text-sm leading-7 text-white/62 md:text-[15px]">
        {text}
      </p>
    </div>
  );
}