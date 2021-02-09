import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startScore: 0,
  activePlayerId: 0,
  players: []
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    chooseStartScore: (state, action) => {
      state.startScore = action.payload;
    },
    subtractPoints: (state, action) => {
      let activePlayer = state.players.filter(
        x => x.id === state.activePlayerId
      )[0];
      activePlayer.actualScore += action.payload;
      activePlayer.scoreHistory.push(action.payload);
    },
    addPlayer: (state, action) => {
      state.players.push(action.payload);
    },
    deletePlayer: (state, action) => {
      state.activePlayerId = action.payload;
      let players = state.players;
      for (let i = 0; i < players.length; i++) {
        if (players[i].id === state.activePlayerId) {
          players.splice(i, 1);
          state.activePlayerId = 0;
        }
      }
    },
    setActivePlayer: (state, action) => {
      state.activePlayerId = action.payload;
    }
  }
});

export const {
  chooseStartScore,
  subtractPoints,
  addUsername,
  addPlayer,
  setActivePlayer,
  deletePlayer
} = gameSlice.actions;

export const selectStartScore = state => state.game.startScore;
export const selectPlayers = state => state.game.players;
export const selectActivePlayer = state =>
  state.game.players.filter(x => x.id === state.game.activePlayerId)[0];

export default gameSlice.reducer;
