import Header from "../components/Header";
import Hero from "../components/Hero";
import Submissions from "../components/Submissions";
import Schedule from "../components/Schedule";
import SobreSiegepan from "../components/Sobre";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import FiquePorDentro from "../components/FiquePorDentro";
import Parceiros from "../components/Parceiros";
import Convidados from "../components/Convidados";
import Participar from "../components/Participar";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <FiquePorDentro />
      <Submissions />
      <Convidados />
      <Schedule />
      <SobreSiegepan />
      <FAQAccordion />
      <Parceiros />
      <Participar />
      <Footer />
    </>
  );
}

export default App;
