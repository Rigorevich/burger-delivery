import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../../config.js';

const initialState = {
  products: [],
  error: '',
  loading: true,
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
        state.loading = true;
      })
      .addCase(productRequest.fulfilled, (state, action) => {
        state.error = '';
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(productRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default productSlice.reducer;
