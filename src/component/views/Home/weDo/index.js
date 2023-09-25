import React, { useEffect } from "react";
import { WeDoStyle } from "./styles";
import { Card, Col, Row } from "antd";
import wedoImg1 from "../../../../../src/assets/home/weDo/wedo-img1.png";
import wedoImg2 from "../../../../../src/assets/home/weDo/wedo-img2.png";
import wedoImg3 from "../../../../../src/assets/home/weDo/wedo-img3.png";
import ButtonCompo from "../../../../reusableComponents/views/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Meta } = Card;
const WeDo = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <WeDoStyle>
      <div className="weDo">
        <h1 data-aos="fade-down" data-aos-duration="1000"
        className="wedo_title">What we do?</h1>
        <p className="weDo-text" data-aos="fade-down" data-aos-duration="1500">
          We help life science clients with digital products and services
        </p>
        <div className="wedo_card_main" data-aos="fade-down" data-aos-duration="200">
          <div className="wedo_card">
            <img src={wedoImg1} alt="wedoImg1"/>
            <div className="wedo_card_hover">
              <h1>Products</h1>
              <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
              <p className="wedo_desc2">Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users</p>
              <ButtonCompo text="Know More"
              />
            </div>
          </div>
          <div className="wedo_card">
            <img src={wedoImg2} alt="wedoImg1"/>
            <div className="wedo_card_hover">
              <h1>Solutions</h1>
              <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
              <p className="wedo_desc2">Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users</p>
              <ButtonCompo text="Know More"
              />
            </div>
          </div>
          <div className="wedo_card">
            <img src={wedoImg3} alt="wedoImg1"/>
            <div className="wedo_card_hover">
              <h1>Services</h1>
              <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
              <p className="wedo_desc2">Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users</p>
              <ButtonCompo text="Know More"
              />
            </div>
          </div>
        </div>
        {/* <Row gutter={40}>
          <Col span={8} className="weDo-card1" data-aos="fade-down" data-aos-duration="1500">
            <Card
              bordered={false}
              hoverable
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "0px",
              }}
              cover={
                <img
                  alt="example"
                  src={wedoImg1}
                  style={{
                    borderRadius: "0px",
                  }}
                />
              }
            >
              <div className="wedo-meta-data">
                <Meta
                  title="Products"
                  description={<><span className="actual_span">Customized digital tools exclusively designed for life science users. Customized</span>
                    <span className="actual_span_hover">Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users.</span></>}
                />
                <ButtonCompo type="bg-trans" text="Know More" />
              </div>
            </Card>
          </Col>
          <Col span={8} className="weDo-card2" data-aos="fade-down" data-aos-duration="2000">
            <Card
              hoverable
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "0px",
              }}
              cover={
                <img
                  alt="example"
                  src={wedoImg2}
                  style={{
                    borderRadius: "0px",
                  }}
                />
              }
            >
              <div className="wedo-meta-data">
                <Meta
                  title="Solutions"
                  description={<><span className="actual_span">Customized digital tools exclusively designed for life science users. Customized</span>
                    <span className="actual_span_hover">Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users.</span></>}
                />
                <ButtonCompo type="bg-trans" text="Know More" />
              </div>
            </Card>
          </Col>
          <Col span={8} className="weDo-card3" data-aos="fade-down" data-aos-duration="2400">
            <Card
              bordered={false}
              hoverable
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "0px",
              }}
              cover={
                <img
                  style={{
                    borderRadius: "0px",
                  }}
                  alt="example"
                  src={wedoImg3}
                />
              }
            >
              <div className="wedo-meta-data">
                <Meta
                  title="Services"
                  description={<><span className="actual_span">Customized digital tools exclusively designed for life science users. Customized</span>
                    <span className="actual_span_hover">Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users.</span></>} />
                <ButtonCompo type="bg-trans" text="Know More" />
              </div>
            </Card>
          </Col>
        </Row> */}
      </div>
    </WeDoStyle>
  );
};

export default WeDo;
