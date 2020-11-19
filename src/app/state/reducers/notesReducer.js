import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import notesAPI from '../../services/notesAPI';

export const createNote = createAsyncThunk(
  'notes/create',
  async ({ content, resourceID }) => {
    const note = await notesAPI.create({ content, resourceID });
    return note;
  }
);

export const fetchNotesByResourceID = createAsyncThunk(
  'notes/fetchByResourceID',
  async (resourceID) => {
    const notes = await notesAPI.fetchByResource(resourceID);
    return { resourceID, notes };
  }
);

const setLoading = (state) => {
  state.loading = true;
};

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    loading: false,
    notesByResource: {},
  },
  reducers: {},
  extraReducers: {
    [fetchNotesByResourceID.pending]: setLoading,
    [createNote.pending]: setLoading,
    [fetchNotesByResourceID.fulfilled]: (
      state,
      { payload: { resourceID, notes } }
    ) => {
      state.loading = false;
      state.notesByResource[resourceID] = notes;
    },
    [createNote.fulfilled]: (state, { payload: note }) => {
      console.log(note);
      state.loading = false;
      state.notesByResource[note.resourceID] = [
        note,
        ...(state.notesByResource[note.resourceID] || []),
      ];
    },
  },
});

const { /* actions, */ reducer } = noteSlice;

// export const {} = actions;

export default reducer;
