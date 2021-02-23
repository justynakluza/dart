import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActivePlayer,
  selectPlayers,
  selectEndGame,
  startNewGame,
  startPlayAgain
} from "./gameSlice";

export function EndGameScreen() {
  const dispatch = useDispatch();

  const activePlayer = useSelector(selectActivePlayer);
  const allPlayers = useSelector(selectPlayers);
  const endGame = useSelector(selectEndGame);

  const getAverageScore = arr => {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      return sum;
    }
  };

  return (
    <div style={{ background: "white", display: endGame ? "block" : "none" }}>
      <p> {activePlayer.name} won a game</p>
      <Link to="/">
        <button onClick={() => dispatch(startNewGame())}>New Game</button>
      </Link>{" "}
      <Link to="/Game">
        <button onClick={() => dispatch(startPlayAgain())}>Play Again</button>
      </Link>{" "}
      {endGame
        ? allPlayers.map((x, i) => (
            <div key={i}>
              <h3>{x.name}</h3>
              <ul>
                <li>Throws: {x.scoreHistory.length * 3}</li>
                <li>Average Score: {getAverageScore(x.scoreHistory)}</li>
                <li>
                  Best score:{" "}
                  {[...x.scoreHistory].slice().sort((a, b) => b - a)[0]}
                </li>
              </ul>
            </div>
          ))
        : ""}
    </div>
  );
}
