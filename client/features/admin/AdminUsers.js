import React, { useEffect, useState } from "react";
import biohackersTheme from "../../app/theme";
import {
  ThemeProvider,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { MainContainer, PrimaryButton } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, selectAllUsers } from "../users/userSlice";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Users</Typography>
          <PrimaryButton variant="contained" size="medium">
            <PersonAddAlt1Icon sx={{ mr: 1 }} />
            <Typography variant="body2">Add User</Typography>
          </PrimaryButton>
        </Container>

        <Container style={{ height: 400, width: "100%", height: "100%" }}>
          <Table sx={{ backgroundColor: "#200040", my: "30px" }}>
            <TableHead>
              <TableRow>
                <TableCell variant="head">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    User ID
                  </Typography>
                </TableCell>
                <TableCell variant="head">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Edit
                  </Typography>
                </TableCell>
                <TableCell variant="head">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Username
                  </Typography>
                </TableCell>
                <TableCell variant="head">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    First Name
                  </Typography>
                </TableCell>
                <TableCell variant="head">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Last Name
                  </Typography>
                </TableCell>
                <TableCell variant="head">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Email
                  </Typography>
                </TableCell>
                <TableCell variant="head">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Role
                  </Typography>
                </TableCell>
                <TableCell variant="head">
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "left",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    Delete
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ borderBottomColor: "1px solid primary.main" }}
                >
                  <TableCell sx={{ textAlign: "center" }}>{user.id}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                  <EditRoundedIcon onClick={() => handleEditUserClick(user)} />
                </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.username}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.firstName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.lastName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.email}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    {user.isAdmin ? "Admin" : "Customer"}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <DeleteRoundedIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminUsers;
