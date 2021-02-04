import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  name: 'test',
  startScore: [],
  activePlayerId: 0,
  players:
    {
      scoreHistory : [],
      actualScore: 0,
      name: '',
      id: 0
    },
  startScore3: [] 
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    chooseStartScore: (state, action) => {
      state.value = action.payload;
    },
    subtractPoints: (state, action) => {
      state.value -= action.payload;
      state.players.scoreHistory.push(action.payload)
      console.log(state.players.scoreHistory[0])
    },
  },
});

export const { chooseStartScore, subtractPoints } = gameSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectStartScore = state => state.game.value;
export const selectPlayerHistory = state => state.game.players.scoreHistory;

export default gameSlice.reducer;