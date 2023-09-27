import styled from "styled-components";
import { RF, MRF } from "../../../../reusableComponents/Function/functions";
// import * as palette from "../../../../styles/variables";
// import bannerBg from "../../../../../src/assets/home/banner/bannerBg.png";

export const BannerStyle = styled.div`
  background-color: #275cbe;
  .banner-mob {
    display: none;
  }

  .banner {
    height: ${RF("577px")};
    position: relative;

    h1 {
      color: #ffffff;
      font-size: ${RF("72px")};
      font-weight: 700;
      line-height: ${RF("80px")};
      margin-bottom: 0;
      font-family: "IBM Plex Sans";
    }

    p {
      color: #ffffff;
      font-size: ${RF("20px")};
      font-weight: 400;
      line-height: ${RF("34px")};
      margin-top: ${RF("10px")};
      width: ${RF("575px")};
      font-family: "IBM Plex Sans";
    }

    .banner-left {
      padding: ${RF("35px")} 0 ${RF("168px")} ${RF("100px")};
    }

    .ripple_btn {
      width: ${RF("218px")};
      height: ${RF("56px")};
      font-size: ${RF("18px")};
      background-color: #fff !important;
      .btnCont {
        color: #275cbe !important;
        &:hover,
        &:active,
        &:focus {
          color: #fff !important;
        }
        .btn-bg {
          background-color: #275cbe !important;
        }
      }
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
      padding: ${RF("4px")} ${RF("10px")};
      position: fixed;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: auto;
      margin-right: ${RF("-2px")};
      border-top-left-radius: ${RF("12px")};
      border-bottom-left-radius: ${RF("12px")};
      z-index: 2;
    }

    .banner-links a {
      margin-top: ${RF("10px")};
      margin-bottom: ${RF("5px")};
      padding: ${RF("5px")} 0;
    }

    .banner-links img {
      width: ${RF("24px")};
      height: ${RF("24px")};
      cursor: pointer;
      transition: 0.35s ease-in-out;
    }

    .banner-links img:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width: 650px) {
    .banner {
      display: none;
    }

    .banner-mob {
      background-color: #ffffff;
      display: block;
      img {
        width: 100%;
      }
      h1 {
        font-size: ${MRF("30px")};
        font-weight: 700;
        line-height: ${MRF("40px")};
        text-align: center;
        color: #212121;
      }

      p {
        font-size: ${MRF("16px")};
        font-weight: 500;
        line-height: ${MRF("23px")};
        text-align: center;
        color: #212121;
      }
      .ripple_btn {
        margin-left: auto;
        margin-right: auto;
        width: ${MRF("182px")};
        height: ${MRF("52px")};
        font-size: ${MRF("16px")};
        border-radius: ${MRF("8px")};
        .btnCont {
          color: #275cbe !important;
        }
      }
      ${
        "" /* 
       .banner-btn {
         padding: 10px 15px;
         height: auto;
         border-radius: 8px;
         font-size: 16px;
         font-weight: 700;
         line-height: 21px;
         text-align: center;
         border: none;
         background: #275cbe;
         color: #ffffff;
         margin-left: auto;
         margin-right: auto;
         display: block;
       } */
      }
      .banner-mob-bottom {
        padding: ${MRF("10px")} ${MRF("20px")} ${MRF("54px")} ${MRF("20px")};
      }
    }
  }
`;
