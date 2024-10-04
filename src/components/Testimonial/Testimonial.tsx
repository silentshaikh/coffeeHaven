import { Pacifico, Poppins } from '@next/font/google';
import Image from 'next/image';
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

function Testimonial(){
  return (
    <div className="testimonial p-5 flex flex-col items-center">
      <Image 
      className="rounded-full object-cover w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mb-4"
      src="/images/download.jpeg"
      alt='customer'
      width={144}
      height={144}
      />
      <h4 className={`${pacific.className} text-lg sm:text-xl lg:text-2xl py-2 text-center`}>
        Chris Evan
      </h4>
      <p className={`${poppins.className} text-sm sm:text-base lg:text-lg text-center max-w-xs sm:max-w-sm lg:max-w-md`}>
        Your satisfaction is our top priority, and we’re always here to ensure that each sip brings you warmth, joy, and the rich flavors you love.
      </p>
    </div>
  );
}

export default Testimonial;
