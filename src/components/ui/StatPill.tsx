import { PremiumSurface } from "./PremiumSurface";

type StatPillProps = {
  value: string;
  label: string;
};

export function StatPill({ value, label }: StatPillProps) {
  return (
    <PremiumSurface className="rounded-2xl px-4 py-4">
      <div className="text-xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </PremiumSurface>
  );
}