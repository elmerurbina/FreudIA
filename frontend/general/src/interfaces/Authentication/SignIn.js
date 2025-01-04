// SignIn.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [rememberMe, setRememberMe] = useState(false);

  // Get the 'from' state, or default to the homepage if not present
  const from = location.state?.from || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sign-in (e.g., verify credentials)

    // After successful sign-in, redirect to the target page
    navigate(from);
  };

  const handleRecoverPassword = () => {
    navigate('/recover-account');
  };

  const handleCreateAccount = () => {
    navigate('/sign-up');
  };

  return (
    <div className="auth-wrapper">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Correo Electrónico" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Contraseña" required />
        </div>
        <div className="form-group">
          <div className="rememberMe-container">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Recuérdame</label>
          </div>
        </div>
        <button className="btn-primary" type="submit">Iniciar Sesión</button>
      </form>
      <div className="links">
        <span className="soft-link" onClick={handleRecoverPassword}>
          Recuperar Contraseña
        </span>
        <span className="soft-link" onClick={handleCreateAccount}>
          Crear Cuenta
        </span>
      </div>
    </div>
  );
};

export default SignIn;
