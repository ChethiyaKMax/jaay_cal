import React from "react";
import { render } from "react-dom";
import "./style/main.scss";

import Symbol from "./assets/images/points_symbol.png";
import challengeIcon from "./assets/images/challenge-icon.png";
import infoIcon from "./assets/images/info.png";
import closeBtn from "./assets/images/closeBtn.png";

import Header from "./components/Header.jsx";

let pointsCount = 362;

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
      <div className="funky-challenges">
        <div className="challenges-wrapper">
          <div className="challenges-container">
            <div className="challenge-title">
              <img src={challengeIcon} alt="" />
              <span className="challenge-title-text">Funky Challenges</span>
              <img src={infoIcon} alt="" />
            </div>
            <div className="close-btn">
              <img src={closeBtn} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
