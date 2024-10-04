import { addressFoot } from '@/utils/helper'
import { Pacifico,Poppins} from '@next/font/google';
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
function FootChildTwo() {
  return (
    <div>
      <h5 className={`text-xl ${pacific.className} pb-2`}>Address</h5>
      <ul>
        {addressFoot.map((e,i) => {
            return <li key={i} className={`${poppins.className} max-[770px]:text-sm`}>{e}</li>
        })}
      </ul>
    </div>
  )
}

export default FootChildTwo
