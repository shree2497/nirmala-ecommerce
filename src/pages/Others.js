import React from 'react';
import ProductCard from '../components/ProductCard';
import './Others.css';

const Others = () => (
  <div>
    <h1>Others Section</h1>
    <div className="product-list">
      <ProductCard title="Other Product 1" image="https://via.placeholder.com/150" />
      <ProductCard title="Other Product 2" image="https://via.placeholder.com/150" />
      {/* Add more products as needed */}
    </div>
  </div>
);

export default Others;
