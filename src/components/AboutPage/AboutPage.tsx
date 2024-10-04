import React from 'react'
import AboutContent from '../AboutContent/AboutContent'
import AboutImg from '../AboutImg/AboutImg'
function AboutPage() {
  return (
    <section className='bg-[#EECD96] py-16 flex justify-evenly items-center max-[640px]:flex-col'>
      <AboutContent/>
    <AboutImg/>
    
    </section>
  )
}

export default AboutPage
