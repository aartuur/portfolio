import { Box, CssBaseline, Divider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { appBackgroundSx, appTheme } from "./theme";
import { ValueSection } from "./components/sections/ValueSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { FAQSection } from "./components/sections/FAQSection";
import { FinalCTASection } from "./components/sections/FinalCTASection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { HeroSection } from "./component-bak/sections/hero-bak";

function SectionFrame({
  children,
  subtleTop = false,
}: {
  children: React.ReactNode;
  subtleTop?: boolean;
}) {
  return (
    <section className="relative">
      {subtleTop && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      )}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/[0.03] xl:block" />
        <div className="absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}

function SoftSectionSeparator() {
  return (
    <div className="pointer-events-none relative mx-auto h-12 w-full max-w-7xl">
      <div className="absolute inset-x-[10%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />

      <Box sx={appBackgroundSx}>
        <div className="relative overflow-x-clip text-slate-50 selection:bg-sky-300/20 selection:text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute left-[-12rem] top-[8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/8 blur-3xl" />
            <div className="absolute right-[-14rem] top-[38rem] h-[34rem] w-[34rem] rounded-full bg-violet-400/8 blur-3xl" />
            <div className="absolute left-[12%] top-[110rem] h-[18rem] w-[18rem] rounded-full bg-sky-300/5 blur-3xl" />
            <div className="absolute right-[10%] top-[170rem] h-[20rem] w-[20rem] rounded-full bg-fuchsia-400/5 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent_14%,transparent_86%,rgba(255,255,255,0.01))]" />
          </div>

          <Header />

          <main className="relative">
            <SectionFrame>
              <HeroSection />
            </SectionFrame>

            <SectionFrame subtleTop>
              <ValueSection />
            </SectionFrame>
            <SectionFrame subtleTop>
              <ServicesSection />
            </SectionFrame>
            <SectionFrame subtleTop>
              <ProcessSection />
            </SectionFrame>

            <SoftSectionSeparator />

            <SectionFrame subtleTop>
              <ProjectsSection />
            </SectionFrame>

            <SoftSectionSeparator />

            <SectionFrame subtleTop>
              <AboutSection />
            </SectionFrame>

            <SoftSectionSeparator />

            <SectionFrame subtleTop>
              <TestimonialsSection />
            </SectionFrame>

            <SoftSectionSeparator />

            <SectionFrame subtleTop>
              <FAQSection />
            </SectionFrame>

            <SoftSectionSeparator />

            <SectionFrame subtleTop>
              <FinalCTASection />
            </SectionFrame>
          </main>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
          <Footer />
        </div>
      </Box>
    </ThemeProvider>
  );
}