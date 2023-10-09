import React, { useState, useEffect } from "react";
import { CariousalStyle } from "./styles";

const CariousalCompo = (props) => {
  const { testCard } = props;
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([...testCard]);

  if (count < 10) {
    setTimeout(() => {
      nextFun()
    }, 2800)
  }
  const nextFun = () => {
    setCount(count >= testCard.length - 1 ? 0 : count + 1);
  };
  useEffect(() => {
    array_move();
  }, [count]);

  function array_move() {
    setShow(false);
    const arrL = arr.length;
    const itm = arr[0];
    arr.splice(0, 1);
    arr.splice(arrL, 1, {
      img: itm?.img
    });
    setTimeout(() => {
      setShow(true);
      setArr([...arr]);
    });
  }

  return (
    <CariousalStyle>
      <div class="container">
        <div class="card-stack">
          <ul class="card-list">
            {arr
              ?.filter((item) => item !== undefined)
              .map((item, i) => (
                <li
                  className={i === 0 && show ? 'card transformThis' : i !== 0 && show ? 'card transformPrev' : 'card'}
                >
                  <img src={item?.img} alt={item?.img} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </CariousalStyle>
  );
};

export default CariousalCompo;
