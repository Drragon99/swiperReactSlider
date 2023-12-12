import React from "react";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Импортируйте стили Swiper

import "./SwiperSlider.css";

import slide from "../../assets/images/slide.jpg";

const SwiperSlider = () => {
  return (
    <div className="slider__wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        //scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={slide} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
