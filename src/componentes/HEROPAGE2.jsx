// src/componentes/HEROPAGE2.jsx

import React from "react";
import logo from "../assets/logo.svg"; // Importação do logo
import planta3 from "../assets/planta2-roxa.svg"; // Importação da planta3
import planta2 from "../assets/planta3-roxa.svg"; // Importação da planta2

const HEROPAGE2 = () => {
  return (
    <section className="relative flex items-center justify-center w-full bg-white overflow-hidden">
      {/* Imagem da planta2 no lado esquerdo, mais acima */}
      <img
        src={planta2}
        alt="Planta 2"
        className="absolute left-0 bottom-1 h-auto w-20 md:w-24 lg:w-28 opacity-50"
      />

      {/* Conteúdo principal centralizado */}
      <div className="text-center p-10  max-w-xl mx-auto">
        <img src={logo} alt="Logo" className="mx-auto mb-4 w-12 h-12" />
        <h1 className="text-3xl font-bold mb-2">SIEGEPAN</h1>
        <p className="text-lg">
          1º Simpósio de Enfermagem:
          <br /> <span> Novas Formas de Cuidar em Saúde no{" "} </span> 
          <span className="bg-blue-500 text-white font-semibold px-2 py-1 rounded mb-2">Gestar</span><br />
<span className="bg-blue-500 text-white font-semibold px-2 py-1 rounded mr-2">Parir</span> e{" "}
<span className="bg-blue-500 text-white font-semibold px-2 py-1 rounded mb-2">Nascer</span>

        </p>
        <div className="mt-4 text-gray-600">
          <p>📅 De 5 a 7 de Dezembro</p>
          <p>📍 Auditório do Instituto de Computação - IC UFMT</p>
        </div>
        <button className="mt-6 bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-pink-600">
          Veja o Cronograma Completo ↓
        </button>
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

export default HEROPAGE2;
