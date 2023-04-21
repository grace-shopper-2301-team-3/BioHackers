import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider } from "@mui/material"
import { MainContainer } from "../style/StyleGuide"
import AdminHeaderbar from "./AdminHeaderbar"


const AdminOrders = () => {
  return (
    <ThemeProvider theme={biohackersTheme}>
     <AdminHeaderbar />
      <MainContainer>
      Hello Orders
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminOrders;
