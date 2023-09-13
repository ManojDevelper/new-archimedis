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
    margin-bottom: 80px;
    h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 58px;
      margin: 0;
    }
    h3 {
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
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
        transition: transform .2s;
      }
      img:hover {
         transform: scale(1.1);
      }
    }

    .aboutus-bottom-img-container {
      overflow: hidden;
      img {
        width: 93.6%;
        transition: transform .2s;
      }
      img:hover {
         transform: scale(1.1);
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
      color: #ffffff;
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
      .aboutus-bottom-mob-casestudy {
        margin-top: 50px;
        background: #ffffff;
        padding: 5px 20px 8px 20px;
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
