import React from "react";
import ps5 from "../assets/images/shop/ps5.png";
import cyberTruck from "../assets/images/shop/cybertruck.png";
import etherium from "../assets/images/shop/etherium.png";

export default function Rewards() {
  const rewardsArr = [
    {
      name: "Playstation 5",
      img: ps5,
      points: 2300,
    },
    {
      name: "Cybertruck",
      img: cyberTruck,
      points: 8600,
    },
    {
      name: "0.08ETH",
      img: etherium,
      points: 2500,
    },
    {
      name: "Playstation 5",
      img: ps5,
      points: 2300,
    },
    {
      name: "Cybertruck",
      img: cyberTruck,
      points: 8600,
    },
    {
      name: "0.08ETH",
      img: etherium,
      points: 2500,
    },
  ];

  return (
    <div className="rewards-container">
      {rewardsArr.map((reward, index) => {
        return (
          <div className="reward-box">
            <div className="reward-title">{reward.name}</div>
            <div className="reward-image" style={{background: `url(${reward.img})`}}></div>
            <div className="reward-points">{`${reward.points}pts`}</div>
            <div className="reward-button">
                <button className="redeem-button" key={`redeem-button-${index}`}>Redeem</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
