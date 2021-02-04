import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testReducer from '../features/testState/testSlice';
import playersReducer from '../features/players/playersSlice';
import gameReducer from '../features/game/gameSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer,
    players: playersReducer,
    game: gameReducer
  },
});

