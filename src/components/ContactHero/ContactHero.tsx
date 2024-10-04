import { Sofadi_One ,Pacifico,Poppins} from '@next/font/google';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function ContactHero() {
  return (
    <section className='contacthero'>
      <h1 className={`text-center ${pacific.className} relative top-48 text-[#c29469] text-5xl`}># YOU HAVE ANY QUERY #</h1>
    </section>
  )
}

export default ContactHero
