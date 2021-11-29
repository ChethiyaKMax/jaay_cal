import React from "react";
import { render } from "react-dom";

function Popup() {
  return <div className="test">Hello</div>;
}

render(<Popup />, document.getElementById("react-target"));
