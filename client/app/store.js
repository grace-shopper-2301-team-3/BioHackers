import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSliceReducer from "../features/products/allProductsSlice"
import allCategoriesSliceReducer from '../features/categories/allCategoriesSlice';

const store = configureStore({
  reducer: { 
    auth: authReducer,
    products: allProductsSliceReducer,
    categories: allCategoriesSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
