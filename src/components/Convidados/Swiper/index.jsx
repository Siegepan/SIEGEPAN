// SwiperComponent.js
import { A11y, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperSlideComponent from "../SwiperSlideComponent";

const SwiperComponent = ({ guests, swiperRef }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Configuração de autoplay com intervalo de 3 segundos
      loop={true}
      breakpoints={{
        // Configuração para telas menores (celulares)
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        602: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
        765: {
          slidesPerView: 2,
          spaceBetween: 270,
        },
        1170: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
      }}
      spaceBetween={270}
      centeredSlides={false}
      onSwiper={(swiper) => {
        if (swiperRef) swiperRef.current = swiper;
      }}
      onSlideChange={() => console.log("slide change")}
    >
      {/* Cada SwiperSlide renderiza um SwiperSlideComponent */}
      {guests.map((guest, index) => (
        <SwiperSlide
          key={index}
          style={{
            width: "fit-content",
            height: "fit-content",
          }}
        >
          <SwiperSlideComponent guestProps={guest} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
