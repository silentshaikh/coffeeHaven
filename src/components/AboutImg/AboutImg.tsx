import Image from 'next/image'
import React from 'react'

function AboutImg() {
  return (
    <div>
      <Image
      className='size-96 bg-transparent max-[810px]:size-80 max-[670px]:size-72 max-[640px]:w-96'
      src='/images/3d-rendering-coffee-time-still-life_23-2151473202-fotor-bg-remover-2024100221310.png'
      alt='about-us'
      width={384}
      height={384}
      />
    </div>
  )
}

export default AboutImg
