import styled from "styled-components";
import { RF, MRF } from "../../../../reusableComponents/Function/functions";

export const WeDoStyle = styled.div`
  .weDo_mob {
    display: none;
  }
  .weDo {
    padding: ${RF("50px")} ${RF("100px")} ${RF("100px")} ${RF("100px")};
    text-align: center;
    background: #ebf6fa;
    .wedo_title {
      margin: 0;
      padding-top: ${RF("50px")};
      font-size: ${RF("48px")};
      font-weight: 700;
      line-height: ${RF("58px")};
      letter-spacing: 0.4;
    }
    .weDo-text {
      font-size: ${RF("20px")};
      font-weight: 500;
      line-height: ${RF("32px")};
      margin: 0;
      padding: ${RF("8px")} 0 ${RF("45px")};
    }

    .wedo_card_main {
      display: flex;
      gap: ${RF("20px")};
      cursor: pointer;
      .wedo_card {
        width: 100%;
        position: relative;
        overflow: hidden;
        transition: 0.35s ease-in-out;
        img {
          width: 100%;
        }
        .wedo_card_hover {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 5;
          top: 65%;
          padding: ${RF("25px")} 0 ${RF("20px")} 0;
          background-color: rgb(0 0 0 / 44%);
          backdrop-filter: blur(5px);
          color: #fff;
          transition: 0.7s ease-in-out;
          h1 {
            font-family: IBM Plex Sans;
            font-size: ${RF("24px")};
            font-weight: 600;
            line-height: ${RF("32px")};
            letter-spacing: 0em;
            text-align: center;
            position: relative;
            width: fit-content;
            margin: auto;
            &::after {
              content: " ";
              bottom: ${RF("-10px")};
              width: ${RF("60px")};
              height: ${RF("4px")};
              color: #f2d25c;
              background: #f2d25c;
              position: absolute;
              margin: auto;
              left: 22%;
              transition: 1s ease-in-out;
            }
          }
          p {
            font-family: IBM Plex Sans;
            font-size: ${RF("21px")};
            font-weight: 400;
            line-height: ${RF("35px")};
            letter-spacing: 0em;
            text-align: center;
            width: ${RF("380px")};
            margin: ${RF("25px")} auto auto auto;
          }
          .wedo_desc2 {
            display: none;
          }
          .banner-btn {
            display: none;
            width: ${RF("140px")};
            height: ${RF("40px")};
            font-size: ${RF("16px")};
            border-radius: ${RF("4px")};
            margin: ${RF("35px")} auto auto auto;
            .back_animation {
              background-color: black;
          backdrop-filter: blur(5px);
            }
          }
        }
      }
      .wedo_card:hover {
        .wedo_card_hover {
          top: 0;
          h1 {
            &::after {
              width: 100%;
              left: 0;
            }
          }
          .wedo_desc1 {
            display: none;
          }
          .wedo_desc2 {
            display: inherit;
          }
          .banner-btn {
            display: flex;
          }
        }
      }
    }
  }

  @media (max-width: 650px) {
    .weDo {
      display: none;
    }
    .weDo_mob {
      display: block;
      padding: ${MRF("50px")} ${MRF("30px")} ${MRF("50px")} ${MRF("30px")};
      text-align: center;
      background: #ebf6fa;
      .wedo_title {
        margin: 0;
        font-size: ${MRF("24px")};
        font-weight: 700;
        letter-spacing: 0.4;
      }
      .weDo-text {
        font-size: ${MRF("16")};
        font-weight: 500;
        line-height: ${MRF("26px")};
        margin: ${MRF("13px")} auto 0 auto;
        width: ${MRF("334px")};
      }
      .wedo_card_main {
        display: block;
        .wedo_card {
          .wedo_card_hover {
            padding: 40px 0 40px 0;
            h1 {
              font-size: 20px;
              &::after {
                content: " ";
                bottom: ${MRF("-24px")};
                width: ${MRF("46px")};
                height: ${MRF("5px")};
                left: 28%;
              }
            }
            p {
              font-size: ${MRF("16px")};
              width: ${MRF("316px")};
              line-height: ${MRF("22px")};
              margin: ${MRF("44px")} auto auto auto;
            }
            .banner-btn {
              width: ${MRF("130px")};
              height: ${MRF("43px")};
              font-size: ${MRF("14px")};
              border-radius: ${MRF("6px")};
              margin: ${MRF("17px")} auto auto auto;
            }
          }
        }
      }
    }
  }
`;
