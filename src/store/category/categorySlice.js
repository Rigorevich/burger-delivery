import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../config.js';

const initialState = {
  category: [],
  error: '',
  activeCategory: 0,
};

export const categoryRequest = createAsyncThunk('category/fetch', () =>
  fetch(`${API_URL}/api/product/category`)
    .then((req) => req.json())
    .catch((error) => {
      error;
    })
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryRequest.pending, (state) => {
        state.error = '';
      })
      .addCase(categoryRequest.fulfilled, (state, action) => {
        state.error = '';
        state.category = action.payload;
      })
      .addCase(categoryRequest.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
