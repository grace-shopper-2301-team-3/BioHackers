import React from "react";
import biohackersTheme from "../../app/theme";
import {
  MainContainer,
  SecondaryButton,
  StyledTextField,
} from "../style/StyleGuide";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import { ThemeProvider, Box, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;

    dispatch(authenticate({ username, password, method: formName }));
    navigate("/");;
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
        <Typography variant="h4" sx={{ textAlign: "center", my: 4, background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent", }}>
          Unlock Your Inner Superhero
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", my: 2 }}>
          Your Account
        </Typography>
        <form
          onSubmit={handleSubmit}
          name={name}
          sx={{ maxWidth: "400px", width: "100%" }}
        >
          <Box>
            <StyledTextField
              name="username"
              label="Username"
              variant="outlined"
              sx={{ marginBottom: "16px" }}
            />
          </Box>
          <Box>
            <StyledTextField
              name="password"
              label="Password"
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
            }}
          >
            <SecondaryButton variant="contained" size="medium" type="submit">
              {displayName}
            </SecondaryButton>
          </Box>
          {error && <Box>{error.message}</Box>}
        </form>
        <Divider />
        <Typography variant="overline" sx={{ textAlign: "center", my: 4 }}>
          - or -
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
          Create An Account
        </Typography>
        <Link to="/signup">
          <SecondaryButton
            variant="contained"
            size="medium"
            type="submit"
            sx={{ backgroundColor: "#AC6CFF" }}
          >
            Sign Up
          </SecondaryButton>
        </Link>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AuthForm;
