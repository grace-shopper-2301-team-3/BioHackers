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
                {categories.map((category) => {
                    return (
                        <li key={category.id}>
                            <Link to={`/categories/${category.id}`}>
                                <h2>{category.name}</h2>
                                <img src={category.imageUrl} />
                            </Link>
                            <p>
                                <b>Description: </b>
                                <br />
                                    <p>
                                        {category.description}
                                    </p>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
};

export default AllCategories;