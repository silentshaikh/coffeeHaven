import { Teko } from '@next/font/google';
import React from 'react'
const tekos = Teko({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function OfferPara() {
  return (
    <>
     <p className={`${tekos.className} text-xl max-[790px]:text-lg max-[410px]:w-80 max-[375px]:w-60 max-[340px]:w-48`}>Enjoy a free bag of espresso beans when you buy two. Offer ends in :</p>
     <p className={`${tekos.className} text-xl pb-2 max-[410px]:text-lg max-[340px]:w-48`}>Don’t Miss Out on These Amazing Coffee Deals!</p> 
    </>
  )
}

export default OfferPara
