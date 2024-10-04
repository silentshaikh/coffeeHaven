"use client";
import { Pacifico} from '@next/font/google';
import ServiceCard from '../ServiceCard/ServiceCard';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
  
function ServicesPage() {
  return (
    <section className='bg-[#9e7045] flex justify-center items-center flex-col py-10'>

      <h2 className={`text-3xl ${pacific.className} pb-10`}>Our Services</h2>
      <div className='flex gap-14 flex-wrap max-[864px]:justify-center'>
        <ServiceCard/>
      </div>
    </section>
  )
}

export default ServicesPage
