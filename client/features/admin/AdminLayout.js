import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider } from "@mui/material"
import { MainContainer, StyledTextField } from "../style/StyleGuide"

const AdminLayout = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
      Hello!
      <StyledTextField />
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminLayout;
