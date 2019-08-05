import React, { Component } from "react";
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  state = {
    score: 0,
    topScore: 0
  };

  render() {
    return (
      <div>
        <Wrapper score={this.state.score} title={"Click an image to begin!"} topScore={this.state.topScore}/>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }



}

export default App;
