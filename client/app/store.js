import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import allProductsSliceReducer from "../features/products/allProductsSlice"
import allCategoriesSliceReducer from '../features/categories/allCategoriesSlice';
import singleProductSliceReducer from '../features/products/singleProductSlice';
import singleCategorySliceReducer from '../features/categories/singleCategorySlice';

const store = configureStore({
  reducer: { 
    auth: authReducer,
    products: allProductsSliceReducer,
    categories: allCategoriesSliceReducer,
    singleProduct: singleProductSliceReducer,
    singleCategory: singleCategorySliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
