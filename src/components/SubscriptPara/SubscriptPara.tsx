import { Teko,Pacifico } from '@next/font/google';
import React from 'react'
const tekos = Teko({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
  const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function SubscriptPara() {
  return (
    <>
     <h6 className={`${tekos.className} text-xl pb-2`}>Join the Coffee Subscription Club</h6>
     <p className={`${pacific.className} text-lg w-[400px] pb-2 max-[420px]:w-[300px] max-[320px]:w-[250px]`}>Get fresh, premium coffee delivered to your doorstep every month. Enjoy exclusive perks, discounts, and never run out of your favorite brew!</p> 
     <p className={`${tekos.className} text-xl tracking-wide max-[310px]:w-[200px]`}>Early access to limited-edition coffee blends</p>
    </>
  )
}

export default SubscriptPara
