import React from "react";
import { BookDemoStyle } from "./styles";
import { Button, Col, Row } from "antd";
import bookDemoImg from '../../../assets/reusableComponents/bookDemo/bookDemoImg.svg';

const BookDemo = () => {
  return (
    <BookDemoStyle>
      <div className="book-demo">
        <Row style={{
    background: '#275CBE',
    borderRadius: '16px'}}>
          <Col span={8}>
            <img src={bookDemoImg} alt="bookDemoImg"/>
          </Col>
          <Col span={16} style={{padding: '65px 0'}}>
            <h1>Ready to get started?</h1>
            <p>Book a demo or contact us</p>
            <div>
              <Button className="book-btn">Book a consultation</Button>
              <Button className="contact-btn">Contact us</Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="book-demo-mob">   
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(0.5px)', padding: '53px 0', textAlign: 'center'}}>
      <h1>Ready to get started?</h1>
            <p>Book a demo or contact us</p>
            <div>
              <Button className="book-btn">Book a consultation</Button>
              <Button className="contact-btn">Contact us</Button>
            </div>
      </div>
        
      </div>
    </BookDemoStyle>
  );
};

export default BookDemo;
