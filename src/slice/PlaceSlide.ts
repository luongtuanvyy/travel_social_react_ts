import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/app/store';
import { Place } from '~/types/entity';

type placeState = {
  datas: Place[];
  pageSize: number;
  totalPages: number;
  totalItems: number;
  currentPage: number;
};

const initialState: placeState = {
  datas: [],
  pageSize: 0,
  totalPages: 0,
  totalItems: 0,
  currentPage: 0,
};

export const PlaceSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<placeState>) => {
      state.datas = action.payload.datas;
      state.pageSize = action.payload.pageSize;
      state.totalPages = action.payload.totalPages;
      state.totalItems = action.payload.totalItems;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const PlaceAction = PlaceSlice.actions;

export const selectPlaces = (state: RootState) => state.places;

export const PlaceReducer = PlaceSlice.reducer;
