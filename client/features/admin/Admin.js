import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";

const Admin = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer>Dashboard</MainContainer>
    </ThemeProvider>
  );
};

export default Admin;
