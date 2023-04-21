import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import biohackersTheme from "../../app/theme";
import { ThemeProvider, Typography, Container, Box } from "@mui/material";
import { getAllProducts, selectProduct } from "../products/allProductsSlice";

import { MainContainer } from "../style/StyleGuide";
import AdminHeaderbar from "./AdminHeaderbar";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  console.log("products:", products);
  const mainContainerStyle = {
    marginBottom: "60px",
  };

  return (
    <ThemeProvider theme={biohackersTheme}>
      <AdminHeaderbar />
      <MainContainer style={mainContainerStyle}>
        <Typography variant="h5">Products</Typography>
        <Container style={{ height: 400, width: "100%", height: "100%" }}>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(products) &&
                products.map((product) => {
                  return (
                    <tr key={product.productId}>
                      <td>
                        <Link to={`/products/${product.productId}`}>
                          {product.productName}
                        </Link>
                      </td>
                      <td>
                        <img src={product.imageUrl} alt={product.productName} width="100px" />
                      </td>
                      <td>${product.productPrice}</td>
                      <td>{product.category}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default AdminProducts;
