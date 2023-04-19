import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "code", headerName: "Code", width: 150 },
  { field: "discount", headerName: "Discount", width: 150 },
  { field: "expiration", headerName: "Expiration Date", width: 200 },
];

const rows = [
  { id: 1, code: "DISCOUNT123", discount: "10%", expiration: "2023-12-31" },
  { id: 2, code: "SALE20", discount: "20%", expiration: "2023-06-30" },
  { id: 3, code: "HALFOFF", discount: "50%", expiration: "2023-09-30" },
  { id: 4, code: "HOLIDAY25", discount: "25%", expiration: "2023-11-30" },
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

const AdminDiscounts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ height: 400, width: "100%" }}>
      <h2>All Discount Codes</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default AdminDiscounts;
