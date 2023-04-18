import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authReducer from '../features/auth/authSlice'
import adminReducer from '../features/admin/adminSlice'

const store = configureStore({
  reducer: { 
    auth: authReducer,
    admin: adminReducer
   },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
export * from '../features/auth/authSlice'
export * from '../features/auth/adminSlice'
