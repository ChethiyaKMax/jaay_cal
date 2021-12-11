import React, { useState } from "react";
import challengeIcon from "../assets/images/challenge-icon.png";
import infoIcon from "../assets/images/info.png";
import closeBtn from "../assets/images/closeBtn.png";
import rightArrow from "../assets/images/right_arrow.png";

const rewardsArr = [
  {
    progress: 0,
    nextProgress: 20,
    nextReward: 10,
    buttonText: "Enter your Email",
  },
  {
    progress: 20,
    nextProgress: 20,
    nextReward: 10,
    buttonText: "Follow Us on Twitter",
  },
  {
    progress: 40,
    nextProgress: 20,
    nextReward: 10,
    buttonText: "Share Us on Twitter",
  },
  {
    progress: 60,
    nextProgress: 20,
    nextReward: 10,
    buttonText: "Join our Discord & Say GM",
  },
  {
    progress: 100,
    nextProgress: 0,
    nextReward: 0,
    buttonText: "Completed!",
  },
];

export default function Challenges(props) {
  const [isOpen, setOpen] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currStat, setCurrStat] = useState("");
  const [nextReward, setReward] = useState(0);

  const challenge = () => {
    setOpen((status) => !status);
  };

  const getStatus = () => {
    chrome.storage.local.get("progress", (res) => {
      if (res.progress === undefined) {
        setProgress(0);
      } else {
        setProgress(res.progress);
      }
      findNextStep();
    });
  };

  const findNextStep = () => {
    for (let obj of rewardsArr) {
      console.log(obj.progress, progress);
      if (obj.progress === progress) {
        setCurrStat(obj.buttonText);
        setReward(obj.nextReward);
      }
    }
  };

  const goButton = () => {
    chrome.storage.local.set({ closed: false });
  };

  getStatus();

  return (
    <div
      className="funky-challenges"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="challenges-wrapper">
        <div className="close-btn" onClick={challenge}>
          <img src={closeBtn} alt="" />
        </div>
        <div className="challenges-container">
          <div className="challenge-title">
            <img src={challengeIcon} alt="" />
            <span className="challenge-title-text">Mission: Whitelist</span>
            <img src={infoIcon} alt="" />
          </div>
          <div className="message-container">
            <span className="caption-text">Challenge: {currStat}</span>
            <span
              className="go-button"
              onClick={() => goButton()}
              style={{ display: progress == 100 ? "none" : "flex" }}
            >
              GO <img src={rightArrow} alt="" />
            </span>
          </div>
          <div className="challenge-progressbar">
            <div className="top">
              <span className="progressbar-text">
                <span className="highlight">{`${progress}%`}</span> Completed
              </span>
              <span
                className="progressbar-text"
                style={{ display: progress == 100 ? "none" : "flex" }}
              >
                Next Reward:{" "}
                <span className="highlight">{`${nextReward}pts`}</span>
              </span>
            </div>
            <div className="bottom">
              <div className="progressbar">
                <div
                  className="progress"
                  id="challengeProgress"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
