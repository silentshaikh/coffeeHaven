import React from 'react'

import { Pacifico,Poppins} from '@next/font/google';
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
function HeroContent() {
  return (
    <div>
      <h1 className={`${pacific.className} text-4xl max-[1312px]:text-3xl max-[940px]:text-2xl max-[390px]:text-xl max-[330px]:w-[250px]`}>Awaken Your Senses with Every Sip</h1>

      <p className={`${poppins.className} w-[400px] pt-7 max-[980px]:text-sm max-[420px]:w-[350px] max-[375px]:w-[320px] max-[350px]:w-[300px] max-[320px]:w-[280px] max-[300px]:w-[240px]`}>Discover the rich flavors of freshly brewed coffee, sourced from the finest beans across the globe. Whether you need a morning pick-me-up or an afternoon delight, we have the perfect brew for you.</p>
      <p className={`${poppins.className} pt-2 pb-3 max-[980px]:text-sm`}>Crafted with love, delivered with care.</p>
      <button className={`bg-[#cc9e73] ${pacific.className} px-5 py-3 rounded-full hover:bg-[#c29367] max-[940px]:text-sm max-[820px]:py-2`}>Join the Coffee Club</button>
    </div>
  )
}

export default HeroContent;