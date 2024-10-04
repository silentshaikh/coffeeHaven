import { Poppins } from '@next/font/google';
import React from 'react'
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function ContactTextarea() {
  return (
    <>
     <textarea className={`textrea ${poppins.className} w-[40vw] rounded-lg p-4 resize-none max-[800px]:w-[50vw]  max-[570px]:w-[60vw] max-[460px]:w-[70vw] max-[370px]:w-[80vw]`} name="" id="" rows={9} placeholder='Enter Your Query'></textarea> 
    </>
  )
};
export default ContactTextarea;