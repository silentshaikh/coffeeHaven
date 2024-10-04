"use client";
import React from 'react'
import FootLogo from '../FootLogo/FootLogo'
import FootCont from '../FootCont/FootCont'
import FootCopyright from '../FootCopyright/FootCopyright';

function Footer() {
  return (
    <footer className='footer py-10 px-10 '>
      <div className="foot-sec flex justify-evenly items-center max-[700px]:flex-col">
        <FootLogo/>
        <FootCont/>
      </div>
      <FootCopyright/>
    </footer>
  )
}

export default Footer
