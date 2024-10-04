import React from 'react'
import ServiceImg from '../ServiceImg/ServiceImg'
import ServicesName from '../ServicesName/ServicesName'
import { servicesCard } from '@/utils/helper'
function ServiceCard() {
  return (
    <>
   {servicesCard.map((e,i) => {
    return (
        <div key={e.id+i} className='bg-[#ce925a] py-8  px-2 flex justify-evenly flex-col items-center rounded-3xl '>
        <ServiceImg img={e.img} name={e.name}/>
        <ServicesName name={e.name}/>
      </div>
    );
   })}
    </>
  )
}

export default ServiceCard
