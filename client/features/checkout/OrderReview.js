import React, { useEffect, useState } from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Container, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../users/UserAddressSlice";
import { fetchSingleUser, selectSingleUser } from "../users/userSlice";
import { fetchCart } from "../cart/cartSlice";
import CartItem from "../cart/CartItem";

const OrderReview = ({ orderDetails, handleNext, handleBack }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.auth);
  const id = useSelector((state) => state.auth.me.id);
  const { firstName, lastName, email, isAdmin, username, password } =
    useSelector((state) => state.auth.me);
  const UserAddress = useSelector((state) => state.userAddress.addresses);
  const UserId = useSelector((state) => state.auth.me.id);
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
    dispatch(getAllAddresses());
    dispatch(fetchSingleUser(UserId));
  }, [dispatch]);

  const filteredAddresses = UserAddress.filter(
    (address) => address.userId === UserId
  );

  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: "auto", textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Your cart is almost ready for checkout.
        </Typography>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Please take a moment to verify that all of the items are correct.
        </Typography>
        <Container
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "900px",
            mt: 1,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
            <Typography variant="h6">Order</Typography>
            <Typography variant="h6">Total Amount <b style={{ color: "#ff00ff" }}>
              {totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
              </b>
            </Typography>
            {Array.isArray(cart) &&
              cart.map((cartItem) => (
                <Box
                  key={cartItem.id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src={cartItem.product.imageUrl}
                    width={100}
                    height={100}
                    style={{ marginLeft: "10px" }}
                  />
                  <Typography>{cartItem.product.productName}</Typography>
                </Box>
              ))}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "35%" }}>
            <Typography variant="h6">Info</Typography>
            <Typography variant="body1">Account</Typography>
            <Box sx={{ my: 1, display: "inline-block", textAlign: "left" }}>
              <Typography>
                First Name: <b style={{ color: "#ff00ff" }}>{firstName}</b>
              </Typography>
              <Typography>
                Last Name: <b style={{ color: "#ff00ff" }}>{lastName}</b>
              </Typography>
              <Typography>
                Email: <b style={{ color: "#ff00ff" }}>{email}</b>
              </Typography>
            </Box>
            <Typography variant="body1">Shipping</Typography>
            {filteredAddresses &&
              filteredAddresses.map((address) => {
                return (
                  <Box
                    key={address.id}
                    sx={{
                      my: 1,
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <Typography variant="caption1">
                      Address Line 1:{" "}
                      <b style={{ color: "#ff00ff" }}>{address.addressLine1}</b>
                    </Typography>
                    <Typography variant="caption1">
                      Address Line 2:{" "}
                      <b style={{ color: "#ff00ff" }}>{address.addressLine2}</b>
                    </Typography>
                    <Typography variant="caption1">
                      City: <b style={{ color: "#ff00ff" }}>{address.city}</b>
                    </Typography>
                    <Typography variant="caption1">
                      State: <b style={{ color: "#ff00ff" }}>{address.state}</b>
                    </Typography>
                    <Typography variant="caption1">
                      Zipcode:{" "}
                      <b style={{ color: "#ff00ff" }}>{address.zipcode}</b>
                    </Typography>
                  </Box>
                );
              })}
            <Typography>Order Payment</Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default OrderReview;
