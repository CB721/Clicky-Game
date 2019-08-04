import React, { Component } from "react";
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {
  render() {
    return (

      <div>
      <Wrapper />

      <Header/>
      <Main />

      </div>
    )
  }



}

export default App;
