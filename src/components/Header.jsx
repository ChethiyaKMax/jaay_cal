import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import bell from "../assets/images/bell.png";

import Menu from "./Menu.jsx";

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
      <Menu openMenu={openMenu} setOpen={setOpen} isOpen={isOpen}/>
    </nav>
  );
}
