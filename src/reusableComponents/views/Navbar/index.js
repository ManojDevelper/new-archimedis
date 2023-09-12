import React, { useState } from "react";
import logo from "../../../assets/reusableComponents/navbar/archimedisLogo.svg";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { NavbarStyle } from "./styles";
import { Link } from "react-router-dom";
import instagram from "../../../assets/reusableComponents/navbar/nav-insta.svg";
import facebook from "../../../assets/reusableComponents/navbar/nav-fb.svg";
import linkedin from "../../../assets/reusableComponents/navbar/nav-linkedin.svg";
import twitter from "../../../assets/reusableComponents/navbar/nav-twitter.svg";
import youtube from "../../../assets/reusableComponents/navbar/nav-youtube.svg";

import {
  UserOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  HomeOutlined,
  FileTextOutlined,
  UserAddOutlined,
  LoginOutlined,
} from "@ant-design/icons";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // New state for mobile menu
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  function handleClick1() {
    setIsActive1(!isActive1);
  }
  function handleClick2() {
    setIsActive2(!isActive2);
  }
  function handleClick3() {
    setIsActive3(!isActive3);
  }
  function handleClick4() {
    setIsActive4(!isActive4);
  }
  return (
    <NavbarStyle>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <Link to="/" className="Link">
              Home
            </Link>
            <Link to="/services" className="Link">
              What we do <DownOutlined />
            </Link>
            <Link to="/solutions" className="Link">
              Who we are <DownOutlined />
            </Link>
            <Link to="/who" className="Link">
              Why us <DownOutlined />
            </Link>
          </ul>
          <Button className="contact-button">Contact us</Button>
        </div>

        <div id="mobile">
          <div
            id="menu-icon"
            className={menuOpen ? "close-icon" : "bars-icon"}
            onClick={toggleMenu}
          >
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div id="mobile-menu">
          <ul>
            <div className={`faq ${isActive1 ? 'active' : ''}`}>
               <button className='nav-accordion' onClick={handleClick1}> 
                  <li ><Link  onClick={toggleMenu} to="/" className="Link">
                    Home
                  </Link></li>
                     <span className="nav-accordion-toggle">{isActive1 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer">
                  <ul>
                    <li>Services</li>
                    <li>Infrastructure</li>
                    <li>Case Studies</li>
                  </ul>      
               </div>
             </div>
             <div className={`faq ${isActive2 ? 'active' : ''}`}>
               <button className='nav-accordion' onClick={handleClick2}> 
                  <li><Link to="/services" className="Link">
                      What we do 
                 </Link></li>
                     <span className="nav-accordion-toggle">{isActive2 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer">
                  <ul>
                    <li>Services</li>
                    <li>Infrastructure</li>
                    <li>Case Studies</li>
                  </ul>      
               </div>
             </div>
             <div className={`faq ${isActive3 ? 'active' : ''}`}>
               <button className='nav-accordion' onClick={handleClick3}> 
               <li><Link to="/solutions" className="Link">
              Who we are 
            </Link></li>
                     <span className="nav-accordion-toggle">{isActive3 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer">
                  <ul>
                    <li>Services</li>
                    <li>Infrastructure</li>
                    <li>Case Studies</li>
                  </ul>      
               </div>
             </div>
             <div className={`faq ${isActive4 ? 'active' : ''}`}>
               <button className='nav-accordion' onClick={handleClick4}> 
               <li><Link to="/who" className="Link">
              Why us 
            </Link></li>
                     <span className="nav-accordion-toggle">{isActive4 ? '-' : '+'}</span>
               </button>
                <div className="faq-answer">
                  <ul>
                    <li>Services</li>
                    <li>Infrastructure</li>
                    <li>Case Studies</li>
                  </ul>      
               </div>
             </div>
           
             <li style={{padding: '15px 16px'}}><Link  className="Link">
            Contact Us
            </Link></li>
          </ul>
          <div className="nav-media">
            <a href="#">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={youtube} alt="YouTube" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          </div>
        </>
      )}
    </NavbarStyle>
  );
}

export default Navbar;
