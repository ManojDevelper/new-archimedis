import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import bannerBg from "../../../../../src/assets/home/banner/bannerBg.png";

export const BannerStyle = styled.div`
  .banner-mob {
    display: none;
  }

  .banner {
    background-image: url(${bannerBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    h1 {
      color: #ffffff;
      font-size: 72px;
      font-weight: 700;
      line-height: 80px;
      margin-bottom: 0;
    }

    p {
      color: #ffffff;
      font-size: 20px;
      font-weight: 500;
      line-height: 34px;
      margin-top: 10px;
    }

    .banner-btn {
      padding: 16px 40px;
      height: auto;
      border-radius: 8px;
      font-family: "Inter";
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      border: none;
      background-color: #ffffff;
      color: #275cbe;
    }

    .banner-btn:hover {
      color: #275cbe;
    }

    .banner-left {
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

      a {
        margin-top: 10px;
        margin-bottom: 5px;
        padding: 5px 0;
      }

      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: 768px) {
    .banner {
      display: none;
    }

    .banner-mob {
      display: block;
      img {
        width: 100%;
      }
      h1 {
        font-family: IBM Plex Sans;
        font-size: 30px;
        font-weight: 700;
        line-height: 40px;
        text-align: center;
        color: #212121;
      }

      p {
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 500;
        line-height: 23px;
        text-align: center;
        color: #212121;
      }

      .banner-btn {
        padding: 10px 15px;
        height: auto;
        border-radius: 8px;
        font-family: IBM Plex Sans;
        font-size: 16px;
        font-weight: 700;
        line-height: 21px;
        text-align: center;
        border: none;
        background: #275cbe;
        color: #ffffff;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      .banner-mob-bottom{
        padding: 10px 20px 54px 20px;
      }
      
    }
  }
`;
