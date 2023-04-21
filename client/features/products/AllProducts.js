import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getAllProducts, selectProduct } from "./allProductsSlice";
import { getSingleProduct } from "./singleProductSlice";
import { addToCartAsync } from "../cart/cartSlice";

const AllProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProduct);


    // const categories = useSelector(selectCategory);
    const handleAddToCart = async (id) => {
        try {
        const action = await dispatch(getSingleProduct(id))
        const product = action.payload
        const addToCartAction = await dispatch(addToCartAsync(product))
        const updatedCart = addToCartAction.payload;
        console.log("updatedCart", updatedCart);
        } catch (err) {
            console.log('error adding to cart in single product', err)
        }

    }

    return (
        <div>
            <h2>Products</h2>
                {Array.isArray(products) && products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <h2>{product.productName}</h2>
                                <img src={product.imageUrl} />
                            </Link>
                            <p><b>Price: $</b> {product.productPrice}</p>
                            <p>
                                <b>Category: </b>
                                <br />
                                {product.category}
                            </p>
                            <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
                        </div>
                    );
                })}
              </div>
      );
};

export default AllProducts;
