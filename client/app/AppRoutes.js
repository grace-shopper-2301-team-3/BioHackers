import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';

import Cart from '../features/cart/Cart';

import AllUsers from '../features/users/AllUsers';
import SingleUser from '../features/users/SingleUser';
import Login from '../features/login/Login';
// import AdminLayout from "../features/admin/AdminLayout"


/**
 * COMPONENT
 */

const AppRoutes = () => {

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path='/cart' element={<Cart name='cart' displayName='Cart' />} />
          {isAdmin && (
            <>
              <Route to="/" element={<Home />} />
              <Route to="/home" element={<Home />} />
              <Route path="/users" element={<AllUsers />} />
            </>
          )}
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<Login name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />

          {/* <Route
            path='/cart'
            element={<Cart name='cart' displayName='Cart' /> }

          <Route 
            path="/admin" 
            element={<AdminLayout name="admin" displayName="Admin" />}
          /> */}
        </Routes>
      )}
    </div>
  )
}

export default AppRoutes
