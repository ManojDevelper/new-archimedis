import styled from "styled-components";
import { RF } from "../../Function/functions";

export const CariousalStyle = styled.div`
  .container {
    width: fit-content;
    height: fit-content;
    background-color: #fff;

    .card-stack {
      width: ${RF("560px")};
      height: ${RF("421px")};
      position: absolute;
      margin: ${RF("20px")} auto;

      .buttons {
        display: none;
        position: absolute;
        background: rgba(0, 0, 0, 0.46);
        border: ${RF("2px")} solid rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        width: ${RF("35px")};
        height: ${RF("35px")};
        left: 0;
        top: 55%;
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
        line-height: ${RF("35px")};
        text-decoration: none;
        font-size: ${RF("22px")};
        z-index: 100;
        outline: none;
        transition: all 0.2s ease;
        &:hover {
          transform: scale(1.3, 1.3);
        }
      }

      .card-list {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        li {
          transition: all 100ms ease-in-out;
          border-radius: ${RF("2px")};
          position: absolute;
          list-style: none;
          height: ${RF("300px")};
          -webkit-box-shadow: 0 ${RF("2px")} ${RF("15px")} ${RF("1px")} rgba(225, 225, 225, 0.5);
          box-shadow: 0 ${RF("1px")} ${RF("4px")} ${RF("1px")} rgba(0, 0, 0, 0.5);
          left: 0;
          right: 0;
          margin: 0 auto;
          text-align: center;
          background-size: cover;
          img {
            width: 100%;
            heiight: 100%;
          }
          &:nth-child(6) {
            top: ${RF("24px")};
            z-index: 1;
            width: 50%;
          }
          &:nth-child(5) {
            top: ${RF("36px")};
            z-index: 2;
            width: 60%;
          }
          &:nth-child(4) {
            top: ${RF("48px")};
            z-index: 3;
            width: 70%;
          }
          &:nth-child(3) {
            top: ${RF("45px")};
            z-index: 4;
            width: 80%;
          }
          &:nth-child(2) {
            top: ${RF("65px")};
            z-index: 5;
            width: 90%;
          }
          &:nth-child(1) {
            top: ${RF("87px")};
            z-index: 6;
            width: 100%;
          }
        }
      }

      &:hover {
        .buttons.prev {
          display: block;
          animation: bounceInLeft 200ms;
        }

        .buttons.next {
          display: block;
          animation: bounceInRight 200ms;
        }
      }
    }
  }

  .transformThis {
    animation: scaleDown 300ms;
    transition: 0.5s ease-in-out;
  }

  .transformPrev {
    animation: scaleUp 310ms;
    transition: 0.5s ease-in-out;
  }

  @keyframes scaleUp {
    0% {
      transform: scale(1.02) translateY(${RF("50px")});
      opacity: 0;
    }
    20% {
      transform: scale(1.01) translateY(${RF("40px")});
      opacity: 0.1;
    }
    40% {
      transform: scale(1.01) translateY(${RF("30px")});
      opacity: 0.2;
    }
    60% {
      transform: scale(1.05) translateY(${RF("20px")});
      opacity: 0.4;
    }
    80% {
      transform: scale(1.01) translateY(${RF("10px")});
      opacity: 0.8;
    }
    100% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
  }

  @keyframes scaleDown {
    0% {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    20% {
      transform: scale(1.01) translateY(${RF("20px")});
      opacity: 0.8;
    }
    40% {
      transform: scale(1.05) translateY(${RF("40px")});
      opacity: 0.4;
    }
    60% {
      transform: scale(1.1) translateY(${RF("60px")});
      opacity: 0.2;
    }
    80% {
      transform: scale(1.15) translateY(${RF("80px")});
      opacity: 0.1;
    }
    100% {
      transform: scale(1.16) translateY(${RF("100px")});
      opacity: 0;
    }
  }

  @keyframes scaleCard {
    0% {
      top: ${RF("5px")};
    }
    100% {
      top: ${RF("24px")};
    }
  }

  @keyframes bounceInLeft {
    0% {
      opacity: 0;
      transform: translateX(${RF("40px")});
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes bounceInRight {
    0% {
      opacity: 0;
      transform: translateX(${RF("-40px")});
    }
    100% {
      transform: translateX(0);
    }
  }
`;
