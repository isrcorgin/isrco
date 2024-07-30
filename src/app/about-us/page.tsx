import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import ContactForm from "@/components/ContactUs/ContactForm";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImg="/images/main-bg4.jpg"
      />

      <ContactForm />

      <Footer />
    </>
  );
}
