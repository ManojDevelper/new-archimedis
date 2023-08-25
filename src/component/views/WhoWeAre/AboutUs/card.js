import React from 'react';
import { AboutCardStyle } from './styles';
import { Col, Row } from "antd";
import ourVision from '../../../../assets/whoWeAre/aboutUs/ourVision.svg';

function AboutCard() {
  return (
    <AboutCardStyle>
    <div className='about-card'>
        <Row>
            <Col span={10}>
               <img src={ourVision} alt="img"/>
               <h3>Our Vision</h3>
               <p>Empowering Life Sciences firms with competence to navigate through the rapidly changing digital landscape.</p>
            </Col>
        </Row>
         </div>
    </AboutCardStyle>
   
  )
}

export default AboutCard;