import React from "react";
import "./style.css";

function Card(props) {
  

  return (
    <div className="card shake">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.characterSelection(props.id, props.name)} />
      </div>
    </div>
  );
}

export default Card;
