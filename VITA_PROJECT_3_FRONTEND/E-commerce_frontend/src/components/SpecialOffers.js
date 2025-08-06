import React from 'react';
import { products } from '../data/mockData';
import ProductCard from './ProductCard/ProductCard';

const SpecialOffers = () => {
  const specialOffers = products.filter(p => p.isSpecialOffer);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Special Offers</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {specialOffers.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
