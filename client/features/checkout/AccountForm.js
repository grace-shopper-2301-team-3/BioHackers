import React, { useState } from "react";
import { useSelector } from "react-redux";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Box,
  Typography,
} from "@mui/material";

const AccountForm = ({ handleNext }) => {
  const [accountOption, setAccountOption] = useState("guest");
  const { me } = useSelector((state) => state.auth);
  const id = useSelector((state) => state.auth.me.id);
  const { firstName, lastName, email, isAdmin, username, password } =
    useSelector((state) => state.auth.me);

  const handleAccountOptionChange = (event) => {
    setAccountOption(event.target.value);
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <Box sx={{ mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
        Account Information
        </Typography>
          <Box sx={{ mt: 1, display: 'inline-block', textAlign: 'left' }}>
            <Typography>
              First Name: <b style={{color: '#ff00ff'}}>{firstName}</b>
            </Typography>
            <Typography>
              Last Name: <b style={{color: '#ff00ff'}}>{lastName}</b>
            </Typography>
            <Typography>
              Email: <b style={{color: '#ff00ff'}}>{email}</b>
            </Typography>
          </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AccountForm;
