import React from "react";
import "./style.css";

// change to class component to handle states
// setState() this.state.name = Clint, this.setState({name:"Clint"})
function here(){
    console.log("Here");
}

function Main() {
    return <div onClick={here} className="container">

    
        {/* Populate with 12 cards - use map function */}
    </div>
    
}

export default Main;
