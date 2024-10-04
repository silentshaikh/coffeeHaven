"use client";
import { Pacifico , Poppins} from '@next/font/google';
import SubscriptionContent from '../SubscriptionContent/SubscriptionContent';
import SubscriptForm from '../SubscriptForm/SubscriptForm';
const pacific = Pacifico({
  weight: '400', 
  subsets: ['latin'], 
  display: 'swap', 
});
function Subscription() {
  return (
    <section className='sub-image bg-[#E3CC9A] flex justify-center items-center flex-col py-10'>
      <h5 className={`${pacific.className} text-2xl pb-10`}>Subcription</h5>
        <div className="flex gap-32 max-[930px]:gap-12 max-[826px]:gap-5 max-[800px]:flex-col">
            <SubscriptionContent/>
            <SubscriptForm/>
        </div>
    </section>
  )
}

export default Subscription
