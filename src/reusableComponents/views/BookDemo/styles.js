import styled from "styled-components";
// import * as palette from "../../../styles/variables";
import bookDemoBg from "../../../../src/assets/reusableComponents/bookDemo/bookDemoMob.svg";
export const BookDemoStyle = styled.div`
  .book-demo-mob {
    display: none;
  }
  .book-demo {
    ${'' /* text-align: center;
    padding-bottom: 50px; */}
    margin: 90px 100px;
    position: relative;
    h1 {
      margin: 0;
      font-size: 36px;
      font-weight: 700;
      line-height: 48px;
      color: #fff;
    }
    p {
      margin: 0;
      padding: 15px 0 28px;
      color: #f2f2f2;
      font-size: 20px;
      font-weight: 450;
      line-height: 32px;
    }
    img {
      width: 73%;
      position: absolute;
      bottom: -1px;
      left: 0;
    }
    .book-demo-container {
      display: flex;
    }
    .banner-btn {
      width: 268px !important;
      margin-right: 20px;
    }
  }
  @media (max-width: 768px) {
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
    .banner-btn{
      width: 245px;
      height: 44px;
      margin-left: auto;
      margin-right: auto;
    }
    .demo-btn-container{
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
      .book-btn {
        background: #ffffff;
        color: #275cbe;
        padding: 10px 40px;
        height: auto;
        border: 2px solid #275cbe;
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 600;
        line-height: 21px;
        text-align: center;
        color: #ffffff;
        background: #275cbe;
      }
      .contact-btn {
        background: none;
        height: auto;
        border: 2px solid #ffffff;
        padding: 10px 73px;
        color: #ffffff;
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 600;
        line-height: 21px;
        text-align: center;
        margin-top: 18px;
      }
      h1 {
        font-family: IBM Plex Sans;
        font-size: 24px;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0.4px;
        color: #ffffff;
        margin: 0;
      }
      p {
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 23px;
        color: #ffffff;
        margin: 8px 0 35px;

      }
    }
  }
`;
