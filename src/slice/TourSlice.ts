import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/app/store';
import { StateApiResponse } from '~/types/api';
import { Tour } from '~/types/entity';

const initialState: StateApiResponse<Tour[]> = {
  datas: [],
  pageSize: 0,
  totalPage: 0,
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
      state.totalPage = action.payload.totalPages;
      state.totalItems = action.payload.totalItems;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const TourAction = TourSlice.actions;

export const TourReducer = TourSlice.reducer;

export const selectTours = (state: RootState) => state.tour;
