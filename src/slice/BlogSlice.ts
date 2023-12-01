import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Blog } from '~/types/entity';

export interface BlogState {
  value: Blog | null;
}

const initialState: BlogState = {
  value: null,
};

const BlogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    modifyBlog: (state: BlogState, action: PayloadAction<Blog>) => {
      return { ...state, value: action.payload };
    },
  },
});

export const BlogReducer = BlogSlice.reducer;

export const BlogActions = BlogSlice.actions;
