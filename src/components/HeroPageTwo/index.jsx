// src/componentes/HEROPAGE2.jsx

import logo from "/src/assets/logo.svg"; // Importação do logo
import planta3 from "/src/assets/planta2-roxa.svg"; // Importação da planta3
import planta2 from "/src/assets/planta3-roxa.svg"; // Importação da planta2
import logotipe from "/src/assets/images/logotipada.png";
import arrowRight from "/src/assets/images/prime_arrow-right-white.svg";

const HeroPageTwo = () => {
  return (
    <section className="relative flex items-center justify-center w-full bg-white overflow-hidden">
      {/* Imagem da planta2 no lado esquerdo, mais acima */}
      <img
        src={planta2}
        alt="Planta 2"
        className="absolute left-0 bottom-1 h-auto w-20 md:w-24 lg:w-28 opacity-50 "
      />

      {/* Conteúdo principal centralizado */}
      <div className="text-center p-10 mx-auto flex flex-col items-center justify-center">
        <img src={logo} alt="Logo" className="mx-auto mb-4 w-[80px]" />
        <img src={logotipe} alt="Logo SIEGEPAN" />
        <p className="text-[28px] mt-4">
          1º Simpósio de Enfermagem:
          <br /> <span> Novas Formas de Cuidar em Saúde no </span>
          <span className="bg-tBlue text-white font-semibold px-2 rounded mb-100">
            Gestar
          </span>
          <br />
          <span className="bg-tBlue text-white font-semibold px-1 rounded m-2">
            Parir
          </span>{" "}
          e{" "}
          <span className="bg-tBlue text-white font-semibold px-1 rounded mt-3">
            Nascer
          </span>
        </p>
        <div className="mt-4 text-gray-600">
          <p>📅 De 5 a 7 de Dezembro</p>
          <p>📍 Auditório do Instituto de Computação - IC UFMT</p>
        </div>
        <a
          href="#cron"
          className="mt-6 bg-tPink text-white font-semibold py-3 px-5 rounded-lg shadow hover:bg-pink-600 flex flex-row items-center justify-center"
          style={{backgroundColor:"#E43B64"}}
        >
          <p className="text-xl font-semibold">Veja a programação Completa </p>
          <img src={arrowRight} className="rotate-90" alt="" />
        </a>
      </div>

      {/* Imagem da planta3 no lado direito, mais acima */}
      <img
        src={planta3}
        alt="Planta 3"
        className="absolute right-0 bottom-[-10px] h-auto w-20 md:w-24 lg:w-28 opacity-50"
      />
    </section>
  );
};

export default HeroPageTwo;
