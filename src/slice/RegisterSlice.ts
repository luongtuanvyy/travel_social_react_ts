import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type initialState = {
  email: string | null;
  password: string | null;
  name: string | null;
};

const initialState: initialState = {
  email: null,
  password: null,
  name: null,
};

export const RegisterSlice = createSlice({
  name: 'Register',
  initialState,
  reducers: {
    setRegister: (state, action: PayloadAction<initialState>) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name;
    },
  },
});

export const RegisterAcitons = RegisterSlice.actions;

export const RegisterReducer = RegisterSlice.reducer;


