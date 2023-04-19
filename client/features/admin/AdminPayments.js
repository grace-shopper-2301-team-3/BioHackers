import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "paymentOption", headerName: "Payment Option", width: 200 },
  { field: "createdBy", headerName: "Date", width: 150 },
  { field: "creationDate", headerName: "Total", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const rows = [
  {
    id: 1,
    paymentOption: "Visa",
    createdBy: "admin",
    creationDate: "2023-04-15",
    status: "Active",
  },
  {
    id: 2,
    paymentOption: "Mastercard",
    createdBy: "admin",
    creationDate: "2023-04-14",
    status: "Active",
  },
  {
    id: 3,
    paymentOption: "Paypal",
    createdBy: "admin",
    creationDate: "2023-04-13",
    status: "Disabled",
  },
  {
    id: 4,
    paymentOption: "Apple Pay",
    createdBy: "admin",
    creationDate: "2023-04-12",
    status: "Active",
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

const AdminPayments = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ height: 400, width: "100%" }}>
      <h2>All Payments</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default AdminPayments;
