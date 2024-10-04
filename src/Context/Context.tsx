"use client";
import { ContextChild, ContextType } from '@/utils/Type/type';
import React, { createContext, useState } from 'react'

export const CoffeeContext = createContext<ContextType|null>(null);
function Context({children}:ContextChild) {
    const [showNav,setShowNav] = useState(false);
    const [letter,setLetter] = useState<boolean>(false);
    // Nav Toggle
    const coffeeToggle = () => {
        if(showNav){
            setShowNav(false);
            console.log(showNav)
        }else{
            setShowNav(true);
            console.log(showNav)
        }
    };
    //List Toggle
    const listToggle = () => {
      setShowNav(false)
    }
    // Newsletter
    const newsLetter = () => {
    setLetter(true);
    };
    const leavebtn = () => {
      setLetter(false)
    }
  return (
    <>
      <CoffeeContext.Provider value={{showNav,coffeeToggle,letter,newsLetter,leavebtn,listToggle}}>{children}</CoffeeContext.Provider>
    </>
  )
}

export default Context;
