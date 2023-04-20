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
<<<<<<< HEAD
    <div>
      <h1>BioHackers</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to={`/users/${id}`}>Profile</Link>
            <Link to='/cart' element={<Cart name='cart' displayName='Cart' />}> Cart </Link>
            <Link to= '/products'>Products</Link>
            <Link to= '/categories'>Categories</Link>
            {isAdmin && (
=======
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
>>>>>>> 05f8cd7 (updating admin layouts, added not found page  and styling navbar)
              <>
                {/* The navbar will show these links after you log in */}
                <Link to={`/users/${id}`}>
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

                <Link to="/login">
                  <NoBorderButton>Login</NoBorderButton>
                </Link>
                <Link to="/signup">
                  <NoBorderButton>Sign Up</NoBorderButton>
                </Link>
              </>
            )}
<<<<<<< HEAD
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to='/'>Home</Link>
            <Link to= '/products'>Products</Link>
            <Link to= '/categories'>Categories</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to='/cart' element={<Cart name='cart' displayName='Cart' />}> Cart </Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
=======
          </Box>
        </Container>
      </MainContainer>
    </ThemeProvider>
>>>>>>> 05f8cd7 (updating admin layouts, added not found page  and styling navbar)
  );
};

export default Navbar;
