import React, { Component } from "react";
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// import Card from "./components/Card";

class App extends Component {
  state = {
    title: "Click an image to begin!",
    score: 0,
    topScore: 0
  };

  // if the score is >= 1, change title to "Correct"

  render() {
    return (
      <div>
        <Wrapper score={this.state.score} title={this.state.title} topScore={this.state.topScore}/>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }



}

export default App;
