import pranta from "/src/assets/planta-fique-3.png";
import plantaVertical from "/src/assets/Planta-fique-1.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import lottieAnimation from "/src/assets/lotties/0H93rE5C00.json?url";
import arrowRight from "/src/assets/prime_arrow-right (1).png";
const FiquePorDentro = () => {
  return (
    <div className="relative rounded-t-[40px] w-full bg-bg">
      <div
        className="rounded-t-3xl max-w-[1440px] mx-auto"
        style={{
          backgroundColor: "white",
        }}
      >
        <img
          src={pranta}
          alt="Planta"
          className="absolute left-0 w-1/3 md:w-1/5 lg:w-1/5"
        />
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-32 py-24 px-6">
          <div className="lottie-gif-hero w-full lg:block hidden ">
            <DotLottieReact
              src={lottieAnimation}
              loop={true}
              autoplay={true}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="flex flex-col w-full  gap-y-4 p-4 lg:p-0">
            <div className="flex gap-4 items-center">
              <img
                src={plantaVertical}
                alt="Planta rosa"
                className="w-12 h-12 lg:w-16 lg:h-16"
              />
              <p className="text-xl lg:text-2xl font-semibold">
                Fique por dentro do{<br />}SIEGEPAN
              </p>
            </div>
            <p className="text-sm lg:text-base">
              Apresentamos o Simpósio de Enfermagem: Novas Formas de Cuidar em
              Saúde no Gestar, Parir e Nascer (SIEGEPAN), um evento voltado para
              profissionais e acadêmicos da área da saúde, com o objetivo de
              fortalecer as políticas de saúde e discutir as melhores práticas
              de assistência no pré-natal, parto humanizado, puerpério,
              aleitamento humano e suporte psicossocial. {<br />}
              {<br />} Com foco na inclusão de todas as pessoas que gestam,
              incluindo a comunidade LGBTQA+, o simpósio busca promover a
              atualização técnico-científica contínua e qualificada.
            </p>

            <a
              href="#"
              className="text-lg font-semibold border w-fit py-4 px-7 rounded-[15px] border-tPink text-tPink flex flex-row gap-3"
            >
              Inscreva-se <img src={arrowRight} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiquePorDentro;
