import React from 'react';
import ProductCard from '../components/ProductCard';
import './Women.css';

const Women = () => (
  <div>
    <h1 className='women'>Women's Section</h1>
    <div className="product-list">
      <ProductCard title="Women's Product 1" image='/assets/women-1.jpg' />
      <ProductCard title="Women's Product 2" image='/assets/women-2.jpg' />
      <ProductCard title="Women's Product 3" image='/assets/women-4.jpg' />
      <ProductCard title="Women's Product 4" image='/assets/women-5.jpg' />
      <ProductCard title="Women's Product 5" image='/assets/women-6.jpg' />
      <ProductCard title="Women's Product 6" image='/assets/women-7.jpg' />
      {/* Add more products as needed */}
    </div>
  </div>
);

export default Women;
