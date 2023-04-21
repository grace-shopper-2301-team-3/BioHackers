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
                </div>
              );
            })}
          </ul>
        </div>
      );
};

export default AllProducts;