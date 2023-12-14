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
    member: [],
    createdAt: '',
    createdBy: '',
    modifiedAt: '',
    modifiedBy: '',
    isActivated: false,
  },
};

export const BookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    modifyBooking: (state: BookingState, action) => {
      return { ...state, value: action.payload };
    },
    addMember: (state: BookingState, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          member: [...state.value.member, action.payload],
        },
      };
    },
  },
});

export const BookingReducer = BookingSlice.reducer;

export const BookingActions = BookingSlice.actions;

export const selectBooking = (state: RootState) => state.booking;
