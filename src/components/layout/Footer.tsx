import { Container } from "@mui/material";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <Container maxWidth="lg">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Luca Ferri</div>
            <div className="mt-1 text-sm text-slate-400">
              Web Designer / Frontend Developer freelance
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            <a href="#servizi" className="transition hover:text-white">Servizi</a>
            <a href="#processo" className="transition hover:text-white">Processo</a>
            <a href="#progetti" className="transition hover:text-white">Progetti</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>

          <div className="text-sm text-slate-500">
            © 2026 — Design e sviluppo con attenzione reale ai dettagli.
          </div>
        </div>
      </Container>
    </footer>
  );
}