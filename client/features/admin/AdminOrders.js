import React, { useState, useEffect } from "react";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { MainContainer, PrimaryButton } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, selectAllUsers } from "../users/userSlice";
import { fetchCart } from "../cart/cartSlice";

const AdminOrders = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const users = useSelector(selectAllUsers);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartUpdated, setcartUpdated] = useState(false);

  console.log("cart:", cart);
  console.log("cart length:", cart.length);
  console.log("users:", users);

  useEffect(() => {
    if (cart.length) {
      const cartArray = Array.from(cart);
      const total = cartArray.reduce((acc, curr) => {
        const itemTotal = curr.product.productPrice * curr.quantity;
        return acc + itemTotal;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cart, cartUpdated]);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Orders</Typography>
          <PrimaryButton variant="contained" size="medium">
            <AddShoppingCartRoundedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">Add Order</Typography>
          </PrimaryButton>
        </Container>

        <Container style={{ height: 400, width: "100%", height: "100%" }}>
          <Table sx={{ backgroundColor: "#200040", my: "30px" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Fulfilled?
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Username
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Cart ID
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    Total Products
                    <Typography variant="overline">
                      (Products * Quantity)
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    Total Price
                    <Typography variant="overline">
                      (Price * Total Products)
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(cart) &&
                Object.values(
                  cart.reduce((acc, oneCart) => {
                    if (!acc[oneCart.cartId]) {
                      acc[oneCart.cartId] = {
                        ...oneCart,
                        totalQuantity: oneCart.quantity,
                        totalPrice:
                          oneCart.product.productPrice * oneCart.quantity,
                      };
                    } else {
                      acc[oneCart.cartId].totalQuantity += oneCart.quantity;
                      acc[oneCart.cartId].totalPrice +=
                        oneCart.product.productPrice * oneCart.quantity;
                    }
                    return acc;
                  }, {})
                ).map((oneCart) => (
                  <TableRow
                    key={oneCart.id}
                    sx={{ borderBottomColor: "1px solid primary.main" }}
                  >
                    <TableCell sx={{ textAlign: "left" }}>
                      (placeholder)
                    </TableCell>
                    <TableCell>
                      <EditRoundedIcon />
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      (placeholder)
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {oneCart.cartId}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {oneCart.totalQuantity}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {oneCart.totalPrice.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <DeleteRoundedIcon />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminOrders;
