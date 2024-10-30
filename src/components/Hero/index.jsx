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
    <div className="flex flex-col md:flex-row justify-between bg-primary pb-6">
      <div className="hidden md:flex flex-col justify-end">
        <img src="/src/assets/images/planta-branca-esquerda.svg" alt="" className="w-full h-auto" />
      </div>
      <div className="flex flex-col  md:flex-row items-center justify-center font-poppins ">
        <div className="flex flex-col  items-center md:items-start w-full md:w-3/5 gap-2">
          <div className="flex flex-nowrap flex-col md:flex-row order-1 md:order-none gap-1 ">
            <div className="flex gap-2 md:rounded-[100px] md:bg-black/15 px-3 py-1">
              <img src="/src/assets/images/calender.svg" alt="" className="w-4 h-4" />
              <p className="text-bg text-sm md:text-base">5 a 7 de Dezembro</p>
            </div>
            <div className="flex items-center md:ring-bg md:ring-[0.5px] rounded-full gap-2 px-3 py-1">
              <img src="/src/assets/images/point.svg" alt="" className="w-4 h-4" />
              <p className="text-bg text-sm md:text-base">Auditório IC UFMT</p>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-bg">SIEGEPAN</h1>
          <p className="text-bg text-center md:text-start text-xl md:text-2xl lg:text-3xl font-normal">
            1º Simpósio de Enfermagem:
            <br />
            Novas Formas de Cuidar em Saúde no <Button>Gestar</Button>, <Button>Parir</Button> e <Button>Nascer</Button>
          </p>
          <a
            className="text-bg bg-tPink flex items-center order-1 px-3 py-2 md:py-3 rounded-2xl  font-semibold gap-2"
            href="#as"
          >
            Inscrever-se <img src="/src/assets/images/arrow-branca.svg" alt="" className="w-4 h-4 md:w-6 md:h-6" />
          </a>
        </div>
        <DotLottieReact
          src="/src/assets/lotties/oYHH6fgXrF.json"
          loop
          autoplay
          className="w-60 h-60 md:w-72 md:h-72 lg:w-[550px] lg:h-[550px]  "
        />
      </div>
      <div className="hidden md:flex flex-col justify-start">
        <img src="/src/assets/images/Plantas-branca-direita.svg" alt="" className="w-full h-auto" />
      </div>
    </div>
  )
}

export default Hero
