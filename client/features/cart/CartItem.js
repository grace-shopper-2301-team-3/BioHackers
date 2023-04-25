import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  changeQuantityAsync, fetchCart, removeFromCartAsync
} from "./cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleIncrementQuantity = async (productId) => {
    try {
      console.log('in handle increment quantity')
      await dispatch(changeQuantityAsync({ product: { id: productId }, numToChangeBy: 1 }));
      dispatch(fetchCart());
    } catch (err) {
      console.log("error incrementing quantity in cartitem", err);
    }
  };

  const handleDecrementQuantity = async (productId) => {
    try {
      // console.log('productid:' , productId)
      // if (item.quantity === 1) {
      //   await dispatch(removeFromCartAsync(productId));
      // } else {
      await dispatch(changeQuantityAsync({ product: { id: productId }, numToChangeBy: -1 }));

      // }
      dispatch(fetchCart());
    } catch (err) {
      console.log("error decrementing  quantity in cartitem", err);
    }
  };

  const handleRemove = async (id) => {
    try {
      // await dispatch(changeQuantityAsync({ product: { id: productId }, newQuantity: 0 }))
      await dispatch(removeFromCartAsync(id));
      dispatch(fetchCart());
    } catch (err) {
      console.log("error removing item from cart", err);
    }
  };

  return (
    <div className="cartItemContainer">
      <img src={cartItem.product.imageUrl} />
      <p>${cartItem.product.productPrice}</p>
      <span>{cartItem.product.productName}</span>
      <button
        className="decrementQuantityButton"
        onClick={() => handleDecrementQuantity(cartItem.productId)}
      >
        -
      </button>
      <span>{cartItem.quantity}</span>
      <button
        className="incrementQuantityButton"
        onClick={() => handleIncrementQuantity(cartItem.productId)}
      >
        +
      </button>
      <button
        className="removeFromCartButton"
        onClick={() => handleRemove(cartItem.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
