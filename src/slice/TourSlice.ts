import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/app/store';

interface TourState {
  datas: any[];
  pageSize: number;
  totalPages: number;
  totalItems: number;
  currentPage: number;
}

const initialState: TourState = {
  datas: [],
  pageSize: 0,
  totalPages: 0,
  totalItems: 0,
  currentPage: 0,
};

export const TourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setTours: (state, action) => {
      state.datas = action.payload.datas;
      state.pageSize = action.payload.pageSize;
      state.totalPages = action.payload.totalPages;
      state.totalItems = action.payload.totalItems;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const TourAction = TourSlice.actions;

export const TourReducer = TourSlice.reducer;

export const selectTours = (state: RootState) => state.tour;
