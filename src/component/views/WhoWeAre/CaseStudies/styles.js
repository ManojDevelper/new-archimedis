import styled from "styled-components";
import * as palette from "../../../../styles/variables";

export const CaseStudiesStyle = styled.div`
  .case-studies {
    padding: 28px 0;
    background: #f0f2fe;
    margin-bottom: 60px;
    margin-top: 20px;
    h1 {
      font-size: 20px;
      font-weight: 700;
      line-height: 10px;
    }
    .case-bg-container {
      position: relative;
      img {
        width: 93.6%;
      }
    }
    .case-main-container {
      position: absolute;
      // top: 30px;
      img {
        width: 93.6%;
      }
    }
    .case-meta-data {
      position: absolute;
      bottom: -1px;
      left: -1px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 38px 1px;
    }
    .case-ant-card .ant-card-body {
      padding: 0;
    }
    .case-ant-card .ant-card-meta-title {
      color: #ffffff !important;
      font-size: 32px;
      font-weight: 600;
      line-height: 52px;
      text-align: center;
      white-space: unset;
    }
    .video-cover-content {
      font-size: 18px;
      font-weight: 500;
      line-height: 26px;
      color: #0f1629;
      margin: 0;
    }
    .video-cover-date {
      font-size: 10px;
      font-weight: 500;
      line-height: 10px;
      letter-spacing: 0.4px;
      color: #3165ef;
      margin-top: 10px;
    }
    .case-study-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
    }
    .view-btn {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      background: #f0f2fe;
      height: auto;
      padding: 15px 43px;
      border-radius: 8px;
      border: none;
      color: #275cbe;
      margin-top: 20px;
    }
    .article-content {
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      color: #0f1629;
      margin: 0;
    }
    .article-time {
      font-size: 12px;
      font-weight: 500;
      line-height: 10px;
      letter-spacing: 0.4px;
      color: #555555;
    }
    .article-container {
      display: flex;
      flex-direction: column;
      gap: 27px;
    }
  }
`;
