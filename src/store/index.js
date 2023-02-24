import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice.js';
import productReducer from './product/productSlice.js';
import orderReducer, { localeStorageMdw } from './order/orderSlice.js';
import modalReducer from './modal/modalSlice.js';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    order: orderReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localeStorageMdw),
});
