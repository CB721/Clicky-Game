import React from "react";
import "./style.css";

function Wrapper() {
  return <div className="wrapper">
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <li>
          Click an image to begin!
        </li>
        <li>
          Score: 0 | Top Score: 0
        </li>
      </ul>
    </nav>
  </div>

}

export default Wrapper;
