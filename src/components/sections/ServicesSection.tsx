import { Chip, Container, Typography } from "@mui/material";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import { services } from "../../data/siteData";
import { ServiceCard } from "../cards/ServiceCard";

const serviceNotes = [
  {
    icon: <DesignServicesRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Impatto visivo",
  },
  {
    icon: <LanguageRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Chiarezza",
  },
  {
    icon: <DevicesRoundedIcon sx={{ fontSize: 16 }} />,
    label: "Solidità",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servizi"
      className="relative overflow-hidden bg-[#060b14] py-28 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_86%_12%,rgba(99,102,241,0.08),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />

      <Container maxWidth="xl" className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Typography className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/34">
              Servizi
            </Typography>

            <Typography className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white md:text-5xl">
              Cosa include il progetto,
              <br />
              in modo chiaro e senza complicazioni.
            </Typography>

            <Typography className="mt-6 max-w-2xl text-sm leading-8 text-white/56 md:text-[15px]">
              Ogni intervento è pensato per migliorare la percezione del brand,
              rendere il sito più comprensibile e costruire una presenza online
              più ordinata, credibile e coerente.
            </Typography>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {serviceNotes.map((item) => (
                <Chip
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  variant="outlined"
                  sx={{
                    color: "rgba(255,255,255,0.74)",
                    borderColor: "rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(255,255,255,0.025)",
                    height: 36,
                    borderRadius: "999px",
                    "& .MuiChip-icon": {
                      color: "rgba(255,255,255,0.48)",
                    },
                    "& .MuiChip-label": {
                      px: 1.25,
                      fontWeight: 500,
                    },
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}