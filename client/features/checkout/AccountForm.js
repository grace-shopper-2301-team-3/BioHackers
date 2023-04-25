import React, { useState } from "react";
import biohackersTheme from "../../app/theme";
import { StyledTextField } from "../style/StyleGuide";
import {
  ThemeProvider,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";

const AccountForm = ({ handleNext }) => {
  const [accountOption, setAccountOption] = useState("guest");

  const handleAccountOptionChange = (event) => {
    setAccountOption(event.target.value);
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: 14, p: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Account
        </Typography>
        <RadioGroup value={accountOption} onChange={handleAccountOptionChange} sx={{ flexDirection: "row"}}>
          <FormControlLabel
            value="signin"
            control={<Radio />}
            label="Sign In"
          />
          <FormControlLabel
            value="signup"
            control={<Radio />}
            label="Create an Account"
          />
        </RadioGroup>
        {accountOption === "signin" && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Sign In
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <StyledTextField label="Email" variant="outlined" required />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <StyledTextField label="Password" variant="outlined" type="password" required />
            </FormControl>
            <Button variant="contained" onClick={handleNext}>
              Sign In
            </Button>
          </Box>
        )}
        {accountOption === "signup" && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Create an Account
            </Typography>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <StyledTextField label="Name" variant="outlined" required/>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <StyledTextField label="Email" variant="outlined" required/>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <StyledTextField label="Password" variant="outlined" type="password" required/>
            </FormControl>
            <Button variant="contained" onClick={handleNext}>
              Create Account
            </Button>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default AccountForm;
