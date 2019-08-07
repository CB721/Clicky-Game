import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Mario Memory</a>
        </li>
        <li className="title">
          {props.title}
        </li>
        <li className="scores">
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  </div>

}

export default Wrapper;