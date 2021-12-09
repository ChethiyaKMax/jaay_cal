import React from "react";
import ps5 from "../assets/images/shop/ps5.png";
import cyberTruck from "../assets/images/shop/cybertruck.png";
import etherium from "../assets/images/shop/etherium.png";

import btc from "../assets/images/shop/btc.png";
import boredApe from "../assets/images/shop/bored_ape_kennel_club.png";
import byacXApe from "../assets/images/shop/bayc_x_ape.png";
import xrp from "../assets/images/shop/xrp.png";
import sol from "../assets/images/shop/sol.png";

import shiba from "../assets/images/shop/shiba.png";
import cryptoPunk1 from "../assets/images/shop/cryptoPunk.png";
import cryptoPunk2 from "../assets/images/shop/cryptoPunk2.png";
import chibi from "../assets/images/shop/chibiApes.png";
import ada from "../assets/images/shop/ada.png";

import hotIcon from "../assets/images/shop/hot.png";
import lockedIcon from "../assets/images/shop/lock.png";

export default function Rewards() {
  const lockedArr = [
    {
      key: 1,
      name: "0.009 BTC",
      img: btc,
      locked: true,
      hot: true,
      points: 1300,
    },
    {
      key: 2,
      name: "Bored Ape Kennel Club",
      img: boredApe,
      locked: true,
      hot: true,
      points: 1200,
    },
    {
      key: 3,
      name: "BAYC - X Ape",
      img: byacXApe,
      locked: true,
      hot: false,
      points: 1000,
    },
    {
      key: 4,
      name: "100 XPR",
      img: xrp,
      locked: true,
      hot: false,
      points: 1100,
    },
    {
      key: 5,
      name: "500 SOL",
      img: sol,
      locked: true,
      hot: false,
      points: 1100,
    },
  ];

  const rewardsArr = [
    {
      key: 1,
      name: "0.08 ETH",
      img: etherium,
      locked: false,
      hot: true,
      points: 700,
    },
    {
      key: 2,
      name: "250 SHIB",
      img: shiba,
      locked: false,
      hot: true,
      points: 700,
    },
    {
      key: 3,
      name: "CryptoPunk",
      img: cryptoPunk1,
      locked: false,
      hot: false,
      points: 700,
    },
    {
      key: 4,
      name: "CryptoPunk",
      img: cryptoPunk2,
      locked: false,
      hot: false,
      points: 700,
    },
    {
      key: 5,
      name: "Chibi Apes",
      img: chibi,
      locked: false,
      hot: false,
      points: 700,
    },
    {
      key: 6,
      name: "800 ADA",
      img: ada,
      locked: false,
      hot: false,
      points: 700,
    },
    {
      key: 7,
      name: "CryptoPunk",
      img: cryptoPunk2,
      locked: false,
      hot: false,
      points: 700,
    },
    {
      key: 8,
      name: "Chibi Apes",
      img: chibi,
      locked: false,
      hot: false,
      points: 700,
    },
    {
      key: 9,
      name: "800 ADA",
      img: ada,
      locked: false,
      hot: false,
      points: 700,
    },
  ];

  return (
    <div className="rewards-wrapper">
      <div className="unlock-title-wrapper">
        <span className="unlock-title">Need 1000+ Funky Points to Unlock</span>
        <span className="unlock-subtitle">
          Prize value range is $10000 - $35000
        </span>
      </div>
      <div className="rewards-container">
        {lockedArr.map((reward, index) => {
          return (
            <div className="reward-box" key={`redeem-button-${index}`}>
              <div className="reward-title">
                {reward.name}
                <img
                  src={hotIcon}
                  style={{ display: reward.hot ? "block" : "none" }}
                />
              </div>
              <div
                className="reward-image"
                style={{ background: `url(${reward.img})` }}
              ></div>
              <div className="reward-points">{`${reward.points}pts`}</div>
              <div className="reward-button">
                <button
                  className="redeem-button"
                  key={`redeem-button-${index}`}
                  onClick={(e) => {
                    updateStorage(reward.points, reward.key);
                  }}
                >
                  Redeem
                </button>
              </div>
              <div
                className="locked"
                style={{ display: reward.locked ? "flex" : "none" }}
              >
                <img src={lockedIcon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="unlock-title-wrapper">
        <span className="unlock-title">Need 600+ Funky Points to Unlock</span>
        <span className="unlock-subtitle">
          Prize value range is $5000 - $7000
        </span>
      </div>
      <div className="rewards-container">
        {rewardsArr.map((reward, index) => {
          return (
            <div className="reward-box" key={`redeem-button-${index}`}>
              <div className="reward-title">
                {reward.name}
                <img
                  src={hotIcon}
                  style={{ display: reward.hot ? "block" : "none" }}
                />
              </div>
              <div
                className="reward-image"
                style={{ background: `url(${reward.img})` }}
              ></div>
              <div className="reward-points">{`${reward.points}pts`}</div>
              <div className="reward-button">
                <button
                  className="redeem-button"
                  key={`redeem-button-${index}`}
                  onClick={(e) => {
                    updateStorage(reward.points, reward.key);
                  }}
                >
                  Redeem
                </button>
              </div>
              <div
                className="locked"
                style={{ display: reward.locked ? "flex" : "none" }}
              >
                <img src={lockedIcon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function checkRedeems(itemIndex) {
  chrome.storage.local.get("redeems", (result) => {
    let redeemsArr = result.redeems;
    for (let item of redeemsArr) {
      console.log(itemIndex, item);
      if (itemIndex === item) console.log("found");
      return true;
    }
    return false;
  });
}
function updateStorage(newPoints, key) {
  chrome.storage.local.get("currPoints", (res) => {
    chrome.storage.local.set({ currPoints: res.currPoints + newPoints });
  });
  chrome.storage.local.get("redeems", (res) => {
    let redeems = res.redeems;
    redeems.push(key);
    chrome.storage.local.set({ redeems: redeems });
  });
}
