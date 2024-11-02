import PropTypes from "prop-types";
import calendar from "/src/assets/images/calender.svg";
import arrowl from "/src/assets/images/planta-branca-esquerda.svg";
import point from "/src/assets/images/point.svg";
import warrow from "/src/assets/images/arrow-branca.svg";
import logowhite from "/src/assets/logo-white.png";
import whiteplant from "/src/assets/images/Plantas-branca-direita.svg";
function Button({ children }) {
  return (
    <button className="cursor-text px-3 py-1 text-bg bg-tBlue rounded">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-primary pb-6  md:h-[700px] h-[420px]">
      <div className="hidden md:flex flex-col justify-end">
        <img src={arrowl} alt="" className="w-full h-auto" />
      </div>
      <div className="flex flex-col  md:flex-row items-center justify-center font-poppins ">
        <div className="flex flex-col items-center md:items-start w-full md:max-w-[1440px] gap-2">
          <div className="flex flex-nowrap flex-col md:flex-row order-1 md:order-none gap-1 mb-11 ">
            <div className="flex gap-2 md:rounded-[100px] md:bg-black/15 px-3 py-2 items-center">
              <img src={calendar} alt="" className="w-6 h-6" />
              <p className="text-bg text-sm lg:text-[22px]">
                5 a 7 de Dezembro
              </p>
            </div>
            <div className="flex items-center md:ring-bg md:ring-[0.5px] rounded-full gap-2 px-3 py-1">
              <img src={point} alt="" className="w-6 h-6" />
              <p className="text-bg text-sm lg:text-[22px]">
                Auditório IC UFMT
              </p>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-bg mb-3">
            SIEGEPAN
          </h1>
          <p className="text-bg text-center md:text-start text-xl md:text-2xl lg:text-3xl font-normal mb-8">
            1º Simpósio de Enfermagem:
            <br />
            Novas Formas de Cuidar em Saúde no <Button>Gestar</Button>,{" "}
            <Button>Parir</Button> e <Button>Nascer</Button>
          </p>
          <a
            className="text-bg bg-tPink flex items-center order-1 px-6 py-4 rounded-[15px] text-lg font-semibold gap-2"
            href="#as"
          >
            Inscrever-se{" "}
            <img src={warrow} alt="" className="md:w-[33px] md:h-[25px]" />
          </a>
        </div>
        <img
          src={logowhite}
          alt=""
          className="w-60 h-60 md:w-72 md:h-72 lg:w-[392px] lg:h-[423px] md:block hidden  "
        />
      </div>
      <div className="hidden md:flex flex-col justify-start">
        <img src={whiteplant} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Hero;
