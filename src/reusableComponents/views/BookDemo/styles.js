import styled from "styled-components";
// import * as palette from "../../../styles/variables";
import bookDemoBg from "../../../../src/assets/reusableComponents/bookDemo/bookDemoMob.svg";
import bookDemoImg from "../../../../src/assets/reusableComponents/bookDemo/bookDemoImg2.png";
import {
  RF,
  MRF
} from "../../../reusableComponents/Function/functions";

export const BookDemoStyle = styled.div`
  .book-demo-mob {
    display: none;
  }
  .book-demo {
    background-color: #02060C;
    position: relative;
    h1 {
      margin: 0;
      font-size: ${RF("36px")};
      font-weight: 700;
      line-height: ${RF("48px")};
      color: #fff;
    }
    p {
      margin: 0;
      padding: ${RF("15px")} 0 ${RF("28px")};
      color: #f2f2f2;
      font-size: ${RF("20px")};
      font-weight: 450;
      line-height: ${RF("32px")};
    }
    .bookdemo-img-container {
      background-image: url(${bookDemoImg});
      background-size: cover;
      background-repeat: no-repeat;
      width: 100%;
      height: ${RF("400px")};
    }
    img {
      width: 73%;
      position: absolute;
      bottom: ${RF("-1px")};
      left: 0;
    }
    .book-demo-container {
      display: flex;
      justify-content: center;
    }
    .bg-blue-border {
      background-color: white !important;
    }
    .bg-trans-border-white-txt .back_animation {
      background-color: black !important;
    }

    .bg-trans-border-white-txt {
      background-color: white !important;
    }
    .banner-btn {
      width: ${RF("268px")} !important;
      margin-right: ${RF("20px")};
    }
    .book-demo-right {
      text-align: center;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
  @media (max-width: 650px) {
    .book-demo {
      display: none;
    }
    .book-demo-mob {
      display: block;
      background-image: url(${bookDemoBg});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .bg-trans-border-white-txt .back_animation {
        background-color: transparent !important;
      }

      .bg-trans-border-white-txt {
        background-color: transparent !important;
      }
      .demo-btn-container {
        display: flex;
        flex-direction: column;
        gap: ${MRF("15px")};
      }
      .book-btn {
        background: #ffffff;
        color: #275cbe;
        padding: ${MRF("10px")} ${MRF("40px")};
        height: auto;
        border: ${MRF("2px")} solid #275cbe;
        font-family: IBM Plex Sans;
        font-size: ${MRF("16px")};
        font-weight: 600;
        line-height: ${MRF("21px")};
        text-align: center;
        color: #ffffff;
        background: #275cbe;
      }
      .contact-btn {
        background: none;
        height: auto;
        border: ${MRF("2px")} solid #ffffff;
        padding: ${MRF("10px")} ${MRF("73px")};
        color: #ffffff;
        font-family: IBM Plex Sans;
        font-size: ${MRF("16px")};
        font-weight: 600;
        line-height: ${MRF("21px")};
        text-align: center;
        margin-top: ${MRF("18px")};
      }
      h1 {
        font-family: IBM Plex Sans;
        font-size: ${MRF("24px")};
        font-weight: 700;
        line-height: ${MRF("31px")};
        letter-spacing: ${MRF("0.4px")};
        color: #ffffff;
        margin: 0;
      }
      p {
        font-family: IBM Plex Sans;
        font-size: ${MRF("16px")};
        font-weight: 400;
        line-height: ${MRF("23px")};
        color: #ffffff;
        margin: ${MRF("8px")} 0 ${MRF("35px")};
      }
      .banner-btn {
        margin-left: auto;
        margin-right: auto;
        width: ${MRF("245px")};
        height: ${MRF("54px")};
        font-size: ${MRF("16px")};
        border-radius: ${MRF("8px")};
      }
    }
  }
`;
