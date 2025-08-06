import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="200" />
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
