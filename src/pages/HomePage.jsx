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
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Isso leva a visualização para o topo da página
  }, []);
  return (
    <>
      <Header />
      <div id="home" />
      <Hero />
      <FiquePorDentro />
      <div id="submissoes" />
      <Submissions />
      <div id="convidados" />
      <Convidados />
      <div id="homecron" />
      <Schedule />
      <div id="sobre" />
      <SobreSiegepan />
      <div id="faq" />
      <FAQAccordion />
      <div id="parceiros" />
      <Parceiros />
      <Participar />
      <Footer />
    </>
  );
}
