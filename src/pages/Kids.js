import React from 'react';
import ProductCard from '../components/ProductCard';
import './Kids.css';

const Kids = () => (
  <div>
    <h1>Kids' Section</h1>
    <div className="product-list">
      <ProductCard title="Kids' Product 1" image="/assets/kid-1.jpg" />
      <ProductCard title="Kids' Product 2" image="/assets/kid-2.jpg" />
      {/* Add more products as needed */}
    </div>
  </div>
);

export default Kids;
