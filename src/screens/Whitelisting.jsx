import React, { useState } from "react";
import Progressbar from "../components/Progressbar.jsx";
import emailIcon from "../assets/images/emailIcon.png";
import pointsSymbol from "../assets/images/point_symbol_small.png";
import submitArrow from "../assets/images/submit_arrow.png";

import closeWhite from "../assets/images/close-white.png";

export default function Whitelisting() {
  const [email, setEmail] = useState("");

  const getEmail = (evt) => {
    setEmail(evt.target.value);
    console.log(evt.target.value);
  };

  const saveEmail = () => {
    chrome.storage.local.set({ userEmail: email, progress: 20 });
  };

  const closeBtn = ()=>{
    chrome.storage.local.set({closed: true})
  }

  return (
    <div className="whitelisting-container">
      <img src={closeWhite} className="close-white" onClick={()=> closeBtn()}/>
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
          <span className="want-more" style={{ marginTop: "27.74px" }}>
            You need 50 Funky Points to Join the Whitelist
          </span>
          <div className="email-input-container">
            <div className="img-container">
              <img src={emailIcon} alt="" className="email-icon" />
            </div>
            <input
              type="text"
              className="email-input"
              placeholder="Enter your email"
              onChange={(e) => getEmail(e)}
            />
            <button className="submit-email" onClick={() => saveEmail()}>
              <img src={submitArrow} />
            </button>
          </div>
          <span className="maybe-later">maybe later</span>
        </div>
      </div>
    </div>
  );
}
