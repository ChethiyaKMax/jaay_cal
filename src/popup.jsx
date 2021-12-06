import React from "react";
import { render } from "react-dom";
import "./style/main.scss";

import Symbol from "./assets/images/points_symbol.png";

import Header from "./components/Header.jsx";
import Challenge from "./components/Challenge.jsx";
import Activity from "./components/Activity.jsx";

let pointsCount = 362;
let progress = 31;
let rewardPoints = 35;

function Popup() {
  return (
    <div className="parent">
      <Header
        loggedIn={true}
        userName={"Metamask User X"}
        userId={"eX-029acaeD01"}
        notifications={2}
      />
      <div className="points-wrapper">
        <div className="point-count">
          <span className="points">{pointsCount}</span>
          <img src={Symbol} alt="" />
        </div>
        <div className="point-name">
          <span className="caption-text">Funky Points</span>
        </div>
      </div>
      <Challenge prog={progress} points={rewardPoints}></Challenge>
      <Activity></Activity>
      <div className="mint-button-wrapper">
        <button className="mint-button">MINT</button>
      </div>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
