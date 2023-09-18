import styled from "styled-components";
// import * as palette from "../../../styles/variables";
// import footerBg from "../../../assets/reusableComponents/footer/footer-bg.png";
// import * as palette from "../../../styles/variables";
// import footerBg from "../../../assets/reusableComponents/footer/footer-bg.png";

export const FooterStyle = styled.div`
  .footer {
    // margin-top: 30px;
    padding: 30px 100px 65px;
    ${
      "" /* // background-size: 100% 100%;
    // background-repeat: no-repeat; */
    }
    background: #142E5F;
    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 29px;
      color: #ffffff;
    }
    p {
      margin: 0;
    }
    .video-cover-row{
      display: flex;
      align-items: center;
      padding-top: 35px;
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
    .home-row{
      padding-left: 70px;
    }
    ul li {
      list-style-type: none;
      font-size: 15px;
      font-weight: 400;
      line-height: 32px;
      opacity: 80%;
      color: #ffffff;
      cursor: pointer;
      transition: 0.35s ease-in-out;
    }
    ul li:hover {
      text-decoration: underline;
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
      opacity: 80%;
    }
    .footer-copyright {
      opacity: 80%;
      text-align: center;
      img {
        width: 20px;
        height: 20px;
        transition: 0.35s ease-in-out;
      }
      img:hover {
        transform: scale(1.2);
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
      .whatwedo-content{
        margin-top: 75px;
      }
      .whyus-content{
        margin-top: 75px;
      }
    }
  }
  @media (max-width: 768px) {
  .footer {
    margin-top: 0px;
    padding: 0px 17px 40px;
    .ant-col-8 {
      width: 100% !important;
      max-width: 100% !important;
      flex: 0 0 100% !important;
    }
    h2{
      font-family: IBM Plex Sans;
line-height: 31px;
    }
    .footer-description{
      font-family: IBM Plex Sans;
    }
    .video-cover-container {
      padding-top: 3px;
  }
  .video-cover-row{
    padding-top: 25px;
  }
  .home-row{
      margin-top: 10px;
      max-width: 50% !important;
      flex: 0 0 50% !important;
      padding-left: 0px;
  }
  .whoweare-row{
      max-width: 50% !important;
      flex: 0 0 50% !important;
      margin-top: 10px;
  }
  ul li {
    font-family: IBM Plex Sans;
  }
  h3{
    font-family: IBM Plex Sans;
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 5px;
  }
  ul{
    margin: 0;
  }
  .whatwedo-content{
    margin-top: 40px;
  }
  .whyus-content{
    margin-top: 73px;
  }
  .contact-row{
    max-width: 100% !important;
    flex: 0 0 100% !important;
    margin-top: 14px;
  }
  .footer-copyright div{
    display: flex;
gap: 30px;
margin: 32px auto 21px;
justify-content: center; 
align-items: center;
  }
  .footer-copyright p{
  padding: 0 37px;
  }
  }
`;
