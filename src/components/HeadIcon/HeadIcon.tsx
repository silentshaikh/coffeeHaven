import useCoffeeHook from '@/hooks/CoffeeHook/coffeeHook'
import React from 'react'
import { GiCoffeeBeans } from 'react-icons/gi'

function HeadIcon() {
  const {coffeeToggle} = useCoffeeHook();
  return (
    <div className='hidden max-[570px]:block '>
      <GiCoffeeBeans onClick={coffeeToggle} className='text-3xl text-[#663a17] max-[570px]:text-4xl'  />
    </div>
  )
}

export default HeadIcon
