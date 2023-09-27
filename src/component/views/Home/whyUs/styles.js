import styled from "styled-components";
// import * as palette from "../../../../styles/variables";
import { RF, MRF } from "../../../../reusableComponents/Function/functions";

export const WhyUsStyle = styled.div`
  background: #ebf6fa;
  height: ${RF("660px")};
  .casestudy_viewmore {
    font-family: Inter;
font-size: ${RF("18px")};
font-weight: 500;
line-height: ${RF("22px")};
color: #275CBE;
cursor: pointer;
@media (max-width: 650px) {
  font-size: ${MRF("13px")};
}
  }
  @media (max-width: 650px) {
    height: fit-content;
  }
  .ant-carousel .slick-dots {
    width: fit-content !important;
    bottom: -${RF("10px")};
    .slick-active {
      width: ${RF("114px")} !important;
      button {
        height: ${RF("7px")};
        border-radius: ${RF("10px")};
        background: #275cbe !important;
      }
    }

    li {
      button {
        height: ${RF("7px")};
        border-radius: ${RF("10px")};
        background: pink !important;
      }
    }
  }

  .about-us {
    display: flex !important;
    padding: ${RF("25px")} ${RF("100px")} ${RF("25px")} ${RF("100px")};

    .aboutus-bottom-casestudy {
      width: ${RF("550px")};
      height: ${RF("560px")};
      padding: 0 ${RF("25px")} ${RF("50px")} ${RF("25px")} !important;
      background-color: #fff !important;
      .about-title {
        font-size: ${RF("24px")};
        font-weight: 600;
        line-height: ${RF("29px")};
        font-family: "IBM Plex Sans";
      }
      .about-desc-title {
        font-size: ${RF("24px")};
        font-weight: 700;
        line-height: ${RF("32px")};
        font-family: "IBM Plex Sans";
      }
      .casestudy-text {
        font-size: ${RF("18px")};
        font-weight: 400;
        line-height: ${RF("28px")};
        font-family: "IBM Plex Sans";
      }
      .aboutus-bottom-img-container {
        img {
          transition: 0.35s ease-in-out;
        }
        img:hover {
          transform: scale(1.02);
        }
      }

      @media (max-width: 650px) {
        width: 88%;
        height: fit-content;
        margin: 0 auto;
        .about-side-carousal {
          padding: ${MRF("10px")} ${MRF("21px")};
        }
        .about-title {
          font-size: ${MRF("16px")};
        }
        .about-desc-title {
          font-size: ${MRF("16px")};
        }
        .casestudy-text {
          font-size: ${MRF("12px")};
          width: 85%;
          line-height: inherit;
        }
        .aboutus-bottom-img-container {
          width: fit-content;
          img {
            width: 91% !important;
          }
        }
      }
    }

    .aboutus-bottom-whyus {
      margin: auto 0;
      .aboutus-head {
        font-size: ${RF("48px")};
        font-family: "IBM Plex Sans";
        font-weight: 700;
        line-height: ${RF("40px")};
      }
      .aboutus-text {
        font-size: ${RF("19px")};
        font-family: "IBM Plex Sans";
        font-weight: 400;
        line-height: ${RF("34px")};
        width: ${RF("600px")};
      }
      .ripple_btn {
      background-color: #fff !important;
      .btnCont {
        color: black !important;
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
    }

    .aboutus-bottom-advantages-content {
      position: relative;
      max-width: ${RF("600px")};
      background-color: #ffffff;
      padding: ${RF("40px")} ${RF("20px")} ${RF("40px")} ${RF("20px")};
      text-align: center;
      border-radius: ${RF("16px")};
      h2 {
        font-size: ${RF("40px")};
        font-weight: 700;
        line-height: ${RF("48px")};
        letter-spacing: ${RF("0.4px")};
        margin: 0;
        padding: ${RF("18px")} 0;
        font-family: "IBM Plex Sans";
      }
      .adv-description {
        font-size: ${RF("19px")};
        font-weight: 400;
        line-height: ${RF("34px")};
        margin: 0;
        font-family: "IBM Plex Sans";
        padding: ${RF("18px")} ${RF("60px")} ${RF("32px")};
      }
      .adv-text {
        padding: 0 ${RF("36px")};
        font-size: ${RF("14px")};

        font-weight: bold;
        line-height: ${RF("20px")};
      }
      .close-btn {
        position: absolute;
        top: ${RF("18px")};
        right: ${RF("18px")};
        cursor: pointer;
        transition: 0.35s ease-in-out;
      }
      .close-btn:hover {
        transform: scale(1.1);
      }
      .row_img {
        margin: 0 auto;
        cursor: pointer;
        transition: 0.35s ease-in-out;
      }
      .row_img:hover {
        transform: scale(1.2);
      }
      @media (max-width: 650px) {
        .close-btn {
          right: ${MRF("36px")};
          top: ${MRF("28px")};
        }
      }
    }

    @media (max-width: 650px) {
      padding: 0 0 ${MRF("25px")} 0;
      flex-direction: column-reverse;
      .aboutus-bottom-whyus {
        padding: ${MRF("50px")} ${MRF("10px")} !important;
        text-align: center;
        .aboutus-head {
          font-size: ${MRF("24px")};
          font-weight: 700;
          line-height: ${MRF("31px")};
          letter-spacing: ${MRF("0.4px")};
          text-align: center;
        }
        .aboutus-text {
          font-size: ${MRF("16px")};
          font-weight: 400;
          line-height: ${MRF("30px")};
          text-align: center;
          width: 100%;
        }
        .ripple_btn {
          margin: auto;
          width: ${MRF("182px")};
          height: ${MRF("52px")};
          font-size: ${MRF("16px")};
          border-radius: ${MRF("8px")};
        }
      }
    }
  }

  .about-us-mob {
    @media (max-width: 650px) {
      flex-direction: column;
      .aboutus-bottom-advantages-content {
        padding: ${MRF("67px")} 0 ${MRF("16px")} 0;
        max-width: 100% !important;
        h2 {
          font-size: ${MRF("24px")};
        }
        .adv-description {
          font-size: ${MRF("16px")};
          line-height: ${MRF("26px")};
        }
        .about-mob {
          margin-top: ${MRF("50px")};
        }
        .adv-text {
          font-size: ${MRF("13px")};
          line-height: normal;
        }
      }
    }
  }
`;
