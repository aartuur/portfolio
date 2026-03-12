// src/components/sections/services/ServicesGrid.tsx
import ServicesCard from "./ServicesCard";
import { servicesData } from "./services.data";

export default function ServicesGrid() {
  const [first, second, third] = servicesData;

  return (
    <div className="grid gap-5 xl:grid-cols-12 xl:auto-rows-fr">
      <div className="xl:col-span-7 xl:row-span-2">
        <ServicesCard service={first} featured />
      </div>

      <div className="xl:col-span-5">
        <ServicesCard service={second} />
      </div>

      <div className="xl:col-span-5">
        <ServicesCard service={third} />
      </div>
    </div>
  );
}