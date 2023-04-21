import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider } from "@mui/material"
import { MainContainer } from "../style/StyleGuide"
import AdminHeaderbar from "./AdminHeaderbar"

const AdminProducts = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
        <AdminHeaderbar />
      <MainContainer>
      Hello Products
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminProducts;
