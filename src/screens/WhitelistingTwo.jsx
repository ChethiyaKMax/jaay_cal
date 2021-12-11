import React, { useState } from "react";
import Progressbar from "../components/Progressbar.jsx";
import emailIcon from "../assets/images/emailIcon.png";
import pointsSymbol from "../assets/images/point_symbol_small.png";
import submitArrow from "../assets/images/submit_arrow.png";
import Guy from "../assets/images/guy.png";
import emailComplete from "../assets/images/email_complete.png";
import twFollow from "../assets/images/twitter_follow_complete.png";
import twShare from "../assets/images/twitter_share_complete.png";
import discord from "../assets/images/discord_complete.png";

import twFollowIcon from "../assets/images/twitter_follow_btn.png";
import twShareIcon from "../assets/images/twitter_share_btn.png";
import discordIcon from "../assets/images/discord_btn.png";

import closeWhite from "../assets/images/close-white.png";

export default function WhitelistingTwo(props) {
  const [twitterFollow, setTwitter] = useState(false);

  const rewardsArr = [
    {
      progress: 20,
      img: emailComplete,
      title: `Your email ${props.email} has been saved.`,
      nextProgress: 20,
      nextReward: 10,
      buttonIcon: twFollowIcon,
      buttonColor: "#55ADEE",
      buttonText: "Follow Us on Twitter",
    },
    {
      progress: 40,
      img: twFollow,
      title: `Thanks for Following Funky`,
      nextProgress: 20,
      nextReward: 10,
      buttonIcon: twShareIcon,
      buttonColor: "#55ADEE",
      buttonText: "Share Us on Twitter",
    },
    {
      progress: 60,
      img: twShare,
      title: `Thanks for Sharing Funky`,
      nextProgress: 20,
      nextReward: 10,
      buttonIcon: discordIcon,
      buttonColor: "#5C6BC0",
      buttonText: "Join our Discord & Say GM",
    },
  ];
  const getCurrData = () => {
    for (let obj of rewardsArr) {
      console.log(obj);
      if (obj.progress == props.progress) {
        return obj;
      }
    }
  };
  const currData = getCurrData();

  const save = () => {
    chrome.storage.local.set({
      progress: props.progress + currData.nextProgress,
    });
  };

  const closeBtn = ()=>{
    chrome.storage.local.set({closed: true})
  }

  return (
    <div className="whitelisting-container">
      <img src={closeWhite} className="close-white" onClick={()=> closeBtn()}/>
      <div className="follow-wrapper">
        <div className="welcome-message-wrapper">
          <span className="follow-title">{currData.title}</span>
          <div className="img-container">
            <img src={Guy} alt="" />
            <img src={currData.img} alt="" className="completed" />
          </div>
          <Progressbar
            progress={currData.progress}
            nextReward={currData.nextReward}
          ></Progressbar>
          <span className="want-more-points">
            Want <span className="highlight">{`${currData.nextReward} Funky points `}</span> more?
          </span>

          <button
            className="submit-btn"
            style={{ background: currData.buttonColor }}
            onClick={() => save()}
          >
            <img src={currData.buttonIcon} />
            <label>{currData.buttonText}</label>
          </button>

          <span className="maybe-later">maybe later</span>
        </div>
      </div>
    </div>
  );
}
