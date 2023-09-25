import styled from "styled-components";
import * as palette from "../../../../styles/variables";
import {
  RF,
  MRF
} from "../../../../reusableComponents/Function/functions";

export const AboutUsStyle = styled.div`
  .about-us {
    h1 {
      font-size: ${RF("48px")};
      font-weight: 700;
      line-height: ${RF("58px")};
      margin: 0;
    }
    h3 {
      font-size: ${RF("24px")};
      font-weight: 600;
      color: #212121;
    }
    .aboutus-text {
      font-size: ${RF("18px")};
      font-weight: 400;
      line-height: ${RF("32px")};
      margin: 0;
      padding: ${RF("10px")} 0 ${RF("27px")};
    }
    .aboutus-top {
      padding:${RF("50px")} ${RF("90px")} ${RF("100px")} ${RF("100px")};
    }

    .aboutus-container-main {
      display: flex;
      align-items: center;
    }
    .aboutus-bottom {
      background-color: #ebf6fa;
      width: 100%;
    }
    
    .aboutus-bg-container {
      width: ${RF("650px")};
      height: ${RF("421px")};
      position: relative;
      margin-left: ${RF("80px")};
      background-color: #275CBE;
      .zoom_img {
        position: absolute;
        width: 100%;
        transition: transform 0.2s;
        right: ${RF("24px")};
        top: ${RF("24px")};
      }
      .zoom_img:hover {
        transform: scale(1.02);
      }
    }
  }
  }

  @media (max-width: 650px) {
    .about-us {
      padding-top: ${MRF("40px")};
      padding-bottom: ${MRF("40px")};
      .aboutus-top {
        .aboutus-container-main {
          flex-direction: column-reverse;
          .abous_card_data {
            margin-top: ${MRF("50px")};
            text-align: center;
            h1 {
              font-size: ${MRF("24px")};
            }
            .aboutus-text {
              font-size: ${MRF("16")};
        font-weight: 500;
        line-height: ${MRF("26px")};
        width: ${MRF("410px")};
        margin-top: ${MRF("17px")};
            }
            .banner-btn {
              width: ${MRF("182px")};
              height: ${MRF("52px")};
              font-size: ${MRF("16px")};
              border-radius: ${MRF("8px")};
              margin: ${MRF("17px")} auto auto auto
            }
          }
          .aboutus-bg-container {
            width: ${MRF("354px")};
            height: ${MRF("227px")};
            .zoom_img {
              width: ${MRF("354px")};
              height: ${MRF("227px")};
              right: ${MRF("15px")};
              top: ${MRF("15px")};
            }
          }
        }
      }
    }
  }
`;
