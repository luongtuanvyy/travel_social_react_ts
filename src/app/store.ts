import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from '~/slice/AuthSlice';
import { BlogReducer } from '~/slice/BlogSlice';
import { BookingReducer } from '~/slice/BookingSlice';
import storage from 'redux-persist/lib/storage';
import { PlaceReducer } from '~/slice/PlaceSlide';
import { TourReducer } from '~/slice/TourSlice';
import { persistReducer, persistStore } from 'redux-persist';

import { Persistor } from 'redux-persist/es/types';
import { RegisterReducer } from '~/slice/RegisterSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  places: PlaceReducer,
  blog: BlogReducer,
  tour: TourReducer,
  tourBook: TourReducer,
  booking: BookingReducer,
  register: RegisterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor: Persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
