import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "customer", headerName: "Customer", width: 150 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "total", headerName: "Total", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const rows = [
  {
    id: 1,
    customer: "John Smith",
    date: "2023-04-15",
    total: "$124.99",
    status: "Shipped",
  },
  {
    id: 2,
    customer: "Jane Doe",
    date: "2023-04-14",
    total: "$79.99",
    status: "Delivered",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    date: "2023-04-13",
    total: "$299.99",
    status: "Processing",
  },
  {
    id: 4,
    customer: "Alice Williams",
    date: "2023-04-12",
    total: "$49.99",
    status: "Cancelled",
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

const AdminOrders = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ height: 400, width: "100%" }}>
      <h2>All Orders</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default AdminOrders;
