import React, { useEffect } from "react";
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
  Checkbox,
} from "@mui/material";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, selectAllUsers } from "../users/userSlice";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  console.log("users:", users)
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
        <Typography variant="h5">Users</Typography>

        <Container style={{ height: 400, width: "100%", height: "100%" }}>
          <Table sx={{ backgroundColor: "#212121", my: "30px" }}>
            <TableHead>
            <TableRow>
                <TableCell
                  padding="checkbox"
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                  <Checkbox
                    sx={{ color: "primary.main", alignItems: "center" }}
                  />
                </TableCell>
                <TableCell
                  padding="checkbox"
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                  <Checkbox
                    sx={{ color: "primary.main", alignItems: "center" }}
                  />
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  User ID
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Username
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  First Name
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Role
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ borderBottomColor: "1px solid primary.main" }}
                >
                  <TableCell>
                    <Checkbox
                      sx={{ color: "primary.main", alignItems: "center" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      sx={{ color: "primary.main", alignItems: "center" }}
                    />
                  </TableCell>
                  <TableCell variant="head" sx={{ textAlign: "center" }}>
                    {user.id}
                  </TableCell>
                  <TableCell variant="head" sx={{ textAlign: "center" }}>
                    {user.username}
                  </TableCell>
                  <TableCell variant="head" sx={{ textAlign: "center" }}>
                    {user.firstName}
                  </TableCell>
                  <TableCell variant="head" sx={{ textAlign: "center" }}>
                    {user.lastName}
                  </TableCell>
                  <TableCell variant="head" sx={{ textAlign: "center" }}>
                    {user.email}
                  </TableCell>
                  <TableCell variant="head" sx={{ textAlign: "center" }}>
                    {user.isAdmin}
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
