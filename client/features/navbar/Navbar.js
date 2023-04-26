import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  MainContainer,
  NoBorderButton,
  TertiaryButton,
} from "../style/StyleGuide";
import { ThemeProvider, Container, Box, AppBar, Toolbar } from "@mui/material";
import biohackersTheme from "../../app/theme";
import { logout } from "../../app/store";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const id = useSelector((state) => state.auth.me.id);
  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <ThemeProvider theme={biohackersTheme}>
      <div style={{ display: showNavbar ? "flex" : "none" }}>
      <AppBar sx={{ height: "60px", display: showNavbar ? "flex" : "none"}}>
        <Toolbar>
      <MainContainer >
        <Container sx={{ display: "fixed", justifyContent: "space-between" }}>
          <Box sx={{ display: "fixed", justifyContent: "space-between" }}>
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
                {isAdmin && (
                  <Link to="/admin">
                    <TertiaryButton>Admin</TertiaryButton>
                  </Link>
                )}
                <Link to={`/users/profile`}>
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
                {/* The navbar will show these links before you log in */}

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
      </Toolbar>
      </AppBar>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
