import React from "react";
import { WeDoStyle } from "./styles";
import { Card, Col, Row } from "antd";
import wedoImg1 from '../../../../../src/assets/home/weDo/wedo-img1.png';
import wedoImg2 from '../../../../../src/assets/home/weDo/wedo-img2.png';
import wedoImg3 from '../../../../../src/assets/home/weDo/wedo-img3.png';
const { Meta } = Card;
const WeDo = () => {
  return (
    <WeDoStyle>
      <div className="weDo">
        <h1>What we do?</h1>
        <p className="weDo-text">
          We help life science clients with digital products and services
        </p>
          <Row gutter={35}>
            <Col span={8}>
              <Card
                bordered={false}
                hoverable
                style={{
                    width: '100%',
                    position: 'relative',
                    borderRadius: '0px'
                  }}
                cover={
                  <img
                    alt="example"
                    src={wedoImg1}
                    style={{
                      borderRadius: '0px'
                    }}
                  />
                }
              >
                <div className="wedo-meta-data">
                    <Meta
                  title="Products"
                  description="Customized digital tools exclusively designed for life science users."
                   />
                </div>
                
              </Card>
            </Col>
            <Col span={8}>
                <Card
                  hoverable
                  style={{
                    width: '100%',
                    position: 'relative',
                    borderRadius: '0px'
                  }}
                  cover={
                    <img
                      alt="example"
                      src={wedoImg2}
                      style={{
                        borderRadius: '0px'
                      }}
                    />
                  }
                >
                   <div className="wedo-meta-data">
                    <Meta
                  title="Solutions"
                  description="Customized digital tools exclusively designed for life science users."
                   />
                </div>
                </Card>
            </Col>
            <Col span={8}>
                <Card
                  bordered={false}
                  hoverable
                  style={{
                    width: '100%',
                    position: 'relative',
                    borderRadius: '0px'
                  }}
                  cover={
                    <img
                    style={{
                      borderRadius: '0px'
                    }}
                      alt="example"
                      src={wedoImg3}
                    />
                  }
                >
                  <div className="wedo-meta-data">
                    <Meta
                  title="Services"
                  description="Customized digital tools exclusively designed for life science users."
                   />
                </div>
                </Card>
            </Col>
          </Row>
        </div>
    </WeDoStyle>
  );
};

export default WeDo;
