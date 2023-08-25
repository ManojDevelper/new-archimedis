import React from "react";
import { CaseStudiesStyle } from "./styles";
import { Row, Col, Card, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ClockCircleOutlined } from "@ant-design/icons";
import ecapsulebg from "../../../../assets/services/caseStudies/ecapsulebg.png";
import ecapsule from "../../../../assets/services/caseStudies/ecapsule.png";
import videoCover1 from "../../../../assets/services/caseStudies/video-cover1.svg";
import videoCover2 from "../../../../assets/services/caseStudies/video-cover2.svg";
import videoCover3 from "../../../../assets/services/caseStudies/video-cover3.svg";
const { Meta } = Card;
function CaseStudies() {
  return (
    <CaseStudiesStyle>
      <div className="case-studies">
        <Row
          gutter={[16, 16]}
          style={{ marginRight: 0, display: "flex", gap: "13px" }}
        >
          <Col span={8}>
            <div style={{ position: "relative" }}>
              <img style={{ width: "100%" }} src={ecapsulebg} alt="bgimg" />
              <div style={{ position: "absolute", top: "30px", left: "34px" }}>
                <Card
                  className="case-ant-card"
                  style={{
                    width: "91.4%",
                    position: "relative",
                    borderRadius: "0px",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={ecapsule}
                      style={{
                        borderRadius: "0px",
                      }}
                    />
                  }
                >
                  <div className="case-meta-data">
                    <Meta
                      style={{ border: "none" }}
                      title="Reduce time to market by 30% with eCapsule"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </Col>
          <Col
            span={8}
            style={{
              background: "#ffffff",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <h1 style={{ marginBottom: "25px" }}>Case Studies</h1>
            <div className="case-study-container">
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={6}>
                  <img
                    style={{ width: "104px", height: "104px" }}
                    src={videoCover1}
                    alt="img"
                  />
                </Col>
                <Col span={18} style={{ paddingLeft: "10px" }}>
                  <p className="video-cover-content">
                    Lorem ipsum dolor sit amet dolor consectetur. Purus
                    elementum urna mattis non aliquet.
                  </p>
                  <p className="video-cover-date">
                    JANUARY 18, 2023{" "}
                    <ArrowRightOutlined style={{ marginLeft: "5px" }} />
                  </p>
                </Col>
              </Row>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={6}>
                  <img
                    style={{ width: "104px", height: "104px" }}
                    src={videoCover2}
                    alt="img"
                  />
                </Col>
                <Col span={18} style={{ paddingLeft: "10px" }}>
                  <p className="video-cover-content">
                    Lorem ipsum dolor sit amet dolor consectetur. Purus
                    elementum urna mattis non aliquet.
                  </p>
                  <p className="video-cover-date">
                    JANUARY 18, 2023{" "}
                    <ArrowRightOutlined style={{ marginLeft: "5px" }} />
                  </p>
                </Col>
              </Row>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={6}>
                  <img
                    style={{ width: "104px", height: "104px" }}
                    src={videoCover3}
                    alt="img"
                  />
                </Col>
                <Col span={18} style={{ paddingLeft: "10px" }}>
                  <p className="video-cover-content">
                    Lorem ipsum dolor sit amet dolor consectetur. Purus
                    elementum urna mattis non aliquet.
                  </p>
                  <p className="video-cover-date">
                    JANUARY 18, 2023{" "}
                    <ArrowRightOutlined style={{ marginLeft: "5px" }} />
                  </p>
                </Col>
              </Row>
            </div>
            <Button className="view-btn">
              View All{" "}
              <ArrowRightOutlined
                style={{ marginLeft: "10px", fontWeight: 700 }}
              />
            </Button>
          </Col>
          <Col
            span={6}
            style={{
              background: "#ffffff",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <h1>Blogs & Articles</h1>
            <div className="article-container">
              <Row>
                <Col span={24}>
                  <p className="article-content">
                    Lorem ipsum dolor sit amet dolor consectetur. Purus
                    elementum urna mattis non aliquet.
                  </p>
                  <p className="article-time">
                    <ClockCircleOutlined style={{ marginRight: "5px" }} />3 min
                    read
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p className="article-content">
                    Lorem ipsum dolor sit amet dolor consectetur. Purus
                    elementum urna mattis non aliquet.
                  </p>
                  <p className="article-time">
                    <ClockCircleOutlined style={{ marginRight: "5px" }} />3 min
                    read
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <p className="article-content">
                    Lorem ipsum dolor sit amet dolor consectetur. Purus
                    elementum urna mattis non aliquet.
                  </p>
                  <p className="article-time">
                    <ClockCircleOutlined style={{ marginRight: "5px" }} />3 min
                    read
                  </p>
                </Col>
              </Row>
            </div>
            <Button className="view-btn" style={{ marginTop: "4px" }}>
              View All{" "}
              <ArrowRightOutlined
                style={{ marginLeft: "10px", fontWeight: 700 }}
              />
            </Button>
          </Col>
        </Row>
      </div>
    </CaseStudiesStyle>
  );
}

export default CaseStudies;
