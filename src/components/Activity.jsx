import React, { useState } from "react";
import ActivityList from "./ActivityList.jsx";
import Rewards from "./Rewards.jsx";

export default function Activity() {
  const [isSide, setSide] = useState(false);

  return (
    <div className="activity-container">
      <div className="switch">
        <div className="left">
          <span className="caption-text" onClick={() => setSide(false)}>
            Your Activity
          </span>
          <div className="underline">
            <div className={!isSide ? "colorful active" :"colorful"}></div>
          </div>
        </div>
        <div className="right">
          <span className="caption-text" onClick={() => setSide(true)}>
            Rewards
          </span>
          <div className="underline">
            <div className={isSide ? "colorful active" :"colorful"}></div>
          </div>
        </div>
      </div>
      <div
        className={
          isSide ? "activity-wrapper reward-active" : "activity-wrapper"
        }
      >
        <ActivityList></ActivityList>
        <Rewards></Rewards>
      </div>
    </div>
  );
}
