import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)}>⬅️ Go Back</button>
      <h2>🛍️ Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <strong>{item.name}</strong> - ₹{item.price}  
                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', marginLeft: '10px' }}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ₹{totalAmount}</h3>
          <button
            style={{ marginTop: '20px', padding: '10px 20px' }}
            onClick={() => alert('🧾 Checkout not implemented yet.')}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
