import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { fetchCart } from "./cartSlice";
import { ThemeProvider, Typography, Container, Box } from "@mui/material";
import biohackersTheme from "../../app/theme";
import { HeroButton, MainContainer } from "../style/StyleGuide";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    if (cart.length) {
      const cartArray = Array.from(cart);
      const total = cartArray.reduce((acc, curr) => {
        const itemTotal = curr.product.productPrice * curr.quantity;
        console.log({
          itemTotal,
          itemPrice: curr.product.productPrice,
          quantity: curr.quantity,
        });
        return acc + itemTotal;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cart, cartUpdated]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <ThemeProvider theme={biohackersTheme}>
      <Container sx={{ mx: 2, textAlign: "center" }}>
        <Typography variant="h4">Your Shopping Cart</Typography>
      </Container>
      <MainContainer sx={{ mx: 2, display: "flex" }}>
        <Box style={{ flex: 3 }}>
          {Array.isArray(cart) && cart.length ? (
            cart.map((cartItem) => (
              <Box key={cartItem.id}>
                <CartItem cartItem={cartItem} />
              </Box>
            ))
          ) : (
            <Typography variant="h2">Your cart is empty</Typography>
          )}
        </Box>
        <Container style={{ flex: 1 }}>
          {cart.length ? (
            <Box
              key={cart.id}
              className="checkoutContainer"
              sx={{
                mt: 2,
                p: 3,
                border: "1px solid",
                borderImage:
                  "linear-gradient(45deg, #7F00FF, #00bfff, #ff00ff) 1",
                boxShadow: "0 0px 20px #7F00FF",
              }}
            >
              <Typography variant="h4">Order Summary</Typography>
              <Typography variant="body1" color="primary.light">
                Free Shipping
              </Typography>
              <Box sx={{ my: 4 }}>
                <Typography variant="body1">Total in USD </Typography>
                <Typography
                  variant="h5"
                  color="secondary.dark"
                  sx={{ my: 2, textAlign: "right" }}
                >
                  {totalPrice.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </Box>
              <Box sx={{ m: 4 }}>
                <Link to="/checkout">
                  <HeroButton variant="contained">
                    <Typography
                      variant="body1"
                      sx={{ textTransform: "uppercase" }}
                    >
                      Checkout
                    </Typography>
                  </HeroButton>
                </Link>
              </Box>
            </Box>
          ) : (
            <></>
          )}
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Cart;
