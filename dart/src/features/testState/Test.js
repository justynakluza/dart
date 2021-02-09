import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStartScore, subtractPoints, selectActivePlayer } from "../game/gameSlice";

export function Test() {
  const dispatch = useDispatch();
  const [points, setPoints] = useState("0");

  const startScore = useSelector(selectStartScore);
  //const playerHistory = useSelector(selectPlayerHistory);
  const activePlayer = useSelector(selectActivePlayer);

  return (
    <>
      <h4>{activePlayer.name}{console.log(activePlayer)}</h4>
      <h4>Your score {startScore}</h4>
      {/* <div>
        {playerHistory !== undefined ? playerHistory.map((x, i) => (
          <li key={i}>{x}</li>
        )) : <li>" "</li>}
      </div> */}
      <div>
        <input
          aria-label="do sth"
          value={points}
          onChange={e => setPoints(e.target.value)}
        />
        <button onClick={() => dispatch(subtractPoints(Number(points) || 0))}>
          Add points
        </button>
      </div>
    </>
  );
}