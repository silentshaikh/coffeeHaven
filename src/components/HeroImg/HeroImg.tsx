import Image from 'next/image'
import React from 'react'

function HeroImg() {
  return (
    <div>
    <Image
    className='w-[550px] max-[1312px]:w-[500px]  max-[1030px]:w-[460px] max-[970px]:w-[440px] max-[940px]:w-[400px] max-[850px]:w-[380px] max-[820px]:w-[350px] max-[375px]:w-[300px]' 
      src='/images/cartoon-style-cookies-coffee_23-2150250200-fotor-bg-remover-2024100175048.png'
    alt='hero-img'
    layout='responive'
    width={550}
    height={400}
    />
    </div>
  )
}

export default HeroImg
