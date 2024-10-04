"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import Testimonial from '../Testimonial/Testimonial';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <Testimonial/></SwiperSlide>
        <SwiperSlide> <Testimonial/></SwiperSlide>
        <SwiperSlide> <Testimonial/></SwiperSlide>
        <SwiperSlide> <Testimonial/></SwiperSlide>
      </Swiper>
    </>
  );
}
