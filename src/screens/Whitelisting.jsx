import React from "react";
import Progressbar from "../components/Progressbar.jsx";
import emailIcon from "../assets/images/emailIcon.png";
import pointsSymbol from "../assets/images/point_symbol_small.png";
import submitArrow from "../assets/images/submit_arrow.png";

export default function Whitelisting() {
  return (
    <div className="whitelisting-container">
      <div className="email-input-wrapper">
        <div className="welcome-message-wrapper">
          <span className="welcome-text">Welcome,</span>
          <span className="welcome-username">ex-029acaeD01</span>
          <span className="welcome-bold-text">
            Want to Get Whitelisted? <br />
            You need 50 Funky Points,
          </span>
          <div className="points-wrapper">
            <div className="background-circle">
              <span className="points">0</span>
              <img className="currency-symbol" src={pointsSymbol} />
            </div>
          </div>
          <span className="points-name">Funky Points</span>
          <Progressbar progress={0} nextReward={10}></Progressbar>
          <span className="want-more">
            You need 50 Funky Points to Join the Whitelist
          </span>
          <div className="email-input-container">
            <div className="img-container">
              <img src={emailIcon} alt="" className="email-icon" />
            </div>
            <input type="text" className="email-input" placeholder="Enter your email" />
            <button className="submit-email"><img src={submitArrow} /></button>
          </div>
          <span className="maybe-later">maybe later</span>
        </div>
      </div>
    </div>
  );
}
