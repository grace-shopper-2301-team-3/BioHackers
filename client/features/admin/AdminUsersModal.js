import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../auth/authSlice";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const AdminUsersModal = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    const updatedUser = {
      username,
      firstName,
      lastName,
      email,
      isAdmin,
    };
    dispatch(updateUser(updatedUser));
    onClose();
  };  

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleEdit}>
          <TextField
            label="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            label="Role"
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.value)}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          autoFocus
          onClick={handleEdit}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AdminUsersModal;
