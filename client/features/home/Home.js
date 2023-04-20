import React from 'react';
import biohackersTheme from "../../app/theme";
import { MainContainer } from "../style/StyleGuide";
import { ThemeProvider, Typography } from "@mui/material";

const Home = () => {

  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer sx={{ position: "relative" }}>
        <Typography variant="h1" sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>Biohackers</Typography>

        <img src="https://media0.giphy.com/media/4knozU8q9AXvpod9qy/giphy.gif?cid=ecf05e479xiha122z06g45ujmxa7rc8xx3f47wwrdj1hrj64&rid=giphy.gif&ct=g" style={{ width: "100%" }} />

      </MainContainer>
    </ThemeProvider>
  );
};

export default Home;
