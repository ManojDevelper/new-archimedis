import React, { useEffect } from "react";
import { BookDemoStyle } from "./styles";
import { Col, Row } from "antd";
import ButtonCompo from "../../../reusableComponents/views/Button";
import bookDemoImg from "../../../assets/reusableComponents/bookDemo/bookDemoImg2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BookDemo = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <BookDemoStyle>
      <div className="book-demo">
        <Row
        >
          <Col className="bookdemo-img-container" span={12}>

            {/* <img src={bookDemoImg} alt="bookDemoImg" /> */}
          </Col>
          <Col span={12} className="book-demo-right">
            <h1 data-aos="fade-down"
              data-aos-anchor-placement="center-bottom">Ready to get started?</h1>
            <p data-aos="fade-down" data-aos-duration="1600"
              data-aos-anchor-placement="center-bottom">Book a demo or contact us</p>
            <div className="book-demo-container">
              <ButtonCompo text="Book a consultation" type="bg-blue-border" icon={false}
                aos={{
                  "data-aos": "fade-down",
                  "data-aos-duration": "2000"
                }}
              />
              <ButtonCompo
                text="Contact us"
                type="bg-trans-border-white-txt"
                icon={false}
                aos={{
                  "data-aos": "fade-down",
                  "data-aos-duration": "2000"
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="book-demo-mob">
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(0.5px)', padding: '53px 0', textAlign: 'center' }}>
          <h1>Ready to get started?</h1>
          <p>Book a demo or contact us</p>
          <div className="demo-btn-container">
            {/* <Button className="book-btn">Book a consultation</Button>
              <Button className="contact-btn">Contact us</Button> */}

            <ButtonCompo text="Book a consultation" type="bg-blue-border" icon={false}
              aos={{
                "data-aos": "fade-down",
                "data-aos-duration": "2000"
              }}
            />
            <ButtonCompo
              text="Contact us"
              type="bg-trans-border-white-txt"
              icon={false}
              aos={{
                "data-aos": "fade-down",
                "data-aos-duration": "2000"
              }}
            />
          </div>
        </div>

      </div>
    </BookDemoStyle>
  );
};

export default BookDemo;
