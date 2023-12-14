import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '~/slice/AuthSlice';
import { BlogReducer } from '~/slice/BlogSlice';
import { BookingReducer } from '~/slice/Booking';
import { PlaceReducer } from '~/slice/PlaceSlide';
import { TourReducer } from '~/slice/TourSlice';
// ...

export const store = configureStore({
  reducer: {
    auth: authReducer,
    places: PlaceReducer,
    blog: BlogReducer,
    tour: TourReducer,
    tourBook: TourReducer,
    booking: BookingReducer,
  },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
