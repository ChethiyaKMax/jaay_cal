import React, { useState } from "react";

import Guy from "../assets/images/guy.png";
import discord from "../assets/images/discord_complete.png";
import fiftyPoints from "../assets/images/50_points.png";

import closeWhite from "../assets/images/close-white.png";

export default function WhitelistingThree() {
  const [twitterFollow, setTwitter] = useState(false);

  const save = () => {
    chrome.storage.local.set({ progress: 100 });
  };

  const closeBtn = ()=>{
    chrome.storage.local.set({closed: true})
  }
  return (
    <div className="whitelisting-container">
      <img src={closeWhite} className="close-white" onClick={()=> closeBtn()}/>
      <div className="follow-wrapper">
        <div className="welcome-message-wrapper">
          <span className="follow-title">
            You are now a member of our Discord Community {`&`} now Whitelisted!
          </span>
          <div className="img-container">
            <img src={Guy} alt="" />
            <img src={discord} alt="" className="completed" />
          </div>
          <div className="total-earned-wrapper">
            <div className="left">
              <span className="text">Total Points Earned</span>
              <span className="highlight">Funky Points</span>
            </div>
            <div className="right">
              <img src={fiftyPoints} alt="" />
            </div>
          </div>
          <button
            className="submit-btn"
            style={{ background: "#E55950" }}
            onClick={() => save()}
          >
            <label>Go to Dashboard</label>
          </button>
        </div>
      </div>
    </div>
  );
}
