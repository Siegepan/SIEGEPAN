// SwiperSlideComponent.js
import { SwiperSlide } from "swiper/react";

const SwiperSlideComponent = ({ children }) => {
  return (
    <div className="flex flex-col w-[302px] h-[445px] items-center bg-tBlue py-4 px-4 rounded-2xl">
      <div className="  ">
        <img
          src="/src/assets/images/palestrantes/Palestras/Dia 06-12/Dan Kaio Lemos.jpg"
          alt="Convidado"
          className="w-[268px] h-[325px] rounded-lg "
        />
      </div>
      <div className="text-center mt-4">
        <h1>Convidado</h1>
        <p>Descrição do palestrante</p>
        <p>Outras informações</p>
      </div>
    </div>
  );
};

export default SwiperSlideComponent;
