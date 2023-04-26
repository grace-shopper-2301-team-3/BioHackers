import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { changeQuantityAsync, fetchCart } from "../cart/cartSlice";
import { selectCategory } from "../categories/allCategoriesSlice";
import { getSingleProduct, selectSingleProduct } from "./singleProductSlice";
import { getAllCategories } from "../categories/allCategoriesSlice";
import { addToCartAsync } from "../cart/cartSlice";
import axios from "axios";
import {
    MainContainer,
    NoBorderButton,
    TertiaryButton,
  } from "../style/StyleGuide";
import { ThemeProvider, Container, Box, Typography, Button, Grid } from "@mui/material";
import biohackersTheme from "../../app/theme";
import { styled } from "@mui/material/styles";



  const ProductImage = styled("img")({
    width: "100%",
    height: "auto",
    objectFit: "contain"
  });


const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // console.log(id)
    const categories = useSelector(selectCategory);

    const product = useSelector(selectSingleProduct);
    const categoryId = product && product.categoryId;
    console.log("categoryId", categoryId);
  
    

    useEffect(() => {
        dispatch(getSingleProduct(id));
        dispatch(getAllCategories());
    }, [dispatch, id]);

    const handleAddToCart = async () => {
        try {
        const action = await dispatch(getSingleProduct(id))
        const product = action.payload
        // console.log('singleproduct, product:', product)
        // const cart = await dispatch(fetchCart())
        // console.log('cart payload:' , cart.payload)
        // for (const item of cart.payload) {
        //     if (item.product.id) {
        //         console.log('item exists already', item)
        //         await dispatch(changeQuantityAsync({ item, numToChangeBy: 1 }))
        //         console.log("dispatched changequantity")
        //     }
        // }
        const addToCartAction = await dispatch(changeQuantityAsync({product, newQuantity: 1, numToChangeBy: 1}))
        // const updatedCart = addToCartAction.payload;
        // console.log("updatedCart", updatedCart);
        } catch (err) {
            console.log("error adding to cart in single product", err);
        }
    };

    return (
        <ThemeProvider theme={biohackersTheme}>
          <Container maxWidth="lg">
            <Box mt={4}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <ProductImage src={product.imageUrl} alt={product.productName} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h2" mb={2} sx={{ textShadow: "1px 1px #eca5e2" }}>{product && product.productName}</Typography>
                  <Typography variant="h5" mb={2} color="#eca5e2">Price: ${product && product.productPrice}</Typography>
                  <Typography variant="body1" mb={2} color="#dbd7f1">{product.description}</Typography>
                  <Box mt={4}>
                    <Typography variant="h6">
                      <Link to={`/categories/${product.categoryId}`}>More items like this</Link>
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <NoBorderButton onClick={handleAddToCart}>Add to cart</NoBorderButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </ThemeProvider>
      );

};

export default SingleProduct;
