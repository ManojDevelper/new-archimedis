import React, { Fragment } from "react";
import Banner from "../../component/views/Home/Banner";
import WeDo from "../../component/views/Home/weDo";
import AboutUs from "../../component/views/Home/aboutUs";
import BookDemo from "../../reusableComponents/views/BookDemo";
import Footer from "../../reusableComponents/views/Footer";
import Navbar from "../../reusableComponents/views/Navbar";

const HomeMain = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <WeDo />
      <AboutUs />
      <BookDemo />
      <Footer />
    </Fragment>
  );
};
export default HomeMain;
