import React from "react";
import WhiteLogo from "../assets/images/funky_logo_white.png";
import closeWhite from "../assets/images/close-white.png";
import backgroundImg from "../assets/images/whitelist_background.png";
import Progressbar from "../components/Progressbar.jsx";

import fbIcon from "../assets/images/social/facebook.png"
import instaIcon from "../assets/images/social/instagram.png"
import twitterIcon from "../assets/images/social/twitter.png"
import tiktokIcon from "../assets/images/social/tiktok.png"
import ytIcon from "../assets/images/social/youtube.png"

export default function InviteFriends(props) {
  const saveProgress = () => {
    chrome.storage.local.set({ progress: 100, whitelistDone: false });
  };

  const closeBtn = () => {
    chrome.storage.local.set({ closed: true });
  };

  return (
    <div className="invite-container">
      <img
        src={closeWhite}
        className="close-white"
        onClick={() => closeBtn()}
      />
      <div className="invite-content-wrapper">
        <div
          className="top-section"
          style={{ background: `url(${backgroundImg})` }}
        >
          <span className="caption-text">
            Invite 5 Friends and Earn 10 Funky Points Each When They Whitelist
            Too
          </span>
          <img src={WhiteLogo} className="white-logo" alt="" />
          <div className="ref-link-container">
            <span className="ref-link">{props.refUrl}</span>
          </div>
          <button className="copy-button" onClick={()=> saveProgress()}>Copy URL</button>
          <div className="progressbar-wrapper">
            <Progressbar progress={80} nextReward={10} />
          </div>
        </div>
        <div className="bottom-section">
            <div className="social-icon-container">
                <img src={instaIcon} alt="" />
                <img src={fbIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={tiktokIcon} alt="" />
                <img src={ytIcon} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
