import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecoverAccount.css';

const RecoverAccount = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic for recovering account
    try {
      // Replace with your recovery logic, e.g., API call
      const response = await fakeApiCall(email); // Replace with actual API call
      if (response.success) {
        setMessage('Instrucciones enviadas a tu correo electrónico.');
        setError('');
      } else {
        setError('Error al enviar las instrucciones. Por favor, intenta de nuevo.');
        setMessage('');
      }
    } catch (err) {
      setError('Error al enviar las instrucciones. Por favor, intenta de nuevo.');
      setMessage('');
    }
  };

  return (
    <div className="auth-container">
      <h2>Recuperar Credenciales</h2>
      <form onSubmit={handleSubmit} className="recover-form">

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-describedby="emailHelp"
        />
        <button type="submit">Enviar Instrucciones</button>
      </form>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <span className="soft-link">
      <Link to="/sign-in">Volver al Inicio de Sesión</Link>
        </span>
    </div>
  );
};

// Fake API call for demonstration purposes
const fakeApiCall = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

export default RecoverAccount;
