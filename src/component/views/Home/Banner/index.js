import React from "react";
import { BannerStyle } from "./styles";
import { Col, Row, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import bannerRes from '../../../../assets/home/banner/bannerRes.png';
import facebook from '../../../../assets/home/banner/banner_facebook.png';
import instagram from '../../../../assets/home/banner/banner_instagram.png';
import linkedin from '../../../../assets/home/banner/banner_linkedin.png';
import twitter from '../../../../assets/home/banner/banner_twitter.png';
import youtube from '../../../../assets/home/banner/banner_youtube.png';

const Banner = () => {
  return (
    <BannerStyle>
      <div className="banner">
        <Row>
          <Col span={14}>
            <div className="banner-left">
              <h1>The Architects of Medicine</h1>
              <p>
                We make Digital Transformation in Life Sciences a breeze with
                innovative solutions that drive business growth.
              </p>
              <Button className="banner-btn">
              Get in Touch <ArrowRightOutlined style={{ marginLeft: "5px" }} />
            </Button>
            </div>
          </Col>
          <Col span={10}>
          <div className="banner-links">
              <a href="#"><img src={facebook} alt="Facebook" /></a>
              <a href="#"><img src={instagram} alt="Instagram" /></a>
              <a href="#"><img src={twitter} alt="Twitter" /></a>
              <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
              <a href="#"><img src={youtube} alt="YouTube" /></a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="banner-mob">
        <div className="banner-mob-top">
          <img src={bannerRes} alt="img" />
        </div>
        <div className="banner-mob-bottom">
              <h1>The Architects of Medicine</h1>
              <p>
                We make Digital Transformation in Life Sciences a breeze with
                innovative solutions that drive business growth.
              </p>
              <Button className="banner-btn">
              Get in Touch <ArrowRightOutlined style={{ marginLeft: "5px" }} />
            </Button>
        </div>

      </div>
    </BannerStyle>
  );
};
export default Banner;
