import React from "react";
import planta3 from "../assets/planta-1(Magenta).svg"; // Importação da planta3
import planta2 from "../assets/planta-2(Magenta).svg"; // Importação da planta2

const NAO_PERCA_A_CHANCE_DE_PARTICIPAR = () => {
  return (
    <section className="relative w-[calc(60%+20px)] mx-auto p-6 border border-pink-400 rounded-lg bg-white shadow-md">
      {/* Elemento decorativo no canto superior esquerdo */}
      <div className="absolute -top-4 -left-2 text-pink-300">
        <img src={planta2} alt="Planta 1 magenta" className="w-20 h-20 opacity-50" />
      </div>

      {/* Conteúdo principal com botão ao lado */}
      <div className="flex flex-col md:flex-row items-center justify-start mb-4 space-x-8 ml-5">
        <h2 className="text-2xl font-semibold text-black text-left">
          Não perca a chance de{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#51ACD9] via-[#8644F0] to-[#E43B64] opacity-50">
            participar
          </span>
          !
        </h2>
        <a
          href="#"
          className="opacity-50 ml-auto px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-[#51ACD9] via-[#8644F0] to-[#E43B64] hover:from-blue-500 hover:to-pink-500 transition"
        >
          Inscreva-se →
        </a>
      </div>

      {/* Parágrafo abaixo */}
      <p className="text-gray-600 mt-2 text-left">
        Veja o cronograma completo e tudo o que o evento tem a oferecer.
        <br />
        Venha enriquecer seus <span className="text-purple-500">conhecimentos</span> e sua{" "}
        <span className="text-purple-500">formação!</span>
      </p>

      {/* Elemento decorativo no canto inferior direito */}
      <div className="absolute -bottom-4 -right-6 text-pink-300">
        <img src={planta3} alt="Planta 2 magenta" className="w-30 h-30 opacity-50" />
      </div>
    </section>
  );
};

export default NAO_PERCA_A_CHANCE_DE_PARTICIPAR;
