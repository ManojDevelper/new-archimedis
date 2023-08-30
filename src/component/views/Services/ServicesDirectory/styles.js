import styled from "styled-components";
// import * as palette from "../../../../styles/variables";

export const ServicesDirectoryStyle = styled.div`
  .services-directory {
    padding: 65px;
    ul li {
      list-style-type: none;
    }
    p{
font-size: 22px;
font-weight: 500;
line-height: 31px;
text-align: center;
color: #ffffff;

    }
    .directory-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 0;
    }
    .directory-list li {
      padding: 15px 12px 15px 12px;
      border-radius: 8px;
      background: #f0f2fe;
      font-family: Roboto;
      font-size: 24px;
      font-weight: 400;
      line-height: 34px;
      text-align: center;
      cursor: pointer;
    }
    .directory-uses li{
font-size: 22px;
font-weight: 500;
line-height: 31px;
color: #ffffff;
display: flex;
align-items: center;
}
.directory-uses{
display: flex;
flex-direction: column;
gap: 25px;
}
.directory-uses img{
    padding-right: 10px;
}

    }
    .active{
        color: #ffffff
    }
    .inactive{
        display: none;
    }
    .directory-list li:focus{
        color : #FFFFFF;
        font-weight: 500;
        background: #275CBE;
        width: 97%;
    } 
    .btn-bg{
        color : #FFFFFF;
        font-weight: 500 !important;
        background: #275CBE !important;
        width: 97%; 
    }
    h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 0.4px;
      text-align: center;
      margin: 0;
      padding-bottom: 25px;
    }
  }
`;
