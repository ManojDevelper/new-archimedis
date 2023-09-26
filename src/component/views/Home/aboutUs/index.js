import React, { useEffect } from 'react';
import { AboutUsStyle } from './styles'
import { Carousel } from "antd";
import aboutus1 from '../../../../assets/home/aboutUs/aboutus-1.png';
// import aboutus2 from '../../../../assets/home/aboutUs/aboutus-2.png';
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
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  let carousel = React.createRef();

  const next = () => {
    carousel.next();
  }
  const previous = () => {
    carousel.prev();
  }

  const props = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <AboutUsStyle>
      <div className='about-us'>
        <div className='aboutus-top'>
          <div className='aboutus-container-main'>
            <div data-aos="fade-right" data-aos-duration="1600" className='about_card_data'>
              <h1>Who we are</h1>
              <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
              <ButtonCompo text="Know More" type="bg-blue-border" />
            </div>
            <div className='aboutus-bg-container'>
              {/* <Carousel afterChange={onChange}> */}
              <img src={aboutus1} alt="img" className='zoom_img' />
              {/* </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </AboutUsStyle>

  )
}

export default AboutUs