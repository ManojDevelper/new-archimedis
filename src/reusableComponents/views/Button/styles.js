import styled from "styled-components";
// import * as palette from "../../../styles/variables";
import {
  pixFun,
  MobPixFun,
  RF,
} from "../../../reusableComponents/Function/functions";

export const ButtonStyle = styled.div`
  .banner-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${RF("218px")};
    height: ${RF("56px")};
    overflow: hidden !important;
    cursor: pointer;
    font-family: Inter;
    font-size: ${RF("18px")};
    font-weight: 700;
    line-height: ${RF("22px")};
    border-radius: ${RF("8px")};
    border: ${RF("1px")} solid #fff;
    background-color: transparent;
    .btn_text {
      color: #275cbe;
      z-index: 1;
      font-family: 'IBM Plex Sans';
    }
    .back_animation {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: white;
      z-index: 1;
      transition: 0.35s ease-in-out;
    }
  }

  .banner-btn:hover {
    .btn_text {
      color: #ffff;
    }
    .back_animation {
      left: 100%;
    }
  }

  ${"" /* bg-trans (Trans background) */}
  .bg-trans {
    background-color: #fff;
    .btn_text {
      color: #fff;
    }
    .back_animation {
      background-color: black;
    }
  }

  .bg-trans:hover {
    border-color: #275cbe;
    .btn_text {
      color: #275cbe;
    }
  }

  ${"" /* bg-blue (background blue, Hover border white) */}
  .bg-blue {
    border: ${RF("1px")} solid #275cbe;
    .btn_text {
      color: #fff;
    }
    .back_animation {
      background-color: #275cbe;
    }
  }

  .bg-blue:hover {
    border-color: #fff;
    .btn_text {
      color: #fff;
    }
  }

  ${"" /* bg-blue-border (background blue, Hover border blue) */}
  .bg-blue-border {
    border: ${RF("1px")} solid #275cbe;
    .btn_text {
      color: #fff;
    }
    .back_animation {
      background-color: #275cbe;
    }
  }

  .bg-blue-border:hover {
    border-color: #275cbe;
    .btn_text {
      color: #275cbe;
    }
  }

  ${
    "" /* bg-blue-border-black-txt (background white, border blue, Hover border white) */
  }
  .bg-blue-border-black-txt {
    border: ${RF("1px")} solid #275cbe;
    .btn_text {
      color: #333333;
    }
    .back_animation {
      background-color: #fff;
    }
  }

  .bg-blue-border-black-txt:hover {
    border-color: #275cbe;
    .btn_text {
      color: #275cbe;
    }
  }

  ${"" /* bg-trans-border-white-txt (Trans background) */}
  .bg-trans-border-white-txt {
    background-color: #fff;
    .btn_text {
      color: #fff;
    }
    .back_animation {
      background-color: #275cbe;
    }
  }

  .bg-trans-border-white-txt:hover {
    border-color: #fff;
    .btn_text {
      color: #275cbe;
    }
  }
`;
