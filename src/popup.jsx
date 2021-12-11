import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style/main.scss";

import Whitelisting from "./screens/Whitelisting.jsx";
import WhitelistingTwo from "./screens/WhitelistingTwo.jsx";
import WhitelistingThree from "./screens/WhitelistingThree.jsx";
import Main from "./screens/Main.jsx";
import StartPage from "./screens/StartPage.jsx";


function Popup() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [closed, setClosed] = useState(false);
;
  chrome.storage.local.get(["userLogin", "progress", "userEmail", "closed"], (res) => {
    if (res.userLogin === undefined) {
      setLoggedIn(false);
    } else {
      setLoggedIn(res.userLogin);
    }
    if(res.progress === undefined){
      setProgress(0)
    }else{
      setProgress(res.progress)
    }
    if(res.userEmail === undefined){
      setProgress(0)
    }else{
      setUserEmail(res.userEmail)
    }
    if(res.closed === undefined){
      setClosed(false)
    }else{
      setClosed(res.closed);
    }

  });
  chrome.storage.onChanged.addListener((result) => {
    console.log(result)
    if(result.userLogin) setLoggedIn(result.userLogin.newValue);
    if(result.progress) setProgress(parseInt(result.progress.newValue));
    if(result.userEmail) setUserEmail(result.userEmail.newValue);
    if(result.closed) setClosed(result.closed.newValue);
  });
  console.log(progress);
  return (
    <div className="parent">
      {!isLoggedIn && <StartPage />}
      {isLoggedIn && progress == 0 && !closed && <Whitelisting />}
      {isLoggedIn && progress > 0 && progress < 80 && !closed && <WhitelistingTwo progress={progress} email={userEmail} />}
      {isLoggedIn && progress == 80 && !closed && <WhitelistingThree  />}
      {isLoggedIn && (progress == 100 || closed) && <Main session={isLoggedIn}/>}
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
