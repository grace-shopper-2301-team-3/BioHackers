import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Box } from "@mui/material";
import { StyledTextField } from "../style/StyleGuide";

const ShippingForm = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: 14, p: 4 }}>
        <StyledTextField
          label="First Name"
          variant="outlined"
          margin="normal"
          width="250px"
        />
        <StyledTextField
          label="Last Name"
          variant="outlined"
          margin="normal"
          width="250px"
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
        <StyledTextField
          label="City"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <StyledTextField
          label="State"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <StyledTextField
          label="Zip Code"
          variant="outlined"
          margin="normal"
          width="250px"
        />
      </Box>
    </ThemeProvider>
  );
};

export default ShippingForm;
