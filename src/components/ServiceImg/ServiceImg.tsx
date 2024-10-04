import { SerImg } from '@/utils/Type/type'
import Image from 'next/image'
import React from 'react'

function ServiceImg({img,name}:SerImg) {
  return (
    <>
     <Image 
     className='size-28 relative transition-transform duration-1000 ease-in-out hover:transform hover:translate-y-[-70px]'
     src={`/images${img}`}
     alt={name}
     width={112}
     height={112}
     />
    </>
  )
}

export default ServiceImg
