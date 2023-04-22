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
  Checkbox,
} from "@mui/material";

import { getAllProducts, selectProduct } from "../products/allProductsSlice";
import {
  getAllCategories,
  selectCategory,
} from "../categories/allCategoriesSlice";
import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";

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
        <Typography variant="h5">Products</Typography>

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
                  Delete
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
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(products) &&
                products.map((product) => {
                  const category = categories.find(
                    (category) => category.id === product.categoryId
                  );
                  const getProductCategoryName = () => {
                    return category ? category.name : "";
                  };

                  return (
                    <TableRow
                      key={product.id}
                      sx={{ borderBottomColor: "1px solid primary.main" }}
                    >
                      <TableCell variant="head" sx={{ textAlign: "center" }}>
                        {product.id}
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          sx={{ color: "primary.main", alignItems: "center" }}
                        />
                      </TableCell>
                      <TableCell>
                        <Checkbox
                          sx={{ color: "primary.main", alignItems: "center" }}
                        />
                      </TableCell>

                      <TableCell variant="head" sx={{ textAlign: "center" }}>
                        (placeholder)
                      </TableCell>
                      <TableCell variant="head" sx={{ textAlign: "center" }}>
                        <img
                          src={product.imageUrl}
                          alt={product.productName}
                          width="100px"
                        />
                      </TableCell>
                      <TableCell variant="head" sx={{ textAlign: "left" }}>
                        {product.productName}
                      </TableCell>
                      <TableCell variant="head" sx={{ textAlign: "center" }}>
                        USD{" "}
                        {product.productPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </TableCell>
                      <TableCell variant="head" sx={{ textAlign: "center" }}>
                        {getProductCategoryName(product.categoryId)}
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
