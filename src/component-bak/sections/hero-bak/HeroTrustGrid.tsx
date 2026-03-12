// src/components/sections/hero/HeroTrustGrid.tsx
import React from "react";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import ShowChartRoundedIcon from "@mui/icons-material/ShowChartRounded";
import SurfaceCard from "../../ui/SurfaceCard";

type TrustItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function TrustItem({ icon, title, description }: TrustItemProps) {
  return (
    <SurfaceCard className="p-4">
      <div className="mb-3 inline-flex rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-200">
        {icon}
      </div>
      <h3 className="text-sm font-semibold tracking-[-0.01em] text-white">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-slate-400">{description}</p>
    </SurfaceCard>
  );
}

export default function HeroTrustGrid() {
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      <TrustItem
        icon={<VerifiedRoundedIcon sx={{ fontSize: 18 }} />}
        title="Approccio serio"
        description="Design pulito, struttura chiara e posizionamento credibile."
      />
      <TrustItem
        icon={<StorefrontRoundedIcon sx={{ fontSize: 18 }} />}
        title="Pensato per PMI"
        description="Soluzioni adatte a negozi, studi, attività locali e servizi."
      />
      <TrustItem
        icon={<ShowChartRoundedIcon sx={{ fontSize: 18 }} />}
        title="Orientato al business"
        description="Ogni sezione valorizza il brand e aumenta la fiducia."
      />
    </div>
  );
}