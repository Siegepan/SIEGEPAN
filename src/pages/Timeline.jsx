import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import HeroPageTwo from "../components/HeroPageTwo";
import Parceiros from "../components/Parceiros";
import { ParticiparPageTwo } from "../components/ParticiparPageTwo";
import Schedule from "../components/Schedule";

function TimeLine() {
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

export default TimeLine;
