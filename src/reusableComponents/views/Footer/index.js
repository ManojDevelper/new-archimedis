import React from "react";
import { FooterStyle } from "./styles";
import { Col, Divider, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import videoCover1 from "../../../assets/reusableComponents/footer/video-cover1.png";
import videoCover2 from "../../../assets/reusableComponents/footer/video-cover2.png";
import instagram from "../../../assets/reusableComponents/footer/footer-instagram.png";
import facebook from "../../../assets/reusableComponents/footer/footer-facebook.png";
import linkedin from "../../../assets/reusableComponents/footer/footer-linkedin.png";
import twitter from "../../../assets/reusableComponents/footer/footer-twitter.png";
import youtube from "../../../assets/reusableComponents/footer/footer-youtube.png";
function Footer() {
  return (
    <FooterStyle>
      <div className="footer">
        <Row>
          <Col className="gutter-row" span={8}>
            <div>
              <h2>Archimedis </h2>
              <p className="footer-description">
                Lorem ipsum dolor sit amet let, consectetur. Varius sem sed,
                faucibus viverra, India 600111
              </p>
              <div className="video-cover-container">
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col span={7}>
                    <img
                      style={{ width: "114px", height: "70px" }}
                      src={videoCover1}
                      alt="img"
                    />
                  </Col>
                  <Col span={17} style={{ paddingLeft: "28px" }}>
                    <p className="video-cover-content">
                      Lorem ipsum dolor sit amet consectetur. Purus elementum{" "}
                    </p>
                    <p className="video-cover-date">
                      JANUARY 18, 2023{" "}
                      <ArrowRightOutlined style={{ marginLeft: "5px" }} />
                    </p>
                  </Col>
                </Row>
                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "35px",
                  }}
                >
                  <Col span={7} >
                    <img
                      style={{ width: "114px", height: "70px" }}
                      src={videoCover2}
                      alt="img"
                    />
                  </Col>
                  <Col span={17} style={{ paddingLeft: "28px" }}>
                    <p className="video-cover-content">
                      Lorem ipsum dolor sit amet consectetur. Purus elementum{" "}
                    </p>
                    <p className="video-cover-date">
                      JANUARY 18, 2023{" "}
                      <ArrowRightOutlined style={{ marginLeft: "5px" }} />
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" style={{paddingLeft: '70px'}} span={7}>
            <div>
              <div>
                <h3>Home</h3>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum dolor cet</li>
                </ul>
              </div>
              <div style={{marginTop: '75px'}}>
                <h3>What we do</h3>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum cet</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={5}>
            <div>
              <div>
                <h3>Who we are</h3>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum</li>
                </ul>
              </div>
              <div style={{marginTop: '75px'}}>
                <h3>Why us</h3>
                <ul>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum cet</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div>
              <h3>Contact</h3>
              <ul>
                <li>Contact us</li>
                <li>Call +91 44 4123 5678</li>
                <li>hello@archimedis.io</li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="footer-copyright">
            <div>
                <img src={instagram} alt="img"/>
                <img src={facebook} alt="img"/>
                <img src={twitter} alt="img"/>
                <img src={youtube} alt="img"/>
                <img src={linkedin} alt="img"/>
            </div>
            <p>Copyright © 2023 Archimedis Digital . All rights reserved.</p>

        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
