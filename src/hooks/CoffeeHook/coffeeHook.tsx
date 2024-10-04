"use client";
import { CoffeeContext } from '@/Context/Context';
import  { useContext } from 'react'
function useCoffeeHook() {
  let coffeHok = useContext(CoffeeContext);
  if(!coffeHok){
    throw new Error("useCustomHook must be used within a CoffeeContext.Provider");
  };
  return coffeHok;
};
export default useCoffeeHook;