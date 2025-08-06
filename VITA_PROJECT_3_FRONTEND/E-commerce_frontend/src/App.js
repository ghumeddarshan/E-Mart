import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Categories from './pages/Categories';
import SubCategories from './pages/SubCategories';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/subcategories/:ctgId" element={<SubCategories />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/subcategories/:ctgId" element={<SubCategories />} />

          <Route path="/cart" element={<Cart />} /> 
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
