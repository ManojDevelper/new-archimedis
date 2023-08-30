import styled from "styled-components";
// import * as palette from "../../../../styles/variables";

export const MeetTeamStyle = styled.div`
  .meet-team {
    h1{
font-size: 48px;
font-weight: 700;
line-height: 58px;
letter-spacing: 0.4px;
text-align: center;
margin: 0;
padding: 30px 0 7px;
    }
    h2{
font-size: 29px;
font-weight: 700;
line-height: 36px;
letter-spacing: 0.39px;
margin: 0;
padding: 35px 0 23px;
    }
    .leadership-list{
        background: #F0F2FE;
        margin-left: 90px;
        padding-right: 76px;
        padding-left: 25px;
        padding-bottom: 42px;
        .ant-card-body{
          background: #F0F2FE;
        }
        .ant-card-meta-title{
font-size: 17px;
font-weight: 600;
line-height: 20px;
text-align: center;
color: #1C2336

        }
        .ant-card-meta-description{
font-size: 13px;
font-weight: 500;
line-height: 16px;
text-align: center;
color: #1C2336;

        }
    }
    .leadership-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .team-list{
      margin-top: 50px;
      .ant-card-body{
        display: none;
      }
    }
    .transform-lives{
      margin-top: 25px;
      margin-bottom: -20px;
      background: linear-gradient(328.66deg, rgba(65, 157, 241, 0.1) 33.24%, rgba(45, 143, 234, 0) 75.53%),
radial-gradient(50% 50% at 50% 50%, rgba(186, 38, 255, 0.02) 0%, rgba(162, 89, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(29.56% 59.96% at 50% 50%, rgba(213, 189, 245, 0.3) 0%, rgba(250, 247, 254, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

 
h3{
color: #351A5F;
font-family: Manrope;
font-size: 40px;
font-weight: 800;
line-height: 72px;
margin: 0;
padding: 13px 0 18px;
    }
    p{
font-size: 18px;
font-weight: 400;
line-height: 32px;
margin: 0;
    }
    }
    .transform-lives-grid{
      background: #ffffff;
      padding: 20px;
  
      img{
        width: 100%;
      }
    }

    
    
 
  }
  `;
