import React from "react";
import { ButtonStyle } from "./styles";
import { ArrowRightOutlined } from "@ant-design/icons";

const ButtonCompo = (props) => {
  const { type, text, icon=true } = props;

  // type
  // bg-white (DEF)
  // bg-trans (Trans background)
  // bg-blue-border (background blue, Hover border blue)
  // bg-blue (background blue, Hover border white)
  // bg-blue-border-black-txt (background white, border blue, Hover border white)
  return (
    <ButtonStyle>
      <div className={`${type} banner-btn`}>
        <div className="back_animation" />
        <span className="btn_text">
          {text}{" "}{icon && <ArrowRightOutlined style={{ marginLeft: "5px" }} />}
        </span>
      </div>
    </ButtonStyle>
  );
};

export default ButtonCompo;
