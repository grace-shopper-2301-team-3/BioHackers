import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  MainContainer,
  NoBorderButton,
  TertiaryButton,
} from "../style/StyleGuide";
import { ThemeProvider, Container, Box } from "@mui/material";
import biohackersTheme from "../../app/theme";
import { logout } from "../../app/store";
import Cart from "../cart/Cart";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const id = useSelector((state) => state.auth.me.id);
  const navigate = useNavigate();

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
                {isAdmin && (
                  <Link to="/admin">
                    <TertiaryButton>Admin</TertiaryButton>
                  </Link>
                )}
                <Link to={`/users/${id}`}>
                  <NoBorderButton>Account</NoBorderButton>
                </Link>
                <NoBorderButton type="button" onClick={logoutAndRedirectHome}>
                  Logout
                </NoBorderButton>
                <Link
                  to="/cart"
                  element={<Cart name="cart" displayName="Cart" />}
                >
                  <NoBorderButton>Cart (#)</NoBorderButton>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <NoBorderButton>Login</NoBorderButton>
                </Link>
                <Link
                  to="/cart"
                  element={<Cart name="cart" displayName="Cart" />}
                >
                  <NoBorderButton>Cart (#)</NoBorderButton>
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
