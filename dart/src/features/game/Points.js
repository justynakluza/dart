import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseStartScore, selectStartScore } from "./gameSlice";
import GameScore from './GameStartScore';
import { Link } from "react-router-dom";


export function Points() {
  const dispatch = useDispatch();
  const startScore = useSelector(selectStartScore);
  const [points, setStartScore] = useState("-");


  return (
    <div>
      <p>{startScore}</p>
      <p>{points}</p>
      <ul>
        {GameScore.map((x, i) => (
          <li key={i} value={x} onClick={e => setStartScore(e.target.value)}>{x}</li>
        ))}
      </ul>
      <Link to="/Test"><button onClick={(e) => dispatch(chooseStartScore(e.id = points))}>START GAME</button></Link>
    </div>
  );
}
