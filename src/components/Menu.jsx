import React, { useState } from "react";


import funkyLogo from "../assets/images/menu-logo.png";
import menuMissions from "../assets/images/menu_missions.png";
import menuRef from "../assets/images/menu_ref.png";
import menuRewards from "../assets/images/menu_rewards.png";
import menuAbout from "../assets/images/menu_about.png";
import menuClose from "../assets/images/menu_close.png";
import Referral from "../screens/Referral.jsx";

export default function Menu(props) {
  const [isReferral, setReferral] = useState(false);

  const referral = () => {
    setReferral(!isReferral);
  };

  return (
    <>
      {isReferral && (
        <Referral
          referral={referral}
          setReferral={setReferral}
          isReferral={isReferral}
        />
      )}

      <div className={props.isOpen ? "menu-wrapper active" : "menu-wrapper"}>
        <div
          className={props.isOpen ? "menu-container active" : "menu-container"}
        >
          <div className="menu">
            <img
              src={menuClose}
              alt=""
              className="close-button"
              onClick={() => props.openMenu()}
            />
            <img className="menu-logo" src={funkyLogo} alt="" />
            <div className="menu-links">
              <div className="menu-item">
                <img src={menuMissions} alt="" />
                <div className="menu-item-text">Missions</div>
              </div>
              <div className="menu-item">
                <img src={menuRef} alt="" />
                <div
                  className="menu-item-text"
                  onClick={() => {
                    referral();
                  }}
                >
                  Referrals
                </div>
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
    </>
  );
}
