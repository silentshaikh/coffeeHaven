import React from 'react'

import { Pacifico} from '@next/font/google';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function ProductHero() {
  return (
    <section className={`heroproduct  ${pacific.className} `}>
     <h1 className='text-center relative top-48 text-[#E3CC9A] text-5xl'># WELCOME TO OUR PRODUCT #</h1>
    </section>
  )
}

export default ProductHero
