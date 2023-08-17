import React, { Fragment } from "react";
import Banner from "../../component/views/Home/Banner";
import WeDo from "../../component/views/Home/weDo";
import AboutUs from "../../component/views/Home/aboutUs";
import BookDemo from "../../reusableComponents/views/BookDemo";
import Footer from "../../reusableComponents/views/Footer";

const HomeMain = () => {
  return (
    <Fragment>
      <Banner />
      <WeDo />
      <AboutUs />
      <BookDemo />
      <Footer />
    </Fragment>
  );
};
export default HomeMain;
