import React from "react";
import "./style.css";

function Card(props) {
  let idArr = [];
  let currentScore = 0;

  const characterSelction = (id, name) => {
    if (id === idArr[0]) {
      alert("You already picked " + name + "!\nTry again!");
      for (let i = 0; i < idArr.length; i++) {
        idArr = [];
        currentScore = 0;
      }
    } else {
      idArr.push(id);
      console.log(idArr);
      currentScore += 1;
      console.log(currentScore);
    }
  };

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => characterSelction(props.id, props.name)} />
      </div>
    </div>
  );
}

export default Card;
