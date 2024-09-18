import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 PROYECTO DE TIENDA DE LIBROS. Todos los derechos reservados.</p>
        <nav>
          <ul className="footer-nav">
            <li><a href="/inicio">Inicio</a></li>
            <li><a href="/libros">Libros</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/terminos">Términos y Condiciones</a></li>
          </ul>
        </nav>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
