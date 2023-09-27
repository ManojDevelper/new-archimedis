import React, { useEffect } from 'react';
import { WhyUsStyle } from './styles'
import { Col, Row, Carousel } from "antd";
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
import { ArrowRightOutlined } from "@ant-design/icons";

const WhyUs = () => {

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <WhyUsStyle>
      <Carousel ref={node => (carousel = node)} {...props}>
        <div className='about-us'>
          {/* case studies popup */}
          <div className='aboutus-bottom-casestudy'>
            <Carousel afterChange={onChange}>
              <div className='about-side-carousal'>
                <h3 className='about-title' data-aos="fade-down" data-aos-duration="1000">
                  Case Studies
                </h3>
                <div className='aboutus-bottom-img-container' data-aos="fade-down" data-aos-duration="1200">
                  <img style={{ width: "100%" }} src={aboutusBot} alt="img" />
                </div>
                <h3 style={{ margin: '12px 0 0px', fontWeight: 'bold' }} className='about-desc-title'
                data-aos="fade-down" data-aos-duration="1400">
                  Lorem ipsum dolor colon cet dolor
                </h3>
                <p className='casestudy-text'
                data-aos="fade-down" data-aos-duration="1600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer cet lorem.
                </p>
                <p className='casestudy_viewmore'>View More <ArrowRightOutlined style={{ marginLeft: "5px" }} /></p>
              </div>

              <div className='about-side-carousal'>
                <h3 className='about-title'>
                  Case Studies
                </h3>
                <div className='aboutus-bottom-img-container'>
                  <img style={{ width: "100%" }} src={aboutusBot} alt="img" />
                </div>
                <h3 style={{ margin: '12px 0 0px', fontWeight: 'bold' }} className='about-desc-title'>
                  Lorem ipsum dolor colon cet dolor
                </h3>
                <p className='casestudy-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer cet lorem.
                </p>
              </div>

              <div className='about-side-carousal'>
                <h3 className='about-title'>
                  Case Studies
                </h3>
                <div className='aboutus-bottom-img-container'>
                  <img style={{ width: "100%" }} src={aboutusBot} alt="img" />
                </div>
                <h3 style={{ margin: '12px 0 0px', fontWeight: 'bold' }} className='about-desc-title'>
                  Lorem ipsum dolor colon cet dolor
                </h3>
                <p className='casestudy-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer cet lorem.
                </p>
              </div>
            </Carousel>
          </div>
          {/* why us text */}
          <div className='aboutus-bottom-whyus' style={{ padding: '0 66px' }}>
            <h1 className='aboutus-head' data-aos="fade-down" data-aos-duration="1000">Why us?</h1>
            <p className='aboutus-text' data-aos="fade-down" data-aos-duration="1200">We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <ButtonCompo text="Know More" type="bg-blue-border-black-txt" onClickHandle={() => next()} 
              aos={{
                "data-aos": "fade-down",
                "data-aos-duration": "1500"
              }}
            />
          </div>
        </div>

        <div className='about-us about-us-mob'>
          {/* why us text */}
          <div className='aboutus-bottom-whyus' style={{ padding: '0 66px' }}>
            <h1 className='aboutus-head'>Why us?</h1>
            <p className='aboutus-text'>We operate at the intersection of Digital and Life SciencesWe operate at the intersection of Digital and Life SciencesMedical DevicesCROs & Supply-ChainDigital Health  ProductsMedical ResearchDigital Health  ProductsPharma &Bio TechLife Sciences SaaSPharma & Bio TechCROs & Supply-ChainMedical DevicesLife Sciences SaaS</p>
            <ButtonCompo text="View Less" type="bg-blue-border-black-txt" onClickHandle={() => previous()} />
          </div>

          {/* test popup */}
          <div className='aboutus-bottom-advantages-content'>
            <img className='close-btn' src={closeBtn} alt="closeBtn" onClick={() => previous()} />
            <h2>
              The Archimedis Advantage
            </h2>
            <p className='adv-description'>Lorem ipsum dolor sit amet consectetur. Pellentesque egestas massa lacinia rhoncus odio tempor consectetur.</p>
            <Row className="about-mob">
              <Col span={8}>
                <img src={aboutAdv1} alt="aboutAdv1" className='row_img' />
                <p className='adv-text'>Life Sciences & Digital Expertise</p>
              </Col>
              <Col span={8}>
                <img src={aboutAdv2} alt="aboutAdv1" className='row_img' />
                <p className='adv-text'>Agile Development Process</p>
              </Col>
              <Col span={8}>
                <img src={aboutAdv3} alt="aboutAdv1" className='row_img' />
                <p className='adv-text'>Extensive Partnerships</p>
              </Col>
            </Row>
            <Row style={{ padding: '20px 100px' }}>
              <Col span={12}>
                <img src={aboutAdv4} alt="aboutAdv4" className='row_img' />
                <p className='adv-text'>Value-Oriented Solutions</p>
              </Col>
              <Col span={12}>
                <img src={aboutAdv5} alt="aboutAdv5" className='row_img' />
                <p className='adv-text'>Purpose-Driven Innovation</p>
              </Col>

            </Row>
          </div>
        </div>
      </Carousel>
    </WhyUsStyle>
  )
}

export default WhyUs