import React, { Fragment } from "react";
import Banner from "../../component/views/Services/Banner";
import BookDemo from "../../reusableComponents/views/BookDemo";
import Footer from "../../reusableComponents/views/Footer";
import WeOperate from "../../component/views/Services/WeOperate";
import ServicesDirectory from "../../component/views/Services/ServicesDirectory";
import CaseStudies from "../../component/views/Services/CaseStudies";

const ServicesMain = () => {
  return (
    <Fragment>
      <Banner />
      <WeOperate />
      <ServicesDirectory />
      <CaseStudies />
      <BookDemo />
      <Footer />
    </Fragment>
  );
};
export default ServicesMain;
