

import React from "react";
import { ReactComponent as Logo } from "./assets/react.svg"; 

const SIEGEPAN = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-xl">
        <Logo className="mx-auto mb-4 w-12 h-12" />
        <h1 className="text-3xl font-bold mb-2">SIEGEPAN</h1>
        <p className="text-lg">
          1º Simpósio de Enfermagem: Novas Formas de Cuidar em Saúde no{" "}
          <span className="text-blue-500 font-semibold">Gestar</span>,{" "}
          <span className="text-blue-500 font-semibold">Parir</span> e{" "}
          <span className="text-blue-500 font-semibold">Nascer</span>
        </p>
        <div className="mt-4 text-gray-600">
          <p>📅 De 5 a 7 de Dezembro</p>
          <p>📍 Auditório do Instituto de Computação - IC UFMT</p>
        </div>
        <button className="mt-6 bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-pink-600">
          Veja o Cronograma Completo ↓
        </button>
      </div>
    </div>
  );
};

export default SIEGEPAN;
