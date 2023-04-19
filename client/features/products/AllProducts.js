import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getAllProducts, selectProduct } from "./allProductsSlice";

const AllProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProduct);
    // const categories = useSelector(selectCategory);


    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.productId}>
                            <Link to={`/Products/${product.productId}`}>
                                <h2>{product.productName}</h2>
                                <img src={product.imageUrl} />
                            </Link>
                            <p><b>Price: $</b> {product.productPrice}</p>
                            <p><b></b> {product.category}</p>
                            <p>
                                <b>Category: </b>
                                <br />
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default AllProducts;