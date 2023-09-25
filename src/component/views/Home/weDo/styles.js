import styled from "styled-components";
import {
  RF,
  MRF
} from "../../../../reusableComponents/Function/functions";

export const WeDoStyle = styled.div`
  .weDo {
    padding:${RF("50px")} ${RF("100px")} ${RF("100px")} ${RF("100px")};
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
          padding: ${RF("20px")} 0 ${RF("20px")} 0;
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
            font-size: ${RF("20px")};
            font-weight: 400;
            line-height: ${RF("28px")};
            letter-spacing: 0em;
            text-align: center;
            width: ${RF("362px")};
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
            color: #ffff;
            background: black;
            border: 1px solid #fff;
            margin: ${RF("20px")} auto auto auto;
            .btn_text {
              color: #ffff;
            }
            .back_animation {
              background: transparent;
            }
          }
          .banner-btn:hover {
            border: ${RF("1px")} solid #275cbe;
            .btn_text {
              color: #275cbe;
            }
            .back_animation {
              background: #275cbe;
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

  ${'' /* @media (max-width: 750px) {
    .weDo
  } */}
`;
