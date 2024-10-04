"use client";
import React from 'react'
import {Pacifico,Poppins} from '@next/font/google';
import { productList } from '@/utils/helper';
import ProductButton from '../ProductButton/ProductButton';
import Image from 'next/image';
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
function ProductCard() {
  return (
    <>
  {productList.map((e) => {
    return (
      <div key={e.name} className='product flex justify-evenly gap-3 flex-col items-center w-[250px] mb-24'>
      <Image
      className={`${e.size ? "size-44": ' size-60 '}  relative bottom-20`}
      src={`/images/${e.img}`}
      alt="product"
      width={240}
      height={240}
      />
      <div className="relative bottom-16">
      <h2 className={`${pacific.className} text-2xl pb-3`}>{e.name}</h2>
      <h3 className={`${poppins.className} pb-3`}>{e.price}</h3>
     
     <ProductButton  button={e.button}/>

      </div>
    </div>
    );
  })}
    </>
  )
}

export default ProductCard
