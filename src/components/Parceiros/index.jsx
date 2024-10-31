import logo1 from "/src/assets/colaboradores/logo-ufmt.png";
import logo2 from "/src/assets/colaboradores/logo-procev.png";
import logo3 from "/src/assets/colaboradores/logo-prolan.png";
import logo4 from "/src/assets/colaboradores/logo-ninho.png";
import logo5 from "/src/assets/colaboradores/logo-faen.png";
import logo6 from "/src/assets/colaboradores/logo-1.png";
import logo7 from "/src/assets/colaboradores/logo-2.png";
import logo8 from "/src/assets/colaboradores/logo-3.png";
import logo9 from "/src/assets/colaboradores/logo-4.png";
import logo10 from "/src/assets/colaboradores/logo-5.png";
import logo11 from "/src/assets/colaboradores/logo-6.png";
import logo12 from "/src/assets/colaboradores/logo-7.png";
import logo13 from "/src/assets/colaboradores/logo-8.png";
import logo14 from "/src/assets/colaboradores/logo-9.png";
import logo15 from "/src/assets/colaboradores/logo-10.png";
import plantaRoxa from "/src/assets/colaboradores/planta.png";
import "./Parceiros.css";

function Parceiros() {
  const parceirosDestaque = [
    { name: "logo1", logo: logo1 },
    { name: "logo2", logo: logo2 },
    { name: "logo3", logo: logo3 },
    { name: "logo4", logo: logo4 },
    { name: "logo5", logo: logo5 },
  ];

  const parceirosComuns = [
    { name: "logo6", logo: logo6 },
    { name: "logo7", logo: logo7 },
    { name: "logo8", logo: logo8 },
    { name: "logo9", logo: logo9 },
    { name: "logo10", logo: logo10 },
    { name: "logo11", logo: logo11 },
    { name: "logo12", logo: logo12 },
    { name: "logo13", logo: logo13 },
    { name: "logo14", logo: logo14 },
    { name: "logo15", logo: logo15 },
  ];

  return (
    <div className="relative p-4 font-sans flex flex-col items-center bg-white overflow-hidden py-36">
      {/* Planta roxa no canto esquerdo, ajustável conforme o dispositivo */}
      <img
        src={plantaRoxa}
        alt="Planta roxa decorativa"
        className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-64 xl:h-64 opacity-70 pointer-events-none"
      />

      {/* Título Centralizado */}
      <div className="flex justify-center items-center gap-2 mb-8 text-center z-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          Parceiros que tornam
          <br />
          tudo{" "}
          <span className="text-white bg-purple-700 px-2 py-1 rounded">
            possível
          </span>
        </h2>
      </div>

      {/* Grid de Logos em Destaque, sempre maior */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 mb-8 place-items-center z-10 w-full max-w-6xl">
          {parceirosDestaque.map((parceiro, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 rounded-lg transition-transform hover:scale-105"
            >
              <img
                className="logoEmpresa h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 object-contain"
                src={parceiro.logo}
                alt={`${parceiro.name} logo`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grid de Logos Comuns, menor em comparação aos destaque */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center z-10 w-full max-w-7xl">
          {parceirosComuns.map((parceiro, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 rounded-lg transition-transform hover:scale-105"
            >
              <img
                className="logoEmpresa h-14 sm:h-18 md:h-22 lg:h-26 xl:h-30 object-contain"
                src={parceiro.logo}
                alt={`${parceiro.name} logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Parceiros;
