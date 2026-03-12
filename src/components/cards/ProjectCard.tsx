import { Button, Chip, Typography } from "@mui/material";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import { PremiumSurface } from "../ui/PremiumSurface";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string;
};

export function ProjectCard({
  title,
  category,
  description,
  tags,
  metrics,
}: ProjectCardProps) {
  return (
    <PremiumSurface className="group overflow-hidden transition duration-500 hover:-translate-y-1">
      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative border-b border-white/10 p-5 md:p-6 lg:border-b-0 lg:border-r">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.10),transparent_34%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.08),transparent_30%)]" />

          <div className="relative rounded-[28px] border border-white/10 bg-[#08111F] p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                Preview
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-slate-950 via-[#0B1424] to-[#09101C]">
              <div className="border-b border-white/10 px-4 py-3 md:px-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="h-2 w-24 rounded-full bg-white/10" />
                  <div className="h-2 w-14 rounded-full bg-cyan-300/25" />
                </div>
              </div>

              <div className="grid gap-4 p-4 md:grid-cols-[1.05fr_0.95fr] md:p-5">
                <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                  <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-cyan-200/85 w-fit">
                    {category}
                  </div>

                  <div className="mt-4 max-w-[14rem] text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {title}
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-28 rounded-full bg-white/10" />
                    <div className="h-2 w-40 rounded-full bg-white/10" />
                    <div className="h-2 w-24 rounded-full bg-white/10" />
                  </div>

                  <div className="mt-6 flex gap-3">
                    <div className="h-10 w-28 rounded-full bg-gradient-to-r from-cyan-300/90 to-blue-200/90" />
                    <div className="h-10 w-24 rounded-full border border-white/10 bg-white/[0.04]" />
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      Outcome
                    </div>
                    <div className="mt-4 text-xl font-semibold leading-snug text-white">
                      {metrics}
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-violet-400/10 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      Percezione
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-white/60">
                          <span>Chiarezza</span>
                          <span>90%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[90%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-300" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-white/60">
                          <span>Autorevolezza</span>
                          <span>94%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[94%] rounded-full bg-gradient-to-r from-blue-300 to-violet-300" />
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between text-xs text-white/60">
                          <span>Ordine visivo</span>
                          <span>88%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <div className="h-2 w-[88%] rounded-full bg-gradient-to-r from-sky-300 to-cyan-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                        <div className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                          UI
                        </div>
                        <div className="mt-2 text-sm font-medium text-white">Premium</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                        <div className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                          Flow
                        </div>
                        <div className="mt-2 text-sm font-medium text-white">Chiaro</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                        <div className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                          Tone
                        </div>
                        <div className="mt-2 text-sm font-medium text-white">Credibile</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 md:p-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {category}
            </div>

            <Typography variant="h4" sx={{ mt: 1.5, fontWeight: 650, lineHeight: 1.08 }}>
              {title}
            </Typography>

            <Typography sx={{ mt: 2.5, color: "text.secondary", lineHeight: 1.9 }}>
              {description}
            </Typography>

            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    color: "rgba(241,245,249,0.9)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "999px",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/35">
                Risultato
              </div>
              <div className="mt-2 text-sm font-medium text-white/85">{metrics}</div>
            </div>

            <Button
              variant="text"
              endIcon={<CallMadeRoundedIcon fontSize="small" />}
              sx={{
                color: "rgba(241,245,249,0.92)",
                borderRadius: "999px",
                px: 0,
                minWidth: "auto",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "white",
                },
              }}
            >
              Case study
            </Button>
          </div>
        </div>
      </div>
    </PremiumSurface>
  );
}