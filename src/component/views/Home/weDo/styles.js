import styled from "styled-components";
import * as palette from "../../../../styles/variables";

export const WeDoStyle = styled.div`
  .weDo {
    text-align: center;
    background: linear-gradient(328.66deg, rgba(65, 157, 241, 0.1) 33.24%, rgba(45, 143, 234, 0) 75.53%),
    radial-gradient(50% 50% at 50% 50%, rgba(186, 38, 255, 0.02) 0%, rgba(162, 89, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(29.56% 59.96% at 50% 50%, rgba(213, 189, 245, 0.3) 0%, rgba(250, 247, 254, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    padding-bottom: 78px;
    h1 {
      margin: 0;
      padding-top: 50px;
      font-size: 48px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 0.4;
    }
    .weDo-text {
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
      margin: 0;
      padding: 8px 0 45px;
    }
    div{
        text-align: center;
    }
    .ant-card-hoverable {
      overflow: hidden;
    }
    .wedo-meta-data{
      top: 57%;
      bottom: 0;
      left: 0;
      width: 100%;
      color: white;
      position: absolute;
      padding: 25px 0 10px 0;
      color: #ffffff !important;
      transition: 0.35s ease-in-out;
      background-color: rgba(0, 0, 0, 0.7);
      .ant-card-meta-title {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        width: fit-content;
        margin: auto;

      }
      .ant-card-meta-title:: after {
        position: absolute;
        content: '';
        width: 60px;
        height: 4px;
        background: #F2D25C;
        color: #F2D25C;
        bottom: 0;
        transition: 0.35s ease-in-out;
      }
      .banner-btn {
        width: 140px;
        height: 40px;
        margin: 10px auto auto auto;
        .btn_text {
          font-size: 12px;
        }
      }
    }
    .ant-card-body{
      padding: 0;
    }
    
    .ant-card-hoverable:hover {
      .wedo-meta-data{
        top: 0;
       }
       .ant-card-meta-title:: after {
        width: 100%;
       }
    }
    .ant-row{
      margin-left: auto !important;
      margin-right: auto !important;
      width: 78%;
  }
     .ant-card-meta-title{
        color: #ffffff;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
 
  }
     .ant-card-meta-description{
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        color: #ffffff;    
        padding: 9px 5px;
  }
    }
  }
`;
