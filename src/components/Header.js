import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => (
  <header>
    <div className="header-content">
      <div className="logo">
        <Link to="/">Nish Fashions</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><Link to="/others">Others</Link></li>
        </ul>
      </nav>
      <div className="header-actions">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        <div className="icons">
          <Link to="/favorites"><FontAwesomeIcon icon={faHeart} /></Link>
          <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
        </div>
      <button className='signup'><Link to='/signup'>Signup</Link></button>
      </div>
    </div>
  </header>
);

export default Header;
