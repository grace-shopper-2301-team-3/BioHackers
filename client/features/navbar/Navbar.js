import React from "react";
import biohackersTheme from "../../app/theme";
import { MainContainer, NoBorderButton } from "../style/StyleGuide";
import { ThemeProvider, Container, Box } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../app/store";
import Cart from "../cart/Cart";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector((state) => state.auth.me.id);

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ py: 4 }}>
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/home">
              <NoBorderButton>BioHackers</NoBorderButton>
            </Link>
            <Link to="/products">
              <NoBorderButton>Products</NoBorderButton>
            </Link>
            <Link to="/categories">
              <NoBorderButton>Categories</NoBorderButton>
            </Link>
          </Box>
          <Box>
            {isLoggedIn ? (
              <>
                {/* The navbar will show these links after you log in */}
                <Link to={`/users/profile`}>
                  <NoBorderButton>Profile</NoBorderButton>
                </Link>
                <Link
                  to="/cart"
                  element={<Cart name="cart" displayName="Cart" />}
                >
                  <NoBorderButton>Cart</NoBorderButton>
                </Link>
                {isAdmin && (
                  <Link to="/users">
                    <NoBorderButton>Users</NoBorderButton>
                  </Link>
                )}
                <NoBorderButton type="button" onClick={logoutAndRedirectHome}>
                  Logout
                </NoBorderButton>
              </>
            ) : (
              <>
                {/* The navbar will show these links before you log in */}
                <Link to="/signup">
                  <NoBorderButton>Sign Up</NoBorderButton>
                </Link>
                <Link to="/login">
                  <NoBorderButton>Login</NoBorderButton>
                </Link>
                <Link
                  to="/cart"
                  element={<Cart name="cart" displayName="Cart" />}
                >
                  <NoBorderButton>Cart</NoBorderButton>
                </Link>
              </>
            )}
          </Box>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Navbar;
