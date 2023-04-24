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
import { ThemeProvider, Container, Box } from "@mui/material";
import biohackersTheme from "../../app/theme";


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
