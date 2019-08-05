import React from "react";
import "./style.css";

function Card(props) {
  const idArr = [];
  // let score = 0;

  const characterSelction = (id) => {
    if (id === idArr[0]) {
      alert("You lose!");
      for (let i = 0; i < idArr.length; i++) {
        idArr.pop(i);
      }
    } else {
      // score += 1;
      idArr.pop();
      // console.log(idArr);
      idArr.push(id);
      // console.log(score);
    }
  };

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => characterSelction(props.id)} />
      </div>
    </div>
  );
}

export default Card;
