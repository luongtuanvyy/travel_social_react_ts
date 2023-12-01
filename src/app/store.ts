import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '~/slice/AuthSlice';
import { BlogReducer } from '~/slice/BlogSlice';
import { PlaceReducer } from '~/slice/PlaceSlide';
// ...

export const store = configureStore({
  reducer: {
    auth: authReducer,
    places: PlaceReducer,
    blog: BlogReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
