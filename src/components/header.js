import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>LOGO</h1>
      </div>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Home</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/servicepage" style={{ textDecoration: 'none', color: '#333' }}>Services</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/product" style={{ textDecoration: 'none', color: '#333' }}>Product</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/workpage" style={{ textDecoration: 'none', color: '#333' }}>Work</Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
