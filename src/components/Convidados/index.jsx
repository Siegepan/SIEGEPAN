import { useRef } from "react";
import Swiper from "./Swiper";
import KarolineMeloImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Karoline Melo.jpeg";
import AnaLuizaRabeloImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Ana Luiza Rabello da Silva.jpg";
import MayreneDiasImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Mayrene Dias de Sousa .jpg";
import YanaRossetoImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Yana Rossetto.jpg";
import MarcialFrancisGaleraImage from "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Marcial Francis Galera.png";
import LuizAugustoImage from "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Dr. Luiz Augusto Cavallini Menechino.jpg";
import RodrigoCesarImage from "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Rodrigo César.jpg";
import DanielyBeatriceImage from "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Daniely Beatrice.jpg";
import JeaneAnschauImage from "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/Dr.ª Jeane Anschau.jpg";
import MayaraMendoncaImage from "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/Mayara Mendonça (1).jpg";
import JoaoGabrielImage from "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/João Gabriel.jpg";
import IsadoraRibeiro from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/Isadora Ribeiro.jpg";
import IzabellaFerreiraRocha from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/ Izabella Ferreira Rocha.jpg";
import LauraGracasPadilhaDeCarvalho from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/Laura Graças Padilha de Carvalho.jpg";
import JackelineGoncalvesBritoFerreira from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/Jackeline Gonçalves Brito Ferreira_.jpg";
import NinaBueno from "/src/assets/images/palestrantes/Minicursos/Dia 06-12/Nina Bueno.jpg";
import AlineBiancaCostaDosSantos from "/src/assets/images/palestrantes/Palestra dinâmica/dia 06/Copy of Aline Bianca Costa dos Santos.jpg";
import GiselaArsaDaCunha from "/src/assets/images/palestrantes/Palestra dinâmica/dia 06/Copy of Gisela Arsa da Cunha.jpg";
import LorenaBarbosaFonseca from "/src/assets/images/palestrantes/Palestra dinâmica/dia 06/Copy of Lorena Barbosa Fonseca.jpg";
import NelyAlvesDeCastroLima from "/src/assets/images/palestrantes/Experiência exitosa/06-12/Nely Alves de Castro Lima.jpg";
import VanusaCristina from "/src/assets/images/palestrantes/Experiência exitosa/06-12/Vanusa Cristina.jpg";
import DanKaioLemos from "/src/assets/images/palestrantes/Palestras/Dia 06-12/Dan Kaio Lemos.jpg";
import CristianeFerreira from "/src/assets/images/palestrantes/Palestras/Dia 07-12/Cristiane Ferreira.jpg";
import VitoriaValeriaCristoSantos from "/src/assets/images/palestrantes/Palestras/Dia 07-12/Vitória Valéria Cristo Santos.jpg";
import TatianaBering from "/src/assets/images/palestrantes/Experiência exitosa/dia 07-12/Profa. Dra. Tatiana Bering.jpg";
import BeluciBianca from "/src/assets/images/palestrantes/Mesas redondas/Dia 07-12/Beluci Bianca.jpg";
import AlessandraEmanuelleCunhaRodrigues from "/src/assets/images/palestrantes/Mesas redondas/Dia 07-12/Alessandra Emanuelle Cunha Rodrigues_.jpg";
import DeiseVilani from "/src/assets/images/palestrantes/Mesas redondas/Dia 07-12/Deise Vilani.jpg";

import blueplant from "/src/assets/planta-azul.svg";

const guests = [
  {
    name: "Karoline Melo",
    role: "Enfermeira Obstétrica",
    image: KarolineMeloImage,
    type: "Minicurso",
    title:
      "Acolhimento e Classificação de Risco Obstétrico: Procedimentos e Análise dos desfechos dos atendimentos na Triagem obstétrica",
  },
  {
    name: "Ana Luiza Rabelo",
    role: "Enfermeira Obstétrica",
    image: AnaLuizaRabeloImage,
    type: "Minicurso",
    title:
      "Urgências e Emergências Obstétricas: Casos Complexos e Lições Aprendidas na Prática Clínica",
  },
  {
    name: "Mayrene Dias de Sousa Moreira Alves",
    role: "Parteira, Enfermeira Obstétrica e neonatal",
    image: MayreneDiasImage,
    type: "Minicurso",
    title: "Manejo de HPP: Do Diagnóstico à Intervenção e Cuidados Pós-crise",
  },
  {
    name: "Yana Rosseto",
    role: "Enfermeira especializada em UTI neonatal",
    image: YanaRossetoImage,
    type: "Minicurso",
    title: "Taping da gestação ao pós parto",
  },
  {
    name: "Marcial Francis Galera",
    role: "Médico Pediatra e Geneticista",
    image: MarcialFrancisGaleraImage,
    type: "Minicurso",
    title:
      "Triagem Neonatal: Importância do Diagnóstico Precoce para o tratamento de Doenças Congênitas",
  },
  {
    name: "Luiz Augusto Cavallini Menechino",
    role: "Médico Ginicologista e Obstetra",
    image: LuizAugustoImage,
    type: "Mesa Redonda",
    title:
      "Cuidados à saúde reprodutiva: avanços e desafios para o alcance dos ODS",
  },
  {
    name: "Rodrigo César de Oliveira Carvalho",
    role: "Nutricionista",
    image: RodrigoCesarImage,
    type: "Mesa Redonda",
    title:
      "Cuidados à saúde reprodutiva: avanços e desafios para o alcance dos ODS",
  },
  {
    name: "Daniely Beatrice Ribeiro do Lago",
    role: "Enfermeira",
    image: DanielyBeatriceImage,
    type: "Mesa Redonda",
    title:
      "Cuidados à saúde reprodutiva: avanços e desafios para o alcance dos ODS",
  },
  {
    name: "Jeane Anschau",
    role: "Enfermeira",
    image: JeaneAnschauImage,
    type: "Palestra Dinâmica",
    title:
      "Boas práticas gestacionais, como o cuidado pré natal e a abordagem familiar impactam na saúde das futuras gerações” com ênfase no “Pré natal do parceiro”",
  },
  {
    name: "Mayara Mendonça",
    role: "Enfermeira Obstetra",
    image: MayaraMendoncaImage,
    type: "Palestra Dinâmica",
    title:
      "Boas práticas gestacionais, como o cuidado pré natal e a abordagem familiar impactam na saúde das futuras gerações” com ênfase no “Pré natal da mulher e a inclusão da família”",
  },
  {
    name: "João Gabriel da Silva Santos",
    role: "Enfermeiro Obstetra",
    image: JoaoGabrielImage,
    type: "Palestra Dinâmica",
    title:
      "Boas práticas gestacionais, como o cuidado pré natal e a abordagem familiar impactam na saúde das futuras gerações” com ênfase no “Pré natal da mulher e a inclusão da família”",
  },
  {
    name: "Isadora Ribeiro",
    role: "Enfermeira e especialista em saúde pública",
    image: IsadoraRibeiro,
    type: "Minicurso",
    title:
      "Amamentação e laserterapia: otimização do manejo nos problemas relacionados à lactação",
  },
  {
    name: "Izabella Ferreira Rocha",
    role: "Doula e educadora perinatal",
    image: IzabellaFerreiraRocha,
    type: "Minicurso",
    title: "Empreender na enfermagem obstétrica: caminhos e oportunidades",
  },
  {
    name: "Laura Graças Padilha de Carvalho",
    role: "Enfermeira obstétrica e mestre em enfermagem",
    image: LauraGracasPadilhaDeCarvalho,
    type: "Minicurso",
    title:
      "Boas práticas de assistência ao parto: humanização no momento do parto e Métodos não farmacológicos de alívio da dor.",
  },
  {
    name: "Jackeline Gonçalves Brito Ferreira",
    role: "Enfermeira obstetra e doutora em enfermagem",
    image: JackelineGoncalvesBritoFerreira,
    type: "Minicurso",
    title: "Primeiros Socorros para Bebês: Como Lidar com Emergências",
  },
  {
    name: "Nina Bueno",
    role: "Enfermeira obstetra e empreendedora em parto",
    image: NinaBueno,
    type: "Minicurso",
    title: "Atuação da enfermeira na progressão do trabalho de parto.",
  },
  {
    name: "Aline Bianca Costa dos Santos",
    role: "Assistente social e especialista em saúde mental",
    image: AlineBiancaCostaDosSantos,
    type: "Palestra Dinâmica",
    title:
      "O Papel da Equipe Multiprofissional no Pré-natal: Integração Sustentável e Equidade no Acesso à Saúde Materno e Infantil",
  },
  {
    name: "Gisela Arsa da Cunha",
    role: "Nutricionista, educadora física e doutora",
    image: GiselaArsaDaCunha,
    type: "Palestra Dinâmica",
    title:
      "O Papel da Equipe Multiprofissional no Pré-natal: Integração Sustentável e Equidade no Acesso à Saúde Materno e Infantil",
  },
  {
    name: "Lorena Barbosa Fonseca",
    role: "Nutricionista e doutora em saúde coletiva",
    image: LorenaBarbosaFonseca,
    type: "Palestra Dinâmica",
    title:
      "Boas práticas gestacionais, como o cuidado pré natal e a abordagem familiar impactam na saúde das futuras gerações” com ênfase no “Pré natal da mulher e a inclusão da família”",
  },
  {
    name: "Nely Alves de Castro Lima",
    role: "Enfermeira de banco de leite e home care",
    image: NelyAlvesDeCastroLima,
    type: "Experiência exitosa",
    title: "Conhecendo o Banco de Leite Humano",
  },
  {
    name: "Vanusa Cristina",
    role: "Enfermeira obstétrica e coordenadora hospitalar",
    image: VanusaCristina,
    type: "Experiência exitosa",
    title: "Iniciativa Hospital Amigo da Criança",
  },
  {
    name: "Dan Kaio Lemos",
    role: "Antropólogo, escritor e homem transfeminista",
    image: DanKaioLemos,
    type: "Palestra",
    title:
      "Direitos e Saúde Parental em Perspectiva: Desafios e Avanços na Reprodução e Parentalidade",
  },
  {
    name: "Cristiane Ferreira",
    role: "Enfermeira obstétrica e consultora em amamentação",
    image: CristianeFerreira,
    type: "Palestra",
    title:
      "Plano de Parto e Empoderamento: Preparação para um Parto Respeitoso e Garantia do Princípio da Integralidade do SUS",
  },
  {
    name: "Vitória Valéria Cristo Santos",
    role: "Enfermeira obstétrica e residente em saúde",
    image: VitoriaValeriaCristoSantos,
    type: "Palestra",
    title:
      "Aleitamento humano e o contato pele a pele: inclusão e apoio às famílias LGBTQIA+ e suas necessidades específicas",
  },
  {
    name: "Profa. Dra. Tatiana Bering",
    role: "Nutricionista e doutora em ciências aplicadas à saúde",
    image: TatianaBering,
    type: "Experiência exitosa",
    title: "experiências exitosas NBCAL",
  },
  {
    name: "Beluci Bianca",
    role: "Enfermeira e mestre em saúde pública",
    image: BeluciBianca,
    type: "Mesa Redonda",
    title:
      "Luto Fetal: Desafios Psicoemocionais e a importância da Rede de Apoio",
  },
  {
    name: "Alessandra Emanuelle Cunha Rodrigues",
    role: "Enfermeira especializada em Saúde da Mulher e Obstetrícia",
    image: AlessandraEmanuelleCunhaRodrigues,
    type: "Mesa Redonda",
    title:
      "Luto Fetal: Desafios Psicoemocionais e a importância da Rede de Apoio",
  },
  {
    name: "Deise Vilani",
    role: "Psicóloga, psicanalista e especialista em perinatalidade",
    image: DeiseVilani,
    type: "Mesa Redonda",
    title:
      "Luto Fetal: Desafios Psicoemocionais e a importância da Rede de Apoio",
  },
];

const Convidados = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <div className=" bg-bg w-full pt-36">
      <div className="max-w-screen-xl h-fit mx-auto md:grid md:grid-cols-2 gap-8 px-10">
        <div className=" flex flex-col justify-between">
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-row gap-4">
              <img src={blueplant} alt="" />
              <h1 className="font-semibold text-largetitle">
                Nossos Convidados Especiais
              </h1>
            </div>
            <p className="font-light text-lg max-w-[477px]">
              Conheça os palestrantes, ministrantes e convidados que trazem suas
              experiências e conhecimentos únicos para o evento.
            </p>
          </div>
          <div
            className="md:flex flex-row hidden gap-2
          mb-5
        "
          >
            {" "}
            <button
              onClick={handlePrev}
              className="px-6 py-4 bg-tBlue rounded-full hover:bg-[#FCFCFC] hover:border hover:border-[#44444] hover:text-black text-bg"
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-4 bg-tBlue rounded-full hover:bg-[#FCFCFC] hover:border hover:border-[#44444] hover:text-black text-bg"
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="md:mt-0 mt-10">
          <Swiper guests={guests} swiperRef={swiperRef} />
        </div>
      </div>
    </div>
  );
};

export default Convidados;
