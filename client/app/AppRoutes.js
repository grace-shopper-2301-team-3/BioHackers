import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import { getAllProducts } from '../features/products/allProductsSlice';
import AllProducts from '../features/products/AllProducts';
import { getAllCategories } from '../features/categories/allCategoriesSlice';
import AllCategories from '../features/categories/AllCategories'
/**
 * COMPONENT
 */

const AppRoutes = () => {
  
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
    console.log("initial dispatch on APP is running")  
    dispatch(getAllProducts())
    dispatch(getAllCategories())
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route 
            path="/products" 
            element={<AllProducts />} 
          />
          <Route 
            path="/categories" 
            element={<AllCategories />} 
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
