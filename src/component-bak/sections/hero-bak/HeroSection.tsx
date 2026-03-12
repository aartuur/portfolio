// src/components/sections/hero/HeroSection.tsx
import SectionShell from "../../ui/SectionShell";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen w-full overflow-hidden bg-[#070b14] text-white">
      <HeroBackground />

      <SectionShell className="relative z-10 flex w-full items-center py-20 lg:py-24">
        <div className="grid w-full items-center gap-14 xl:grid-cols-[minmax(0,1.02fr)_minmax(620px,0.98fr)] xl:gap-12 2xl:gap-16">
          <HeroContent />
          <HeroVisual />
        </div>
      </SectionShell>
    </section>
  );
}