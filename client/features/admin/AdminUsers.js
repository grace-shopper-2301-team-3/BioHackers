import React, { useState } from "react";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { MainContainer, PrimaryButton, SecondaryButton, TertiaryButton } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, selectAllUsers, deleteUser } from "../users/userSlice";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [open, setOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setOpen(true);
  };

  const handleDeleteUser = async () => {
    try {
      await dispatch(deleteUser(userToDelete.id));
      setOpen(false);
      setUserToDelete(null);
      await dispatch(fetchAllUsers());
    } catch (err) {
      console.log('error removing user', err)
    }
  };

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
                    <EditRoundedIcon/>
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
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Are You Sure?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Delete User: <b>{userToDelete && userToDelete.username}</b>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                    setUserToDelete(null);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleDeleteUser()}
                  autoFocus
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
            <DeleteRoundedIcon
              onClick={() => handleDeleteClick(user)}
              sx={{ cursor: "pointer" }}
            />
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
