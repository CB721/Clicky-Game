import React from "react";
import "./style.css";

function Card(props) {

  const characterSelction = (id) => {
    console.log(id);
  };
    return (
        <div className="card popout">
          <div className="img-container">
            <img alt={props.name} src={props.image} onClick={() => characterSelction(props.id)}/>
          </div>
        </div>
      );
    
}

export default Card;
