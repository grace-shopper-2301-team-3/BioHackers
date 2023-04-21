import React from "react";
import biohackersTheme from "../../app/theme";
import {
  MainContainer,
  StyledTextField,
  NoBorderButton,
} from "../style/StyleGuide";
import { ThemeProvider, Box, Grid, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
        <Container sx={{ height: "100%", py: "60px" }}>
          <Box>
            <Grid item xs={12} md={2}>
              <Box sx={{ margin: "60px 0px" }}>
                <Link to="/home">
                  <NoBorderButton>BioHackers</NoBorderButton>
                </Link>
              </Box>
            </Grid>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid",
                  padding: "8px",
                  margin: "4px",
                  height: "100%",
                }}
              >
                <Typography variant="subtitle1" sx={{ my: "8px" }}>
                  Support
                </Typography>
                <Typography variant="caption">888-888-888</Typography>
                <Typography variant="caption">care@biohackers.com</Typography>
                <Typography variant="caption">Help</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "8px",
                  margin: "4px",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle1">Newsletter</Typography>
                <Typography variant="caption">
                  Subscribe to our newsletter for updates and promotions.
                </Typography>
                <StyledTextField
                  sx={{
                    width: "100%",
                    maxWidth: "350px",
                    margin: "auto",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "8px",
                  margin: "4px",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle1">Inquire</Typography>
                <Typography variant="caption">Contact</Typography>
                <Typography variant="caption">Partner</Typography>
                <Typography variant="caption">Press</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "8px",
                  margin: "4px",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle1">Connect</Typography>
                <Typography variant="caption">Instagram</Typography>
                <Typography variant="caption">Twitter</Typography>
                <Typography variant="caption">LinkedIn</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Footer;
