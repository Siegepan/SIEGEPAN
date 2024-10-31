import Swiper from "./Swiper";

const guests = [
  {
    name: "Nome do Convidado",
    role: "Cargo do Convidado",
    image: "/src/assets/convidado1.png",
    type: "Palestra",
    title: "Título da Palestra",
  },
];

const Convidados = () => {
  return (
    <div className="max-w-screen-xl h-[500px] mx-auto grid grid-cols-2 gap-8 ">
      <div className="">
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
        <div></div>
      </div>
      <div className="">
        <Swiper />
      </div>
    </div>
  );
};

export default Convidados;
