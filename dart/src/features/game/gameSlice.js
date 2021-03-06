import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startScore: 0,
  activePlayerId: 0,
  endGame: false,
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

      if (activePlayer.actualScore === state.startScore) {
        state.endGame = true;
      } else {
        const currentIndex = state.players.indexOf(activePlayer); //osobna metoda
        const nextIndex = (currentIndex + 1) % state.players.length;
        state.activePlayerId = state.players[nextIndex].id;
      }
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
    },
    startNewGame: (state) => {
      state.startScore = 0;
      state.activePlayerId = 0;
      state.endGame = false;
      state.players = [];
    },
    startPlayAgain: (state) => {
      state.endGame = false;
      let players = state.players;
      for (let i = 0; i < players.length; i++) {
        (players[i].scoreHistory = [])
        &&
        (players[i].actualScore = 0)
        }
    }
  }
});

export const {
  chooseStartScore,
  subtractPoints,
  addUsername,
  addPlayer,
  setActivePlayer,
  deletePlayer,
  startNewGame,
  startPlayAgain
} = gameSlice.actions;

export const selectStartScore = state => state.game.startScore;
export const selectPlayers = state => state.game.players;
export const selectActivePlayer = state =>
  state.game.players.filter(x => x.id === state.game.activePlayerId)[0];
export const selectActivePlayerId = state => state.game.activePlayerId;
export const selectEndGame = state => state.game.endGame;

export default gameSlice.reducer;
