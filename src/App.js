import React, { useState } from "react";
import './App.css';
import HomeMain from "./pages/Home";
import ServicesMain from "./pages/Services";
import SolutionsMain from "./pages/Solutions";
import WhoweareMain from "./pages/WhoWeAre";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { StackedCarousel } from "react-stacked-carousel";
import "react-stacked-carousel/dist/index.css";
// import aboutus1 from './assets/home/aboutUs/aboutus-1.png';

function App() {
  // const [card, setCard] = useState(null);
  // const onCardChange = (event) => {
  //   console.log("Card", event);
  // };
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/services" element={<ServicesMain />} />
        <Route path="/solutions" element={<SolutionsMain />} />
        <Route path="/who" element={<WhoweareMain />} />
      </Routes>
    </BrowserRouter>
    //   <div className="App">
    //   <StackedCarousel
    //     autoRotate={true}
    //     onCardChange={onCardChange}
    //     containerClassName={"container"}
    //     cardClassName="card"
    //     leftButton={<button>{"<"}</button>}
    //     rightButton={<button>{">"}</button>}
    //     {...settings}
    //   >
    //     <div key={"child1"}>
    //       <img src={aboutus1} className="image"/>
    //     </div>
    //     <div key={"child2"}>
    //       <img src={aboutus1} className="image"/>
    //     </div>
    //     <div key={"child3"}>
    //       <img src={aboutus1} className="image"/>
    //     </div>
    //     <div key={"child4"}>
    //       <img src={aboutus1} className="image"/>
    //     </div>
    //     <div key={"child5"}>
    //       <img src={aboutus1} className="image"/>
    //     </div>
    //     <div key={"child6"}>
    //       <img src={aboutus1} className="image"/>
    //     </div>
    //     <div key={"child7"}>
    //       <img src={aboutus1} className="image"/>
    //     </div>
    //     <div key={"child8"}>
    //       <img src={aboutus1} className="image"/>
    //     </div>
    //   </StackedCarousel>
    // </div>
  );
}

export default App;
