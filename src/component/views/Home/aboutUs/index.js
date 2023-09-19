import React, { useState, useEffect } from 'react';
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
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <AboutUsStyle>
      <div className='about-us'>
        <div className='aboutus-top'>
          <Row style={{ display: 'flex', alignItems: 'center' }}>
            <Col span={10} data-aos="fade-right" data-aos-duration="1600">
              <h1>Who we are</h1>
              <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
              <ButtonCompo text="Know More" type="bg-blue-border" />
            </Col>
            <Col span={14} style={{ paddingLeft: '32px' }} data-aos="fade-left" data-aos-duration="1600">
              <div className='aboutus-bg-container'>
                <img style={{ marginLeft: '35px' }} src={aboutus2} alt="bgimg" />
                <div className='aboutus-main-container css_scale_up_container'>
                  <img
                    src={aboutus1} alt="img" className='zoom_img' />
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
            <ButtonCompo text="Know More" type="bg-blue-border" />
          </div>
        </div>
      </div>

    </AboutUsStyle>

  )
}

export default AboutUs