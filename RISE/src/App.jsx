import Hero from "@/components/Hero";
import WhyWithUs from './imports/WhyWithUs'
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import FooterNewsletter from "@/components/FooterNewsletter";

export default function App() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <WhyWithUs />
      <Services />
      <Faq />
      <FooterNewsletter />
    </div>
  );
}
