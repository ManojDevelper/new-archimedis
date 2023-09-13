import styled from "styled-components";
import * as palette from "../../../../styles/variables";

export const AboutUsStyle = styled.div`
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
        border: 1px solid #684AEF;
    }
    .aboutus-bottom-btn {
      background: #ffffff;
      color: #333333;
      border: 1px solid #684AEF;
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
`;
