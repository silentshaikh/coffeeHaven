import React from 'react'
import FootChildOne from '../FootChildOne/FootChildOne'
import FootChildTwo from '../FootChildTwo/FootChildTwo'
import FootChildThree from '../FootChildThree/FootChildThree'

function FootCont() {
  return (
    <div className='flex gap-14 max-[900px]:gap-8 max-[730px]:gap-5 max-[480px]:flex-col max-[480px]:pb-3'>
      <FootChildOne/>
      <FootChildTwo/>
      <FootChildThree/>
    </div>
  )
}

export default FootCont
