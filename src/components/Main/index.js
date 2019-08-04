import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import characters from "./characters.json";

// change to class component to handle states
// setState() this.state.name = Clint, this.setState({name:"Clint"})

class Main extends Component {
    // here = () => {
    //     console.log("Here");
    // }
    state = {
        characters
    };

    render() {
        return <div className="container">
            {this.state.characters.map(character => (
                <Card
                    id={character.id}
                    image={character.image}
                />
            ))}

            {/* Populate with 12 cards - use map function */}
        </div>
    }


}

export default Main;
