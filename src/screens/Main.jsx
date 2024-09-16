import React, {useState } from "react";
import { render } from "react-dom";
import "../style/main.scss";

import Symbol from "../assets/images/points_symbol.png";
import plus from "../assets/images/plus.png";

import Header from "../components/Header.jsx";
import Challenges from "../components/Challenge.jsx";
import Activity from "../components/Activity.jsx";
import HintPopup from "../components/HintPopup.jsx";

//let pointsCount = 362;
let progress = 31;
let rewardPoints = 35;
let loggedIn = false;

export default function Main(props) {

  const [pointsCount, setPointsCount] = useState(0);

  chrome.storage.onChanged.addListener((result) => {
    if (result.currPoints) setPointsCount(result.currPoints.newValue);
  });

  chrome.storage.local.get(["currPoints"], (res) => {
    if (res.currPoints != undefined) setPointsCount(res.currPoints);
  });

  return (
    <div>
      <Header
        loggedIn={props.session}
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
      <div className="scroller">
        <Challenges ></Challenges>
        <Activity></Activity>
      </div>
      <HintPopup></HintPopup>
      <div className="mint-button-wrapper">
        <button className="mint-button">MINT</button>
      </div>
    </div>
  );
}
