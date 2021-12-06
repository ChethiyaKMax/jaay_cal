import React from "react";
import ActivityList from "./ActivityList.jsx";
import Rewards from "./Rewards.jsx";

export default function Activity() {
  return (
    <div className="activity-container">
      <div className="switch">
        <div className="left">
          <span className="caption-text">Your Activity</span>
          <div className="underline active"></div>
        </div>
        <div className="right">
          <span className="caption-text">Rewards</span>
          <div className="underline"></div>
        </div>
      </div>
      <div className="activity-wrapper">
        <ActivityList></ActivityList>
        <Rewards></Rewards>
      </div>
    </div>
  );
}
