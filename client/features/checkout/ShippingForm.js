import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Box, Typography } from "@mui/material";
import { StyledTextField } from "../style/StyleGuide";

const ShippingForm = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: 14, p: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Shipping Information
        </Typography>
        <StyledTextField
          label="First Name"
          variant="outlined"
          margin="normal"
          width="250px"
          required
        />
        <StyledTextField
          label="Last Name"
          variant="outlined"
          margin="normal"
          width="250px"
          required
        />
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
          width="250px"
          required
        />
      </Box>
    </ThemeProvider>
  );
};

export default ShippingForm;
