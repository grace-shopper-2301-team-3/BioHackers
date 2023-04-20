import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import { getAllProducts } from "../features/products/allProductsSlice";
import AllProducts from "../features/products/AllProducts";
import { getAllCategories } from "../features/categories/allCategoriesSlice";
import AllCategories from "../features/categories/AllCategories";
import SingleProduct from "../features/products/SingleProduct";
import SingleCategory from "../features/categories/SingleCategory";
import AllUsers from "../features/users/AllUsers";
import SingleUser from "../features/users/SingleUser";
import Login from "../features/login/Login";
import StyleGuide from "../features/style/StyleGuide";
import Cart from "../features/cart/Cart";
import EditUser from "../features/users/EditUser";
import AdminLayout from "../features/admin/AdminLayout";
import AdminSidebar from "../features/admin/AdminHeaderbar";
import NotFound from "../features/notfound/NotFound";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
    console.log("initial dispatch on APP is running");
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  return (
    <div>
<<<<<<< HEAD
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
          <Route path='/cart' element={<Cart name='cart' displayName='Cart' />} />
          <Route
            path="/products"
            element={<AllProducts />}
          />
          <Route
            path="/categories"
            element={<AllCategories />}
          />
          <Route
            path="/products/:productId"
            element={<SingleProduct />}
          />
          <Route
            path="/categories/:categoryId"
            element={<SingleCategory />}
          />
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
          <Route
            path="/cart"
            element={<Cart name="cart" displayName="Cart" />}
          />
          <Route
            path="/styleguide"
            element={<StyleGuide name="styleguide" displayName="Style Guide" />}
          />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/categories/:categoryId" element={<SingleCategory />} />
          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
      )}
=======
      <Routes>
        <Route path="/*" element={<Home />} />
        {isLoggedIn ? (
          <>
            <Route to="/home" element={<Home />} />
            <Route path="/users/:id" element={<SingleUser />} />
            <Route path="/users/:id/edit" element={<EditUser />} />
            <Route
              path="/cart"
              element={<Cart name="cart" displayName="Cart" />}
            />
            {isAdmin && (
              <>
                <Route to="/" element={<Home />} />
                <Route to="/home" element={<Home />} />
                <Route path="/users" element={<AllUsers />} />
              </>
            )}
          </>
        ) : (
          <>
            <Route path="/login" element={<Login name="login" displayName="Login" />} />
            <Route path="/signup" element={<AuthForm name="signup" displayName="Sign Up" />} />
            <Route
              path="/cart"
              element={<Cart name="cart" displayName="Cart" />}
            />
            <Route
              path="/styleguide"
              element={<StyleGuide name="styleguide" displayName="Style Guide" />}
            />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/categories" element={<AllCategories />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/categories/:categoryId" element={<SingleCategory />} />
          </>
        )}
        {/* Fallback route for non-existing pages */}
        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
>>>>>>> 05f8cd7 (updating admin layouts, added not found page  and styling navbar)
    </div>
  );
};

export default AppRoutes;
