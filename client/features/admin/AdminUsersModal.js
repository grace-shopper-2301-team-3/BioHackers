import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { SecondaryButton, TertiaryButton } from "../style/StyleGuide";

const AdminUsersModal = ({ user, open, onClose, onSave }) => {
  const [username, setUsername] = useState(user.username);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.isAdmin);

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ ...user, username, firstName, lastName, email, role });
    onClose();
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="User Name"
            value={username}
            onChange={handleUserNameChange}
            fullWidth
          />
          <TextField
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            fullWidth
          />
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
          />
          <TextField
            label="Role"
            value={isAdmin}
            onChange={handleRoleChange}
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <TertiaryButton variant="outlined" onClick={onClose}>Cancel</TertiaryButton>
        <SecondaryButton variant="contained" onClick={handleSubmit}>Save</SecondaryButton>
      </DialogActions>
    </Dialog>
    </ThemeProvider>
  );
};

export default AdminUsersModal;
