import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectStartScore,
  subtractPoints,
  selectActivePlayer,
  selectPlayers,
  selectEndGame,
  startNewGame,
  startPlayAgain
} from "./gameSlice";

export function Game() {
  const dispatch = useDispatch();
  const [points, setPoints] = useState("");

  const startScore = useSelector(selectStartScore);
  const activePlayer = useSelector(selectActivePlayer);
  const allPlayers = useSelector(selectPlayers);
  const endGame = useSelector(selectEndGame);

  const checkPoints = () => {
    if (points <= 180) {
      if (points > startScore - activePlayer.actualScore) {
        dispatch(subtractPoints(0)) && setPoints("");
      } else {
        dispatch(subtractPoints(Number(points) || 0)) && setPoints("");
      }
    } else {
      alert("max 180 pkt");
    }
  };

  const getAverageScore = (arr) => {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
      return sum;
    }
  }

  return (
    <>
    <div
            className="overlay"
            style={{ display: endGame ? "block" : "none" }}>
          </div>
      <div style={{ display: endGame ? "none" : "block" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {allPlayers.map((x, i) => (
            <div
              key={i}
              style={
                x.id === activePlayer.id ? { color: "red" } : { color: "green" }
              }
            >
              <li>{x.name}</li>
              <li>{startScore - x.actualScore}</li>
              <ul>
                {x.scoreHistory.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <input
            aria-label="do sth"
            value={points}
            onChange={e => setPoints(e.target.value)}
            placeholder="0"
          />
          <button onClick={checkPoints}>Add points</button>
        </div>
      </div>
      <div style={{ background: "white", display: endGame ? "block" : "none" }}>
        <p> {activePlayer.name} won a game</p>
        <Link to="/">
          <button onClick={() => dispatch(startNewGame())}>New Game</button>
        </Link>{" "}
        <Link to="/Game">
          <button onClick={() => dispatch(startPlayAgain())}>Play Again</button>
        </Link>{" "}
          {endGame ? allPlayers.map((x, i) => (
            <div key={i}>
              <h3>{x.name}</h3>
              <ul>
                <li>Throws: {x.scoreHistory.length * 3}</li>
                <li>Average Score: {getAverageScore(x.scoreHistory)}</li>
                <li>Best score: {[...x.scoreHistory].slice().sort((a,b)=> b-a)[0]}</li>
              </ul>
          </div>
          )) : ''}
      </div>
    </>
  );
}