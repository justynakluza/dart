import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewPlayer, selectUsername } from "./playersSlice";
import { Link } from "react-router-dom";

  export function Players() {
    const dispatch = useDispatch();
    const username = useSelector(selectUsername);
  
    const setUsername = (event) => {
      dispatch(addNewPlayer(event.target.value));
    };

  return (
    <div>
      <label>
            <h3>Username</h3>
          </label>
          <input
            value={username}
            onChange={setUsername}
            type="text"
            className="form-control"
            placeholder="username"
          />
          <br/>
          <br/>
      <Link to="/Start-score" className="btn btn-primary mt-4" role="button">Next</Link>
    </div>
  );}