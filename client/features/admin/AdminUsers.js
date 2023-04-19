import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "image", headerName: "Image", width: 150 },
  { field: "username", headerName: "Name", width: 150 },
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "role", headerName: "Role", width: 150 },
];

const rows = [
  {
    id: 1,
    username: "John Doe",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    role: "Admin",
    image: "https://picsum.photos/100",
  },
  {
    id: 2,
    username: "Jane Smith",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    role: "User",
    image: "https://picsum.photos/100",
  },
  {
    id: 3,
    username: "Bob Johnson",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    role: "User",
    image: "https://picsum.photos/100",
  },
  {
    id: 4,
    username: "Alice Lee",
    firstName: "Alice",
    lastName: "Lee",
    email: "alice.lee@example.com",
    role: "User",
    image: "https://picsum.photos/100",
  },
];

const useStyles = makeStyles({
  root: {
    "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
      borderRight: "1px solid #E0E0E0",
    },
    "& .MuiDataGrid-columnHeader": {
      backgroundColor: "#F2F2F2",
    },
    "& .MuiDataGrid-row": {
      backgroundColor: "#FFFFFF",
    },
    "& .Mui-selected": {
      backgroundColor: "#000000",
    },
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: "#F2F2F2",
    },
  },
});

const AdminUsers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ height: 400, width: "100%" }}>
      <h2>All Users/Customers</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default AdminUsers;
