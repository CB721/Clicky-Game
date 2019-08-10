import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mario from './mario/Mario';
import Sonic from './sonic/Sonic';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Mario} />
      <Route exact path="/mario" component={Mario} />
      <Route exact path="/sonic" component={Sonic} />
    </Router>
  );
}

export default App;
