// SwiperSlideComponent.js
import { SwiperSlide } from "swiper/react";

const SwiperSlideComponent = ({ guestProps }) => {
  return (
    <div className="flex flex-col w-[302px] min-h-[445px] h-[520px] items-center bg-[#51ACD910] py-4 px-4 rounded-2xl">
      <div className="  ">
        <img
          src={guestProps.image}
          alt="Convidado"
          className="w-[268px] h-[325px] bg-cover object-cover resize-none rounded-lg "
        />
      </div>
      <div className="text-center mt-4 flex flex-col items-start justify-center w-full h-full">
        <h1 className="text-start font-semibold text-lg">{guestProps.name}</h1>
        <p className="text-start font-light text-xs mb-1">{guestProps.role}</p>
        <p className="text-start font-light text-xs">
          {guestProps.type} {guestProps.title}
        </p>
      </div>
    </div>
  );
};

export default SwiperSlideComponent;
