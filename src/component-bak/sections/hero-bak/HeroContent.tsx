import HeroBadge from "./HeroBadge";
import HeroActions from "./HeroActions";
import HeroTrustGrid from "./HeroTrustGrid";

export default function HeroContent() {
  return (
    <div className="w-full max-w-[640px] xl:max-w-[680px]">
      <HeroBadge />

      <div className="mt-6 space-y-6">
        <h1 className="max-w-[12ch] text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-[4.6rem]">
          Siti moderni per il tuo business
          <span className="block bg-gradient-to-r from-white via-[#c6d2ff] to-[#7fe6ff] bg-clip-text text-transparent">
            credibile, curato e pronto a crescere.
          </span>
        </h1>

        <p className="max-w-[62ch] text-base leading-8 text-slate-300 sm:text-lg">
          Realizziamo siti web premium per piccole imprese, professionisti e attività
          locali che vogliono distinguersi online con un’immagine più autorevole,
          moderna e orientata ai risultati.
        </p>
      </div>

      <HeroActions />
      <HeroTrustGrid />
    </div>
  );
}