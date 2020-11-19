import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { tagsReducer, resourcesReducer, notesReducer, userReducer } from './reducers';

export default configureStore({
  reducer: {
    tags: tagsReducer,
    resources: resourcesReducer,
    notes: notesReducer,
    user: userReducer,
  },
  middleware: [...getDefaultMiddleware()],
});
