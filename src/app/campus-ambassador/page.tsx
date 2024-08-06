import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Speakers from "@/components/HomeThree/Speakersall";
import Partner from "@/components/Common/Partner";
import BuyTicket from "@/components/Common/BuyTicket";
import Subscribe from "@/components/Common/Subscribe";
import Footer from "@/components/Layouts/Footer";


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
