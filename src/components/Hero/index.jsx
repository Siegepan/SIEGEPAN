import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import PropTypes from 'prop-types'

function Button({ children }) {
  return <button className="cursor-text px-3 py-1 text-bg bg-tBlue rounded">{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-primary ">
      <div className="hidden md:flex flex-col justify-end">
        <img src="/src/assets/images/planta-branca-esquerda.svg" alt="" className="w-full h-auto" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center font-poppins md:gap-8">
        <div className="flex flex-col  items-center md:items-start w-full md:w-3/5 px-4 md:px-0">
          <div className="flex flex-nowrap gap-2 mb-6">
            <div className="flex gap-2 rounded-full bg-black/15 px-3 py-1">
              <img src="/src/assets/images/calender.svg" alt="" className="w-4 h-4" />
              <p className="text-bg text-sm md:text-base">5 a 7 de Dezembro</p>
            </div>
            <div className="flex items-center ring-bg ring-[0.5px] rounded-full gap-2 px-3 py-1">
              <img src="/src/assets/images/point.svg" alt="" className="w-4 h-4" />
              <p className="text-bg text-sm md:text-base">Auditório IC UFMT</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-bg">SIEGEPAN</h1>
          <p className="text-bg text-base md:text-lg lg:text-xl font-normal mt-4">
            1º Simpósio de Enfermagem:
            <br />
            Novas Formas de Cuidar em Saúde no <Button>Gestar</Button>, <Button>Parir</Button> e <Button>Nascer</Button>
          </p>
          <a
            className="text-bg bg-tPink flex items-center px-3 py-2 md:py-3 rounded-md mt-4 font-semibold gap-2"
            href="#as"
          >
            Inscrever-se <img src="/src/assets/images/arrow-branca.svg" alt="" className="w-4 h-4 md:w-6 md:h-6" />
          </a>
        </div>
        <DotLottieReact
          src="/src/assets/lotties/oYHH6fgXrF.json"
          loop
          autoplay
          className="w-60 h-60 md:w-72 md:h-72 lg:w-[550px] lg:h-[550px] mt-6 md:mt-0"
        />
      </div>
      <div className="hidden md:flex flex-col justify-start">
        <img src="/src/assets/images/Plantas-branca-direita.svg" alt="" className="w-full h-auto" />
      </div>
    </div>
  )
}

export default Hero
