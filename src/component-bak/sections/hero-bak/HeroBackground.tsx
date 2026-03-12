// src/components/sections/hero/HeroBackground.tsx

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#060b14]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(79,70,229,0.20),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.14),transparent_22%),radial-gradient(circle_at_80%_90%,rgba(59,130,246,0.10),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025),rgba(255,255,255,0))]" />
      <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_65%)] blur-3xl" />
    </>
  );
}