import React from "react";
import { BookDemoStyle } from "./styles";
import { Col, Row } from "antd";
import ButtonCompo from "../../../reusableComponents/views/Button";
import bookDemoImg from "../../../assets/reusableComponents/bookDemo/bookDemoImg.svg";

const BookDemo = () => {
  return (
    <BookDemoStyle>
      <div className="book-demo">
        <Row
          style={{
            background: "#275CBE",
            borderRadius: "16px",
          }}
        >
          <Col span={8}>
            <img src={bookDemoImg} alt="bookDemoImg" />
          </Col>
          <Col span={16} style={{ padding: "65px 0" }}>
            <h1>Ready to get started?</h1>
            <p>Book a demo or contact us</p>
            <div className="book-demo-container">
              <ButtonCompo text="Book a consultation" icon={false} />
              <ButtonCompo
                text="Contact us"
                type="bg-trans-border-white-txt"
                icon={false}
              />
            </div>
          </Col>
        </Row>
      </div>
    </BookDemoStyle>
  );
};

export default BookDemo;
