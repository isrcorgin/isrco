import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeDefault/MainBanner";
import AboutUsContent from "@/components/HomeDefault/AboutUsContent";

import Speakers1 from "@/components/HomeThree/Speakers";




import Partner from "@/components/Common/Partner";

import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";

// import Footers from "@/components/Topic/Competition";
export default function Home() {
  return (
    <>
 
      <Navbar />

      <MainBanner />

      <AboutUsContent />

      {/* <WhyUs /> */}
     
      <Speakers1 />
      

      {/* <EventSchedules /> */}

      {/* <FunFact />

      <Pricing /> */}

      <Partner />

      {/* <LatestNews /> */}

      <BuyTicket />

      <Subscribe />
      {/* <Footers/> */}
      <Footer />
    </>
  );
}
