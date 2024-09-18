import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    contraseña: '',
    correo: '',
    usuario: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Registro exitoso', formData);
  };

  return (
    <div className="register-container">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Digita tu nombre:</label>
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            placeholder="Nombre" 
          />
        </div>
        <div>
          <label>Digita tu contraseña:</label>
          <input 
            type="password" 
            name="contraseña" 
            value={formData.contraseña} 
            onChange={handleChange} 
            placeholder="Contraseña" 
          />
        </div>
        <div>
          <label>Digita tu correo:</label>
          <input 
            type="email" 
            name="correo" 
            value={formData.correo} 
            onChange={handleChange} 
            placeholder="Correo" 
          />
        </div>
        <div>
          <label>Digita tu usuario:</label>
          <input 
            type="text" 
            name="usuario" 
            value={formData.usuario} 
            onChange={handleChange} 
            placeholder="Usuario" 
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
