import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleCategory, selectSingleCategory } from "./singleCategorySlice";
import { getAllCategories, selectCategory } from "./allCategoriesSlice";

const SingleCategory = () => {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    console.log(categoryId)
    const categories = useSelector(selectCategory);
    const category = useSelector(selectSingleCategory);

    useEffect(() => {
        dispatch(getSingleCategory(categoryId))
    }, [dispatch])

    return (
        <>
            <div>
                <li key={categoryId}>
                    <h2>{category.name}</h2>
                    <img src={category.imageUrl} />
                    <p><b>Description: </b> {category.description}</p>
                    <p>
                        <b>Products: </b>
                        {/* <br />
                        <Link to={products.name}>
                        </Link> */}
                    </p>
                </li>
            </div>
        </>
    )
};

export default SingleCategory;