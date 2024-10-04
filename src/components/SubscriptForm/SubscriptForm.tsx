import useCoffeeHook from '@/hooks/CoffeeHook/coffeeHook';
import { Pacifico , Poppins} from '@next/font/google';
import { FaBell } from 'react-icons/fa';
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
function SubscriptForm() {
  const {letter,newsLetter,leavebtn} = useCoffeeHook();
  return (
    <form action='' className={`flex item-start flex-col ${poppins.className}`}>
      <label htmlFor="" className={`${pacific.className} pb-4`}>Our Newsletter</label>
      <input type="text" name="" id="" className='w-[360px] px-3 py-3 rounded-full outline-none text-sm max-[390px]:w-[320px] max-[350px]:w-[300px] max-[320px]:w-[260px]' required placeholder='Enter Your Email '/>
      <button onMouseEnter={newsLetter} onMouseLeave={leavebtn} className='mt-4  bg-[#a3805f] w-[130px] rounded-full px-4 py-2 ring-2 ring-black hover:bg-[#b99471] max-[320px]:w-[110px]'>{letter ? <FaBell className='text-2xl relative left-10 transition-transform  hover:scale-125 text-white' /> : 'Subscribe'}</button>
    </form>
  )
};
export default SubscriptForm;