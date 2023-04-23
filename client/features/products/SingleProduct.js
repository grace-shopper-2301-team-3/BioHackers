import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllCategories, selectCategory } from "../categories/allCategoriesSlice";
import { getSingleProduct, selectSingleProduct } from "./singleProductSlice";
import { addToCartAsync } from "../cart/cartSlice";
import axios from "axios";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const product = useSelector(selectSingleProduct);
    const categoryId = product && product.categoryId;
    const categories = useSelector((state) => state.categories.allCategories);
    const category = categories.find((item) => item.id === categoryId);

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch]);

    const handleAddToCart = async () => {
        try {
            const addToCartAction = await dispatch(addToCartAsync(product));
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
            <p>
                Category:{" "}
                {category && (
                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                )}
            </p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};

export default SingleProduct;
