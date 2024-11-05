import planta3 from "/src/assets/images/Planta-1(Azul).png"; // Importação da planta3
import planta2 from "/src/assets/images/Planta-2(Azul).png"; // Importação da planta2

export const ParticiparPageTwo = () => {
  return (
    <section className="w-full bg-bg pt-28 mx-auto px-6">
      <div className="relative w-fit mx-auto md:px-28 md:py-12 px-16 py-6 border border-tBlue rounded-[20px] bg-white shadow-md flex md:flex-row flex-col justify-center items-center gap-10">
        <div className="flex flex-col grow-0 ">
          {/* Elemento decorativo no canto superior esquerdo */}
          <div className="absolute -top-4 -left-2 text-pink-300">
            <img src={planta2} alt="Planta 1 magenta" className="w-20 h-20" />
          </div>

          <div>
            {/* Conteúdo principal com botão ao lado */}
            <div className="flex flex-col md:flex-row items-center justify-start mb-4 space-x-8">
              <h2 className="text-2xl font-semibold text-black text-left md:text-start text-center">
                Gostou do que estamos <br />
                preparando?
              </h2>
            </div>

            {/* Parágrafo abaixo */}
            <p className="text-gray-600 mt-2 text-left max-w-[500px]">
              Venha se inscrever e experimentar tudo o que o evento tem a
              oferecer!
            </p>
          </div>
          {/* Elemento decorativo no canto inferior direito */}
          <div className="absolute -bottom-4 -right-6 text-pink-300">
            <img src={planta3} alt="Planta 2 magenta" className="w-30 h-30" />
          </div>
        </div>
        <a
          href="https://www.even3.com.br/siegepan/"
          className=" flex flex-col md:flex-row opacity-50 text-white font-semibold 
        rounded-lg bg-gradient-to-r from-[#51ACD9] via-[#8644F0] to-[#E43B64] 
        hover:from-blue-500 hover:to-pink-500 m-3 py-3 px-5 text-nowrap"
        >
          Inscreva-se →
        </a>
      </div>
    </section>
  );
};
