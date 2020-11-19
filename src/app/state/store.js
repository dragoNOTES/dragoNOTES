import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { tagsReducer, resourcesReducer, notesReducer } from './reducers';

export default configureStore({
  reducer: {
    tags: tagsReducer,
    resources: resourcesReducer,
    notes: notesReducer,
  },
  middleware: [...getDefaultMiddleware()],
});
