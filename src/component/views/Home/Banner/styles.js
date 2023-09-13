import styled from "styled-components";
// import * as palette from "../../../../styles/variables";
// import bannerBg from "../../../../../src/assets/home/banner/bannerBg.png";

export const BannerStyle = styled.div`
  .banner-mob {
    display: none;
  }

  background-color: #275cbe;
  .banner {
    ${"" /* background-image: url(${bannerBg}); */}
    position: relative;

    h1 {
      color: #ffffff;
      font-size: 72px;
      font-weight: 700;
      line-height: 80px;
      margin-bottom: 0;
    }

    p {
      color: #ffffff;
      font-size: 20px;
      font-weight: 500;
      line-height: 34px;
      margin-top: 10px;
    }

    .banner-left {
      padding: 35px 0 168px 100px;
    }

    .bannerImg {
      top: 0;
      right: 0;
      height: 100%;
      position: absolute;
    }

    .banner-links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #000000;
      padding: 4px 10px;
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: auto;
      margin-right: -2px;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }

    .banner-links a {
      margin-top: 10px;
      margin-bottom: 5px;
      padding: 5px 0;
    }

    .banner-links img {
      width: 24px;
      height: 24px;
    }
  }
`;
