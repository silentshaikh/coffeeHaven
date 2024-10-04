import useCoffeeHook from '@/hooks/CoffeeHook/coffeeHook';
import { navList } from '@/utils/helper'
import Link from 'next/link';
function NavList() {
  const {showNav,listToggle} = useCoffeeHook();
  return (
    <ul className={`navlist flex gap-4 text-lg max-[570px]:flex-col max-[570px]:relative max-[570px]:top-40 ${showNav ? 'max-[570px]:left-[50%] ': 'max-[570px]:left-[1000px]'} max-[570px]:transition-all max-[570px]:duration-1000  max-[570px]:items-center max-[570px]:px-12 max-[570px]:py-2 max-[570px]:z-10 max-[490px]:px-10 max-[320px]:px-8`}>
      {navList.map((e) => {
        return (
            <li key={e.name} onClick={listToggle}> <Link href={e.link}>{e.name}</Link> </li>
        );
      })}
    </ul>
  )
};
export default NavList;