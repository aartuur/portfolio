// src/components/sections/services/ServicesSection.tsx
import SectionShell from "../../ui/SectionShell";
import ServicesBackground from "./ServicesBackround";
import ServicesGrid from "./ServicesGrid";
import ServicesHeader from "./ServicesHeader";
// import ServicesHighlight from "./ServicesHighlight";

export default function ServicesSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#070b14] text-white">
      <ServicesBackground />

      <SectionShell className="relative z-10 py-24 lg:py-28">
        <div className="space-y-12 lg:space-y-14">
          <ServicesHeader />
          <ServicesGrid />
          {/* <ServicesHighlight /> */}
        </div>
      </SectionShell>
    </section>
  );
}