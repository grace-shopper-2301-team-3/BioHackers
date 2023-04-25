import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, TextField } from "@mui/material";

const OrderReview = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <TextField
        label="Full Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Address Line 1"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Address Line 2"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField label="City" variant="outlined" margin="normal" fullWidth />
      <TextField label="State" variant="outlined" margin="normal" fullWidth />
      <TextField
        label="Zip Code"
        variant="outlined"
        margin="normal"
        fullWidth
      />
    </ThemeProvider>
  );
};

export default OrderReview;
