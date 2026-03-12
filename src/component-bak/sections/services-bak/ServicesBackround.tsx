// src/components/sections/services/ServicesBackground.tsx

export default function ServicesBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#060b14]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(79,70,229,0.16),transparent_24%),radial-gradient(circle_at_85%_15%,rgba(6,182,212,0.11),transparent_20%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.09),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute left-[12%] top-[18%] h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[10%] h-56 w-56 rounded-full bg-indigo-500/12 blur-3xl" />
    </>
  );
}