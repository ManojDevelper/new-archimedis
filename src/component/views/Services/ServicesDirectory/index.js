import React, {useState} from 'react';
import { ServicesDirectoryStyle } from './styles';
import { Col, Row } from 'antd';
import { CaretRightOutlined } from "@ant-design/icons";
import serviceIcon1 from '../../../../assets/services/servicesDirectory/services_icon1.svg';
import serviceIcon2 from '../../../../assets/services/servicesDirectory/services_icon2.svg';
import serviceIcon3 from '../../../../assets/services/servicesDirectory/services_icon3.svg';
import serviceIcon4 from '../../../../assets/services/servicesDirectory/services_icon4.svg';

function ServicesDirectory() {

    const [activeItem, setActiveItem] = useState(1);

    const handleItemClick = (index) => {
      setActiveItem(index);
    };
  return (
    <ServicesDirectoryStyle>
         <div className='services-directory'>
            <h1>Services Directory</h1>
         <Row gutter={16}>
      <Col span={8}>
        <div>
        <ul className='directory-list'>
        <li onClick={() => handleItemClick(0)} className={activeItem === 0 ? 'btn-bg' : ''}>
          GxP Services <CaretRightOutlined className={activeItem === 0 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(1)} className={activeItem === 1 ? 'btn-bg' : ''}>
          Digital Products / SaaS <CaretRightOutlined className={activeItem === 1 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(2)} className={activeItem === 2 ? 'btn-bg' : ''}>
          Cloud Engineering <CaretRightOutlined className={activeItem === 2 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(3)} className={activeItem === 3 ? 'btn-bg' : ''}>
          Cloud Engineering <CaretRightOutlined className={activeItem === 3 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(4)} className={activeItem === 4 ? 'btn-bg' : ''}>
          Open Source <CaretRightOutlined className={activeItem === 4 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(5)} className={activeItem === 5 ? 'btn-bg' : ''}>
          Data Analytics <CaretRightOutlined className={activeItem === 5 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(6)} className={activeItem === 6 ? 'btn-bg' : ''}>
          Cyber Security <CaretRightOutlined className={activeItem === 6 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
      </ul>
        </div>
      </Col>
      <Col span={16} style={{background: '#275CBE', display: 'flex',
    alignItems: 'center' }}>
        <div>
           <Row style={{display: 'flex', alignItems: 'center'}}>
            <Col span={11} style={{    padding: '8% 0 8% 8%'}}>
                <div style={{borderRight: '1px solid #fff',
    paddingRight: '22%'}}>
                <p>Tailor-made solutions to meet your unique business requirements</p>
                 <p>We offer End-to-end digital product development specific for life sciences, collaborating with you from ideation till launch. </p>
           
                </div>
                 </Col>
            <Col span={13} >
                <div>
                    <ul className='directory-uses'>
                        <li><img src={serviceIcon1} alt="img" /> Product Engineering</li>
                        <li><img src={serviceIcon2} alt="img" /> Testing & Validation</li>
                        <li><img src={serviceIcon3} alt="img" /> Helpdesk Support</li>
                        <li><img src={serviceIcon4} alt="img" />Monitoring / Sys Admin</li>
                    </ul>
                </div>
            </Col>
           </Row>
        </div>
      </Col>
    </Row>
         </div>
    </ServicesDirectoryStyle>
   
  )
}


export default ServicesDirectory