import React, { useEffect } from "react";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Typography, Container, Box } from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, selectAllUsers } from "../users/userSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  console.log("users:",users)

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
            <Typography variant="body2">Total Orders</Typography>
            <Typography variant="h2">1234</Typography>
          </Box>
          <Box sx={{ backgroundColor: "#ff00ff" }} style={boxStyle}>
            <Typography variant="body2">Total Revenue</Typography>
            <Typography variant="h2">1234</Typography>
          </Box>
          <Box sx={{ backgroundColor: "#00bfff" }} style={boxStyle}>
            <Typography variant="body2">Total Users</Typography>
            <Typography variant="h2">{users.length}</Typography>
          </Box>
          <Box sx={{ backgroundColor: "#AC6CFF" }} style={boxStyle}>
            <Typography variant="body2">Products Sold</Typography>
            <Typography variant="h2">1234</Typography>
          </Box>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Admin;
