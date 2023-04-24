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
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
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
  createUser,
} from "../users/userSlice";

const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToEdit, setUserToEdit] = useState(null);
  const [userToAdd, setUserToAdd] = useState("");

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setDeleteOpen(true);
  };

  const handleEditClick = (user) => {
    setUserToEdit(user);
    setEditOpen(true);
  };

  const handleAddClick = (user) => {
    setUserToAdd(user);
    setAddOpen(true);
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

  const handleAddUser = async () => {
    try {
      await dispatch(createUser(userToAdd));
      setAddOpen(false);
      setUserToAdd({ ...userToAdd });
      await dispatch(fetchAllUsers());
    } catch (err) {
      console.log("error adding user", err);
    }
  };

  const backdropProps = {
    style: { backgroundColor: "rgba(0, 0, 0, 0.2)" },
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
          <PrimaryButton
            variant="contained"
            size="medium"
            onClick={() => handleAddClick()}
            sx={{ cursor: "pointer", marginRight: 2 }}
          >
            <PersonAddAlt1Icon sx={{ mr: 1 }} />
            <Typography variant="body2">Add User</Typography>
          </PrimaryButton>
        </Container>

        <Container style={{ height: 400, width: "100%", height: "100%" }}>
          <Table sx={{ backgroundColor: "#200040", my: "30px" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Username
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  First Name
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Last Name
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Role
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(users) &&
                users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ borderBottomColor: "1px solid primary.main" }}
                  >
                    <TableCell sx={{ textAlign: "center" }}>
                      {user.id}
                    </TableCell>
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
                      BackdropProps={backdropProps}
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Are You Sure?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          <b>{userToDelete && userToDelete.username}</b> will be
                          removed
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => {
                            setDeleteOpen(false);
                            setUserToDelete(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          autoFocus
                          variant="contained"
                          size="small"
                          onClick={() => handleDeleteUser()}
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
                      BackdropProps={backdropProps}
                    >
                      <DialogTitle id="form-dialog-title">
                        Edit User
                      </DialogTitle>
                      <DialogContent>
                        <TextField
                          required
                          fullWidth
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
                        />
                        <TextField
                          required
                          fullWidth
                          margin="dense"
                          id="firstName"
                          label="First Name"
                          type="text"
                          value={userToEdit && userToEdit.firstName}
                          onChange={(e) =>
                            setUserToEdit({
                              ...userToEdit,
                              firstName: e.target.value,
                            })
                          }
                        />
                        <TextField
                          required
                          fullWidth
                          margin="dense"
                          id="lastName"
                          label="Last Name"
                          type="text"
                          value={userToEdit && userToEdit.lastName}
                          onChange={(e) =>
                            setUserToEdit({
                              ...userToEdit,
                              lastName: e.target.value,
                            })
                          }
                        />
                        <TextField
                          required
                          fullWidth
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
                          Save Changes
                        </Button>
                      </DialogActions>
                    </Dialog>

                    {/* Add Dialog */}
                    <Dialog
                      open={addOpen}
                      onClose={() => setAddOpen(false)}
                      BackdropProps={backdropProps}
                    >
                      <DialogTitle id="form-dialog-title">Add User</DialogTitle>
                      <DialogContent>
                        <TextField
                          autoFocus
                          fullWidth
                          margin="dense"
                          id="username"
                          label="Username"
                          type="text"
                          value={userToAdd && userToAdd.username}
                          helperText={
                            !userToAdd?.username && "Username is required"
                          }
                          onChange={(e) =>
                            setUserToAdd({
                              ...userToAdd,
                              username: e.target.value,
                            })
                          }
                        />
                        <TextField
                          autoFocus
                          fullWidth
                          margin="dense"
                          id="password"
                          label="Password"
                          type="password"
                          value={userToAdd && userToAdd.password}
                          helperText={
                            !userToAdd?.password && "Password is required"
                          }
                          onChange={(e) =>
                            setUserToAdd({
                              ...userToAdd,
                              password: e.target.value,
                            })
                          }
                        />
                        <TextField
                          fullWidth
                          margin="dense"
                          id="firstName"
                          label="First Name"
                          type="text"
                          value={userToAdd && userToAdd.firstName}
                          helperText={
                            !userToAdd?.firstName && "First Name is required"
                          }
                          onChange={(e) =>
                            setUserToAdd({
                              ...userToAdd,
                              firstName: e.target.value,
                            })
                          }
                        />
                        <TextField
                          fullWidth
                          margin="dense"
                          id="lastName"
                          label="Last Name"
                          type="text"
                          value={userToAdd && userToAdd.lastName}
                          helperText={
                            !userToAdd?.lastName && "Last Name is required"
                          }
                          onChange={(e) =>
                            setUserToAdd({
                              ...userToAdd,
                              lastName: e.target.value,
                            })
                          }
                        />
                        <TextField
                          fullWidth
                          margin="dense"
                          id="email"
                          label="Email Address"
                          type="email"
                          value={userToAdd && userToAdd.email}
                          helperText={!userToAdd?.email && "Email is required"}
                          onChange={(e) =>
                            setUserToAdd({
                              ...userToAdd,
                              email: e.target.value,
                            })
                          }
                          error={
                            !!(
                              userToAdd?.email &&
                              !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(
                                userToAdd?.email
                              )
                            )
                          }
                        />
                        <FormControl component="fieldset" sx={{ my: 2 }}>
                          {" "}
                          <FormLabel
                            component="legend"
                            sx={{ color: "primary.main" }}
                          >
                            Is Admin?
                          </FormLabel>
                          <RadioGroup
                            aria-label="isAdmin"
                            name="isAdmin"
                            value={userToAdd?.isAdmin || false}
                            onChange={(e) =>
                              setUserToAdd({
                                ...userToAdd,
                                isAdmin: e.target.value === "true",
                              })
                            }
                          >
                            <FormControlLabel
                              value={true}
                              control={<Radio />}
                              label="Yes"
                              sx={{ mx: 2 }}
                            />
                            <FormControlLabel
                              value={false}
                              control={<Radio />}
                              label="No"
                              sx={{ mx: 2 }}
                            />
                          </RadioGroup>
                        </FormControl>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => {
                            setAddOpen(false);
                            setUserToAdd(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          disabled={
                            !(
                              userToAdd?.username &&
                              userToAdd?.password &&
                              userToAdd?.email
                            )
                          }
                          variant="contained"
                          size="small"
                          onClick={() => handleAddUser()}
                          autoFocus
                        >
                          Add User
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
