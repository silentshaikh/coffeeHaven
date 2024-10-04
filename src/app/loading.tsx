
import {Pacifico} from '@next/font/google';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function Loading() {
  return (

<section className={`${pacific.className} z-50 flex items-center justify-center flex-col h-screen  bg-[#E3CC9A] opacity-75`}>
   
    <img className='loading' src="/images/hand-drawn-paper-coffee-cup_23-2147748270-fotor-bg-remover-20241001111627.png" alt="loading" />
    <h1 className="text-4xl ">Loading...</h1>
  </section>
  )
}

export default Loading
