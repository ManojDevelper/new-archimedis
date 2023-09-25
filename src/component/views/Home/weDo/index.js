import React, { useEffect } from "react";
import { WeDoStyle } from "./styles";
import { Card, Col, Row, Carousel } from "antd";
import wedoImg1 from "../../../../../src/assets/home/weDo/wedo-img1.png";
import wedoImg2 from "../../../../../src/assets/home/weDo/wedo-img2.png";
import wedoImg3 from "../../../../../src/assets/home/weDo/wedo-img3.png";
import ButtonCompo from "../../../../reusableComponents/views/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Meta } = Card;
const WeDo = () => {
  useEffect(() => {
    AOS.init({
      once: true
    });
    AOS.refresh();
  }, []);

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
    <WeDoStyle>
      <div className="weDo">
        <h1 data-aos="fade-down" data-aos-duration="1000"
          className="wedo_title">What we do?</h1>
        <p className="weDo-text" data-aos="fade-down" data-aos-duration="1500">
          We help life science clients with digital products and services
        </p>
        <div className="wedo_card_main" data-aos="fade-down" data-aos-duration="200">
          <div className="wedo_card">
            <img src={wedoImg1} alt="wedoImg1" />
            <div className="wedo_card_hover">
              <h1>Products</h1>
              <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
              <p className="wedo_desc2">Lorem ipsum dolor sit amet consectetur. Vitae viverra orci id id lacus sed integer egestas. Euismod tristique nulla nunc dictum ac molestie vulputate. Morbi eget malesuada est ultrices aenean. Duis in sit eget pulvinar in tortor.</p>
              <ButtonCompo text="Know More"
                type="bg-trans-border-white-txt"
              />
            </div>
          </div>
          <div className="wedo_card">
            <img src={wedoImg2} alt="wedoImg1" />
            <div className="wedo_card_hover">
              <h1>Solutions</h1>
              <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
              <p className="wedo_desc2">Lorem ipsum dolor sit amet consectetur. Vitae viverra orci id id lacus sed integer egestas. Euismod tristique nulla nunc dictum ac molestie vulputate. Morbi eget malesuada est ultrices aenean. Duis in sit eget pulvinar in tortor.</p>
              <ButtonCompo text="Know More"
                type="bg-trans-border-white-txt"
              />
            </div>
          </div>
          <div className="wedo_card">
            <img src={wedoImg3} alt="wedoImg1" />
            <div className="wedo_card_hover">
              <h1>Services</h1>
              <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
              <p className="wedo_desc2">Lorem ipsum dolor sit amet consectetur. Vitae viverra orci id id lacus sed integer egestas. Euismod tristique nulla nunc dictum ac molestie vulputate. Morbi eget malesuada est ultrices aenean. Duis in sit eget pulvinar in tortor.</p>
              <ButtonCompo text="Know More"
                type="bg-trans-border-white-txt"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mob version */}
      <div className="weDo weDo_mob">
        <h1 data-aos="fade-down" data-aos-duration="1000"
          className="wedo_title">What we do?</h1>
        <p className="weDo-text" data-aos="fade-down" data-aos-duration="1500">
          We help life science clients with digital products and services
        </p>
        <div className="wedo_card_main" data-aos="fade-down" data-aos-duration="200">
          <Carousel afterChange={onChange} {...props}>
            <div className="wedo_card">
              <img src={wedoImg1} alt="wedoImg1" />
              <div className="wedo_card_hover">
                <h1>Products</h1>
                <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
                <p className="wedo_desc2">Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users</p>
                <ButtonCompo text="Know More"
                  type="bg-trans-border-white-txt"
                />
              </div>
            </div>
            <div className="wedo_card">
              <img src={wedoImg2} alt="wedoImg2" />
              <div className="wedo_card_hover">
                <h1>Solutions</h1>
                <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
                <p className="wedo_desc2">Customized digital tools exclusively designed for life science users. Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users Customized digital tools exclusively designed for life science users</p>
                <ButtonCompo text="Know More"
                  type="bg-trans-border-white-txt"
                />
              </div>
            </div>
            <div className="wedo_card">
              <img src={wedoImg3} alt="wedoImg1" />
              <div className="wedo_card_hover">
                <h1>Services</h1>
                <p className="wedo_desc1">Customized digital tools exclusively designed for life science users.</p>
                <p className="wedo_desc2">Lorem ipsum dolor sit amet consectetur. Vitae viverra orci id id lacus sed integer egestas. Euismod tristique nulla nunc dictum ac molestie vulputate. Morbi eget malesuada est ultrices aenean. Duis in sit eget pulvinar in tortor.</p>
                <ButtonCompo text="Know More"
                  type="bg-trans-border-white-txt"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </WeDoStyle>
  );
};

export default WeDo;
