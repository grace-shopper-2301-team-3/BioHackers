import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllCategories, selectCategory } from "../categories/allCategoriesSlice";
import { getSingleProduct, selectSingleProduct } from "./singleProductSlice";
import { addToCartAsync } from "../cart/cartSlice";
import axios from "axios";
import {
    MainContainer,
    NoBorderButton,
    TertiaryButton,
  } from "../style/StyleGuide";
import { ThemeProvider, Container, Box } from "@mui/material";
import biohackersTheme from "../../app/theme";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

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
        const addToCartAction = await dispatch(addToCartAsync(product))
        const updatedCart = addToCartAction.payload;
        console.log("updatedCart", updatedCart);

        } catch (err) {
            console.log("error adding to cart in single product", err);
        }
    };

    return (
        <div>
            <h2>{product && product.productName}</h2>
            <img src={product.imageUrl} />
            <p>Price: ${product && product.productPrice}</p>
            <p>
                <b>Description: </b>
                <br/> {product.description}
            </p>
            <h2>
                {
                    <Link to={`/categories/${product.categoryId}`}>More items like this</Link>
                }
            </h2>
            <NoBorderButton onClick={handleAddToCart}>Add to cart</NoBorderButton>
        </div>
    );
};

export default SingleProduct;
