import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Typography } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";

const AdminOrders = () => {
  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
      <Typography variant="h5">Orders</Typography>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminOrders;
