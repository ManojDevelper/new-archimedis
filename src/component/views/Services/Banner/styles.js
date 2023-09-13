import styled from "styled-components";
// import * as palette from "../../../../styles/variables";
import bannerBg from "../../../../../src/assets/services/banner/bannerBg.png";

export const BannerStyle = styled.div`
  .banner {
    background-image: url(${bannerBg});
    background-size: 100% 100%; 
    background-repeat: no-repeat;
    h1 {
      color: #ffffff;
      font-size: 63px;
      font-weight: 700;
      line-height: 77px;
      margin-bottom: 0px;

    }
    p {
      color: #ffffff;
      font-family: Inter;
      font-size: 20px;
      font-weight: 500;
      line-height: 34px;  
      margin-top: 10px; 
      font-family: Inter;
    }
    .banner-btn{
      padding: 16px 40px;
      height: auto;
      border-radius: 8px
      font-family: Inter;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      border: none;
      background-color: #ffffff;
      color:#275CBE;
 }
 .banner-btn:hover{
    color:#275CBE;
 }
 .banner-left{
    padding: 35px 0 168px 100px;
 }

  .banner-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #000000;
    padding: 4px 10px;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    margin-right: -2px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    z-index: 2;
  }

  .banner-links a {
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 5px 0;
  }


  .banner-links img {
    width: 24px;
    height: 24px;
  }
  }
`;
