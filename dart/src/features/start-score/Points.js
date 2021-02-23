import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { chooseStartScore } from "../game/gameSlice";
import GameScore from './GameStartScore';
import { Link } from "react-router-dom";


export function Points() {
  const dispatch = useDispatch();
  const [points, setStartScore] = useState(0);
  
  return (
    <div>
      <p>{points}</p>
      <ul>
        {GameScore.map((x, i) => (
          <li key={i} value={x} onClick={e => setStartScore(e.target.value)}>{x}</li>
        ))}
      </ul>
      <Link to="/Game"><button disabled={points > 0 ? false : true} onClick={(e) => dispatch(chooseStartScore(e.id = points))}>START GAME</button></Link>
      <br/>
      <Link to="/"><button>Back</button></Link>
    </div>
  );
}
