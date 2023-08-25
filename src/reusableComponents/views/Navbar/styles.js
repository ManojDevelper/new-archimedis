import styled from "styled-components";
import * as palette from "../../../styles/variables";

export const NavbarStyle = styled.div`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 70px;
    border-bottom: 1px solid gray;

    .logo {
      flex: 1;
      display: flex;
      align-items: center;
      img {
        max-height: 40px;
      }
    }
    
.anticon {
    font-size: 14px;
    padding-left: 10px;
}
    .nav-items {
      display: flex;
      align-items: center;

      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          margin-right: 35px;
          display: flex;
          align-items: center;
          cursor: pointer;
          font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 19px;
letter-spacing: -0.01em;
color: #0F1629;

        }
        li:last-child {
          margin-right: 0;
        }
      }
      .contact-button {
        margin-left: 20px;
        font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 19px;
letter-spacing: -0.01em;
height: auto;
padding: 16px 40px;
border-radius: 8px;
background: #275CBE;
color: #ffffff;
margin-left: 35px;
      }
    }
  }
`;
