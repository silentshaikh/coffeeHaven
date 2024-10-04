import { Sofadi_One ,Pacifico,Poppins} from '@next/font/google';
import FootIcon from '../FootIcon/FootIcon';
const pacific = Pacifico({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function FootChildThree() {
  return (
    <div>
      <h5 className={`text-xl ${pacific.className} pb-2`}>Media</h5>
      <FootIcon/>
    </div>
  )
}

export default FootChildThree
