import styled from "styled-components";
import * as palette from "../../../../styles/variables";

export const pixFun = (num) => num / 14.5;
export const MobPixFun = (num) => num / 4.8;

export const WhyUsStyle = styled.div`
  background: #ebf6fa;
  .ant-carousel .slick-dots {
    width: fit-content !important;
    bottom: -${pixFun(10)}vw;
    .slick-active {
      width: ${pixFun(114)}vw !important;
      button {
        height: ${pixFun(7)}vw;
        border-radius: ${pixFun(10)}vw;
        background: #275cbe !important;
      }
    }

    li {
      button {
        height: ${pixFun(7)}vw;
        border-radius: ${pixFun(10)}vw;
        background: pink !important;
      }
    }

    @media (max-width: 850px) {
      left: 4%;
      bottom: 5px;
      li {
        button {
          height: 6px !important;
        }
      }
      .slick-active {
        width: 70px !important;
      }
    }
  }

  .about-us {
    display: flex !important;
    padding: ${pixFun(25)}vw ${pixFun(25)}vw ${pixFun(25)}vw ${pixFun(30)}vw;

    .aboutus-bottom-casestudy {
      width: ${pixFun(550)}vw;
      padding: 0 ${pixFun(25)}vw ${pixFun(50)}vw ${pixFun(25)}vw !important;
      background-color: #fff !important;
      .about-title {
        font-size: ${pixFun(24)}vw;
        font-weight: 600;
        line-height: ${pixFun(29)}vw;
      }
      .about-desc-title {
        font-size: ${pixFun(24)}vw;
        font-weight: 700;
        line-height: ${pixFun(32)}vw;
      }
      .casestudy-text {
        font-size: ${pixFun(18)}vw;
        font-weight: 400;
        line-height: ${pixFun(28)}vw;
      }
      .aboutus-bottom-img-container {
        img {
          transition: 0.35s ease-in-out;
        }
        img:hover {
          transform: scale(1.02);
        }
      }

      @media (max-width: 850px) {
        width: 88%;
        margin: 0 auto;
        .about-side-carousal {
          padding: 10px 21px;
        }
        .about-title {
          font-size: 16px;
        }
        .about-desc-title {
          font-size: 16px;
        }
        .casestudy-text {
          font-size: 12px;
          width: 85%;
          line-height: inherit;
        }
        .aboutus-bottom-img-container {
          width: fit-content;
          img {
            width: 87% !important;
          }
        }
      }
    }

    .aboutus-bottom-whyus {
      margin: auto 0;
      .aboutus-head {
        font-size: ${pixFun(48)}vw;
        font-weight: 700;
        line-height: ${pixFun(40)}vw;
      }
      .aboutus-text {
        font-size: ${pixFun(19)}vw;
        font-weight: 400;
        line-height: ${pixFun(34)}vw;
        width: ${pixFun(600)}vw;
      }
    }

    .aboutus-bottom-advantages-content {
      position: relative;
      max-width: ${pixFun(600)}vw;
      background-color: #ffffff;
      padding: ${pixFun(40)}vw ${pixFun(20)}vw ${pixFun(40)}vw ${pixFun(20)}vw;
      text-align: center;
      border-radius: ${pixFun(16)}vw;
      h2 {
        font-size: ${pixFun(40)}vw;
        font-weight: 700;
        line-height: ${pixFun(48)}vw;
        letter-spacing: ${pixFun(0.4)}vw;
        margin: 0;
        padding: ${pixFun(18)}vw 0;
      }
      .adv-description {
        font-size: ${pixFun(19)}vw;
        font-weight: 400;
        line-height: ${pixFun(34)}vw;
        margin: 0;
        padding: ${pixFun(18)}vw ${pixFun(60)}vw ${pixFun(32)}vw;
      }
      .adv-text {
        padding: 0 ${pixFun(36)}vw;
        font-size: ${pixFun(14)}vw;
        font-weight: bold;
        line-height: ${pixFun(20)}vw;
      }
      .close-btn {
        position: absolute;
        top: ${pixFun(18)}vw;
        right: ${pixFun(18)}vw;
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
      @media (max-width: 850px) {
        .close-btn {
          right: 36px;
          top: 28px;
        }
      }
    }

    @media (max-width: 850px) {
      padding: 0 0 25px 0;
      flex-direction: column-reverse;
      .aboutus-bottom-whyus {
        padding: 50px 10px !important;
        text-align: center;
        .aboutus-head {
          font-size: 24px;
          font-weight: 700;
          line-height: 31px;
          letter-spacing: 0.4px;
          text-align: center;
        }
        .aboutus-text {
          font-size: 16px;
          font-weight: 400;
          line-height: 30px;
          text-align: center;
          width: 100%;
        }

        .banner-btn {
          width: 182px;
          height: 52px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }

  .about-us-mob {
    @media (max-width: 850px) {
      flex-direction: column;
      .aboutus-bottom-advantages-content {
        padding: 67px 0 16px 0;
        max-width: 100% !important;
        h2 {
          font-size: 24px;
        }
        .adv-description {
          font-size: 16px;
          line-height: 26px;
        }
        .about-mob {
          margin-top: 50px;
        }
        .adv-text {
          font-size: 13px;
          line-height: normal;
        }
      }
    }
  }
`;
