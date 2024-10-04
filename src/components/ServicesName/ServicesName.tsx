import React from 'react'
import { Teko } from '@next/font/google';
import { SerName } from '@/utils/Type/type';
const poppins = Teko({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });

function ServicesName({name}:SerName) {
  return (
    <>
     <h3 className={`pt-5 ${poppins.className} text-xl`}>{name}</h3> 
    </>
  )
}

export default ServicesName
