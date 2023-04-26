import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import { fetchSingleUser, selectSingleUser } from "./userSlice";
import biohackersTheme from "../../app/theme";
import { styled } from "@mui/material/styles";
import { ThemeProvider, Container, Typography, Box, Grid } from "@mui/material";

import {
  StyledTextField,
  PrimaryButton,
  MainContainer,
} from "../style/StyleGuide";
import UserHeaderBar from "./UserHeaderBar";

const SingleUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = useSelector((state) => state.auth.me.id);
  const { firstName, lastName, email, isAdmin, username, password } =
    useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
        <UserHeaderBar />
        <Container>
          <Typography variant="h2">User Profile</Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={3}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Username:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="subtitle1"
                color="#dbd7f1"
                sx={{ marginTop: "25px" }}
              >
                {username}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                First Name:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="subtitle1"
                color="#dbd7f1"
                sx={{ marginTop: "25px" }}
              >
                {firstName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Last Name:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="subtitle1"
                color="#dbd7f1"
                sx={{ marginTop: "25px" }}
              >
                {lastName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                E-mail:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography
                variant="subtitle1"
                color="#dbd7f1"
                sx={{ marginTop: "25px" }}
              >
                {email}
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <br />
      </MainContainer>
    </ThemeProvider>
  );
};

export default SingleUser;
