import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import characters from "./characters.json";

// setState() this.state.name = Clint, this.setState({name:"Clint"})

class Main extends Component {
    state = {
        characters
    };

    characterCount = (id) => {
        const characters = this.state.characters.filter(character => character.id !== id);
        this.setState({characters});
    };

    render() {
        return <div onClick={this.characterCount} className="container">
            {this.state.characters.map(character => (
                <Card
                    id={character.id}
                    key={character.id}
                    image={character.image}
                />
            ))}
        </div>
    }
}

export default Main;
