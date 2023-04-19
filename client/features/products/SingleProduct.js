import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAllCategories, selectCategories } from "./allCategoriesSlice";
import { getSingleProduct, selectSingleProduct } from "./singleProductSlice";

const SingleProduct = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    console.log(productId)
    const categories = useSelector(selectCategories);
    const product = useSelector(selectSingleProduct);

    useEffect(() => {
        dispatch(getSingleProduct(productId))
    }, [dispatch])


    return (
        <>
            <div>
                <li key={productId}>
                    <h2>{product.productName}</h2>
                    <img src={product.imageUrl} />
                    <p><b>Price: $</b> {product.productPrice}</p>
                    <p>
                        <b>Category: </b>
                        <br />
                            <Link to={`/Categories/${product.categoryId}`}>
                                {categories.filter((category) => category.id === product.categoryId)
                                    .length
                                    ? categories.filter(
                                        (category) => category.id === product.categoryId
                                    )[0].name
                                    : "N/A"}
                            </Link>
                    </p>
                </li>
            </div>
        </>
    );
}

export default SingleProduct;