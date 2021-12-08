import React from "react";
import Header from "./Header.jsx";
import Logo from "../assets/images/funky-ext.png";
import Arrow from "../assets/images/arrow.png";

import ps5 from "../assets/images/shop/ps5.png";
import eth from "../assets/images/shop/etherium.png";
import cybertruck from "../assets/images/shop/cybertruck.png";


function login(){
    chrome.storage.local.set({userLogin: true})
}

export default function StartPage() {
  const rewardsArr = [
    {
      img: ps5,
      title: "Playstation 5",
      points: 2300,
    },
    {
      img: eth,
      title: "0.08ETH",
      points: 2500,
    },
    {
      img: cybertruck,
      title: "Cybertruck",
      points: 8600,
    },
    {
      img: ps5,
      title: "Playstation 5",
      points: 2300,
    },
    {
      img: eth,
      title: "0.08ETH",
      points: 2500,
    },
    {
      img: cybertruck,
      title: "Cybertruck",
      points: 8600,
    },
  ];

  return (
    <div className="start-page-wrapper">
      <Header loggedIn={false} />
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="caption-container">
        <span className="caption">
          Earn Funky points and enjoy these crazy rewards
        </span>
      </div>
      <div className="corousel">
        <div className="top">
          <span className="bold-text">Shop Rewards</span>
          <span className="bold-text">
            See more<img src={Arrow}></img>
          </span>
        </div>
        <div className="bottom">
          {rewardsArr.map((reward, index) => {
            return (
              <div className="reward-box" key={index}>
                <div
                  className="reward-image"
                  style={{ background: `url(${reward.img})` }}
                ></div>
                <div className="reward-title">{reward.title}</div>
                <div className="reward-points">{reward.points}</div>
              </div>
            );
          })}
        </div>

        <div className="first-connect-container">
          <div className="top">
            You will get <span className="highlight">15 Funky Points </span>for your first connect
          </div>
          <div className="bottom">
              <button onClick={()=>login()}>CONNECT TO METAMASK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
