import React, {useState} from 'react';
import { ServicesDirectoryStyle } from './styles';
import { Col, Row } from 'antd';
import { CaretRightOutlined } from "@ant-design/icons";
import solutionsDirectoryImg from '../../../../assets/solutions/solutionsDirectory/solutionsDirectory.svg';
// import serviceIcon1 from '../../../../assets/services/servicesDirectory/services_icon1.svg';
// import serviceIcon2 from '../../../../assets/services/servicesDirectory/services_icon2.svg';
// import serviceIcon3 from '../../../../assets/services/servicesDirectory/services_icon3.svg';
// import serviceIcon4 from '../../../../assets/services/servicesDirectory/services_icon4.svg';

function SolutionsDirectory() {

    const [activeItem, setActiveItem] = useState(1);

    const handleItemClick = (index) => {
      setActiveItem(index);
    };
  return (
    <ServicesDirectoryStyle>
         <div className='solutions-directory'>
            <h1>Lorem ipsum dolor</h1>
         <Row gutter={16}>
      <Col span={8}>
        <div>
        <ul className='directory-list'>
        <li onClick={() => handleItemClick(0)} className={activeItem === 0 ? 'btn-bg' : ''}>
        Services <CaretRightOutlined className={activeItem === 0 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(1)} className={activeItem === 1 ? 'btn-bg' : ''}>
        End to End Solutions <CaretRightOutlined className={activeItem === 1 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(2)} className={activeItem === 2 ? 'btn-bg' : ''}>
        Frameworks <CaretRightOutlined className={activeItem === 2 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
        <li onClick={() => handleItemClick(3)} className={activeItem === 3 ? 'btn-bg' : ''}>
        Industry Expertise <CaretRightOutlined className={activeItem === 3 ? 'active' : 'inactive'} style={{ paddingLeft: "20px" }} />
        </li>
      </ul>
        </div>
      </Col>
      <Col span={15} style={{background: '#275CBE', display: 'flex',
    alignItems: 'center' }}>
        <div>
           <Row style={{display: 'flex', alignItems: 'center',  padding: '28px 20px'}}>
            <Col span={7}>
                <div>
                 <img src={solutionsDirectoryImg} alt="img" style={{width: '100%'
}}/>
                </div>
                 </Col>
            <Col span={17} style={{paddingLeft: '30px',
    paddingRight: '57px'}}>
                <div>
                   <p className='solutions-directory-head'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                   <div className='solutions-directory-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer cet lorem.  
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    </div>
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


export default SolutionsDirectory