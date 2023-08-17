import styled from "styled-components";
import * as palette from "../../../styles/variables";

export const BookDemoStyle = styled.div`
  .book-demo {
    text-align: center;
    padding-bottom: 50px;
    h1 {
      font-size: 48px;
      font-weight: 700;
      margin: 0;
    }
    p {
      font-size: 24px;
      font-weight: 450;
      margin: 0;
      padding: 15px 0 35px;
    }
    button {
      font-size: 20px;
      font-weight: 600;
      height: auto;
      padding: 16px 40px;
      border-radius: 8px;
    }
    .book-btn{
        background: #275CBE;
        color: #ffffff;
    }
    .book-btn:hover{
        color: #ffffff;
    }
    .contact-btn{
        background: #ffffff;
        color: #222222;
        margin-left: 25px;
        border: 2px solid #275CBE;
    }
    .contact-btn:hover{
        border: 2px solid #275CBE;
        color: #222222;
    }
  }
`;
