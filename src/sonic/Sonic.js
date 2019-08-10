import React, { Component } from "react";
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import characters from "./characters.json";

class App extends Component {
  state = {
    title: "Click an image to begin!",
    score: 0,
    topScore: 0,
    idArr: [],
    characters,
    shake: "",
    titleFlash: "",
  };

  // when a character is clicked
  characterSelection = (id, name) => {
    // check if id index is in array
    // if not, it will return -1
    if (this.state.idArr.indexOf(id) > -1) {
      // shake main container
      this.setState({ shake: "shake" });
      // flash title yellow
      this.setState({ titleFlash: "color-flash" })
      // this.setState({titleFlash: true});
      this.setState({ title: "You already picked " + name + "!" });
      // compare score with top score
      if (this.state.score > this.state.topScore) {
        let newTopScore = this.state.score;
        this.setState({ idArr: [], score: 0, topScore: newTopScore });
      } else {
        this.setState({ idArr: [], score: 0 });
      }
      // regardless of score/top score comparison
      // shuffle characters
      let shuffled = this.shuffleArray(this.state.characters);
      this.setState({ characters: shuffled });
    } else {
      // shuffle characters
      let shuffled = this.shuffleArray(this.state.characters);
      // set to a new array
      let newArr = this.state.idArr;
      // push the id into it
      newArr.push(id);
      // update page
      this.setState({ idArr: newArr, score: this.state.score + 1, characters: shuffled, title: "You Guessed Correctly!", shake: "", titleFlash: "" });
    }
  };

  // shuffle characters
  shuffleArray(array) {
    let newArr = array;
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    }
    return newArr;
  }

  render() {
    return (
      <div>
        <Wrapper score={this.state.score} title={this.state.title} topScore={this.state.topScore} titleFlash={this.state.titleFlash} />
        <Header />
        <Main characterSelection={this.characterSelection} characters={this.state.characters} shuffleArray={this.shuffleArray} shake={this.state.shake} />
        <Footer />
      </div>
    )
  }
}

export default App;
