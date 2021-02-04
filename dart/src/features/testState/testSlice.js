import { createSlice } from '@reduxjs/toolkit';


export const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0
  },
  reducers: {
    functionTest: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { functionTest } = testSlice.actions;


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTest = state => state.test.value;

export default testSlice.reducer;
