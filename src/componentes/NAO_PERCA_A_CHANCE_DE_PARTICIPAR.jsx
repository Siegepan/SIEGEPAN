import React from "react";
import planta3 from "../assets/planta1-azul.svg"; // Importação da planta3
import planta2 from "../assets/planta2-azul.svg"; // Importação da planta2

const NAO_PERCA_A_CHANCE_DE_PARTICIPAR = () => {
  return (
    <section className="relative max-w-2xl mx-auto p-6 border border-pink-300 rounded-lg text-center bg-white shadow-md">
      {/* Elemento decorativo no canto superior esquerdo */}
      <div className="absolute -top-4 -left-4 text-pink-300">
       <img src={planta2} alt="" />
      </div>

      {/* Conteúdo principal */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-black">
          Não perca a chance de <span className="text-blue-500">participar!</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Veja o cronograma completo e tudo o que o evento tem a oferecer.
          <br />
          Venha enriquecer seus <span className="text-purple-500">conhecimentos</span> e sua <span className="text-purple-500">formação!</span>
        </p>
      </div>

      {/* Botão com gradiente */}
      <a
        href="#"
        className="inline-block px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-500 hover:to-pink-500 transition"
      >
        Inscreva-se →
      </a>

      {/* Elemento decorativo no canto inferior direito */}
      <div className="absolute -bottom-4 -right-4 text-pink-300">
        <img src={planta3} alt="" />
      </div>
    </section>
  );
};

export default NAO_PERCA_A_CHANCE_DE_PARTICIPAR;
