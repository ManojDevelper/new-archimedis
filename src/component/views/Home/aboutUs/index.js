import React from 'react';
import { AboutUsStyle } from './styles'
import { Col, Row } from "antd";
import aboutus1 from '../../../../assets/home/aboutUs/aboutus-1.png';
import aboutus2 from '../../../../assets/home/aboutUs/aboutus-2.png';
import aboutusBot from '../../../../assets/home/aboutUs/aboutus-bottom.png';
import ButtonCompo from "../../../../reusableComponents/views/Button";
import aboutAdv1 from '../../../../assets/home/aboutUs/aboutAdv1.svg';
import aboutAdv2 from '../../../../assets/home/aboutUs/aboutAdv2.svg';
import aboutAdv3 from '../../../../assets/home/aboutUs/aboutAdv3.svg';
import aboutAdv4 from '../../../../assets/home/aboutUs/aboutAdv4.svg';
import aboutAdv5 from '../../../../assets/home/aboutUs/aboutAdv5.svg';
import closeBtn from '../../../../assets/home/aboutUs/closeBtn.svg';
const AboutUs = () => {
  return (
    <AboutUsStyle>
        <div className='about-us'>
        <div className='aboutus-top'>
        <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col span={10}>
            <h1>Who we are</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
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
               <ButtonCompo text="Know More" type="bg-blue-border"/>
            </div>
        </div>
        <div className='aboutus-bottom'>
        <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col className='aboutus-bottom-casestudy' span={11} >
          <div style={{backgroundColor: '#ffffff',  padding: '5px 50px 20px 40px'}}>
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
           </div>
          </Col>
          <Col span={13} style={{padding: '0 66px'}}>
          <h1>Why us</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <ButtonCompo text="Know More" type="bg-blue-border-black-txt"/>
          </Col>
        </Row>
        <Row style={{display: 'flex', alignItems: 'center', paddingTop: '45px', 
    paddingBottom: '31px'
}}>
          <Col span={11} style={{padding: '0 66px'}}>
          <h1>Why us</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <ButtonCompo text="Know More" type="bg-blue-border-black-txt"/>
          </Col>
          <Col className='aboutus-bottom-advantages' span={13} >
          <div className='aboutus-bottom-advantages-content' >
          <img className='close-btn' src={closeBtn} alt="closeBtn"/>
           <h2>
              The Archimedis Advantage
           </h2>
          <p className='adv-description'>Lorem ipsum dolor sit amet consectetur. Pellentesque egestas massa lacinia rhoncus odio tempor consectetur.</p>
         <Row>
          <Col span={8}>
            <img src={aboutAdv1} alt="aboutAdv1"/>
            <p className='adv-text'>Life Sciences & Digital Expertise</p>
          </Col>
          <Col span={8}>
            <img src={aboutAdv2} alt="aboutAdv1"/>
            <p className='adv-text'>Agile Development Process</p>
          </Col>
          <Col span={8}>
            <img src={aboutAdv3} alt="aboutAdv1"/>
            <p className='adv-text'>Extensive Partnerships</p>
          </Col>
         </Row>
         <Row style={{padding: '20px 100px'}}>
          <Col span={12}>
            <img src={aboutAdv4} alt="aboutAdv4"/>
            <p className='adv-text'>Value-Oriented Solutions</p>
          </Col>
          <Col span={12}>
            <img src={aboutAdv5} alt="aboutAdv5"/>
            <p className='adv-text'>Purpose-Driven Innovation</p>
          </Col>
          
         </Row>
           </div>
          </Col>       
        </Row>
        </div>
        <div className='aboutus-bottom-mob'>
        <div className='aboutus-bottom-mob-content'>
            <h1>Why us</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <ButtonCompo text="Know More" type="bg-blue-border-black-txt"/>
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
          <div className='aboutus-bottom-mob-content'>
            <h1>Why us</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <ButtonCompo text="Know More" type="bg-blue-border-black-txt"/>
         </div>
         <div className='aboutus-bottom-advantages-content' >
          <img className='close-btn' src={closeBtn} alt="closeBtn"/>
           <h2>
              The Archimedis Advantage
           </h2>
          <p className='adv-description'>Lorem ipsum dolor sit amet consectetur. Pellentesque egestas massa lacinia rhoncus odio tempor consectetur.</p>
         <Row>
          <Col span={8}>
            <img src={aboutAdv1} alt="aboutAdv1"/>
            <p className='adv-text'>Life Sciences & Digital Expertise</p>
          </Col>
          <Col span={8}>
            <img src={aboutAdv2} alt="aboutAdv1"/>
            <p className='adv-text'>Agile Development Process</p>
          </Col>
          <Col span={8}>
            <img src={aboutAdv3} alt="aboutAdv1"/>
            <p className='adv-text'>Extensive Partnerships</p>
          </Col>
         </Row>
         <Row >
          <Col span={12}>
            <img src={aboutAdv4} alt="aboutAdv4"/>
            <p className='adv-text'>Value-Oriented Solutions</p>
          </Col>
          <Col span={12}>
            <img src={aboutAdv5} alt="aboutAdv5"/>
            <p className='adv-text'>Purpose-Driven Innovation</p>
          </Col>
          
         </Row>
           </div>

        </div>
        </div>
       
    </AboutUsStyle>
   
  )
}

export default AboutUs