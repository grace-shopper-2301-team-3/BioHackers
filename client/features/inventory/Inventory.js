import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, selectProduct } from "../products/allProductsSlice";

function Inventory() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Inventory</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
