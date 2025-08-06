import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  console.log(category.ctgId);
  const handleClick = () => {
    navigate(`/subcategories/${category.ctgId}`);
  };

  return (
    <div 
      onClick={handleClick}
      style={{ border: '1px solid gray', padding: '10px', width: '150px', cursor: 'pointer' }}
    >
      <img src={category.ctgImgPath} alt={category.ctgName} style={{ width: '100%' }} />
      <h3>{category.ctgName}</h3>
    </div>
  );
};

export default CategoryCard;
