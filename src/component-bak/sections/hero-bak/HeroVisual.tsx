// src/components/sections/hero/HeroVisual.tsx
import React from "react";
import HeroBrowserMockup from "./HeroBrowserMockup";
import HeroFloatingCard from "./HeroFloatingCard";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[760px] xl:mx-0">
      <div className="absolute left-[8%] top-[10%] h-36 w-36 rounded-full bg-cyan-400/18 blur-3xl" />
      <div className="absolute bottom-[10%] right-[2%] h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-4">
        <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.01))]" />
        <div className="relative">
          <HeroBrowserMockup />

          <HeroFloatingCard
            eyebrow="Percezione online"
            title="Premium"
            className="absolute left-[-10px] top-10 hidden w-52 sm:block xl:left-[-48px]"
          >
            <div className="mt-3 flex items-center gap-2 text-sm text-cyan-200">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-300" />
              Più autorevolezza a colpo d’occhio
            </div>
          </HeroFloatingCard>

          <HeroFloatingCard
            title="Siti web per piccole imprese"
            description="Eleganti, moderni e progettati per valorizzare servizi, reputazione e contatti."
            eyebrow="Focus"
            className="absolute right-3 top-4 hidden w-56 bg-[linear-gradient(180deg,rgba(14,165,233,0.12),rgba(15,23,42,0.88))] lg:block"
          />

          <HeroFloatingCard
            title="Impressione immediata più forte"
            description="Design curato, tono professionale e struttura pensata per far percepire il business come più solido e affidabile."
            className="absolute bottom-[-16px] right-2 hidden w-64 md:block xl:right-[-28px]"
          />
        </div>
      </div>
    </div>
  );
}