import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getPostById, createPost, deletePost } from "./postsThunk";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    selectedPost: {},
    isLoading: false,
    error: {
      hasError: false,
      errorMessage: "",
    },
  },

  reducers: {
    clearPostError: (state) => {
      state.error = {
        hasError: false,
        errorMessage: "",
      };
    },
  },

  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...action.payload];
    },
    [getPosts.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },
    [getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    [getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.selectedPost = action.payload;
    },
    [getPostById.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },
    [getPostById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },

    [createPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...state.posts, action.payload];
    },
    [createPost.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },
    [createPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },
    [deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = [...action.payload];
    },
    [deletePost.pending]: (state) => {
      state.error.hasError = false;
      state.isLoading = true;
    },
    [deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = {
        hasError: true,
        errorMessage: action.payload,
      };
    },
  },
});

export const { clearPostError } = postsSlice.actions;
export default postsSlice.reducer;
