import {Pacifico} from '@next/font/google';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function AboutHero() {
  return (
    <section className='abouthero'>
        <h1 className={`text-center ${pacific.className} relative top-48 text-[#c29469] text-5xl`}>LET &apos;S KNOW ABOUT US</h1>
    </section>
  )
}

export default AboutHero
