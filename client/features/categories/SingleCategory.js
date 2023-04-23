import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleCategory, selectSingleCategory } from "./singleCategorySlice";
import { getAllCategories, selectCategory } from "./allCategoriesSlice";
import { getAllProducts, selectProduct } from "../products/allProductsSlice";

const SingleCategory = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const products = useSelector(selectProduct);
  const category = useSelector(selectSingleCategory);

  useEffect(() => {
    dispatch(getSingleCategory(categoryId));
    dispatch(getAllProducts());
  }, [dispatch, categoryId]);

  console.log("Products:", products);

  const categoryProducts = products.length > 0
    ? products.filter((product) => product.categoryId == categoryId)
    : [];

  console.log("Category products:", categoryProducts);

  return (
    <>
      <div key={categoryId}>
        <h2>{category.name}</h2>
        <img src={category.imageUrl} />
        <p>
          <b>Description: </b> {category.description}
        </p>
        <p>
          <b>Products: </b>
          {Array.isArray(categoryProducts) &&
            categoryProducts.map((product) => {
              return (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <ul>
                      <li>{product.productName}</li>
                    </ul>
                  </Link>
                </div>
              );
            })}
        </p>
      </div>
    </>
  );
};

export default SingleCategory;
