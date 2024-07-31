import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import ContactForm from "@/components/ContactUs/ContactForm";
import Footer from "@/components/Layouts/Footer";
import About from "@/components/AboutUs/AboutUsContent"
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
        <About/>

      <ContactForm />

      <Footer />
    </>
  );
}
