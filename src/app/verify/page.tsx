import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Partner from "@/components/Verify-form/verify-form";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Verify Certificate"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Verify Certificate"
        bgImg="/images/main-bg2.jpg"
      />

      <Partner />

      <Footer />
    </>
  );
}
