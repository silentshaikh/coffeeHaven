"use client";
import React from 'react'
import OfferContent from '../OfferContent/OfferContent'
import OfferImg from '../OfferImg/OfferImg'
import { Pacifico , Poppins} from '@next/font/google';
const pacific = Pacifico({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
const poppins = Poppins({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function Offer() {
  return (
    <section className='bg-[#a3805f] flex justify-center flex-col items-center py-10 '>
      <h4 className={`${pacific.className} text-2xl pb-10`}>Limited-Time Coffee Offers!</h4>
      <div className={`${poppins.className} flex gap-2 item-center bg-[#A27850] rounded-3xl px-12 ring-4 ring-inset ring-[#E3CC9A] max-[830px]:pb-5 max-[690px]:flex-col  max-[470px]:px-5 max-[375px]:px-3 max-[340px]:px-0`}>
        <OfferContent/>
        <OfferImg/>
      </div>
    </section>
  )
}

export default Offer
