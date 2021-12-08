import React, { useState } from "react";
import bulb from "../assets/images/bulb.png";

export default function HintPopup(props) {
  const [p1, setPopOne] = useState(false);
  const [p2, setPopTwo] = useState(false);

  return (
    <>
      <div
        className={p1 ? "hint-bubble hidden" : "hint-bubble"}
        onClick={(e) => {
          setPopOne(true);
          setDisplay(e);
        }}
      >
        <img src={bulb} alt="" />
        <span>{"Another Funky Points for this"}</span>
      </div>
      <div
        className={p2 ? "hint-bubble-2 hidden" : "hint-bubble-2"}
        onClick={(e) => {
          setPopTwo(true);
          setDisplay(e);
        }}
      >
        <img src={bulb} alt="" />
        <span>{"Another Funky Points for this"}</span>
      </div>
    </>
  );
}

function setDisplay(e) {
  setTimeout((e.target.style.display = "none"), 1000);
}
