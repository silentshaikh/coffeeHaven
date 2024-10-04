import React from 'react'
import {Pacifico} from '@next/font/google';
import Image from 'next/image';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function CartProduct() {
  return (
    <>
     <section className={`${pacific.className}  py-40 flex items-center justify-center flex-col h-screen bg-[#E3CC9A] `}>
    <h1 className='text-4xl'>Not Done Yet</h1>
    <Image
    className='w-64'
    src='/images/crazy-emoji-fools-day-icon-isolated_24640-133943 (1)-fotor-bg-remover-20241003222344.png'
    alt='cart'
    width={256}
    height={256}
    />
  </section> 
    </>
  )
}

export default CartProduct
