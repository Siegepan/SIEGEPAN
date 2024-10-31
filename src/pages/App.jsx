import Header from "../components/Header";
import Hero from "../components/Hero";
import Submissions from "../components/Submissions";
import Schedule from "../components/Schedule";
import SobreSiegepan from "../components/Sobre";
import FAQAccordion from "../components/Faq";
import Footer from "../components/Footer";
import FiquePorDentro from "../components/FiquePorDentro";
import Parceiros from "../components/Parceiros";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <FiquePorDentro />
      <Submissions />
      <Schedule />
      <SobreSiegepan />
      <FAQAccordion />
      <Footer />
      <Parceiros />
    </>
  );
}

export default App;
