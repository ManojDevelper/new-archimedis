import React from 'react';
import { AboutUsStyle } from './styles'
import { Col, Row } from "antd";
import aboutus1 from '../../../../assets/home/aboutUs/aboutus-1.png';
import aboutus2 from '../../../../assets/home/aboutUs/aboutus-2.png';
import aboutusBot from '../../../../assets/home/aboutUs/aboutus-bottom.png';
import ButtonCompo from "../../../../reusableComponents/views/Button";

const AboutUs = () => {
  return (
    <AboutUsStyle>
        <div className='about-us'>
        <div className='aboutus-top'>
        <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col span={10}>
            <h1>Who we are</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            {/* <Button className='aboutus-top-btn'>Know More <ArrowRightOutlined style={{ marginLeft: "5px" }} /></Button> */}
            <ButtonCompo text="Know More" type="bg-blue-border"/>
          </Col>
          <Col span={14} style={{paddingLeft: '32px'}}>
            <div className='aboutus-bg-container'>
                 <img style={{marginLeft: '35px'}} src={aboutus2} alt="bgimg" />
                 <div className='aboutus-main-container css_scale_up_container'>
                      <img 
                       src={aboutus1} alt="img" className='zoom_img'/>
                 </div>
            </div>
          </Col>
        </Row>
        </div>
        <div className='aboutus-bottom'>
        <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col span={11} style={{backgroundColor: '#275CBE',  padding: '5px 50px 20px 40px'}}>
           <h3>
           Case Studies
           </h3>
           <div className='aboutus-bottom-img-container'>
           <img style={{width: "100%"}} src={aboutusBot} alt="img"/>
           </div>
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
            <ButtonCompo text="Know More" type="bg-blue-border-black-txt"/>
          </Col>
        </Row>
        </div>

        </div>
       
    </AboutUsStyle>
   
  )
}

export default AboutUs