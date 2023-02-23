import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../config.js';

const initialState = {
  products: [],
  error: '',
};

export const productRequest = createAsyncThunk('product/fetch', (category) =>
  fetch(`${API_URL}/api/product?category=${category}`)
    .then((res) => res.json())
    .catch((error) => {
      error;
    })
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productRequest.pending, (state) => {
        state.error = '';
      })
      .addCase(productRequest.fulfilled, (state, action) => {
        state.error = '';
        state.products = action.payload;
      })
      .addCase(productRequest.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
