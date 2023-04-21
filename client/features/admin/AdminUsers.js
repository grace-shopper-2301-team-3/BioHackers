import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";

const AdminUsers = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer>Hello Users</MainContainer>
    </ThemeProvider>
  );
};

export default AdminUsers;
