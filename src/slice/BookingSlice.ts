import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/app/store';
import { Booking } from '~/types/entity';

export interface BookingState {
  value: Booking;
}

const initialState: BookingState = {
  value: {
    id: 0,
    accountId: '',
    desciption: '',
    createdAt: 0,
    modifiedAt: 0,
    member: [],
    createdBy: '',
    modifiedBy: '',
    isActivated: false,
  },
};

export const BookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    modifyBooking: (state: BookingState, action) => {
      state.value = action.payload;
    },
    addMember: (state: BookingState, action) => {
      state.value.member = action.payload;
    },
    addDescription: (state: BookingState, action) => {
      state.value.desciption = action.payload;
    },
    removeBooking: (state: BookingState) => {
      state.value = initialState.value;
    },
  },
});

export const BookingReducer = BookingSlice.reducer;

export const BookingActions = BookingSlice.actions;

export const selectBooking = (state: RootState) => state.booking;
