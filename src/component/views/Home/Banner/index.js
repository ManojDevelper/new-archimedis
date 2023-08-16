import React from "react";
import { BannerStyle } from "./styles";

const Banner = () => {
  return (
    <BannerStyle>
      <div className="title">
        <h1>Title</h1>
        <p>Desc</p>
        <button className="button">Click Me</button>
      </div>
    </BannerStyle>
  );
};
export default Banner;
