import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider } from "@mui/material"
import { MainContainer } from "../style/StyleGuide"
import AdminHeaderbar from "./AdminHeaderbar";

const AdminLayout = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
      <MainContainer>
      <AdminHeaderbar/>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminLayout;
