import React, { useState } from "react";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Box,
  Typography,
} from "@mui/material";
import { StyledTextField } from "../style/StyleGuide";

const PaymentForm = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: 14, p: 4, display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Payment
        </Typography>
        <FormControl
          component="fieldset"
          variant="outlined"
          color="primary.main"
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                mr: 4,
              }}
            >
              <RadioGroup aria-label="payment-method" name="payment-method" row sx={{ mb: 2}}>
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
                required
              />
              <StyledTextField
                id="card-name"
                label="Card Name"
                variant="outlined"
                fullWidth
                required
              />
              <StyledTextField
                id="expiry-date"
                label="Expiry Date"
                variant="outlined"
                fullWidth
                required
              />
              <StyledTextField id="cvv" label="CVV" variant="outlined" fullWidth />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "40%",
                mr: 2,
              }}
            >
              <Typography variant="body1" sx={{ my: 2 }}>
                Billing Address
              </Typography>
              <StyledTextField
                label="Address Line 1"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
              <StyledTextField
                label="Address Line 2"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
              <StyledTextField
                label="City"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
              <StyledTextField
                label="State"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
              <StyledTextField
                label="Zip Code"
                variant="outlined"
                margin="normal"
                required
              />
            </Box>
          </Box>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

export default PaymentForm;
