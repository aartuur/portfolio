import { Container } from "@mui/material";
import { SectionHeading } from "../ui/SectionHeading";
import { testimonials } from "../../data/siteData";
import { TestimonialCard } from "../cards/TestimonialCard";

const proofNotes = [
  "Più ordine nel progetto",
  "Comunicazione più chiara",
  "Maggiore sicurezza nelle decisioni",
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />

      <Container maxWidth="xl" className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 xl:grid-cols-[1fr_auto] xl:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Social proof"
                title="Feedback che confermano un modo di lavorare serio, chiaro e realmente curato."
                description="Quando un progetto è costruito bene, la qualità si vede nel risultato finale ma anche nel percorso: meno attriti, più ordine e una sensazione generale di maggiore solidità."
              />
            </div>

            <div className="xl:max-w-xs">
              <div className="grid gap-3 border-l border-white/10 pl-5">
                {proofNotes.map((item) => (
                  <p key={item} className="text-sm leading-6 text-white/60">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={index === 1 ? "md:translate-y-8" : ""}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}