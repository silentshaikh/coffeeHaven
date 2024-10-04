import React from 'react'
import { Pacifico , Teko} from '@next/font/google';
const pacific = Pacifico({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
const tekos = Teko({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function OfferHead() {
  return (
    <>
      <h5 className={`text-xl ${pacific.className} pb-2 max-[375px]:w-52`}>Buy 2, Get 1 Free - Espresso Beans</h5>
    </>
  )
}

export default OfferHead;