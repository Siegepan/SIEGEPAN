const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-primary px-5 py-4">
      <img src="/src/assets/images/logo.svg" alt="Logo" className="h-8 md:h-12 mb-4 md:mb-0" />
      <nav className="w-full md:w-2/3 lg:w-1/2">
        <ul className="flex flex-col md:flex-row md:justify-end items-center font-poppins font-medium text-bg justify-evenly w-full space-y-4 md:space-y-0 gap-x-6">
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
  )
}

export default Header
