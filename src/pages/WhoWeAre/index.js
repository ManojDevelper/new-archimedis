import React, { Fragment } from "react";
import BookDemo from "../../reusableComponents/views/BookDemo";
import Footer from "../../reusableComponents/views/Footer";
import Banner from "../../component/views/WhoWeAre/Banner";
import CaseStudies from "../../component/views/WhoWeAre/CaseStudies";
import AboutUs from "../../component/views/WhoWeAre/AboutUs";
// import AboutCard from "../../component/views/WhoWeAre/AboutUs/card";
import MeetTeam from "../../component/views/WhoWeAre/MeetTeam";
// import OurValues from "../../component/views/WhoWeAre/AboutUs/ourValues";
import Navbar from "../../reusableComponents/views/Navbar";

const WhoweareMain = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <AboutUs />
      {/* <AboutCard />
      <OurValues /> */}
      <MeetTeam />
      <CaseStudies />
      <BookDemo />
      <Footer />
    </Fragment>
  );
};
export default WhoweareMain;
