import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/app/store';
import { Tour } from '~/types/entity';

interface initialState {
  value: Tour | null;
}

const initialState: initialState = {
  value: null,
};

export const TourBook = createSlice({
  name: 'tourBook',
  initialState,
  reducers: {
    modifyTourBook: (state: initialState, action) => {
      return { ...state, value: action.payload };
    },
  },
});

export const TourBookReducer = TourBook.reducer;

export const TourBookActions = TourBook.actions;

export const selectTourBook = (state: RootState) => state.tourBook;
