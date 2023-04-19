import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authReducer from '../features/auth/authSlice'
// import adminReducer from '../features/admin/adminSlice'
import userSliceReducer from '../features/users/userSlice';
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    // admin: adminReducer,
    users: userSliceReducer,
    cart: cartReducer,
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


export default store;
export * from '../features/auth/authSlice';
<<<<<<< HEAD
// export * from '../features/cart/cartSlice';
=======
export * from '../features/cart/cartSlice';
>>>>>>> 847273e8dd3ee7e55da2032e947abe797b184ceb
