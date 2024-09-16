import React, {useState } from "react";
import { render } from "react-dom";
import "./style/main.scss";

import Whitelisting from "./screens/Whitelisting.jsx";
import WhitelistingTwo from "./screens/WhitelistingTwo.jsx";
import WhitelistingThree from "./screens/WhitelistingThree.jsx";
import Main from "./screens/Main.jsx";
import StartPage from "./screens/StartPage.jsx";
import InviteFriends from "./screens/InviteFriends.jsx";


function Popup() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [progress, setProgress] = useState(0);
  const [userEmail, setUserEmail] = useState('');
  const [closed, setClosed] = useState(false);
  const [complete, setComplete] = useState(false);
;
  chrome.storage.local.get(["userLogin", "progress", "userEmail", "closed", "whitelistDone"], (res) => {
    if (res.userLogin === undefined) {
      setLoggedIn(false);
    } else {
      setLoggedIn(res.userLogin);
    }
    if(res.progress === undefined){
      setProgress(0)
      setComplete(false)
    }else{
      setProgress(res.progress)
      if(progress < 100) setComplete(false)
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
    if(res.whitelistDone === undefined){
      setComplete(false);
    }else{
      setComplete(res.whitelistDone)
    }

  });
  chrome.storage.onChanged.addListener((result) => {
    console.log(result)
    if(result.userLogin) setLoggedIn(result.userLogin.newValue);
    if(result.progress) setProgress(parseInt(result.progress.newValue));
    if(result.userEmail) setUserEmail(result.userEmail.newValue);
    if(result.closed) setClosed(result.closed.newValue);
    if(result.whitelistDone) setComplete(result.whitelistDone.newValue);
  });
  console.log(progress);
  return (
    <div className="parent">
      {!isLoggedIn && <StartPage />}
      {isLoggedIn && progress == 0 && !closed && <Whitelisting />}
      {isLoggedIn && progress > 0 && progress < 80 && !closed && <WhitelistingTwo progress={progress} email={userEmail} />}
      {isLoggedIn && progress == 80 && !closed && <InviteFriends progress={progress} refUrl={'funky.com/referral/00223'} />}
      {isLoggedIn && progress == 100 && !closed && !complete && <WhitelistingThree  />}
      {isLoggedIn && (progress == 100 || closed) && complete && <Main session={isLoggedIn}/>}
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
