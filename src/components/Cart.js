import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "./Actions";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the cart items from Redux store
  const cartItems = useSelector((state) => state.cart.cart || []); // Fallback to empty array if undefined

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add some items before checking out!");
      return;
    }
    navigate("/shipping");
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mt-4">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start adding items to see them here!</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  <strong>{item.title}</strong> - {item.quantity} x R{item.price.toFixed(2)}
                </span>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <h4>Total: R{totalPrice.toFixed(2)}</h4>
        </>
      )}
      <Button
        variant="primary"
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
      >
        Checkout
      </Button>
    </div>
  );
}

export default Cart;
