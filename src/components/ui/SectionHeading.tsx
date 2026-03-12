import Typography from "@mui/material/Typography";
import { cx } from "../../utils/cx";

export type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cx("max-w-3xl", centered && "mx-auto text-center")}>
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300 backdrop-blur">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(125,211,252,0.8)]" />
        {eyebrow}
      </div>

      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "2.7rem",
            md: "3.6rem",
          },
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 2.5,
          color: "text.secondary",
          fontSize: { xs: "1rem", md: "1.1rem" },
          lineHeight: 1.8,
          maxWidth: centered ? 760 : 680,
          mx: centered ? "auto" : 0,
        }}
      >
        {description}
      </Typography>
    </div>
  );
}