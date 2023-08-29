import styled from "styled-components";
import * as palette from "../../../styles/variables";

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
    button {
      height: auto;
      border-radius: 8px;
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
    }
    .book-btn {
      background: #ffffff;
      color: #275cbe;
      padding: 16px 40px;
      height: auto;
      border: 2px solid #ffffff;
    }
    .book-btn:hover {
      color: #275cbe;
      border: 2px solid #ffffff;
    }
    .contact-btn {
      background: none;
      margin-left: 25px;
      border: 2px solid #ffffff;
      padding: 16px 74px;
      font-family: Inter;
      color: #ffffff;
    }
    .contact-btn:hover {
      border: 2px solid #ffffff;
      color: #ffffff;
    }
  }
`;
