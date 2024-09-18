import React from 'react';
import './BookDetails.css';

const BookDetails = () => {
  return (
    <div className="book-details">
      <div className="book-info">
        <img src="ruta/imagen/libro.jpg" alt="Cien años de soledad" className="book-image" />
        <div className="book-meta">
          <h2>100 años de soledad</h2>
          <p><strong>Unidades disponibles:</strong> 20</p>
          <p><strong>ISBN:</strong> Número</p>
          <p><strong>Autor:</strong> Gabriel García Márquez</p>
          <p><strong>Catálogo:</strong> Literatura</p>
          <p><strong>Precio:</strong> Número</p>
        </div>
      </div>
      <div className="book-actions">
        <ul>
          <li>Envíos a todo el país</li>
          <li>Compra segura</li>
          <li>Estado nuevo</li>
        </ul>
        <button className="buy-button">Comprar libro</button>
      </div>
    </div>
  );
};

export default BookDetails;
