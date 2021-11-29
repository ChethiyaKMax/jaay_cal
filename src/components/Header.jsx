import React from "react";
import logo from "../assets/images/logo.png";
import bell from "../assets/images/bell.png"

export default function Header({ loggedIn, userName, userId, notifications }) {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img
            src={logo}
            alt=""
            style={{display: `${loggedIn ? "block" : "none"}`}}
          />
        </div>
        <div className="user">
          <div className="metaMaskUsr">
            <span className="user-name">{userName}</span>
          </div>
          <div className="usrId">
            <span className="user-id">{userId}</span>
          </div>
        </div>
        <div className="notifications">
          <div className="notiCount"><span>{notifications}</span></div>
          <img
            src={bell}
            alt=""
            style={{display: `${loggedIn ? "block" : "none"}`}}
          />
        </div>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
}
