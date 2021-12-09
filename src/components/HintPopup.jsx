import React, { useState } from "react";
import bulb from "../assets/images/bulb.png";

export default function HintPopup(props) {
  const [display, setDisplay] = useState('flex')
  const [p2, setPopTwo] = useState(false);

  const changeDisplay = ()=>{
    setTimeout(()=>{
      setDisplay('none')
    },1000)
  }

  return (
    <>
      <div
        className={p2 ? "hint-bubble-2 hidden" : "hint-bubble-2"}
        onClick={(e) => {
          setPopTwo(true);
          changeDisplay();
        }} style={{display: display}}
      >
        <img src={bulb} alt="" />
        <span>{"Another Funky Points for this"}</span>
      </div>
    </>
  );
}

