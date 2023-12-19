import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import { User } from '~/types/entity';

// Define a type for the slice state
interface authState {
  token: string;
  user: User | null;
  with: string;
  remember: boolean;
}

// Define the initial state using that type
const initialState: authState = {
  token: '',
  user: null,
  with: '',
  remember: false,
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<authState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.with = action.payload.with;
      state.remember = action.payload.remember;
    },
    logout: (state) => {
      state.token = '';
      state.user = null;
      state.with = '';
      state.remember = false;
    },
  },
});

export const authAction = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectLoginWith = (state: RootState) => state.auth.with;

export const authReducer = authSlice.reducer;
