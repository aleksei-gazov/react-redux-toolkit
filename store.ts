import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './reducer_Slice';
import postsReducer from './reducer_Post_Slice';


const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    posts: postsReducer
  }
});

export default store;



