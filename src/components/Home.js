import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
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

      <main className="main-content">
        <div className="hero">
          <div className="hero-text">
            <h2>LAS PALABRAS TE TRANSPORTAN A NUEVOS HORIZONTES</h2>
            <p>Proyecto final de arquitectura de software</p>
            <button className="shop-button">Ver tienda</button>
          </div>
          <div className="hero-image">
            {/* Aquí puedes insertar la imagen del mockup */}
            <img src="path-to-your-image" alt="libros" />
          </div>
        </div>

        <section className="team-section">
          <h3>Equipo de desarrollo</h3>
          <div className="team-grid">
            <div className="team-member">
              <img src="profile-placeholder.png" alt="Andrés Forero" />
              <h4>Andrés Forero</h4>
              <p>Backend Developer</p>
            </div>
            <div className="team-member">
              <img src="profile-placeholder.png" alt="Daniel García" />
              <h4>Daniel García</h4>
              <p>Frontend Developer</p>
            </div>
            <div className="team-member">
              <img src="profile-placeholder.png" alt="Juan Esteban" />
              <h4>Juan Esteban</h4>
              <p>Analista de Datos</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>PROYECTO DE TIENDA DE LIBROS</p>
      </footer>
    </div>
  );
}

export default Home;
