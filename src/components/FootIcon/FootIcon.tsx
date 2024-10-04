import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { LuFacebook } from 'react-icons/lu'
import { PiInstagramLogoDuotone } from 'react-icons/pi'

function FootIcon() {
  return (
    <div className='flex gap-2'>
      <PiInstagramLogoDuotone className='text-2xl text-[#E3CC9A]' />
      <FaTwitter className='text-2xl text-[#E3CC9A]' />
      <LuFacebook className='text-2xl text-[#E3CC9A]' />
    </div>
  )
}

export default FootIcon
