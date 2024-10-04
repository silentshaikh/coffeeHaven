import { SerImg } from '@/utils/Type/type'
import React from 'react'

function ServiceImg({img,name}:SerImg) {
  return (
    <>
     <img className='size-28 relative transition-transform duration-1000 ease-in-out hover:transform hover:translate-y-[-70px]' src={`/images${img}`} alt={name} /> 
    </>
  )
}

export default ServiceImg
