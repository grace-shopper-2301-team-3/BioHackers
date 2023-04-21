import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getAllCategories, selectCategory } from "./allCategoriesSlice";

const AllCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategory);

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {Array.isArray(categories) && categories.map((category) => {
                    return (
                        <li key={category.categoryId}>
                            <Link to={`/categories/${category.categoryId}`}>
                                <h2>{category.name}</h2>
                                <img src={category.imageUrl} />
                            </Link>
                            <p>
                                <b>Description: </b>
                                <br />
                                {category.description}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default AllCategories;