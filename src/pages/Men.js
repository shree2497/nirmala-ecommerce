import React from 'react';
import ProductCard from '../components/ProductCard';
import './Men.css';

const Men = () => (
  <div>
    <h1>Men's Section</h1>
    <div className="product-list">
      <ProductCard title="Men's Product 1" image='/assets/men-1.jpg' />
      <ProductCard title="Men's Product 2" image='/assets/men-2.jpg' />
      <ProductCard title="Men's Product 3" image='/assets/men-3.jpg' />
      <ProductCard title="Men's Product 4" image='/assets/men-4.jpg' />
      {/* Add more products as needed */}
    </div>
  </div>
);

export default Men;
