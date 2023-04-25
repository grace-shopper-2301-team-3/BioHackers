import React, { useState } from "react";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
} from "@mui/material";
import { StyledTextField } from "../style/StyleGuide";

const PaymentForm = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: 14, p: 4 }}>
        <FormControl
          component="fieldset"
          variant="outlined"
          color="primary.main"
          sx={{ width: "100%" }}
        >
          <RadioGroup aria-label="payment-method" name="payment-method" row>
            <FormControlLabel
              value="credit-card"
              control={<Radio />}
              label="Credit Card"
            />
            <FormControlLabel
              value="paypal"
              control={<Radio />}
              label="PayPal"
            />
            <FormControlLabel
              value="apple-pay"
              control={<Radio />}
              label="Apple Pay"
            />
          </RadioGroup>
          <StyledTextField
            id="card-number"
            label="Card Number"
            variant="outlined"
            fullWidth
          />
          <StyledTextField
            id="card-name"
            label="Card Name"
            variant="outlined"
            fullWidth
          />
          <StyledTextField
            id="expiry-date"
            label="Expiry Date"
            variant="outlined"
            fullWidth
          />
          <StyledTextField id="cvv" label="CVV" variant="outlined" fullWidth />
          <StyledTextField
            id="billing-address"
            label="Billing Address"
            variant="outlined"
            fullWidth
          />
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

export default PaymentForm;
