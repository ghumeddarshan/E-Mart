import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // ✅

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent click from bubbling to parent div
    addToCart(product);  // ✅ This adds product to cart context
    alert(`${product.prodName} added to cart!`);
  };

  return (
    <div 
      style={{ border: '1px solid gray', padding: '10px', margin: '10px', cursor: 'pointer' }}
      onClick={() => navigate(`/product/${product.id}`)} // ✅ Open product details
    >
      <img src={product.productImg} alt={product.prodName} width="150" />
      <h3>{product.prodName}</h3>
      <p>₹{product.mrpPrice}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
