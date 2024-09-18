import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, image }) => (
  <div className="product-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default ProductCard;
