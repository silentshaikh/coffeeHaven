import Hero from "@/components/Hero/Hero";
import ServicesPage from "@/components/ServicesPage/ServicesPage";
import Offer from "@/components/Offer/Offer";
import Subscription from "@/components/Subscription/Subscription";
export default function Home() {
  return (
    <main>
      <Hero/>
      <ServicesPage/>
      <Offer/>
      <Subscription/>
      
    </main>
  );
}