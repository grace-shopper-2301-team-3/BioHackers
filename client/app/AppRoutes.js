import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import AuthForm from "../features/auth/AuthForm"
import Home from "../features/home/Home"
import AdminLayout from "../features/admin/AdminLayout"
import { me } from "./store"

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(me())
  }, [])

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
            path="/admin" 
            element={<AdminLayout name="admin" displayName="Admin" />}
          />
        </Routes>
      )}
    </div>
  )
}

export default AppRoutes
