import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { me } from "./store";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { getAllProducts } from "../features/products/allProductsSlice";
import { getAllCategories } from "../features/categories/allCategoriesSlice";
import AllProducts from "../features/products/AllProducts";
import AllCategories from "../features/categories/AllCategories";
import SingleProduct from "../features/products/SingleProduct";
import SingleCategory from "../features/categories/SingleCategory";
import AllUsers from "../features/users/AllUsers";
import SingleUser from "../features/users/SingleUser";
import Login from "../features/login/Login";
import StyleGuide from "../features/style/StyleGuide";
import Cart from "../features/cart/Cart";
import EditUser from "../features/users/EditUser";
import Admin from "../features/admin/Admin";
import AdminDiscounts from "../features/admin/AdminDiscounts";
import AdminOrders from "../features/admin/AdminOrders";
import AdminPayments from "../features/admin/AdminPayments";
import AdminProducts from "../features/admin/AdminProducts";
import AdminUsers from "../features/admin/AdminUsers";
import NotFound from "../features/notfound/NotFound";
import UserProfile from "../features/users/UserProfile";
import UserAddress from "../features/users/UserAddress";
import Checkout from "../features/checkout/Checkout";
import Inventory from "../features/inventory/Inventory"
import Confirmation from "../features/checkout/Confirmation"

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Logged In Experience */}
        {isLoggedIn ? (
          <>
            <Route to="/home" element={<Home />} />
            <Route path="/users/profile" element={<UserProfile />} />
            <Route path="/users/:id" element={<SingleUser />} />
            <Route path="/users/:id/edit" element={<EditUser />} />
            <Route path="/users/address" element={<UserAddress />} />
            <Route path="/cart" element={<Cart name="cart" displayName="Cart" />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/categories" element={<AllCategories />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/categories/:categoryId" element={<SingleCategory />} />

            {/* Admin Experience */}
            {isAdmin && (
              <>
                <Route to="/" element={<Home />} />
                <Route to="/home" element={<Home />} />
                <Route path="/users" element={<AllUsers />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/admin" element={<Admin name="admin" displayName="Admin" />} />
                <Route path="/admin/discounts" element={<AdminDiscounts />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
                <Route path="/admin/payments" element={<AdminPayments />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/users" element={<AdminUsers />} />
                <Route path="/users/profile" element={<UserProfile />} />
              </>
            )}
          </>
        ) : (
          // Not In Experience
          <>
            <Route path="/login" element={<Login name="login" displayName="Login" />} />
            <Route path="/signup" element={<AuthForm name="signup" displayName="Sign Up" />} />
            <Route path="/cart" element={<Cart name="cart" displayName="Cart" />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/categories" element={<AllCategories />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/categories/:categoryId" element={<SingleCategory />} />
            <Route path="/users/profile" element={<UserProfile />} />
          </>
        )}

        {/* Fallback route for non-existing pages */}
        {/* <Route path="*" element={<Navigate to="/notfound" />} /> */}
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/styleguide" element={<StyleGuide name="styleguide" displayName="Style Guide" />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
