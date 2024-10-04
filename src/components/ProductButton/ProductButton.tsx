
import { Poppins } from '@next/font/google';
import Link from 'next/link';
import { CiShoppingCart } from 'react-icons/ci';
const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function ProductButton({button}:{button:string}) {
  return (
    <>
    <Link href='/cart'>
       <div className="flip-container">
  <div className="flip-inner">
    <div className="flip-front">
      <button
        className={`${poppins.className} px-4 py-2 ring-4 ring-[#ffe3b3] rounded-full w-28 mb-2  transition-transform duration-500 transform-gpu`}
        >
        {button} 
      </button>
    </div>
    <div className="flip-back">
      <button
        className={`${poppins.className} px-4 py-2 ring-2 ring-[#E8C790] rounded-full w-28 mb-2 bg-[#E8C790] text-white transition-transform duration-500 transform-gpu`}
        >
        <CiShoppingCart className='text-3xl relative left-6'/>
      </button>
    </div>
  </div>
</div>
        </Link>
    </>
  )
};
export default ProductButton;