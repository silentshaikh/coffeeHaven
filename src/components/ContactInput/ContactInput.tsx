import { Poppins } from '@next/font/google';
import React from 'react'
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function ContactInput({type,place}:{type:string,place:string}) {
  return (
    <>
     <input className={`cont-input ${poppins.className} w-[50vw] py-3 px-4 outline-none rounded-full max-[800px]:w-[60vw] max-[570px]:w-[70vw] max-[460px]:w-[80vw] max-[370px]:w-[90vw]`} type={type} name="" id="" placeholder={`Enter Your ${place}`}  required/> 
    </>
  )
}

export default ContactInput
