import { useEffect, useState } from "react";
import AxisCard from "./AxisCard";
import HorizontalTimeLine from "./HorizontalTimeLine";
import VerticalTimeLine from "./VerticalTimeLine";
import ModelsButton from "./ModelsButton";
import SubmissionButton from "./SubmissionButton";

const Submissions = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Função para atualizar o tamanho da janela
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Adiciona o evento de 'resize' para escutar mudanças no tamanho da janela
    window.addEventListener("resize", handleResize);

    // Remove o evento quando o componente for desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Executa o efeito apenas uma vez, ao montar o componente

  return (
    <div className="px-10 bg-bg border-none">
      <div className="max-w-[1440px] flex flex-col justify-center mx-auto">
        <div className="mb-7 flex flex-col">
          <div className="self-center flex flex-row items-baseline gap-4 relative">
            <h1 className="self-center md:text-largetitle sm:text-3xl text-2xl font-semibold mb-5">
              Submissões de Trabalho
            </h1>

            <img
              src="/src/assets/images/title-icon.svg"
              alt="line"
              className=""
            />
          </div>

          <p className="text-lg text-center p-7">
            Contribua para o avanço das novas perspectivas no campo da
            enfermagem, participando das discussões no SIEGEPAN. Este simpósio
            reúne profissionais da saúde e pesquisadores para debater abordagens
            inovadoras no cuidado à gestação, parto e nascimento. Junte-se a nós
            e ajude a transformar práticas de saúde.
          </p>
        </div>

        {windowSize.width > 640 ? (
          <div>
            <HorizontalTimeLine />
          </div>
        ) : (
          <div className="">
            <VerticalTimeLine />
          </div>
        )}
        <div className="mt-20">
          <div className="flex flex-row justify-between items-center gap-10">
            <div>
              <h2 className="text-xl font-semibold">Eixos Temáticos</h2>
              <p className="text-lg  mb-5">
                Confira os eixos temáticos abaixo e acesse o modelo de resumo e
                banner
              </p>
            </div>
            <div>
              <ModelsButton
                label="Ver Modelos"
                href="https://drive.google.com/drive/folders/1Ytd98uvvKN0VJJH2szCWK_tGYamaA8_v"
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col gap-9 ">
            <AxisCard
              info="Eixo I: Empreendedorismo e inovação na prática do cuidado/atendimento de
enfermagem e/ou multiprofissional no ciclo gravídico-puerperal."
            />
            <AxisCard
              gradientInverse={true}
              info="Eixo II: Ensino, pesquisa e extensão sobre as formas de cuidar no ciclo gravídico-puerperal visando a qualidade do cuidado/atendimento."
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-6">
            <h1 className="text-2xl font-semibold max-w-lg text-center mb-4">
              Que tal submeter seu trabalho e compartilhar suas pesquisas no
              SIEGEPAN?
            </h1>
            <SubmissionButton
              label="Submeter Trabalho"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeIFme2jz5GZji-NNNe4nukNzWRHc636_9i7kdrn0b4ZMcUJA/viewform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
