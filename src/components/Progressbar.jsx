import React from "react";

export default function Progressbar(props) {
  return (
    <div className="progressbar-container">
      <div className="top">
        <div className="left">
          <span className="completed">{`${props.progress}%`}</span>
          <span className="light-text">Completed</span>
        </div>
        <div className="right">
          <span className="light-text">Next Reward: </span>
          <span className="next-reward">{`${props.nextReward} pts`}</span>
        </div>
      </div>
      <div className="bottom">
        <div className="progress-background">
          <div className="progress" style={{width: 3.24 * props.progress}}></div>
        </div>
      </div>
    </div>
  );
}
