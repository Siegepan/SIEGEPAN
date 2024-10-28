// src/componentes/HEROPAGE2.jsx

import React from "react";

const HEROPAGE2 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg max-w-xl">
        {/* SVG Inline */}
        <div className="mx-auto mb-4 w-12 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="35.93"
            height="32"
            viewBox="0 0 256 228"
            fill="#00D8FF"
          >
            <path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94Z" />
          </svg>
        </div>
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

export default HEROPAGE2;
