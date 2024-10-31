import { useRef } from "react";
import Swiper from "./Swiper";

const guests = [
  {
    name: "Karoline Melo",
    role: "Enfermeira Obstétrica",
    image:
      "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Karoline Melo.jpeg",
    type: "Minicurso",
    title:
      "Acolhimento e Classificação de Risco Obstétrico: Procedimentos e Análise dos desfechos dos atendimentos na Triagem obstétrica",
  },
  {
    name: "Ana Luiza Rabelo",
    role: "Enfermeira Obstétrica",
    image:
      "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Ana Luiza Rabello da Silva.jpg",
    type: "Minicurso",
    title:
      "Urgências e Emergências Obstétricas: Casos Complexos e Lições Aprendidas na Prática Clínica",
  },
  {
    name: "Mayrene Dias de Sousa Moreira Alves",
    role: "Parteira, Enfermeira Obstétrica e neonatal",
    image:
      "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Mayrene Dias de Sousa .jpg",
    type: "Minicurso",
    title: "Manejo de HPP: Do Diagnóstico à Intervenção e Cuidados Pós-crise",
  },
  {
    name: "Yana Rosseto",
    role: "Enfermeira especializada em UTI neonatal",
    image:
      "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Yana Rossetto.jpg",
    type: "Minicurso",
    title: "Taping da gestação ao pós parto",
  },
  {
    name: "Marcial Francis Galera",
    role: "Médico Pediatra e Geneticista",
    image:
      "/src/assets/images/palestrantes/Minicursos/Dia 05-12/Marcial Francis Galera.png",
    type: "Minicurso",
    title:
      "Triagem Neonatal: Importância do Diagnóstico Precoce para o tratamento de Doenças Congênitas",
  },
  {
    name: "Luiz Augusto Cavallini Menechino",
    role: "Médico Ginicologista e Obstetra",
    image:
      "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Dr. Luiz Augusto Cavallini Menechino.jpg",
    type: "Mesa Redonda",
    title:
      "Cuidados à saúde reprodutiva: avanços e desafios para o alcance dos ODS",
  },
  {
    name: "Rodrigo César de Oliveira Carvalho",
    role: "Nutricionista",
    image:
      "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Rodrigo César.jpg",
    type: "Mesa Redonda",
    title:
      "Cuidados à saúde reprodutiva: avanços e desafios para o alcance dos ODS",
  },
  {
    name: "Daniely Beatrice Ribeiro do Lago",
    role: "Enfermeira",
    image:
      "/src/assets/images/palestrantes/Mesas redondas/Dia 05-12/Daniely Beatrice.jpg",
    type: "Mesa Redonda",
    title:
      "Cuidados à saúde reprodutiva: avanços e desafios para o alcance dos ODS",
  },
  {
    name: "Jeane Anschau",
    role: "Enfermeira",
    image:
      "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/Dr.ª Jeane Anschau.jpg",
    type: "Palestra Dinâmica",
    title:
      "Boas práticas gestacionais, como o cuidado pré natal e a abordagem familiar impactam na saúde das futuras gerações” com ênfase no “Pré natal do parceiro”",
  },
  {
    name: "Mayara Mendonça",
    role: "Enfermeira Obstetra",
    image:
      "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/Mayara Mendonça (1).jpg",
    type: "Palestra Dinâmica",
    title:
      "Boas práticas gestacionais, como o cuidado pré natal e a abordagem familiar impactam na saúde das futuras gerações” com ênfase no “Pré natal da mulher e a inclusão da família”",
  },
  {
    name: "João Gabriel da Silva Santos",
    role: "Enfermeiro Obstetra",
    image:
      "/src/assets/images/palestrantes/Palestra dinâmica/dia 05/João Gabriel.jpg",
    type: "Palestra Dinâmica",
    title:
      "Boas práticas gestacionais, como o cuidado pré natal e a abordagem familiar impactam na saúde das futuras gerações” com ênfase no “Pré natal da mulher e a inclusão da família”",
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
    <div className="max-w-screen-xl h-fit mx-auto grid grid-cols-2 gap-8 rouded-t-[40px] ">
      <div className=" flex flex-col justify-between">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row gap-4">
            <img src="/src/assets/planta-azul.svg" alt="" />
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
          className="flex flex-row gap-2
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
      <div className="">
        <Swiper guests={guests} />
      </div>
    </div>
  );
};

export default Convidados;
