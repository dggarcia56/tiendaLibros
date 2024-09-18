// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/shop">Tienda</Link></li>
        <li><Link to="/register">Registro</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
