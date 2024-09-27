import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Authentication.css';


const RecoverAccount = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for recovering account
  };

  return (
    <div className="auth-container">
      <h2>Recuperar Credenciales</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar Instrucciones</button>
      </form>
      <Link to="/sign-in">Volver al Inicio de Sesión</Link>
    </div>
  );
};

export default RecoverAccount;
