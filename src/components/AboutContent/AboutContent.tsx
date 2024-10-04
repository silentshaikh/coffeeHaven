import {Pacifico,Poppins} from '@next/font/google';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
  const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function AboutContent() {
  return (
    <div className=''>
      <h2 className={`${pacific.className} text-4xl pb-2 max-[810px]:text-3xl`}>OUR MISSION</h2>
      <p className={`${poppins.className} w-96 py-2 max-[810px]:text-sm max-[740px]:w-80 max-[640px]:w-96 max-[400px]:w-80 max-[340px]:w-72 max-[300px]:w-64`}>Our mission is to provide the finest coffee experience by sourcing ethically grown beans and supporting local communities. We believe in sustainability, quality, and customer satisfaction.</p>
    <p className={`${poppins.className} w-96 py-2 max-[810px]:text-sm max-[740px]:w-80 max-[640px]:w-96 max-[640px]:pb-12 max-[400px]:w-80 max-[340px]:w-72 max-[300px]:w-64`}>Established in 2010, we started as a small coffee shop in the heart of the city. Over the years, we have grown into a beloved brand known for our commitment to quality and sustainability.</p>
    </div>
  )
}

export default AboutContent;