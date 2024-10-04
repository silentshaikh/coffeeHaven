import React from 'react'
import OfferHead from '../OfferHead/OfferHead'
import OfferPara from '../OfferPara/OfferPara'
import OfferButton from '../OfferButton/OfferButton'

function OfferContent() {
  return (
    <>
      <div className='h-40 relative top-28 left-7 max-[830px]:top-20 max-[710px]:top-16 max-[690px]:left-8 max-[480px]:left-1 max-[340px]:left-6'>
        <OfferHead/>
        <OfferPara/>
        <OfferButton/>
      </div>
    </>
  )
}

export default OfferContent
