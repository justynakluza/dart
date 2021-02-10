import { createSlice } from '@reduxjs/toolkit';

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    value: '',

  },
  reducers: {
    addNewPlayer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addNewPlayer, updateUsername } = playersSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUsername = state => state.players.value;

export default playersSlice.reducer;