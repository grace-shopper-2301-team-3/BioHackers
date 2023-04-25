import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const OrderReview = ({ orderDetails, handleNext, handleBack }) => {
  const { firstName, lastName, email, shippingAddress, paymentDetails } =
    orderDetails;

  return (
    <>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Review your order
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Shipping details
          </Typography>
          <Typography>
            {firstName} {lastName}
          </Typography>
          <Typography>{email}</Typography>
          <Typography>{shippingAddress.address1}</Typography>
          <Typography>{shippingAddress.address2}</Typography>
          <Typography>
            {shippingAddress.city}, {shippingAddress.state}{" "}
            {shippingAddress.zipCode}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Payment details
          </Typography>
          <Typography>{paymentDetails.cardNumber}</Typography>
          <Typography>{paymentDetails.nameOnCard}</Typography>
          <Typography>{paymentDetails.expirationDate}</Typography>
          <Typography>{paymentDetails.cvv}</Typography>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          <a href="#" onClick={handleBack}>
            Edit shipping and payment details
          </a>
        </Typography>
        <Typography variant="h5" sx={{ color: "primary.main" }}>
          $99.99
        </Typography>
      </Box>
    </>
  );
};

export default OrderReview;
