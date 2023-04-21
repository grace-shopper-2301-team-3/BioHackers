import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Typography,
  Breadcrumbs
} from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, selectAllUsers } from "../users/userSlice";

const AdminUsersEdit = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  console.log("users:", users);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
        <Breadcrumbs aria-label="breadcrumb" color="primary.main">
          <Link to={`/admin/users`}>
            <Typography variant="h5" sx={{ textDecoration: "none"}}>Users</Typography>
          </Link>
          <Typography variant="h6" color="text.primary">Edit</Typography>
        </Breadcrumbs>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminUsersEdit;
