import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import notesAPI from '../../services/notesAPI';

export const createNote = createAsyncThunk(
  'notes/create',
  async ({ content, resourceID }) => {
    const response = await notesAPI.create({ content, resourceID });
    return response;
  }
);

export const fetchNotesByResourceID = createAsyncThunk(
  'notes/fetchByResourceID',
  async (resourceID) => {
    const response = await notesAPI.fetchByResource(resourceID);
    return response;
  }
);

const setLoading = (state) => {
  state.loading = true;
};

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    loading: false,
    notes: [],
  },
  reducers: {},
  extraReducers: {
    [fetchNotesByResourceID.pending]: setLoading,
    [createNote.pending]: setLoading,
    [fetchNotesByResourceID.fulfilled]: (state, { payload: notes }) => {
      state.loading = false;
      state.notes = notes;
    },
    [createNote.fulfilled]: (state, { payload: note }) => {
      state.loading = false;
      state.notes.push(note);
    },
  },
});

const { /* actions, */ reducer } = noteSlice;

// export const {} = actions;

export default reducer;
