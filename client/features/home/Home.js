import React from "react";
import biohackersTheme from "../../app/theme";
import { MainContainer } from "../style/StyleGuide";
import { ThemeProvider, Typography, Container, Box } from "@mui/material";

const Home = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ position: "relative" }}>
        <Container sx={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://media0.giphy.com/media/4knozU8q9AXvpod9qy/giphy.gif?cid=ecf05e479xiha122z06g45ujmxa7rc8xx3f47wwrdj1hrj64&rid=giphy.gif&ct=g"
            style={{ width: "100%" }}
          />
          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              textAlign: "center",
            }}
          >
            Biohackers
          </Typography>
        </Container>
        <Container sx={{py:4}}>
          <Typography
            variant="h2"
            sx={{
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              textAlign: "center",
            }}
          >
            Categories
          </Typography>
          <Box></Box>
        </Container>
        <Container sx={{py:4}}>
          <Typography
            variant="h2"
            sx={{
              background:
                "-webkit-linear-gradient(45deg, #7F00FF, #ff00ff, #00bfff)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              textAlign: "center",
            }}
          >
            Top Sellers
          </Typography>
          <Box></Box>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
