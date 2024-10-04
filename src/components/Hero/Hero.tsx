"use client";
import React from 'react'
import HeroContent from '../HeroContent/HeroContent'
import HeroImg from '../HeroImg/HeroImg'

function Hero() {
  return (
    <section className='flex justify-evenly items-center bg-[#A27850] h-[105vh] pt-32 max-[1312px]:gap-2 max-[1312px]:h-screen max-[790px]:flex-col'>
      <HeroContent/>
      <HeroImg/>
    </section>
  )
};
export default Hero;