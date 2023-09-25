import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import {
  pixFun,
  MobPixFun,
  RF,
} from "../../../../reusableComponents/Function/functions";

export const AboutUsStyle = styled.div`
  .aboutus-top-mob {
    display: none;
  }
  .aboutus-bottom-mob {
    display: none;
  }
  .about-us {
    ${'' /* margin-bottom: 80px")}; */}
    h1 {
      font-size: ${RF("48px")};
      font-weight: 700;
      line-height: ${RF("58px")};
      margin: 0;
    }
    h3 {
      font-size: ${RF("24px")};
      font-weight: 600;
      color: #212121;
    }
    .aboutus-text {
      font-size: ${RF("18px")};
      font-weight: 400;
      line-height: ${RF("32px")};
      margin: 0;
      padding: ${RF("10px")} 0 ${RF("27px")};
    }
    .aboutus-top {
      padding:${RF("50px")} ${RF("90px")} ${RF("100px")} ${RF("100px")};
    }
    .aboutus-bottom {
      background-color: #ebf6fa;
      width: 100%;
    }
    
    .aboutus-bg-container {
      width: ${RF("650px")};
      height: ${RF("421px")};
      position: relative;
      margin-left: ${RF("80px")};
      background-color: #275CBE;
      .zoom_img {
        position: absolute;
        width: 100%;
        transition: transform 0.2s;
        right: ${RF("24px")};
        top: ${RF("24px")};
      }
      .zoom_img:hover {
        transform: scale(1.02);
      }
    }
  }
  @media (max-width: 768px) {
    .about-us {
      margin-bottom: 0;
    }
    .aboutus-top {
      display: none;
    }
    .aboutus-bottom {
      display: none;
    }

    .aboutus-top-mob {
      margin-top: ${RF("50px")};
      display: block;
      padding: 0 ${RF("10px")} ${RF("40px")} ${RF("10px")};
      h1 {
        font-family: IBM Plex Sans;
        font-size: ${RF("24px")};
        font-weight: 700;
        line-height: ${RF("31px")};
        letter-spacing: ${RF("0.4px")};
        text-align: center;
        color: #0f1629;
      }
      .banner-btn {
        width: ${RF("182px")};
        height: ${RF("52px")};
        margin-left: auto;
        margin-right: auto;
      }
      .aboutus-bg-container-img {
        margin-left: ${RF("15px")};
      }
      .aboutus-text {
        font-family: IBM Plex Sans;
        font-size: ${RF("16px")};
        font-weight: 400;
        line-height: ${RF("30px")};
        text-align: center;
        padding: ${RF("10px")} 0 ${RF("20px")};
      }
      button {
        height: auto;
        padding: ${RF("10px")} ${RF("15px")};
        border-radius: ${RF("8px")};
        font-family: IBM Plex Sans;
        font-size: ${RF("16px")};
        font-weight: 700;
        line-height: ${RF("21px")};
        letter-spacing: 0em;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      .aboutus-main-container img {
        width: 96%;
      }
      .aboutus-bg-container img {
        width: 96%;
      }
      .aboutus-main-container {
        position: absolute !important;
        top: ${RF("16px")} !important;
      }
      .aboutus-top-mob-content {
        margin-top: ${RF("37px")};
        padding: 0 ${RF("10px")};
      }
    }
    .aboutus-bottom-mob {
      background: #ebf6fa;
      display: block;
      padding: ${RF("50px")} ${RF("18px")} ${RF("40px")};
      margin-top: ${RF("50px")};
      h1 {
        font-family: IBM Plex Sans;
        font-size: ${RF("24px")};
        font-weight: 700;
        line-height: ${RF("31px")};
        letter-spacing: ${RF("0.4px")};
        text-align: center;
        color: #0f1629;
      }
      .banner-btn {
        width: ${RF("182px")};
        height: ${RF("52px")};
        margin-left: auto;
        margin-right: auto;
      }
      .aboutus-text {
        font-family: IBM Plex Sans;
        font-size: ${RF("16px")};
        font-weight: 400;
        line-height: ${RF("30px")};
        text-align: center;
        padding: ${RF("10px")} 0 ${RF("20px")};
      }
      .aboutus-bottom-btn {
        padding: ${RF("10px")} ${RF("15px")};
        font-family: IBM Plex Sans;
        font-size: ${RF("16px")};
        font-weight: 500;
        line-height: ${RF("21px")};
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      .aboutus-bottom-advantages-content{
        border-radius: ${RF("8px")};
        padding: ${RF("40px")} ${RF("21px")} ${RF("8px")};
        margin-top: ${RF("50px")};
        .ant-col-8{
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
      margin-top: ${RF("22px")};
      }
      .ant-col-12{
        display: block;
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: ${RF("22px")};
        }
        .adv-text{
          padding: 0;
        }
      .adv-description {
          font-size: ${RF("16px")};
          line-height: ${RF("28px")};
          margin: 0;
          margin-top: ${RF("0px")};
          padding: 0 0 ${RF("10px")};
      }
     h2 {
        font-size: ${RF("24px")};
        line-height: ${RF("32px")};
        padding: 0px 0 ${RF("10px")};
    }
    .close-btn {
      top: ${RF("12px")};
      right: ${RF("12px")};
      width: ${RF("29px")};
  }
    }
      .aboutus-bottom-mob-casestudy {
        margin-top: ${RF("50px")};
        background: #ffffff;
        padding: ${RF("5px")} ${RF("20px")} ${RF("8px")} ${RF("20px")};
        margin-bottom: ${RF("40px")};
        h3 {
          font-family: IBM Plex Sans;
          font-size: ${RF("16px")};
          font-weight: 600;
          line-height: ${RF("21px")};
          color: #212121;
          margin: ${RF("4px")} 0 ${RF("7px")};
        }
        .casestudy-text {
          font-family: IBM Plex Sans;
          font-size: ${RF("12px")};
          font-weight: 400;
          line-height: ${RF("16px")};
          color: #424242;
        }
      }
    }
  }
`;
