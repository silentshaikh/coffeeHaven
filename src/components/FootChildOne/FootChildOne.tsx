import { linkFoot } from '@/utils/helper'
import React from 'react'
import {Pacifico,Poppins} from '@next/font/google';
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
function FootChildOne() {
  return (
    <div>
      <h5 className={`text-xl ${pacific.className} pb-2 `}>Quick Links</h5>
      <ul>
        {linkFoot.map((e,i) => {
            return <li key={i} className={`${poppins.className} max-[770px]:text-sm`}>{e}</li>
        })}
      </ul>
    </div>
  )
}

export default FootChildOne
