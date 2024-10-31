// SwiperComponent.js
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperSlideComponent from "../SwiperSlideComponent";

const SwiperComponent = ({ guests, swiperRef }) => {
  return (
    <Swiper
      modules={[A11y, Pagination, Scrollbar]}
      spaceBetween={310}
      slidesPerView={3}
      centeredSlides={false}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => {
        if (swiperRef) swiperRef.current = swiper;
      }}
      onSlideChange={() => console.log("slide change")}
    >
      {/* Cada SwiperSlide renderiza um SwiperSlideComponent */}

      {guests.map((guest, index) => (
        <SwiperSlide key={index}>
          <SwiperSlideComponent guestProps={guest} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
