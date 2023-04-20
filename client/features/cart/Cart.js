import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemAsync, removeItemAsync, clearCartAsync } from './cartSlice';

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleAddItem = item => {
    dispatch(addItemAsync(item));
  };

  const handleRemoveItem = item => {
    dispatch(removeItemAsync(item));
  };

  const handleClearCart = () => {
    dispatch(clearCartAsync());
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.items.map(item => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price}</span>
                <button onClick={() => handleRemoveItem(item)}>Remove</button>
                <button onClick={() => handleAddItem(item)}>Add</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${cart.totalPrice}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
