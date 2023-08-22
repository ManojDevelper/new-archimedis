import React from 'react';
import { LifeScienceStyle } from './styles';
import { Col, Row } from 'antd';
import videoCover1 from '../../../../assets/solutions/lifeScience/life-science1.svg';
import videoCover2 from '../../../../assets/solutions/lifeScience/life-science2.svg';
import videoCover3 from '../../../../assets/solutions/lifeScience/life-science3.svg';

function LifeScience() {
  return (
    <LifeScienceStyle>
<div className='life-science'>
  <Row style={{display: 'flex', alignItems: 'center'}}>
    <Col span={10} style={{paddingLeft: '100px', paddingRight: '30px'}}>
        <div>
            <h1>
            Tailored for Life Sciences
            </h1>
            <p className='life-science-content'>
            A comprehensive suite of digital capabilities and assets needed to solve problems specific to industry across the value chain
            </p>
        </div>

    </Col>
    <Col
            span={14}
            style={{
                display:'flex',
    flexdirection: 'column',
    gap: '25px'
            }}
          >
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={5}>
                  <img
                    style={{ width: "164px", height: "120px", borderRadius: '8px' }}
                    src={videoCover1}
                    alt="img"
                  />
                </Col>
                <Col span={19} style={{ paddingLeft: "30px", paddingRight: '75px' }}>
                  <p className="video-cover-head" style={{color:'#005EC5'
}}>
                  Accelerate at any stage of digital maturity
                  </p>
                  <p className="video-cover-content">
                  Developed with experts with knowledge of industry leading digital technologies and the business processes that are supported
                  </p>
                </Col>
              </Row>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={5}>
                  <img
                    style={{ width: "164px", height: "120px", borderRadius: '8px' }}
                    src={videoCover2}
                    alt="img"
                  />
                </Col>
                <Col span={19} style={{ paddingLeft: "30px", paddingRight: '75px' }}>
                  <p className="video-cover-head">
                  Bringing the best from industry
                  </p>
                  <p className="video-cover-content">
                  Flexibility to onboard Products, Services, Frameworks, capabilities and assets at any stage of digital maturity
                  </p>
                </Col>
              </Row>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col span={5}>
                  <img
                    style={{ width: "164px", height: "120px", borderRadius: '8px' }}
                    src={videoCover3}
                    alt="img"
                  />
                </Col>
                <Col span={19} style={{ paddingLeft: "30px", paddingRight: '75px' }}>
                  <p className="video-cover-head">
                  Bringing the best from industry
                  </p>
                  <p className="video-cover-content">
                  Developed with experts with knowledge of industry leading digital technologies and the business processes that are supported     
                  </p>
                </Col>
              </Row>
    </Col>
  </Row>
    </div>
    </LifeScienceStyle>
    
  )
}

export default LifeScience