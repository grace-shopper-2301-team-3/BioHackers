import React from "react";
import { Link } from "react-router-dom";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Typography,
  Breadcrumbs
} from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";


const AdminProductsEdit = () => {
  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
        <Breadcrumbs aria-label="breadcrumb" color="primary.main">
          <Link to={`/admin/products`}>
            <Typography variant="h5" sx={{ textDecoration: "none"}}>Products</Typography>
          </Link>
          <Typography variant="h6" color="text.primary">Edit</Typography>
        </Breadcrumbs>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminProductsEdit;
