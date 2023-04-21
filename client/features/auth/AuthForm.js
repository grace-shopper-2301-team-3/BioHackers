import React from "react";
import biohackersTheme from "../../app/theme";
import {
  MainContainer,
  StyledTextField,
  SecondaryButton,
} from "../style/StyleGuide";

import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { ThemeProvider, Typography, Box } from "@mui/material";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const email = evt.target.email.value;

    dispatch(
      authenticate({
        username,
        password,
        firstName,
        lastName,
        email,
        method: formName,
      })
    );
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          my: 2,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
          Create Your Account
        </Typography>
        <form
          onSubmit={handleSubmit}
          name={name}
          sx={{ maxWidth: "400px", width: "100%" }}
        >
          <Box>
            <StyledTextField
              required
              label="First Name"
              name="firstName"
              type="text"
              variant="outlined"
              sx={{ marginBottom: "16px" }}
            />
          </Box>
          <Box>
            <StyledTextField
              required
              label="Last Name"
              name="lastName"
              type="text"
              variant="outlined"
              sx={{ marginBottom: "16px" }}
            />
          </Box>
          <Box>
            <StyledTextField
              required
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              sx={{ marginBottom: "16px" }}
            />
          </Box>
          <Box>
            <StyledTextField
              required
              label="Username"
              name="username"
              type="text"
              variant="outlined"
              sx={{ marginBottom: "16px" }}
            />
          </Box>
          <Box>
            <StyledTextField
              required
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              sx={{ marginBottom: "16px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: 2
            }}
          >
            <SecondaryButton variant="contained" size="medium" type="submit">
              {displayName}
            </SecondaryButton>
          </Box>
          {error && <Box>{error.message}</Box>}
        </form>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AuthForm;
