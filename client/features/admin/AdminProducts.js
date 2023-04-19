import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "imageUrl", headerName: "Image", width: 110 },
  { field: "productName", headerName: "Name", width: 150 },
  { field: "productPrice", headerName: "Price", width: 150 },
  { field: "description", headerName: "Description", width: 250 },
  { field: "category", headerName: "Category", width: 150 },
  { field: "stock", headerName: "Stock", width: 150 },
];

const rows = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/100",
    productName: "Brain",
    productPrice: "$19.99",
    description: "Brain +",
    category: "Augmentation",
    stock: "50",
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/100",
    productName: "Brain Pill",
    productPrice: "$49.99",
    description: "Brain Pill",
    category: "Supplement",
    stock: "20",
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/100",
    productName: "Hand ++",
    productPrice: "$69.99",
    description: "Hand ++",
    category: "Enhancement",
    stock: "30",
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/100",
    productName: "Eye +",
    productPrice: "$39.99",
    description: "Eye +",
    category: "Augmentation",
    stock: "10",
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

const AdminProducts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ height: 400, width: "100%" }}>
      <h2>All Products</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default AdminProducts;
