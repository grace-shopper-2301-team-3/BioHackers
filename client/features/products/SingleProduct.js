import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllCategories, selectCategory } from "../categories/allCategoriesSlice";
import { getSingleProduct, selectSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    const categories = useSelector(selectCategory);
    const product = useSelector(selectSingleProduct);

    useEffect(() => {
        dispatch(getSingleProduct(id))
    }, [dispatch])


    return (
        <>
            <div key={id}>
                    <h2>{product.productName}</h2>
                    <img src={product.imageUrl} />
                    <p><b>Price: $</b> {product.productPrice}</p>
                    <p><b>Description: </b> {product.description}</p>
                    <p>
                        <b>Category: </b>
                        <br />
                            <Link to={`/categories/${product.categoryId}`}>
                            </Link>
                    </p>
            </div>
        </>
    );
}

export default SingleProduct;