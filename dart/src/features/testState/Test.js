import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUsername } from "../players/playersSlice";
import { selectPlayerHistory } from "../game/gameSlice";
import { selectStartScore, subtractPoints } from "../game/gameSlice";

export function Test() {
  const dispatch = useDispatch();
  const [test, setTest] = useState("0");

  const startScore = useSelector(selectStartScore);
  const playerHistory = useSelector(selectPlayerHistory);

  const username = useSelector(selectUsername);

  return (
    <>
      <h4>{username}</h4>
      <h4>Your score {startScore}</h4>
      <div>
        {playerHistory !== undefined ? playerHistory.map((x, i) => (
          <li key={i}>{x}</li>
        )) : <li>" "</li>}
      </div>
      <div>
        <input
          aria-label="do sth"
          value={test}
          onChange={e => setTest(e.target.value)}
        />
        <button onClick={() => dispatch(subtractPoints(Number(test) || 0))}>
          Add points
        </button>
      </div>
    </>
  );
}
