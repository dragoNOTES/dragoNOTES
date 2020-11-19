import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import tagsAPI from '../../services/tagsAPI';

// NOTE: createAsyncThunk is a helper from Redux Toolkit that provides a really nice interface to
//       creating thunk actions (async actions). It takes a name for the action and an async function.
//       From the Redux Toolkit website:
//          "[createAsyncThunk] ...will take care of dispatching the right actions
//           based on the promise you return, and action types that you can handle in your reducers"
//       Reference: https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk
export const createTag = createAsyncThunk('tags/create', async ({ name }) => {
  const response = await tagsAPI.create({ name });
  return response;
});

export const fetchAllTags = createAsyncThunk('tags/fetchAll', async () => {
  const response = await tagsAPI.fetchAll();
  return response;
});

const setLoading = (state) => {
  state.loading = true;
};

// NOTE: Redux Toolkit's `createSlice()` allows you to localize your actions and reducer into a single file.
//       You also get a number of other benefits, like being able to treat the state as mutable
//       in your reducer functions (it uses Immer.js under the hood).
//       Reference: https://redux-toolkit.js.org/usage/usage-guide#creating-slices-of-state
const tagsSlice = createSlice({
  // the name of the "slice" of state that all the actions will be namespaced with
  name: 'tags',
  initialState: {
    loading: false,
    tags: [],
    lastQuery: '',
    filteredTags: [],
  },
  // NOTE: Functions in here are automatically converted to action creators, which can be passed to `dispatch()`
  reducers: {
    filterTags(state, { payload: searchQuery }) {
      // TODO: leaving this here for future autocomplete functionality in the ui
      // const filterFunction = (tag) =>
      //   tag.name.toLowerCase().indexOf(searchQuery.toLowerCase());

      state.lastQuery = searchQuery;
      state.filteredTags = state.tags.filter(
        (tag) => tag.name.toLowerCase() === searchQuery
      );
    },
  },
  // NOTE: Functions in here will NOT be automatically converted to action creators
  extraReducers: {
    [fetchAllTags.pending]: setLoading,
    [fetchAllTags.fulfilled]: (state, action) => {
      state.loading = false;
      state.tags = action.payload;
    },
    [createTag.pending]: setLoading,
    [createTag.fulfilled]: (state, { payload: tag }) => {
      state.loading = false;
      state.tags.push(tag);
    },
  },
});

// NOTE: Extract the action creators object and the reducer
const { actions, reducer } = tagsSlice;

// NOTE: We export our automatically generate action creators here.
//       Reference: https://redux-toolkit.js.org/usage/usage-guide#exporting-and-using-slices
export const { filterTags } = actions;

// NOTE: Export the reducer just like you typically do
export default reducer;
