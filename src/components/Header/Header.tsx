"use client";
import React from 'react'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import {Pacifico, Teko} from "@next/font/google"
import HeadIcon from '../HeadIcon/HeadIcon';
const pacific = Pacifico({
  weight: ['400'], 
  subsets: ['latin'], 
  display: 'swap', 
});
function Header() {
  return (
    <header className={`header flex justify-evenly items-center bg-[#cc9e73] ${pacific.className} mx-auto my-4  rounded-full fixed top-0 right-0 left-0 z-10 w-full h-20 max-[420px]:pr-5 `} >
      <Logo/>
      <Navbar/>
      <HeadIcon/>
    </header>
  )
}

export default Header
