import React, { Fragment } from "react";
import BookDemo from "../../reusableComponents/views/BookDemo";
import Footer from "../../reusableComponents/views/Footer";
import Banner from "../../component/views/Solutions/Banner";
import LifeScience from "../../component/views/Solutions/LifeScience";
import SolutionsDirectory from "../../component/views/Solutions/SolutionsDirectory";
import CaseStudies from "../../component/views/Solutions/CaseStudies";

const SolutionsMain = () => {
  return (
    <Fragment>
      <Banner />
      <LifeScience />
      <SolutionsDirectory />
      <CaseStudies />
      <BookDemo />
      <Footer />
    </Fragment>
  );
};
export default SolutionsMain;
