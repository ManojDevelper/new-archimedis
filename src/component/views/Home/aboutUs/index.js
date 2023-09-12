import React from 'react';
import { AboutUsStyle } from './styles'
import { Col, Row, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import aboutus1 from '../../../../assets/home/aboutUs/aboutus-1.png';
import aboutus2 from '../../../../assets/home/aboutUs/aboutus-2.png';
import aboutusBot from '../../../../assets/home/aboutUs/aboutus-bottom.png';

const AboutUs = () => {
  return (
    <AboutUsStyle>
        <div className='about-us'>
        <div className='aboutus-top'>
        <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col span={10}>
            <h1>Who we are</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <Button className='aboutus-top-btn'>Know More <ArrowRightOutlined style={{ marginLeft: "5px" }} /></Button>
          </Col>
          <Col span={14} style={{paddingLeft: '32px'}}>
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
        <div className='aboutus-top-mob'>
             <div className='aboutus-bg-container'>
                 <img className='aboutus-bg-container-img' src={aboutus2} alt="bgimg" />
                 <div className='aboutus-main-container'>
                      <img 
                       src={aboutus1} alt="img" />
                 </div>
            </div>
            <div className='aboutus-top-mob-content'>
               <h1>Who we are</h1>
               <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
               <Button className='aboutus-top-btn'>Know More <ArrowRightOutlined style={{ marginLeft: "5px" }} /></Button>
            </div>
        </div>
        <div className='aboutus-bottom'>
        <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col className='aboutus-bottom-casestudy' span={11} style={{backgroundColor: '#275CBE',  padding: '5px 50px 20px 40px'}}>
           <h3>
           Case Studies
           </h3>
           <img style={{width: "100%"}} src={aboutusBot} alt="img"/>
           <h3 style={{margin: '12px 0 0px'}}>
           Lorem ipsum dolor colon cet dolor
           </h3>
           <p className='casestudy-text'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer cet lorem.
           </p>
          </Col>
          <Col span={13} style={{padding: '0 85px'}}>
          <h1>Why us</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <Button className='aboutus-bottom-btn'>Know More <ArrowRightOutlined style={{ marginLeft: "5px" }} /></Button>
          </Col>
        </Row>
        </div>
        <div className='aboutus-bottom-mob'>
        <div className='aboutus-bottom-mob-content'>
            <h1>Why us</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <Button className='aboutus-bottom-btn'>Know More <ArrowRightOutlined style={{ marginLeft: "5px" }} /></Button>
         </div>
         <div  className='aboutus-bottom-mob-casestudy'>
           <h3>
           Case Studies
           </h3>
           <img style={{width: "100%"}} src={aboutusBot} alt="img"/>
           <h3 style={{margin: '12px 0 0px'}}>
           Lorem ipsum dolor colon cet dolor
           </h3>
           <p className='casestudy-text'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer cet lorem.
           </p>
          </div>
        </div>
        </div>
       
    </AboutUsStyle>
   
  )
}

export default AboutUs