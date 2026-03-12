import { Button, Container } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { NavLink } from "../ui/NavLink";

export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <Container maxWidth="lg">
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#top" className="group inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <span className="bg-gradient-to-br from-white to-sky-200 bg-clip-text text-sm font-semibold tracking-[-0.04em] text-transparent">
                FD
              </span>
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-white">
                Luca Ferri
              </div>
              <div className="text-xs text-slate-400">
                Web Designer · Frontend Developer
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#servizi">Servizi</NavLink>
            <NavLink href="#processo">Processo</NavLink>
            <NavLink href="#progetti">Progetti</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          <Button
            variant="contained"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              color: "#06111F",
              background:
                "linear-gradient(135deg, rgba(232,244,255,1) 0%, rgba(128,196,255,0.98) 55%, rgba(156,140,255,0.95) 100%)",
              boxShadow: "0 10px 40px rgba(113,184,255,0.22)",
              "&:hover": {
                boxShadow: "0 14px 46px rgba(113,184,255,0.28)",
                background:
                  "linear-gradient(135deg, rgba(240,248,255,1) 0%, rgba(142,202,255,1) 55%, rgba(170,158,255,0.98) 100%)",
              },
            }}
            href="#contatti"
          >
            Prenota una call
          </Button>
        </div>
      </Container>
    </div>
  );
}