import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import resourcesAPI from '../../services/resourcesAPI';

export const createResource = createAsyncThunk(
  'resources/create',
  async ({ title, link }) => {
    const resource = await resourcesAPI.create({ title, link });
    console.dir(resource);
    return resource;
  }
);

export const fetchResourcesByTagName = createAsyncThunk(
  'resources/fetchByTagName',
  async (tagName) => {
    const resources = await resourcesAPI.fetchByTag({ tagName, page: 0 });
    return resources;
  }
);

export const pinResourceByID = createAsyncThunk(
  'resources/pinResourceByID',
  async (id) => {
    const resource = await resourcesAPI.pinByID(id);
    return resource;
  }
);

export const fetchPinnedResources = createAsyncThunk(
  '/resources/fetchPinned',
  async () => {
    const resources = await resourcesAPI.fetchPinned();
    return resources;
  }
);

const setLoading = (state) => {
  state.loading = true;
};

const resourceSlice = createSlice({
  name: 'resources',
  initialState: {
    loading: false,
    // will contain the resources from the fetchResourcesByTag call
    resourcesByTag: [],
    // pinned resources
    pinned: [],
  },
  reducers: {},
  extraReducers: {
    [createResource.pending]: setLoading,
    [fetchResourcesByTagName.pending]: setLoading,
    [pinResourceByID.pending]: setLoading,
    [fetchPinnedResources.pending]: setLoading,
    [createResource.fulfilled]: (state, { payload: resource }) => {
      state.loading = false;

      // ! Patching this in here for the demo because creating a resource doesn't support adding tags to the resource
      resource.tags = [{ name: 'react' }];

      state.resourcesByTag.push(resource);
    },
    [fetchResourcesByTagName.fulfilled]: (state, { payload: resources }) => {
      state.loading = false;

      state.resourcesByTag = resources;
    },
    [pinResourceByID.fulfilled]: (state, { payload }) => {
      state.loading = false;

      const { resource } = payload;
      const alreadyPinnedIndex = state.pinned.findIndex(
        ({ _id }) => _id === resource.id
      );

      if (alreadyPinnedIndex > -1) {
        // if the resource is already pinned, unpin it
        state.resourcesByTag.splice(alreadyPinnedIndex, 1);
      } else {
        // if it's not pinned, pin it
        state.resourcesByTag.push(resource);
      }
    },
    [fetchPinnedResources.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.resourcesByTag = payload;
    },
  },
});

const { actions, reducer } = resourceSlice;

export const { setTagQuery } = actions;

export default reducer;
