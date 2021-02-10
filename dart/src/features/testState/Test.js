import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStartScore, subtractPoints, selectActivePlayer } from "../game/gameSlice";

export function Test() {
  const dispatch = useDispatch();
  const [points, setPoints] = useState("0");

  const startScore = useSelector(selectStartScore);
  const activePlayer = useSelector(selectActivePlayer);

  return (
    <>
      <h4>{activePlayer.name}</h4>
      <h4>Your score {startScore - activePlayer.actualScore}</h4>
      {<div>
        {activePlayer.scoreHistory !== undefined ? activePlayer.scoreHistory.map((x, i) => (
          <li key={i}>{x}</li>
        )) : <li>" "</li>}
      </div>}
      <div>
        <input
          aria-label="do sth"
          value={points}
          onChange={e => setPoints(e.target.value)}
        />
        <button onClick={() => dispatch(subtractPoints(Number(points) || 0)) && setPoints(0)}>
          Add points
        </button>
      </div>
    </>
  );
}
