import React from "react";
import { Game } from "./features/game/Game";
import { Players } from "./features/players/Players";
import { Points } from "./features/start-score/Points";
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
          <Route exact path="/Game">
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
