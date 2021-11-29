import React from "react";
import { render } from "react-dom";
import './style/main.scss';

import Header from "./components/Header.jsx";

function Popup() {
  return (
    <Header loggedIn={true} userName={'Metamask User X'} userId={'eX-029acaeD01'} notifications={2}/>
  )
}

render(<Popup />, document.getElementById("react-target"));
