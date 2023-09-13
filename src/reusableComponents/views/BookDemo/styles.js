import styled from "styled-components";
// import * as palette from "../../../styles/variables";

export const BookDemoStyle = styled.div`
  .book-demo {
    // text-align: center;
    // padding-bottom: 50px;
    margin: 90px 100px;
    position: relative;
    h1 {
      margin: 0;
      font-size: 36px;
      font-weight: 700;
      line-height: 48px;
      color: #fff;
    }
    p {
      margin: 0;
      padding: 15px 0 28px;
      color: #f2f2f2;
      font-size: 20px;
      font-weight: 450;
      line-height: 32px;
    }
    img {
      width: 73%;
      position: absolute;
      bottom: -1px;
      left: 0;
    }
    .book-demo-container {
      display: flex;
    }
    .banner-btn {
      width: 268px !important;
      margin-right: 20px;
    }
  }
`;
