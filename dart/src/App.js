import React from "react";
import { Test } from "./features/testState/Test";
import { Players } from "./features/players/Players";
import { Points } from "./features/game/Points";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Players />
          </Route>
          <Route exact path="/Start-score">
            <Points />
          </Route>
          <Route exact path="/Test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
