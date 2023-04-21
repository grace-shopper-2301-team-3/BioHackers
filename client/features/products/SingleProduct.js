import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllCategories, selectCategory } from "../categories/allCategoriesSlice";
import { getSingleProduct, selectSingleProduct } from "./singleProductSlice";
import { addToCartAsync } from "../cart/cartSlice";
import axios from "axios";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    console.log(productId)
    const categories = useSelector(selectCategory);
    const product = useSelector(selectSingleProduct);

    useEffect(() => {
        dispatch(getSingleProduct(productId))
    }, [dispatch])

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
        <>
            <div>
                <li key={productId}>
                    <h2>{product.productName}</h2>
                    <img src={product.imageUrl} />
                    <p><b>Price: $</b> {product.productPrice}</p>
                    <p><b>Description: </b> {product.description}</p>
                    <p>
                        <b>Category: </b>
                        <br />
                            <Link to={`/categories/${product.categoryId}`}>
                            {categories.filter((category) => category.categoryId === product.categoryId)
                                        .length
                                        ? categories.filter(
                                            (category) => category.categoryId === product.categoryId
                                        ).name
                                        : "N/A"}
                            </Link>
                    </p>
                    <button onClick={() => handleAddToCart(productId)}>Add to cart</button>
                </li>
            </div>
        </>
    );
}

export default SingleProduct;
