import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import AboutUsContent from "@/components/AboutUsThree/AboutUsContent";
import WhyUs from "@/components/AboutUsThree/WhyUs";
import Speakers from "@/components/HomeThree/Speakersall";
import Cta from "@/components/Common/Cta";
import Partner from "@/components/Common/Partner";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";
import FunFact from "@/components/Common/FunFact";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Campus Ambassador"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Campus Ambassador"
        bgImg="/images/main-bg3.jpg"
      />

      {/* <AboutUsContent />

      <WhyUs /> */}

      <Speakers />

      {/* <Cta />

      <FunFact />

      <Partner />

      <BuyTicket />

      <Subscribe /> */}

      <Footer />
    </>
  );
}
