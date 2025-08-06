import { useParams } from 'react-router-dom';
import { products } from '../data/mockData';
import ProductCard from '../components/ProductCard/ProductCard'; // ✅ correct import

const Products = () => {
  const { subcategoryId } = useParams();

  const filteredProducts = products.filter(
    product => product.subcategoryId === parseInt(subcategoryId)
  );

  return (
    <div>
      <h2>Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
