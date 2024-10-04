import React from 'react'
import { Pacifico } from '@next/font/google';
const pacific = Pacifico({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function OfferButton() {
  return (
    <>
     <button className={`${pacific.className} bg-[#E3CC9A] py-2 px-3 max-[790px]:py-1`}>Shop Now</button> 
    </>
  )
}

export default OfferButton
