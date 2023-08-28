import styled from "styled-components";
// import * as palette from "../../../../styles/variables";

export const LifeScienceStyle = styled.div`
  .life-science {
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
    padding: 70px 0px;
    h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 58px;
      margin: 0;
    }
    .life-science-content {
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      margin: 0;
      padding-top: 20px;
    }
    .video-cover-head {
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      margin: 0;
    }
    .video-cover-content {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
    }
  }
`;
