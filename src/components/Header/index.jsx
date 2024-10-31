import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBar = "/src/assets/images/menu-bar.svg";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-primary px-5 py-4 max-w-[1920px] m-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo e botão de menu */}
        <div className="flex justify-between items-center w-full">
          <img
            src="/src/assets/images/logo.svg"
            alt="Logo"
            className="h-8 md:h-12 md:hidden block"
          />
          {/* Botão de menu: Exibido apenas em telas pequenas */}
          <button onClick={toggleMenu} className="md:hidden">
            <img src={menuBar} alt="Menu" className="h-6 w-6" />
          </button>
        </div>

        {/* Menu de navegação */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block w-full mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:justify-end items-center font-poppins font-medium text-bg space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <a href="#sobre" className="relative hover-bar">
                Sobre
              </a>
            </li>
            <li>
              <a href="#cronograma" className="relative hover-bar">
                Cronograma
              </a>
            </li>
            <li>
              <a href="#palestrantes" className="relative hover-bar">
                Palestrantes
              </a>
            </li>
            <li>
              <a href="#faq" className="relative hover-bar">
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a href="#apoio" className="relative hover-bar">
                Apoio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
