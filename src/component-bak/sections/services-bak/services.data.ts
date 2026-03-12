// src/components/sections/services/services.data.ts
export type ServiceItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  metricLabel: string;
  metricValue: string;
  tone: "cyan" | "violet" | "blue";
};

export const servicesData: ServiceItem[] = [
  {
    id: "professional-websites",
    eyebrow: "Presenza online",
    title: "Siti web moderni e professionali",
    description:
      "Progettiamo siti web che fanno apparire il tuo business più credibile, ordinato e pronto a lavorare con clienti di qualità.",
    points: [
      "Design premium e leggibile",
      "Gerarchia chiara dei contenuti",
      "Immagine più autorevole del brand",
    ],
    metricLabel: "Credibilità percepita",
    metricValue: "Alta",
    tone: "cyan",
  },
  {
    id: "business-structure",
    eyebrow: "Chiarezza",
    title: "Struttura pensata per servizi e attività locali",
    description:
      "Organizziamo pagine e contenuti per spiegare bene cosa fai, a chi ti rivolgi e perché dovrebbero scegliere te.",
    points: [
      "Sezioni orientate alla fiducia",
      "Presentazione servizi più efficace",
      "Messaggi semplici e professionali",
    ],
    metricLabel: "Offerta più chiara",
    metricValue: "+88%",
    tone: "violet",
  },
  {
    id: "conversion-focus",
    eyebrow: "Contatti",
    title: "Esperienza orientata a conversione e richieste",
    description:
      "Ogni elemento è progettato per rendere il contatto più naturale, migliorare la percezione del valore e facilitare la richiesta di informazioni.",
    points: [
      "CTA ben posizionate",
      "Percorso utente più fluido",
      "Mobile-first e veloce",
    ],
    metricLabel: "Lead flow",
    metricValue: "+38%",
    tone: "blue",
  },
];