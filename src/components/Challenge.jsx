import React, { useState } from "react";
import challengeIcon from "../assets/images/challenge-icon.png";
import infoIcon from "../assets/images/info.png";
import closeBtn from "../assets/images/closeBtn.png";


export default function Challenges(props){
  
  const [isOpen, setOpen] = useState(true);

  const challenge = () =>{
    setOpen(status => !status)
  }

    return(
        <div className="funky-challenges" style={{display: isOpen ? 'flex': 'none'}}>
        <div className="challenges-wrapper">
          <div className="close-btn" onClick={challenge}>
            <img src={closeBtn} alt="" />
          </div>
          <div className="challenges-container">
            <div className="challenge-title">
              <img src={challengeIcon} alt="" />
              <span className="challenge-title-text">Funky Challenges</span>
              <img src={infoIcon} alt="" />
            </div>
            <div className="message-container">
              <span className="caption-text">
                Invite 20 friends to be Funky
              </span>
            </div>
            <div className="challenge-progressbar">
              <div className="top">
                <span className="progressbar-text">
                  <span className="highlight">{`${props.prog}%`}</span> Completed
                </span>
                <span className="progressbar-text">
                  Next Reward:{" "}
                  <span className="highlight">{`${props.points}pts`}</span>
                </span>
              </div>
              <div className="bottom">
                <div className="progressbar">
                  <div
                    className="progress"
                    id="challengeProgress"
                    style={{ width: `${props.points}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}