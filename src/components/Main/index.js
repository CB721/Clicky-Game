import React, { Component } from "react";
import "./style.css";
import Card from "../Card";

class Main extends Component {
    // on page load
    componentWillMount = () => {
        // shuffle characters
        this.props.shuffleArray(this.props.characters);
    }

    render() {
        return <div className={"container " + (this.props.shake ? 'shake' : null)}>
            {this.props.characters.map(character => (
                <Card
                    characterSelection={this.props.characterSelection}
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