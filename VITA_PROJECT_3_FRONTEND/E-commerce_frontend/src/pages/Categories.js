import React, { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';

const Categories = () => {

      const[categories,setcategories]=useState([]);

  useEffect(()=>{
            fetch("http://localhost:8080/api/Home")
            .then((res)=>res.json())
            .then((data)=>setcategories(data))
             .catch((error) => {console.error('Error fetching data:', error)})
            },
            []);
  return (
    <div>
      <h2>Categories</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {categories.map(cat => (
          <CategoryCard key={cat.ctgMasterId} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
