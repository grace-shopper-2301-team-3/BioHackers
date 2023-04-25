import React from "react";
import { Container, Box, Typography } from "@mui/material";

const OrderReview = ({ orderDetails, handleNext, handleBack }) => {
  const { accountInfo } = orderDetails;

  return (
    <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "900px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "50%"}}>
        <Typography>Order Details</Typography>
        <Typography>Order #000000</Typography>
        <Typography>Order Item</Typography>
        <Typography>Order Quantity</Typography>
        <Typography>Order Total</Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", width: "50%"}}>
      <Typography>Order Info</Typography>
      <Typography>Order Shipping</Typography>
      <Typography>Order Payment</Typography>
      </Box>
      </Container>
  );
};

export default OrderReview;
