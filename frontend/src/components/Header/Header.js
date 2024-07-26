// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className='p-10 bg-blue-300'>
      <h1>Tourism Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
