import React from 'react';
import logo from '../../../assets/reusableComponents/navbar/archimedisLogo.svg';
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { NavbarStyle } from './styles';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavbarStyle>
      <div className='navbar'>
        <div className='logo'>
        <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
        <div className='nav-items'>
          <ul>
            <Link to='/' className='Link'>Home</Link>
            <Link to="/services" className='Link'>What we do <DownOutlined /></Link>
            <Link to="/solutions" className='Link'>Who we are <DownOutlined /></Link>
            <Link to="/who" className='Link'>Why us <DownOutlined /></Link>
          </ul>
          <Button className='contact-button'>Contact us</Button>
        </div>
      </div>
    </NavbarStyle>
  )
}

export default Navbar;
