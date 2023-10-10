import React, { useState, useEffect } from "react";
import { CariousalStyle } from "./styles";

const CariousalCompo = (props) => {
  const { testCard } = props;
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([...testCard]);

  useEffect(() => {
    if (count < 10) {
      setTimeout(() => {
        nextFun()
      }, 5000)
    }
  }, [show])

  const nextFun = () => {
    setCount(count >= testCard.length - 1 ? 0 : count + 1);
  };

  useEffect(() => {
    array_move();
  }, [count]);

  function array_move() {
    const arrL = arr.length;
    const itm = arr[0];
    arr.splice(0, 1);
    arr.splice(arrL, 1, {
      img: itm?.img
    });
    setTimeout(() => {
      setArr([...arr]);
      setShow(false);
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    });
  }, [arr])

  return (
    <CariousalStyle>
      <div class="container">
        <div class="card-stack">
          <ul class="card-list">
            {arr
              ?.filter((item) => item !== undefined)
              .map((item, i) => (
                <li
                  key={i}
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
