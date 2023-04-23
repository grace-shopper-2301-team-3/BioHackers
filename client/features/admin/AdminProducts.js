import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
} from "@mui/material";
import AdminHeaderbar from "./AdminHeaderbar";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { MainContainer, PrimaryButton } from "../style/StyleGuide";
import { getAllProducts, selectProduct } from "../products/allProductsSlice";
import {
  getAllCategories,
  selectCategory,
} from "../categories/allCategoriesSlice";


const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const categories = useSelector(selectCategory);

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
          <Typography variant="h5">Products</Typography>
          <PrimaryButton variant="contained" size="medium">
            <AddCircleRoundedIcon sx={{ mr: 1 }} />
            <Typography variant="body2">Add Product</Typography>
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
                  Product ID
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
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Inventory
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Image
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  variant="head"
                  sx={{
                    textAlign: "left",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(products) &&
                products.map((product) => {
                  const category = categories.find(
                    (category) => category.id === product.categoryId
                  );
                  const getProductCategoryName = (categoryId) => {
                    const category = categories.find((category) => category.id === categoryId);
                    return category ? category.name : "";
                  };

                  return (
                    <TableRow
                      key={product.id}
                      sx={{ borderBottomColor: "1px solid primary.main" }}
                    >
                      <TableCell sx={{ textAlign: "center" }}>
                        {product.id}
                      </TableCell>
                      <TableCell>
                        <EditRoundedIcon />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        (placeholder)
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <img
                          src={product.imageUrl}
                          alt={product.productName}
                          width="100px"
                        />
                      </TableCell>
                      <TableCell sx={{ textAlign: "left" }}>
                        {product.productName}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        USD{" "}
                        {product.productPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {getProductCategoryName(product.categoryId)}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <DeleteRoundedIcon />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminProducts;
