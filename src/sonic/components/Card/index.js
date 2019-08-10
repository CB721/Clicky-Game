import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" id={props.shake}>
      <div className="img-container">
        <img id="character-cards-sonic" alt={props.name} src={props.image} onClick={() => props.characterSelection(props.id, props.name)} />
      </div>
    </div>
  );
}

export default Card;
