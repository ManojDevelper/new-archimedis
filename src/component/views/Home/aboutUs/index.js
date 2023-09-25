import React, { useState, useEffect } from 'react';
import { AboutUsStyle } from './styles'
import { Col, Row } from "antd";
import aboutus1 from '../../../../assets/home/aboutUs/aboutus-1.png';
import aboutus2 from '../../../../assets/home/aboutUs/aboutus-2.png';
import ButtonCompo from "../../../../reusableComponents/views/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

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
          <div className='aboutus-container-main'>
            <div data-aos="fade-right" data-aos-duration="1600" className='abous_card_data'>
              <h1>Who we are</h1>
              <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
              <ButtonCompo text="Know More" type="bg-blue-border" />
            </div>
            <div span={10} data-aos="fade-left" data-aos-duration="1600">
              <div className='aboutus-bg-container'>
              <img src={aboutus1} alt="img" className='zoom_img' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </AboutUsStyle>

  )
}

export default AboutUs