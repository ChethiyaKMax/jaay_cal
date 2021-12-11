import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import bell from "../assets/images/bell.png";

import funkyLogo from "../assets/images/menu-logo.png";
import menuMissions from "../assets/images/menu_missions.png";
import menuRef from "../assets/images/menu_ref.png";
import menuRewards from "../assets/images/menu_rewards.png";
import menuAbout from "../assets/images/menu_about.png";
import menuClose from "../assets/images/menu_close.png";

export default function Header({ loggedIn, userName, userId, notifications }) {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt=""
            style={{ display: `${loggedIn ? "block" : "none"}` }}
          />
        </div>
        <div className="user">
          <div className="metaMaskUsr">
            <span
              className="user-name"
              style={{ display: `${loggedIn ? "block" : "none"}` }}
            >
              {userName}
            </span>
          </div>
          <div className="usrId">
            <span
              className="user-id"
              style={{ display: `${loggedIn ? "block" : "none"}` }}
            >
              {userId}
            </span>
          </div>
        </div>
        <div className="notifications">
          <div
            className="notiCount"
            style={{ display: `${loggedIn ? "flex" : "none"}` }}
          >
            <span>{notifications}</span>
          </div>
          <img
            src={bell}
            alt=""
            style={{ display: `${loggedIn ? "block" : "none"}` }}
          />
        </div>
        <div className="burger" onClick={() => openMenu()}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={isOpen ? "menu-wrapper active" : "menu-wrapper"}>
        <div
          className={isOpen ? "menu-container active" : "menu-container"}
        >
          <div className="menu">
            <img src={menuClose} alt="" className="close-button" onClick={()=> openMenu()}/>
            <img className="menu-logo" src={funkyLogo} alt="" />
            <div className="menu-links">
              <div className="menu-item">
                <img src={menuMissions} alt="" />
                <div className="menu-item-text">Missions</div>
              </div>
              <div className="menu-item">
                <img src={menuRef} alt="" />
                <div className="menu-item-text">Referrals</div>
              </div>
              <div className="menu-item">
                <img src={menuRewards} alt="" />
                <div className="menu-item-text">My Rewards</div>
              </div>
              <div className="menu-item">
                <img src={menuAbout} alt="" />
                <div className="menu-item-text">About Funky</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
