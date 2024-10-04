import { Poppins } from "@next/font/google";

const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
  });
function FootCopyright() {
  return (
    <>
      <p className={`copyright ${poppins.className} text-center mt-2`}>&copy; Copyright - Coffee - All Right Reserved</p>
    </>
  )
};
export default FootCopyright;