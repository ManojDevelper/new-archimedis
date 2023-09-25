import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import {pixFun, MobPixFun, RF} from "../../../../reusableComponents/Function/functions";

export const WhyUsStyle = styled.div`
  background: #ebf6fa;
  height: ${RF('640px')};
  .ant-carousel .slick-dots {
    width: fit-content !important;
    bottom: -${RF('10px')};
    .slick-active {
      width: ${RF('114px')} !important;
      button {
        height: ${RF('7px')};
        border-radius: ${RF('10px')};
        background: #275cbe !important;
      }
    }

    li {
      button {
        height: ${RF('7px')};
        border-radius: ${RF('10px')};
        background: pink !important;
      }
    }
  }

  .about-us {
    display: flex !important;
    padding: ${RF('25px')} ${RF('100px')} ${RF('25px')} ${RF('100px')};

    .aboutus-bottom-casestudy {
      width: ${RF('602px')};
      height: ${RF('545px')};
      padding: 0 ${RF('25px')} ${RF('50px')} ${RF('25px')} !important;
      background-color: #fff !important;
      .about-title {
        font-size: ${RF('24px')};
        font-weight: 600;
        line-height: ${RF('29px')};
      }
      .about-desc-title {
        font-size: ${RF('24px')};
        font-weight: 700;
        line-height: ${RF('32px')};
      }
      .casestudy-text {
        font-size: ${RF('18px')};
        font-weight: 400;
        line-height: ${RF('28px')};
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
        font-size: ${RF('48px')};
        font-weight: 700;
        line-height: ${RF('40px')};
      }
      .aboutus-text {
        font-size: ${RF('19px')};
        font-weight: 400;
        line-height: ${RF('34px')};
        width: ${RF('600px')};
      }
    }

    .aboutus-bottom-advantages-content {
      position: relative;
      max-width: ${RF('600px')};
      background-color: #ffffff;
      padding: ${RF('40px')} ${RF('20px')} ${RF('40px')} ${RF('20px')};
      text-align: center;
      border-radius: ${RF('16px')};
      h2 {
        font-size: ${RF('40px')};
        font-weight: 700;
        line-height: ${RF('48px')};
        letter-spacing: ${RF('0.4px')};
        margin: 0;
        padding: ${RF('18px')} 0;
      }
      .adv-description {
        font-size: ${RF('19px')};
        font-weight: 400;
        line-height: ${RF('34px')};
        margin: 0;
        padding: ${RF('18px')} ${RF('60px')} ${RF('32px')};
      }
      .adv-text {
        padding: 0 ${RF('36px')};
        font-size: ${RF('14px')};
        font-weight: bold;
        line-height: ${RF('20px')};
      }
      .close-btn {
        position: absolute;
        top: ${RF('18px')};
        right: ${RF('18px')};
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
