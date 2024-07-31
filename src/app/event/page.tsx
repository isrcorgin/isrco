import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import EventSchedulesThree from "@/components/Schedule/EventSchedulesThree";
import EventList from "@/components/Eventlist/eventlist"
export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="EVENT"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Event"
        bgImg="/images/main-bg1.jpg"
      />

      <EventSchedulesThree />
<EventList/>
      <Footer />
    </>
  );
}
