import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className='background'>
    <div className="nish">
      <h2>10% off your first order</h2>
      <h1>Fashionable Dress</h1>
      <button className='shopnow'>
      <Link to="/women">Shop Now</Link>
      </button>
    </div>
  </div>
);

export default Home;
