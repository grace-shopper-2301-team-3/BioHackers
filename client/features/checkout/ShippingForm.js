import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider } from "@mui/material";
import { StyledTextField } from "../style/StyleGuide";

const ShippingForm = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <StyledTextField
        label="Full Name"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <StyledTextField
        label="Address Line 1"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <StyledTextField
        label="Address Line 2"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <StyledTextField label="City" variant="outlined" margin="normal" fullWidth />
      <StyledTextField label="State" variant="outlined" margin="normal" fullWidth />
      <StyledTextField
        label="Zip Code"
        variant="outlined"
        margin="normal"
        fullWidth
      />
    </ThemeProvider>
  );
};

export default ShippingForm;
