import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/sonic">Sonic Says</a>
        </li>
        <li className="title" id={props.titleFlash}>
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