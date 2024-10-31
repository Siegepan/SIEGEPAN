import calendario from "./assets/calendario.png";
import logo from "../../assets/logo_Siegepan.png";
import logo_insta from "./assets/insta.png";
import link_icon from "./assets/link.png";
import localizacao_icon from "./assets/localizacao.png";
import email from "./assets/email.png";
import arquivo_logo from "./assets/arquivo_logo.png";

const CustomFooter = () => {
  return (
    <footer
      className="text-white py-8 px-5 md:px-10"
      style={{ backgroundColor: "#8644F0" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="md:w-1/3 flex flex-col items-start gap-y-3">
          <img src={logo} alt="Logo Siegepan" />
          <p className="w-full md:w-11/12">
            1º Simpósio de Enfermagem sobre as Novas Perspectivas do Gestar,
            Parir e Nascer
          </p>
          <div className="flex gap-2">
            <img src={calendario} alt="calendario" />
            <p>5 - 7 de Dezembro de 2024</p>
          </div>
        </div>

        <div className="mb-6 md:mb-0 flex flex-col items-start">
          <h1 className="text-2xl font-semibold mb-4">Menu</h1>
          <div className="flex flex-wrap gap-5">
            <ul className="space-y-2 flex items-start flex-col">
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Cronograma
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Palestrantes
                </a>
              </li>
            </ul>
            <ul className="space-y-2 flex items-start flex-col">
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Submissões
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Idealizadores
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline font-semibold">
                  Apoio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col pr-0 mr-0">
          <h2 className="text-2xl font-semibold mb-4">Links Importantes</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-3">
              <img src={localizacao_icon} alt="icone localização" />
              <span>Auditório do Instituto de Computação - IC UFMT</span>
            </li>
            <li className="flex items-center gap-3">
              <img src={email} alt="icone email" />
              <a href="mailto:seuemail@gmail.com" className="hover:underline">
                seuemail@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src={link_icon} alt="icone link" />
              <a href="https://seulink.even3.com" className="hover:underline">
                seulink.even3.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src={logo_insta} alt="icone instagram" />
              <a
                href="https://instagram.com/siegepan"
                className="hover:underline"
              >
                instagram.com/siegepan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src={arquivo_logo} alt="icone arquivo" />
              <span>Regimento Interno</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
