import React from 'react';
import './CardRecharge.css';

const CardRecharge = () => {
  return (
    <div className="card-recharge">
      <img src="ruta/imagen/tarjeta.jpg" alt="Tarjeta" className="card-image" />
      <p><strong>Saldo:</strong> COP 137,970</p>
      <button className="recharge-button">Recargar</button>
    </div>
  );
};

export default CardRecharge;

