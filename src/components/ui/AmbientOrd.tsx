import { cx } from "../../utils/cx";

type AmbientOrbProps = {
  className?: string;
};

export function AmbientOrb({ className }: AmbientOrbProps) {
  return (
    <div
      className={cx(
        "pointer-events-none absolute rounded-full blur-3xl opacity-50",
        className
      )}
      aria-hidden
    />
  );
}