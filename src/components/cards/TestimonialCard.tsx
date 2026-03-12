import { Avatar, Typography } from "@mui/material";
import { PremiumSurface } from "../ui/PremiumSurface";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <PremiumSurface className="group h-full overflow-hidden transition duration-500 hover:-translate-y-1">
      <div className="border-b border-white/10 px-6 py-4 md:px-7">
        <div className="flex items-center justify-between gap-4">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">
            Testimonial
          </div>

          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-cyan-300/70" />
            <span className="h-2 w-2 rounded-full bg-blue-300/50" />
            <span className="h-2 w-2 rounded-full bg-violet-300/50" />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="text-4xl leading-none text-white/14">“</div>

        <Typography
          sx={{
            mt: 2.5,
            color: "text.primary",
            lineHeight: 1.95,
          }}
        >
          {quote}
        </Typography>

        <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
          <Avatar
            sx={{
              width: 46,
              height: 46,
              background:
                "linear-gradient(135deg, rgba(125,211,252,0.95), rgba(167,139,250,0.9))",
              color: "#07101F",
              fontWeight: 700,
              fontSize: "0.95rem",
            }}
          >
            {initials}
          </Avatar>

          <div>
            <div className="text-sm font-semibold tracking-[0.01em] text-white">
              {name}
            </div>
            <div className="mt-1 text-sm text-slate-400">{role}</div>
          </div>
        </div>
      </div>
    </PremiumSurface>
  );
}