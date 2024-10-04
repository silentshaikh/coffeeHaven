import React from 'react'
import SwiperTestimonial from '../SwiperTestimonial/SwiperTestimonial'
import { Pacifico } from '@next/font/google';
const pacific = Pacifico({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function AboutTestimonial() {
  return (
    <>
      <section className='bg-[#EECD96] pb-3 flex flex-col items-center max-[600px]:'>
        <h3 className={`text-3xl text-center pb-20 ${pacific.className} `}>WHAT OUR CUSTOMERS SAY</h3>
      <SwiperTestimonial/>
      </section>
    </>
  )
}

export default AboutTestimonial
