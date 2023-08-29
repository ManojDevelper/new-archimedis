import React from "react";
import { Card, Col, Row } from "antd";
import { MeetTeamStyle } from "./styles";
import leadershipImg from "../../../../assets/whoWeAre/meetTeam/leadership.svg";
import prevSlideImg from "../../../../assets/whoWeAre/meetTeam/Previous slide.svg";
import nextSlideImg from "../../../../assets/whoWeAre/meetTeam/Next slide.svg";
import teamImg from "../../../../assets/whoWeAre/meetTeam/team.svg";
import yetramImg from "../../../../assets/whoWeAre/meetTeam/yetramLogo.svg";
import transformLivesImg1 from "../../../../assets/whoWeAre/meetTeam/tl1.png";
import transformLivesImg2 from "../../../../assets/whoWeAre/meetTeam/tl2.png";
import transformLivesImg3 from "../../../../assets/whoWeAre/meetTeam/tl3.png";
import transformLivesImg4 from "../../../../assets/whoWeAre/meetTeam/transformLives4.svg";
import transformLivesImg5 from "../../../../assets/whoWeAre/meetTeam/transformLives5.svg";
import transformLivesImg6 from "../../../../assets/whoWeAre/meetTeam/transformLives6.svg";
import transformLivesImg7 from "../../../../assets/whoWeAre/meetTeam/transformLives7.svg";
const { Meta } = Card;


function MeetTeam() {
  return (
    <MeetTeamStyle>
      <div className="meet-team">
        <h1>Meet the Team</h1>
        <div className="leadership-list">
       <div className="leadership-container"><h2>Leadership</h2> <div><img style={{marginRight: '8px'}} src={prevSlideImg} alt="img"/><img src={nextSlideImg} alt="img"/></div></div>   
          <Row gutter={[16, 16]}>
  <Col span={24}>
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", marginRight: "35px" }}>
        <Card cover={<img alt="img" src={leadershipImg} />}>
          <Meta
            title="Durai Rajan Palani"
            description="CEO / Principal Consultant"
          />
        </Card>
      </div>
      <div style={{ flex: "1", marginRight: "35px" }}>
        <Card cover={<img alt="img" src={leadershipImg} />}>
          <Meta
            title="Durai Rajan Palani"
            description="CEO / Principal Consultant"
          />
        </Card>
      </div>
      <div style={{ flex: "1", marginRight: "35px" }}>
        <Card cover={<img alt="img" src={leadershipImg} />}>
          <Meta
            title="Durai Rajan Palani"
            description="CEO / Principal Consultant"
          />
        </Card>
      </div>
      <div style={{ flex: "1", marginRight: "35px" }}>
        <Card cover={<img alt="img" src={leadershipImg} />}>
          <Meta
            title="Durai Rajan Palani"
            description="CEO / Principal Consultant"
          />
        </Card>
      </div>
      <div style={{ flex: "1" }}>
        <Card cover={<img alt="img" src={leadershipImg} />}>
          <Meta
            title="Durai Rajan Palani"
            description="CEO / Principal Consultant"
          />
        </Card>
      </div>
    </div>
  </Col>
</Row>
        </div>
        <div className="team-list">
        <Row gutter={[16, 16]} style={{marginLeft: '81px',
           marginRight: '37px'}}>
          <Col span={8} style={{paddingRight: '20px'}}>
          <Card cover={<img alt="img" src={teamImg} />}>
          </Card>
          </Col>
          <Col span={8} style={{paddingRight: '20px'}}>
          <Card cover={<img alt="img" src={teamImg} style={{height: '96.2%'}} />}>
          </Card>
          </Col>
          <Col span={8} style={{paddingRight: '20px'}}>
          <Card cover={<img alt="img" src={teamImg} style={{height: '96%'}}  />}>
          </Card>
          </Col>
        </Row>
        </div>
        <div className="transform-lives">
        <Row style={{display: 'flex', alignItems: 'center'}}>
          <Col span={12} style={{paddingLeft: '90px', paddingRight: '80px'}}>
            <img alt="img" src={yetramImg} />
            <h3>A vision to transform lives</h3>
            <p>True to our name (Yetram means upliftment in Tamil), at Yetram Foundation, we aim to mold financially-challenged college students into industry-ready talents. During a 12-week, fully-paid, residential scholarship program, students train in design thinking, problem-solving, teamwork, and communication skills.</p>
         
          </Col>
          <Col span={12} style={{paddingRight:'43px'}}>
            <div className="transform-lives-grid">
            <Row gutter={[16, 16]}>
      <Col className="gutter-row" span={8}>
        <img alt="img" src={transformLivesImg1} />
      </Col>
      <Col className="gutter-row" span={8}>
        <img alt="img" src={transformLivesImg2} />
      </Col>
      <Col className="gutter-row" span={8}>
        <img alt="img" src={transformLivesImg3} />
      </Col>
    </Row>      
    <Row gutter={[16, 16]} style={{paddingTop: '9px'}}>
      <Col className="gutter-row" span={11}>
        <img alt="img" src={transformLivesImg4} />
      </Col>
      <Col className="gutter-row" span={13}>
        <img alt="img" src={transformLivesImg5} style={{height: '98%',
    objectFit: 'cover'}}/>
      </Col>
    </Row>
    <Row gutter={[16, 16]} style={{paddingTop: '11px'}}>
      <Col span={12}>
        <img alt="img" src={transformLivesImg6} />
      </Col>
      <Col span={12}>
        <img alt="img" src={transformLivesImg7} style={{height: '98.3%',
    objectFit: 'cover'}}/>
      </Col>
    </Row>
    </div>
        
          </Col>
        </Row>
         </div>

        </div>
    </MeetTeamStyle>
  );
}

export default MeetTeam;
