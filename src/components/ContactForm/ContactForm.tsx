import React from 'react'
import ContactInput from '../ContactInput/ContactInput'
import ContactTextarea from '../ContactTextarea/ContactTextarea'
import {Pacifico} from '@next/font/google';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function ContactForm() {
  return (
    <form action='' className='flex justify-center items-center flex-col'>
      <label htmlFor="" className={`${pacific.className} py-4`}>YOUR NAME</label>
      <ContactInput type='text' place='Name'/>
      <label htmlFor="" className={`${pacific.className} py-4`}>YOUR Email</label>
      <ContactInput type='email' place='Email'/>
      <label htmlFor="" className={`${pacific.className} py-4`}>YOUR NUMBER</label>
      <ContactInput type='number' place='Number'/>
      <label htmlFor="" className={`${pacific.className} py-4`}>YOUR QUERY</label>
      <ContactTextarea/>
      <button className={` ${pacific.className} mt-5 py-3 px-7 bg-[#B99471] rounded-full`}>Submit</button>
    </form>
  )
}

export default ContactForm
