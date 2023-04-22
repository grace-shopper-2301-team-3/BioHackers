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
  Button,
  TextField,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { MainContainer, PrimaryButton } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  selectAllUsers,
  deleteUser,
  updateUser,
} from "../users/userSlice";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setDeleteOpen(true);
  };

  const handleEditClick = (user) => {
    setUserToEdit(user);
    setEditOpen(true);
  };

  const handleDeleteUser = async () => {
    try {
      await dispatch(deleteUser(userToDelete.id));
      setDeleteOpen(false);
      setUserToDelete(null);
      await dispatch(fetchAllUsers());
    } catch (err) {
      console.log("error removing user", err);
    }
  };

  const handleEditUser = async () => {
    try {
      await dispatch(updateUser(userToEdit));
      setEditOpen(false);
      setUserToEdit({ ...userToEdit });
      await dispatch(fetchAllUsers());
    } catch (err) {
      console.log("error updating user", err);
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
                    <EditRoundedIcon
                      onClick={() => handleEditClick(user)}
                      sx={{ cursor: "pointer", marginRight: 2 }}
                    />
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
                    <DeleteRoundedIcon
                      onClick={() => handleDeleteClick(user)}
                      sx={{ cursor: "pointer" }}
                    />
                  </TableCell>

                  {/* Dialog Management */}

                  {/* Delete Dialog */}
                  <Dialog
                    open={deleteOpen}
                    onClose={() => setDeleteOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are You Sure?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Delete User:{" "}
                        <b>{userToDelete && userToDelete.username}</b>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          deleteOpen(false);
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

                  {/* Edit Dialog */}

                  <Dialog
                    open={editOpen}
                    onClose={() => setEditOpen(false)}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        value={userToEdit && userToEdit.username}
                        onChange={(e) =>
                          setUserToEdit({
                            ...userToEdit,
                            username: e.target.value,
                          })
                        }
                        fullWidth
                      />
                      <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        value={userToEdit && userToEdit.email}
                        onChange={(e) =>
                          setUserToEdit({
                            ...userToEdit,
                            email: e.target.value,
                          })
                        }
                        fullWidth
                      />
                      <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        value={userToEdit && userToEdit.password}
                        onChange={(e) =>
                          setUserToEdit({
                            ...userToEdit,
                            password: e.target.value,
                          })
                        }
                        fullWidth
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          setEditOpen(false);
                          setUserToEdit(null);
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => handleEditUser()}
                        autoFocus
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>

                  {/* End of Dialogs */}
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
