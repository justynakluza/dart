import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addPlayer,
  selectPlayers,
  setActivePlayer,
  deletePlayer,
  selectActivePlayerId
} from "../game/gameSlice";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export function Players() {
  const dispatch = useDispatch();
  const allPlayers = useSelector(selectPlayers);
  const activePlayerId = useSelector(selectActivePlayerId);
  const [name, setName] = useState("");
  const [placeholder, setPlaceholder] = useState("username");
  const [access, setAccess] = useState(0);

  const addNewPlayer = () => {
    const newPlayer = {
      id: uuidv4(),
      scoreHistory: [],
      actualScore: 0,
      name: name
    };
    if (newPlayer.name.length === 0) {
      setName("");
      setPlaceholder("too short");
    } else if (newPlayer.name.length > 15) {
      setName("");
      setPlaceholder("too long");
    } else {
      dispatch(addPlayer(newPlayer));
      setName("")
    }
  };

  const deletePlayer2 = e => {
    dispatch(deletePlayer(e.target.id));
  };

  const makeActive = e => {
    dispatch(setActivePlayer(e.target.id));
  };

  const makeDefaultActive = () => {
    if (activePlayerId < 1) {
      dispatch(setActivePlayer(allPlayers[0].id));
    }
  };

  const arePlayersAdded = () => {
    if (allPlayers.length === 0) {
      setAccess(0);
    } else if (allPlayers.length >= 1){
      setAccess(1);
    }
  };
  
  const goNext = () => {
    arePlayersAdded();
    if (access === 0) {
      makeDefaultActive();
    }
  };

  return (
    <div>
      <label>
        <h3>Players</h3>
      </label>
      <input
        value={name}
        type="text"
        placeholder={placeholder}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={addNewPlayer}>Add new player</button>
      {allPlayers.map((x, i) => (
        <div key={i}>
          <div>{x.name}</div>
          <button id={x.id} onClick={makeActive}>
            is active
          </button>
          <button id={x.id} onClick={deletePlayer2}>
            delete
          </button>
        </div>
      ))}
      <br />
      <br />
      <Link to="/Start-score">
        <button disabled={allPlayers.length < 1 ? true : false} onClick={goNext}>
          go next
        </button>
      </Link>
    </div>
  );
}
