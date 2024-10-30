// SwiperComponent.js
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperSlideComponent from "../SwiperSlideComponent";

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[A11y, Pagination, Scrollbar]}
      spaceBetween={325}
      slidesPerView={3}
      centeredSlides={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {/* Cada SwiperSlide renderiza um SwiperSlideComponent */}
      <SwiperSlide>
        <SwiperSlideComponent />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideComponent />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideComponent />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
