import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Typography from "@mui/material/Typography";
import { PremiumSurface } from "../ui/PremiumSurface";

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export function ProcessStep({
  number,
  title,
  description,
}: ProcessStepProps) {
  return (
    <PremiumSurface className="group relative h-full overflow-hidden p-6 md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="pointer-events-none absolute -right-4 -top-6 text-[5rem] font-semibold leading-none text-white/[0.05] transition duration-500 group-hover:scale-110 group-hover:text-white/[0.08] md:text-[6rem]">
        {number}
      </div>

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/55">
            STEP {number}
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-cyan-300/30 group-hover:text-cyan-200">
            <ArrowOutwardRoundedIcon sx={{ fontSize: 18 }} />
          </div>
        </div>

        <Typography
          variant="h6"
          sx={{ mt: 3, fontWeight: 700 }}
          className="relative max-w-[14ch] text-white transition duration-300 group-hover:text-white"
        >
          {title}
        </Typography>

        <Typography
          sx={{ mt: 1.5, lineHeight: 1.7 }}
          className="relative max-w-[26ch] text-sm text-white/58 transition duration-300 group-hover:text-white/72 md:text-[15px]"
        >
          {description}
        </Typography>

        <div className="mt-6">
          <div className="h-px w-full bg-white/8" />
          <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-300/70 via-sky-300/40 to-transparent transition-all duration-500 group-hover:w-24" />
        </div>
      </div>
    </PremiumSurface>
  );
}