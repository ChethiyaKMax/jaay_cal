import React, { useState } from "react";
import { render } from "react-dom";
import "./style/main.scss";

import Symbol from "./assets/images/points_symbol.png";
import plus from "./assets/images/plus.png";

import Header from "./components/Header.jsx";
import Challenge from "./components/Challenge.jsx";
import Activity from "./components/Activity.jsx";
import HintPopup from "./components/HintPopup.jsx";
import StartPage from "./components/StartPage.jsx";

//let pointsCount = 362;
let progress = 31;
let rewardPoints = 35;
let loggedIn = true;

function Popup() {
  const [pointsCount, setPointsCount] = useState(363);

  const getFromDb = () => {
    chrome.storage.local.get("currPoints", (result) => {
      console.log(result);
      if (Object.keys(result).length === 0) return;
      let points = result.currPoints;
      setPointsCount(points);
    });
  };

  chrome.storage.onChanged.addListener((result) => {
    getFromDb();
    setPointsCount(result.currPoints.newValue);
  });

  getFromDb();

  if (!loggedIn) {
    return (
      <div className="parent">
        <StartPage />
      </div>
    );
  }
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
      <HintPopup></HintPopup>
      <div className="add-nft-wrapper">
        <img src={plus} alt="" />
        <span className="add-nft">Add NFT</span>
      </div>
      <div className="mint-button-wrapper">
        <button className="mint-button">MINT</button>
      </div>
    </div>
  );
}


render(<Popup />, document.getElementById("react-target"));
