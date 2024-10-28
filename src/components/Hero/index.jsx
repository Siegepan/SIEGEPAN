import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import PropTypes from 'prop-types'

function Button({ children }) {
  return <button className=" cursor-text px-3 py-1 text-bg bg-tBlue rounded">{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

function Hero() {
  return (
    <div className="flex justify-between bg-primary">
      <div className="flex flex-col justify-end">
        <img src="/src/assets/images/planta-branca-esquerda.svg" alt="" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center font-poppins  ">
        <div className=" items-start flex flex-col">
          <div className="flex gap-2 mb-3">
            <div className="flex gap-2  rounded-[100px]  bg-black/15 px-3 py-1  ">
              <img src="/src/assets/images/calender.svg" alt="" />
              <p className="text-bg">5 a 7 de Dezembro</p>
            </div>
            <div className="flex items-center ring-bg ring-[0.5px] rounded-[100px] gap-2 px-3 py-1">
              <img src="/src/assets/images/point.svg" className="size-4" alt="" />
              <p className="text-bg">Auditório IC UFMT</p>
            </div>
          </div>
          <h1 className=" text-[3rem] font-semibold tracking-wide text-bg">SIEGEPAN</h1>
          <p className="text-bg text-xl font-normal">
            1º Simpósio de Enfermagem:
            <br />
            Novas Formas de Cuidar em Saúde no <Button>Gestar</Button>,<br /> <Button>Parir</Button> e{' '}
            <Button>Nascer</Button>
          </p>
          <a
            className="text-bg bg-tPink flex flex-row px-3 py-3 rounded-[10px] mt-4  font-semibold gap-2 text-nowrap"
            href="#as"
          >
            Inscrever-se <img className="" src="/src/assets/images/arrow-branca.svg" alt="" />
          </a>
        </div>
        <DotLottieReact
          src="/src/assets/lotties/oDS3JIG0kc.json"
          loop
          autoplay
          className="size-[300px] md:size-[550px] h-auto"
        />
      </div>
      <div className="flex flex-col justify-start">
        <img src="/src/assets/images/Plantas-branca-direita.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero
