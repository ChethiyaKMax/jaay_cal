import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style/main.scss";

import Whitelisting from "./screens/Whitelisting.jsx";
import Main from "./screens/Main.jsx";
import StartPage from "./screens/StartPage.jsx";

function Popup() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  chrome.storage.local.get("userLogin", (res) => {
    if (res.userLogin === undefined) {
      setLoggedIn(false);
    } else {
      setLoggedIn(res.userLogin);
    }
  });
  chrome.storage.onChanged.addListener((result) => {
    console.log(result);
    if(result.userLogin) setLoggedIn(result.userLogin.newValue);
  });

  return (
    <div className="parent">
      {!isLoggedIn && <StartPage />}
      {isLoggedIn && <Whitelisting />}
      {/* {isLoggedIn && <Main session={isLoggedIn}/>} */}
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
