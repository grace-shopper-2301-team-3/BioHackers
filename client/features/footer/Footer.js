import React from "react";
import biohackersTheme from "../../app/theme";
import { MainContainer, NoBorderButton } from "../style/StyleGuide";
import {
  ThemeProvider,
  Box,
  Grid,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
        <Container sx={{ height: "100%", py: "60px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid",
                  width: "200px",
                  px: 2,
                  py: 1,
                  m: 1,
                  height: "100%",
                  borderImage:
                    "linear-gradient(45deg, #7F00FF, #00bfff, #ff00ff) 1",
                  boxShadow: "0 0px 20px #7F00FF",
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
            <Grid item xs={12} md={8}>
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
                <TextField
                  sx={{
                    width: "100%",
                    maxWidth: "350px",
                    margin: "auto",
                    border: "2px solid",
                    "&:hover": {
                      borderImage:
                        "linear-gradient(125deg, #7F00FF, #00bfff, #ff00ff) 1",
                      boxShadow: "0 0px 20px #7F00FF",
                    },
                    borderRadius: 0,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "200px",
                  px: 2,
                  py: 1,
                  m: 1,
                  textAlign: "center",
                }}
              >
                <Link to="/home">
                  <NoBorderButton>
                    <Typography variant="subtitle1">BioHackers</Typography>
                  </NoBorderButton>
                </Link>
                <Typography variant="caption">The BioHacker Hive</Typography>
                <Typography variant="caption">88 Neural Nexus Road</Typography>
                <Typography variant="caption">
                  Cyber City, Neo Terra 4040
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Footer;
