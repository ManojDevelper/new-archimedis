import React from 'react';
import { AboutUsStyle } from './styles'
import { Col, Row, Button } from "antd";
import aboutus1 from '../../../../assets/whoWeAre/aboutUs/aboutus1.svg';
import aboutus2 from '../../../../assets/whoWeAre/aboutUs/aboutus2.svg';

function AboutUs() {
  return (
    <AboutUsStyle>
         <div className='about-us'>
        <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col span={10}>
            <h1>About us</h1>
            <p className='aboutus-text'>Archimedis Digital provides software products, services and digital solutions to life sciences firms globally.</p>
            <p className='aboutus-text'>We collaborate with our clients to envision, formulate and devise growth no matter where they are in the digital life cycle.  Leveraging our combined experience in the life sciences industry, we take on complex cross-functional business challenges that the industry poses. </p>
            <p className='aboutus-text'>Our services and products are specifically geared to make your digital transformation a breeze. We digitalize today for a better tomorrow.</p>
                </Col>
          <Col span={14} style={{paddingLeft: '100px'}}>
            <div className='aboutus-bg-container'>
                 <img style={{marginLeft: '35px'}} src={aboutus2} alt="bgimg" />
                 <div className='aboutus-main-container'>
                      <img 
                       src={aboutus1} alt="img" />
                 </div>
            </div>
          </Col>
        </Row>
        </div>

    </AboutUsStyle>
        
  )
}

export default AboutUs