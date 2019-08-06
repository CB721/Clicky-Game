import React, { Component } from "react";
import "./style.css";
import Card from "../Card";
import characters from "./characters.json";

// setState() this.state.name = Clint, this.setState({name:"Clint"})

class Main extends Component {
    state = {
        characters,
    };

    characterCount = (id) => {
        // console.log(id);
        // const characters = this.state.characters.filter(character => character.id !== id);
        // this.setState({characters});
    };

    render() {
        return <div onClick={this.characterCount(this.props.id)} className="container">
    {/* randomize character */}
    {/* function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
} */}
            {this.state.characters.map(character => (
                <Card
                    id={character.id}
                    key={character.id}
                    name={character.name}
                    image={character.image}
                />
            ))}
        </div>
    }
}

export default Main;