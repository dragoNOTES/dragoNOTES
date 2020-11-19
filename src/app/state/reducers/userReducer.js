import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from '../../services/userAPI';

// NOTE: createAsyncThunk is a helper from Redux Toolkit that provides a really nice interface to
//       creating thunk actions (async actions). It takes a name for the action and an async function.
//       From the Redux Toolkit website:
//          "[createAsyncThunk] ...will take care of dispatching the right actions
//           based on the promise you return, and action types that you can handle in your reducers"
//       Reference: https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk

export const fetchUserData = createAsyncThunk('user/fetchData', async () => {
  const response = await userAPI.fetchData();
  return response;
});

const setLoading = (state) => {
  state.loading = true;
};

// NOTE: Redux Toolkit's `createSlice()` allows you to localize your actions and reducer into a single file.
//       You also get a number of other benefits, like being able to treat the state as mutable
//       in your reducer functions (it uses Immer.js under the hood).
//       Reference: https://redux-toolkit.js.org/usage/usage-guide#creating-slices-of-state
const userSlice = createSlice({
  // the name of the "slice" of state that all the actions will be namespaced with
  name: 'user',
  initialState: {
    loading: false,
    isLoggedIn: false,
    avatarUrl: '',
    username: '',
    name: '',
  },

  // NOTE: Functions in here are automatically converted to action creators, which can be passed to `dispatch()`
  reducers: {
    setLoggedIn(state, { payload: loggedIn }) {
      state.isLoggedIn = loggedIn;
    },
  },

  // NOTE: Functions in here will NOT be automatically converted to action creators
  extraReducers: {
    [fetchUserData.pending]: setLoading,
    [fetchUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.avatarUrl = action.payload.avatarUrl;
      state.username = action.payload.username;
      state.name = action.payload.name;
    },
  },
});

// NOTE: Extract the action creators object and the reducer
const { actions, reducer } = userSlice;

// NOTE: We export our automatically generate action creators here.
//       Reference: https://redux-toolkit.js.org/usage/usage-guide#exporting-and-using-slices
export const { setLoggedIn } = actions;

// NOTE: Export the reducer just like you typically do
export default reducer;
