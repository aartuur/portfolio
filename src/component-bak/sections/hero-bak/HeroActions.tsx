import PrimaryButton from "../../ui/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton";

export default function HeroActions() {
  return (
    <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <PrimaryButton fullWidth>Inizia il tuo progetto</PrimaryButton>
      <SecondaryButton fullWidth>Guarda il portfolio</SecondaryButton>
    </div>
  );
}