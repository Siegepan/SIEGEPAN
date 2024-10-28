import React from "react";
import planta3 from "../assets/planta-1(Magenta).svg"; // Importação da planta3
import planta2 from "../assets/planta-2(Magenta).svg"; // Importação da planta2

const NAO_PERCA_A_CHANCE_DE_PARTICIPAR = () => {
  return (
    <section className="relative max-w-2x1 mx-auto p-6 border border-pink-400 rounded-lg text-center bg-white shadow-md">
      {/* Elemento decorativo no canto superior esquerdo */}
      <div className="absolute -top-4 -left-5 text-pink-300">
        <img src={planta2} alt="Planta 1 magenta" className="w-40 h-40" />
      </div>

      {/* Conteúdo principal com botão ao lado */}
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-2xl font-semibold text-black">
          Não perca a chance de{" "} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            participar
          </span>
          !
        </h2>
        <a
          href="#"
          className="ml-4 inline-block px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-500 hover:to-pink-500 transition"
        >
          Inscreva-se →
        </a>
      </div>

      {/* Parágrafo abaixo */}
      <p className="text-gray-600 mt-2">
        Veja o cronograma completo e tudo o que o evento tem a oferecer.
        <br />
        Venha enriquecer seus <span className="text-purple-500">conhecimentos</span> e sua{" "}
        <span className="text-purple-500">formação!</span>
      </p>

      {/* Elemento decorativo no canto inferior direito */}
      <div className="absolute -bottom-4 -right-6 text-pink-300">
        <img src={planta3} alt="Planta 2 magenta" className="w-40 h-40" />
      </div>
    </section>
  );
};

export default NAO_PERCA_A_CHANCE_DE_PARTICIPAR;
