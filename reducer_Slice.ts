import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (args, { dispatch, getState }) => {
    //thunkApi: { dispatch, getState }
    //getState gives us access to "all" the state in the store
    //we can use the dispatch to 'dispatch' another action
    // const { posts } = getState();
    // console.log(posts);
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${args.userId}`
    ).then(res => res.json());
    //.then(() => dispatch(something else...))
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 2
    },
    reset: state=> {
      state.value = 0
    }
  },
  extraReducers: {
        [getPosts.pending]: (state, action) => {
          state.status = 'loading';
        },
        [getPosts.fulfilled]: (state, action) => {
          state.list = action.payload;
          state.status = 'success';
        },
        [getPosts.rejected]: (state, action) => {
          state.status = 'failed';
        }
      }
})
export const {increment,decrement, reset} = counterSlice.actions;
export default counterSlice.reducer



