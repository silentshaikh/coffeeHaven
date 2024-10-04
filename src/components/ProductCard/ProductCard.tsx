"use client";
import React from 'react'
import { Sofadi_One ,Pacifico,Poppins} from '@next/font/google';
import { productList } from '@/utils/helper';
import useCoffeeHook from '@/hooks/CoffeeHook/coffeeHook';
import { CiShoppingCart } from 'react-icons/ci';
import ProductButton from '../ProductButton/ProductButton';
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
  const {shopBtn,productId} = useCoffeeHook();
  return (
    <>
  {productList.map((e) => {
    return (
      <div key={e.name} className='product flex justify-evenly gap-3 flex-col items-center w-[250px] mb-24'>
      <img className={`${e.size ? "size-44": ' size-60 '}  relative bottom-20`} src={`/images/${e.img}`} alt="product" />
      <div className="relative bottom-16">
      <h2 className={`${pacific.className} text-2xl pb-3`}>{e.name}</h2>
      <h3 className={`${poppins.className} pb-3`}>{e.price}</h3>
      {/* +<button onMouseEnter={() => shopBtn(e.name)} onMouseLeave={() => shopBtn("")}  className={`${poppins.className} ${productId === e.name ? "bg-[#B99471] rotate-y-180 " : ""} text-center w-28 h-10 px-4  py-1 ring-2 ring-black rounded-full mb-2 transition-all duration-1000 rotate-y-0`}>{e.button}</button> */}
     <ProductButton name={e.name} button={e.button}/>

      </div>
    </div>
    );
  })}
    </>
  )
}

export default ProductCard
