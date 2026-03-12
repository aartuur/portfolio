import { Container } from "@mui/material";
import { SectionHeading } from "../ui/SectionHeading";
import { projects } from "../../data/siteData";
import { ProjectCard } from "../cards/ProjectCard";

const projectNotes = [
  "Design orientato alla percezione del brand",
  "Strutture più chiare e credibili",
  "Esperienze moderne, pulite e più convincenti",
];

export function ProjectsSection() {
  return (
    <section id="progetti" className="relative overflow-hidden py-24 md:py-32 xl:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />

      <Container maxWidth="xl" className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 xl:grid-cols-[1fr_auto] xl:items-end">
            <div className="max-w-3xl">
              <SectionHeading
                eyebrow="Selected work"
                title="Progetti pensati per far percepire più qualità, più ordine e più solidità fin dal primo sguardo."
                description="Una selezione di lavori in cui il design non serve a decorare, ma a costruire una presenza più credibile, una lettura più chiara dell’offerta e un’esperienza complessiva più forte."
              />
            </div>

            <div className="xl:max-w-sm">
              <div className="grid gap-3 border-l border-white/10 pl-5">
                {projectNotes.map((item) => (
                  <p key={item} className="text-sm leading-6 text-white/60">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}