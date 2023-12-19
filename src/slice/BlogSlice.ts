import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Blog } from '~/types/entity';

export interface BlogState {
  blog: Blog | null;
  image: string | null;
}

const initialState: BlogState = {
  blog: null,
  image: null,
};

const BlogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    modifyBlog: (state: BlogState, action: PayloadAction<BlogState>) => {
      state.blog = action.payload.blog;
      state.image = action.payload.image;
    },
    modifyImage: (state: BlogState, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const BlogReducer = BlogSlice.reducer;

export const BlogActions = BlogSlice.actions;
