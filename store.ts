import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './reducer_Slice';

const store = configureStore({
  reducer: {
    counter: counterSliceReducer
  }
});

export default store;
