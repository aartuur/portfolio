export function ProcessBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(167,139,250,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.12),transparent_30%)]"
      />

      <div
        aria-hidden="true"
        className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-40px] top-[-20px] h-56 w-56 rounded-full bg-violet-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-80px] right-[18%] h-56 w-56 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute left-[48%] top-10 hidden h-16 w-16 rounded-full bg-cyan-300/10 blur-2xl lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute right-10 top-24 hidden h-24 w-24 rounded-full bg-violet-300/10 blur-3xl xl:block"
      />

      <div
        aria-hidden="true"
        className="absolute right-8 top-8 hidden w-[190px] rotate-[8deg] rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl xl:block"
      >
        <div className="h-2 w-20 rounded-full bg-white/10" />
        <div className="mt-3 h-2 w-full rounded-full bg-white/5" />
        <div className="mt-2 h-2 w-4/5 rounded-full bg-white/5" />
        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-xl bg-cyan-300/10" />
          <div className="h-10 rounded-xl bg-white/5" />
          <div className="h-10 rounded-xl bg-violet-300/10" />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-8 left-[48%] hidden w-[150px] -rotate-[10deg] rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl lg:block"
      >
        <div className="h-2 w-16 rounded-full bg-white/10" />
        <div className="mt-3 h-12 rounded-xl bg-gradient-to-br from-cyan-300/10 to-violet-300/10" />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-10 right-[28%] hidden h-28 w-28 rotate-[10deg] opacity-60 lg:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
          maskImage:
            "radial-gradient(circle at center, black 45%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 45%, transparent 80%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-[22%] h-px w-28 bg-gradient-to-r from-white/0 via-white/12 to-white/0"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[18%] right-0 h-px w-36 bg-gradient-to-l from-white/0 via-white/12 to-white/0"
      />
    </>
  );
}