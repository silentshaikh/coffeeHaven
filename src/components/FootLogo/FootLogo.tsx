import Image from 'next/image'
import React from 'react'

function FootLogo() {
  return (
    <div>
      <Image 
      className='w-56 max-[700px]:w-44'
      src="/images/'-fotor-bg-remover-2024100164027.png"
      alt='foot-logo'
      width={224}
      height={224}
      />
    </div>
  )
}

export default FootLogo
