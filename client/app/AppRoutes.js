import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Link } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import AllUsers from "../features/users/AllUsers";
import SingleUser from "../features/users/SingleUser";
import Login from "../features/login/Login";
import StyleGuide from "../features/style/StyleGuide";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/users/:id" element={<SingleUser />} />
          {isAdmin && (
            <>
              <Route to="/" element={<Home />} />
              <Route to="/home" element={<Home />} />
              <Route path="/users" element={<AllUsers />} />
            </>
          )}
          <Route path="/styleguide" element={<StyleGuide />} />
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
          <Route
            path="/styleguide"
            element={<StyleGuide name="styleguide" displayName="Style Guide" />}
          />
        </Routes>
      )}
      <nav>
        <ul>
          <li><Link to="/styleguide">Style Guide</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AppRoutes;
