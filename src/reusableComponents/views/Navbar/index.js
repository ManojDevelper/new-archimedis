import React from 'react';
import logo from '../../../assets/reusableComponents/navbar/archimedisLogo.svg';
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { NavbarStyle } from './styles';

function Navbar() {
  return (
    <NavbarStyle>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>What we do <DownOutlined /></li>
            <li>Who we are <DownOutlined /></li>
            <li>Why us <DownOutlined /></li>
          </ul>
          <Button className='contact-button'>Contact us</Button>
        </div>
      </div>
    </NavbarStyle>
  )
}

export default Navbar;
