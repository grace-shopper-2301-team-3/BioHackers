import React from "react";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/footer/Footer";
import AppRoutes from "./AppRoutes";
import biohackersTheme from "./theme";
import { ThemeProvider } from "@mui/material";
import { MainContainer } from "../features/style/StyleGuide";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <CssBaseline />
      <MainContainer>
        <Navbar />
        <AppRoutes />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
