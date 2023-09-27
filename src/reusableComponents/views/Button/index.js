import React, { useState, useEffect, useRef } from "react";
import { ButtonStyle } from "./styles";
import { ArrowRightOutlined } from "@ant-design/icons";

const ButtonCompo = (props) => {
  const { type, text, icon=true, onClickHandle=() => {}, aos, ripple } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    if(isModalVisible) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'unset';
    }
  }, [isModalVisible]);

    //button position aware effect
    const btnRef = useRef(null);

  const hoverBtn = (e) => {
    if(btnRef !== null) {
      var relX = e.clientX - btnRef.current.getBoundingClientRect().left;
      var relY = e.clientY - btnRef.current.getBoundingClientRect().top;
      btnRef.current.children[0].style.top = relY + 'px';
      btnRef.current.children[0].style.left = relX + 'px';
    }
  };

  const leaveBtn = (e, i) => {
    if(btnRef !== null) {
      var relX = e.clientX - btnRef.current.getBoundingClientRect().left;
      var relY = e.clientY - btnRef.current.getBoundingClientRect().top;
      btnRef.current.children[0].style.top = relY + 'px';
      btnRef.current.children[0].style.left = relX + 'px';
    }
  };

  // type
  // bg-white (DEF)
  // bg-trans (Trans background)
  // bg-blue-border (background blue, Hover border blue)
  // bg-blue (background blue, Hover border white)
  // bg-blue-border-black-txt (background white, border blue, Hover border white)
  return (
    <ButtonStyle>
      {ripple ?
        <div className="ripple_btn" type="primary" onClick={showModal}>
              <span role="presentation" className="btnCont" onMouseEnter={hoverBtn} onMouseLeave={leaveBtn} ref={btnRef}>
                <span className="btn-bg"></span>
                {text}{" "}
                <span className="arrow">
                {icon && <ArrowRightOutlined style={{ marginLeft: "5px" }} />}
                </span>
              </span>
            </div>
            :
            <div className={`${type} banner-btn`} onClick={onClickHandle} {...aos}>
        <div className="back_animation" />
        <span className="btn_text">
          {text}{" "}{icon && <ArrowRightOutlined style={{ marginLeft: "5px" }} />}
        </span>
      </div>
      }
    </ButtonStyle>
  );
};

export default ButtonCompo;
