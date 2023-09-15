import styled from "styled-components";
import * as palette from "../../../../styles/variables";

export const AboutUsStyle = styled.div`
  .aboutus-top-mob {
    display: none;
  }
  .aboutus-bottom-mob {
    display: none;
  }
  .about-us {
    // margin-bottom: 80px;
    h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 58px;
      margin: 0;
    }
    h3 {
      font-size: 24px;
      font-weight: 600;
      color: #212121;
    }
    .aboutus-text {
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;
      margin: 0;
      padding: 10px 0 27px;
    }
    .aboutus-top {
      padding: 35px 40px 80px 65px;
    }
    .aboutus-bottom {
      background-color: #ebf6fa;
      margin-top: 20px;
    }
    .aboutus-bg-container-img {
      margin-left: 35px;
    }
    .aboutus-bg-container {
      position: relative;
      img {
        width: 93.6%;
      }
    }
    .aboutus-main-container {
      position: absolute;
      top: 30px;
      overflow: hidden;
      img {
        width: 93.6%;
        transition: transform 0.2s;
      }
      img:hover {
        transform: scale(1.1);
      }
    }

    .aboutus-bottom-img-container {
      overflow: hidden;
      img {
        width: 93.6%;
        transition: transform 0.2s;
      }
      img:hover {
        transform: scale(1.1);
      }
    }
    .aboutus-bottom-advantages-content {
      position: relative;
      background-color: #ffffff;
      padding: 40px 40px 8px;
      text-align: center;
      border-radius: 16px;
      margin-right: 86px;
      h2 {
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 0.4px;
        margin: 0;
        padding: 18px 0;
      }
      .adv-description {
        font-size: 19px;
        font-weight: 400;
        line-height: 34px;
        margin: 0;
        padding: 18px 60px 32px;
        margin-top: 8px;
      }
      .adv-text {
        padding: 0 36px;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
      .close-btn{
        position: absolute;
        top: 18px;
        right: 18px;
        cursor: pointer;
      }
    }

    button {
      height: auto;
      padding: 16px 40px;
      border-radius: 8px;
      font-family: Inter;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
    }
    .aboutus-top-btn:hover {
      color: #ffffff !important;
      background: #275cbe;
    }
    .aboutus-bottom-btn:hover {
      background: #ffffff;
      color: #333333;
      border: 1px solid #684aef;
    }
    .aboutus-bottom-btn {
      background: #ffffff;
      color: #333333;
      border: 1.5px solid #684aef;
    }
    .aboutus-top-btn {
      background: #275cbe;
      color: #ffffff;
    }
    .casestudy-text {
      font-size: 18px;
      font-weight: 400;
      margin-top: 10px;
      color: #212121;
    }
    .aboutus-bottom-casestudy {
      padding: 25px 0 25px 67px;
    }
    .aboutus-bottom-advantage {
      padding-right: 88px;
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
      margin-top: 50px;
      display: block;
      padding: 0 10px;
      h1 {
        font-family: IBM Plex Sans;
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0.4px;
        text-align: center;
        color: #0f1629;
      }
      .banner-btn {
        width: 182px;
        height: 52px;
        margin-left: auto;
        margin-right: auto;
      }
      .aboutus-bg-container-img {
        margin-left: 15px;
      }
      .aboutus-text {
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        text-align: center;
        padding: 10px 0 20px;
      }
      button {
        height: auto;
        padding: 10px 15px;
        border-radius: 8px;
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
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
        top: 16px !important;
      }
      .aboutus-top-mob-content {
        margin-top: 37px;
        padding: 0 10px;
      }
    }
    .aboutus-bottom-mob {
      background: #ebf6fa;
      display: block;
      padding: 50px 18px 40px;
      margin-top: 50px;
      h1 {
        font-family: IBM Plex Sans;
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0.4px;
        text-align: center;
        color: #0f1629;
      }
      .banner-btn {
        width: 182px;
        height: 52px;
        margin-left: auto;
        margin-right: auto;
      }
      .aboutus-text {
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        text-align: center;
        padding: 10px 0 20px;
      }
      .aboutus-bottom-btn {
        padding: 10px 15px;
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      .aboutus-bottom-advantages-content{
        border-radius: 8px;
        padding: 40px 21px 8px;
        margin-top: 50px;
        .ant-col-8{
      display: block;
      flex: 0 0 100%;
      max-width: 100%;
      margin-top: 22px;
      }
      .ant-col-12{
        display: block;
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 22px;
        }
        .adv-text{
          padding: 0;
        }
      .adv-description {
          font-size: 16px;
          line-height: 28px;
          margin: 0;
          margin-top: 0px;
          padding: 0 0 10px;
      }
     h2 {
        font-size: 24px;
        line-height: 32px;
        padding: 0px 0 10px;
    }
    .close-btn {
      top: 12px;
      right: 12px;
      width: 29px;
  }
    }
      .aboutus-bottom-mob-casestudy {
        margin-top: 50px;
        background: #ffffff;
        padding: 5px 20px 8px 20px;
        margin-bottom: 40px;
        h3 {
          font-family: IBM Plex Sans;
          font-size: 16px;
          font-weight: 600;
          line-height: 21px;
          color: #212121;
          margin: 4px 0 7px;
        }
        .casestudy-text {
          font-family: IBM Plex Sans;
          font-size: 12px;
          font-weight: 400;
          line-height: 16px;
          color: #424242;
        }
      }
    }
  }
`;
