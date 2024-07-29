import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import PricingTable from "@/components/Pricing/PricingTable";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle="Pricing"
        shortText="Get Your Tickets"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
        bgImg="/images/main-bg4.jpg"
      />

      <PricingTable />
 
      <Footer />
    </>
  );
}
