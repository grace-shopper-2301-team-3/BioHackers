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
import { MainContainer, PrimaryButton } from "../style/StyleGuide";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, selectAllUsers } from "../users/userSlice";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

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
                    Delete
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
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ borderBottomColor: "1px solid primary.main" }}
                >
                  <TableCell variant="head" sx={{ textAlign: "center" }}>
                    {user.id}
                  </TableCell>
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
                    {user.isAdmin ? "Admin" : "Customer"}
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
