import React from "react";

import img1 from "../assets/images/rewards/1.png";
import img2 from "../assets/images/rewards/2.png";
import img3 from "../assets/images/rewards/3.png";
import img4 from "../assets/images/rewards/4.png";

import holdIcon from "../assets/images/rewardTypes/hold.png"
import buyIcon from "../assets/images/rewardTypes/buy.png"
import mintIcon from "../assets/images/rewardTypes/mint.png"

let activities = [
  {
    image: img1,
    name: "Mushroom Funky",
    category: "Funky",
    points: 75,
    type: "Hold",
  },
  {
    image: img2,
    name: "Swag Ape",
    category: "BAYC",
    points: 50,
    type: "Buy",
  },
  {
    image: img3,
    name: "Space Cowboy Ape",
    category: "BAYC",
    points: 90,
    type: "Mint",
  },
  {
    image: img4,
    name: "Apolo Ohno",
    category: "Oki's World",
    points: 360,
    type: "Mint",
  },
];
export default function ActivityList() {
  return (
    <div className="activities">
      {activities.map((item) => {
        return (
          <div className="activity">
            <div
              className="activity-image"
              style={{ background: `url(${item.image})` }}
            ></div>
            <div className="activity-details">
              <div className="top">{item.name}</div>
              <div className="bottom">
                <span className="item-category">{item.category}</span>
                <label class="seperator"> | </label>
                <span className="highlight">{item.points}pts Earned</span>
              </div>
            </div>
            <div className="activity-type">
                <div className="icon"><img src={item.type == "Hold" ? holdIcon : item.type == 'Buy' ? buyIcon : mintIcon} alt="" /></div>
                <div className="type">{item.type}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
