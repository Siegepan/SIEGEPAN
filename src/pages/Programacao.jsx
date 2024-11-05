import { useEffect } from "react";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import HeroPageTwo from "../components/HeroPageTwo";
import Parceiros from "../components/Parceiros";
import { ParticiparPageTwo } from "../components/ParticiparPageTwo";
import Schedule from "../components/Schedule";

export function Programacao() {
  useEffect(() => {
    window.scrollTo(0, 0); // Isso leva a visualização para o topo da página
  }, []);
  return (
    <>
      <HeroPageTwo />
      <div id="cron" />
      <Schedule pageTwo={true} />
      <ParticiparPageTwo />
      <FAQAccordion />
      <Parceiros />
      <Footer />
    </>
  );
}
