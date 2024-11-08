import { useState } from "react";
import menuBar from "/src/assets/images/menu-bar.svg";
import headerLogo from "/src/assets/images/logo.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-primary px-5 py-4 max-w-[1920px] m-auto md:static sticky w-full transition-all ease-in-out duration-500">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo e botão de menu */}
        <div className="flex justify-between items-center w-full">
          <img
            src={headerLogo}
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
              <a href="#homecron" className="relative hover-bar">
                Programação
              </a>
            </li>
            <li>
              <a href="#convidados" className="relative hover-bar">
                Palestrantes
              </a>
            </li>
            <li>
              <a href="#faq" className="relative hover-bar">
                Perguntas Frequentes
              </a>
            </li>
            <li>
              <a href="#parceiros" className="relative hover-bar">
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
