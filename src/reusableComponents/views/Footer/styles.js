import styled from "styled-components";
import * as palette from "../../../styles/variables";
import footerBg from "../../../assets/reusableComponents/footer/footer-bg.png";

export const FooterStyle = styled.div`
  .footer {
    margin-top: 30px;
    padding: 30px 100px 65px;
    background-image: url(${footerBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      color: #ffffff;
    }
    p {
      margin: 0;
    }
    .video-cover-content {
      font-size: 16px;
      font-weight: 350;
      color: #ffffff;
      line-height: 24px;
      letter-spacing: 0px;
    }
    .video-cover-date {
      font-size: 10px;
      font-weight: 400;
      color: #ffffff;
      opacity: 60%;
      line-height: 10px;
      letter-spacing: 0.4px;
      padding-top: 10px;
    }
    .video-cover-container {
      padding-top: 45px;
    }
    .footer-description {
      font-size: 15px;
      font-weight: 400;
      line-height: 32px;
      color: #ffffff;
      opacity: 80%;
    }
    ul li {
      list-style-type: none;
      font-size: 15px;
      font-weight: 400;
      line-height: 32px;
      opacity: 80%;
      color: #ffffff;
    }
    ul {
      padding: 0;
    }
    h3 {
      font-size: 19px;
      font-weight: 600;
      line-height: 23px;
      margin-bottom: 5px;
      color: #ffffff;
    }
    .footer-copyright {
      opacity: 80%;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
      }
      div {
        display: flex;
        gap: 30px;
        margin: 85px auto 30px;
        width: 20%;
      }
      p {
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.06em;
        color: #ffffff;
        
      }
    }
  }
`;
