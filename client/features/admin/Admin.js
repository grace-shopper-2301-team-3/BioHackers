import React from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Typography, Container, Box } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";

const Admin = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  };

  const boxStyle ={
    width: "100%",
    borderRadius: "20px",
    padding: "70px 55px",
    color: "white",
    textAlign: "center"
  }

  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
        <Typography variant="h5">Dashboard</Typography>
        <Container style={containerStyle} sx={{ my: "35px"}}>
          <Box sx={{ backgroundColor: "#7F00FF" }} style={boxStyle}>
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="body1">1234</Typography>
          </Box>
          <Box sx={{ backgroundColor: "#ff00ff" }} style={boxStyle}>
            <Typography variant="h6">Total Revenue</Typography>
            <Typography variant="body1">1234</Typography>
          </Box>
          <Box sx={{ backgroundColor: "#00bfff" }} style={boxStyle}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="body1">1234</Typography>
          </Box>
          <Box sx={{ backgroundColor: "#AC6CFF" }} style={boxStyle}>
            <Typography variant="h6">Products Sold</Typography>
            <Typography variant="body1">1234</Typography>
          </Box>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Admin;
