import React from 'react';
import './Shop.css';

function Shop() {
  return (
    <div className="shop-container">
      <header className="header">
        <div className="logo">
          <h1>PROYECTO DE TIENDA DE LIBROS</h1>
        </div>
        <nav className="nav">
          <a href="/">Inicio</a>
          <a href="/books">Libros</a>
          <a href="/register">Registrarse</a>
          <button className="login-button">Login</button>
        </nav>
      </header>

      <main className="shop-content">
        <div className="filters">
          <button className="filter-button">Todos</button>
          <button className="filter-button">Fantasía</button>
          <button className="filter-button">Ciencia Ficción</button>
          <button className="filter-button">Historia</button>
          <button className="filter-button">Arte</button>
        </div>

        <div className="book-grid">
          {/* Reemplaza este contenido con un map para renderizar libros dinámicamente */}
          <div className="book-item">
            <img src="path-to-your-image" alt="Libro" />
            <h4>$Costo</h4>
            <p>Nombre del libro</p>
          </div>
          {/* Agrega más libros aquí */}
        </div>
      </main>

      <footer className="footer">
        <p>PROYECTO DE TIENDA DE LIBROS</p>
      </footer>
    </div>
  );
}

export default Shop;
