import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import allProductsSliceReducer from "../features/products/allProductsSlice";
import allCategoriesSliceReducer from "../features/categories/allCategoriesSlice";
import singleProductSliceReducer from "../features/products/singleProductSlice";
import singleCategorySliceReducer from "../features/categories/singleCategorySlice";
import userSliceReducer from "../features/users/userSlice";
import cartSlice from "../features/cart/cartSlice";
import cartItemSlice from "../features/cart/cartItemSlice";
import inventorySliceReducer from "../features/inventory/inventorySlice";
import stripeSliceReducer from "../features/stripe/stripeSlice";
import UserAddressReducer from "../features/users/UserAddressSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: allProductsSliceReducer,
    categories: allCategoriesSliceReducer,
    singleProduct: singleProductSliceReducer,
    singleCategory: singleCategorySliceReducer,
    users: userSliceReducer,
    cart: cartSlice,
    cartItem: cartItemSlice,
    inventory: inventorySliceReducer,
    stripe: stripeSliceReducer,
    userAddress: UserAddressReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
export * from "../features/cart/cartSlice";
export * from "../features/users/UserAddressSlice";
