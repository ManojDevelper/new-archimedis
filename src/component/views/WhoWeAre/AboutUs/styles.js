import styled from "styled-components";
import * as palette from "../../../../styles/variables";

export const AboutUsStyle = styled.div`
  .about-us {
    background: linear-gradient(
        328.66deg,
        rgba(65, 157, 241, 0.1) 33.24%,
        rgba(45, 143, 234, 0) 75.53%
      ),
      radial-gradient(
          50% 50% at 50% 50%,
          rgba(186, 38, 255, 0.02) 0%,
          rgba(162, 89, 255, 0) 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
      radial-gradient(
          29.56% 59.96% at 50% 50%,
          rgba(213, 189, 245, 0.3) 0%,
          rgba(250, 247, 254, 0) 100%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

    padding: 35px 40px 80px 90px;
  
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
      padding: 10px 0 18px;
    }
    .aboutus-bg-container {
      position: relative;
      img {
        width: 75.2%;
      }
    }
    .aboutus-main-container {
      position: absolute;
      top: 25px;
      img {
        width: 89%;
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
    .aboutus-btn:hover {
      color: #ffffff !important;
      background: #275cbe;
    }
    .aboutus-btn {
      background: #275cbe;
      color: #ffffff;
    }
  }
`;

export const AboutCardStyle = styled.div`
  .about-card {
    .ant-col{
      background: #275CBE;
      padding: 48px 48px 89px 48px;
      border-radius: 16px;
    }
 
    h3{
font-size: 35px;
font-weight: 700;
line-height: 46px;
color: #ffffff;
margin:0;
padding: 18px 0 25px;
    }
    p{
font-size: 24px;
font-weight: 400;
line-height: 41px;
color: #ffffff;
opacity: 90%;
margin:0;
    }

  }
  `;

export const OurValuesStyle = styled.div`
  .our-values {
    ul li{
      list-style-type: none;
      display: flex;
      align-items: center;
font-size: 28px;
font-weight: 500;
line-height: 37px;
color: #0F1629;
gap:15px;
    }
    h3{
    
font-size: 40px;
font-weight: 700;
line-height: 53px;
    }
    ul{
      display: flex;
      flex-direction:column;
      gap: 20px;
      padding: 0;
    }
  }
`;
