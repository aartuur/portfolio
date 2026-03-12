import { Container } from "@mui/material";
import { SectionHeading } from "../ui/SectionHeading";
import { faqs } from "../../data/siteData";
import { FAQItem } from "../ui/FAQItem";

const faqNotes = [
  "Tempi, metodo e organizzazione",
  "Collaborazione e feedback",
  "Struttura del progetto e aspettative",
];

export function FAQSection() {
  return (
    <section id="faq" className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />

      <Container maxWidth="xl" className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 xl:grid-cols-[0.78fr_1.22fr] xl:gap-20">
            <div className="max-w-xl">
              <SectionHeading
                eyebrow="FAQ"
                title="Risposte chiare ai dubbi più frequenti."
                description="Un buon processo riduce l’incertezza anche prima di iniziare. Qui trovi alcune risposte utili per capire meglio come lavoro, cosa aspettarti dal progetto e come si sviluppa la collaborazione."
              />

              <div className="mt-8 grid gap-3 border-l border-white/10 pl-5">
                {faqNotes.map((item) => (
                  <p key={item} className="text-sm leading-6 text-white/60">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="xl:pt-2">
              <div className="grid gap-3 md:gap-4">
                {faqs.map((faq) => (
                  <FAQItem key={faq.question} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}