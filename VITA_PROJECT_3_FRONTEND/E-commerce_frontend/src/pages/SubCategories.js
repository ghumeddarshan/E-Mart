import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';

const SubCategories = () => {
  const { ctgId } = useParams();
  const navigate = useNavigate();

  const [subcategories, setsubcategories] = useState([]);
  const [productData, setproductData] = useState([]);
  const [isProductView, setIsProductView] = useState(false);

  useEffect(() => {
    console.log("Current ctgId:", ctgId);

    fetch(`http://localhost:8080/api/Home/${ctgId}`)
      .then(async (res) => {
        if (!res.ok || res.status === 204) return null;

        const text = await res.text();
        if (!text) return null;
        return JSON.parse(text);
      })
      .then((data) => {
        console.log("Subcategories API Response:", data);

        if (!data || !Array.isArray(data) || data.length === 0) {
          // No subcategories, fetch products
          fetch(`http://localhost:8080/api/Home/Products/${ctgId}`)
            .then(async (res) => {
              if (!res.ok || res.status === 204) return null;

              const text = await res.text();
              if (!text) return null;
              return JSON.parse(text);
            })
            .then((products) => {
              setproductData(products || []);
              setIsProductView(true);
            });
        } else {
          setsubcategories(data);
          setIsProductView(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [ctgId]);

  if (isProductView) {
    return (
      <div>
        <h2>Products</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {productData.length === 0 ? (
            <p>No products found.</p>
          ) : (
            productData.map((product) => (
              <ProductCard key={product.productId} product={product} />
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Subcategories</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {subcategories.length === 0 ? (
          <p>No subcategories found.</p>
        ) : (
          subcategories.map((sc) => (
            <div
              key={sc.ctgId}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                width: '150px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/subcategories/${sc.ctgId}`)}
            >
              <img
                src={sc.ctgImgPath || "https://placehold.co/150x150"} // ✅ fixed image
                alt={sc.ctgName}
                style={{ width: '100%' }}
              />
              <h4>{sc.ctgName}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubCategories;
