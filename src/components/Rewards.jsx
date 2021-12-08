import React from "react";
import ps5 from "../assets/images/shop/ps5.png";
import cyberTruck from "../assets/images/shop/cybertruck.png";
import etherium from "../assets/images/shop/etherium.png";

export default function Rewards() {
  const rewardsArr = [
    {
      key: 1,
      name: "Playstation 5",
      img: ps5,
      points: 2300,
    },
    {
      key: 2,
      name: "Cybertruck",
      img: cyberTruck,
      points: 8600,
    },
    {
      key: 3,
      name: "0.08ETH",
      img: etherium,
      points: 2500,
    },
    {
      key: 4,
      name: "Playstation 5",
      img: ps5,
      points: 2300,
    },
    {
      key: 5,
      name: "Cybertruck",
      img: cyberTruck,
      points: 8600,
    },
    {
      key: 6,
      name: "0.08ETH",
      img: etherium,
      points: 2500,
    },
  ];

  return (
    <div className="rewards-container">
      {rewardsArr.map((reward, index) => {
        return (
          <div className="reward-box" key={`redeem-button-${index}`}>
            <div className="reward-title">{reward.name}</div>
            <div
              className="reward-image"
              style={{ background: `url(${reward.img})` }}
            ></div>
            <div className="reward-points">{`${reward.points}pts`}</div>
            <div className="reward-button">
              <button
                className="redeem-button"
                key={`redeem-button-${index}`}
                onClick={(e) => {updateStorage(reward.points, reward.key)}}
              >
                Redeem
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function checkRedeems(itemIndex){
  chrome.storage.local.get("redeems", (result) => {
    let redeemsArr = result.redeems;
    for (let item of redeemsArr) {
      console.log(itemIndex, item)
      if (itemIndex === item) console.log('found'); return true;
    }
    return false;
    
  });
};
function updateStorage(newPoints, key) {
  chrome.storage.local.get("currPoints", (res) => {
    chrome.storage.local.set({ currPoints: res.currPoints + newPoints });
  });
  chrome.storage.local.get("redeems", (res) => {
    let redeems = res.redeems;
    redeems.push(key)
    chrome.storage.local.set({ redeems: redeems });
  });
}
