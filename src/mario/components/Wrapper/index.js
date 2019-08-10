import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper">
    <nav className="navbar-sonic">
      <ul>
        <li className="brand-sonic">
          <a href="/mario">Mario Memory</a>
        </li>
        <li className="title-sonic" id={props.titleFlash}>
          {props.title}
        </li>
        <li className="scores-sonic">
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  </div>
}

export default Wrapper;