// SignIn.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SignIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [rememberMe, setRememberMe] = useState(false);

  const from = location.state?.from || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(from);
  };

  const handleRecoverPassword = () => {
    navigate('/recover-account');
  };

  const handleCreateAccount = () => {
    navigate('/sign-up');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="signin-auth-wrapper shadow">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group signin-form-group">
            <input
              type="text"
              name="email"
              placeholder="Correo Electrónico"
              className="form-control"
              required
            />
          </div>
          <div className="form-group signin-form-group">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="form-control"
              required
            />
          </div>
          <div className="form-group signin-form-group">
            <div className="signin-rememberMe-container">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Recuérdame</label>
            </div>
          </div>
          <button className="btn btn-primary signin-btn-primary" type="submit">
            Iniciar Sesión
          </button>
        </form>
        <div className="signin-links text-center">
          <span className="signin-soft-link" onClick={handleRecoverPassword}>
            Recuperar Contraseña
          </span>
          <span className="signin-soft-link" onClick={handleCreateAccount}>
            Crear Cuenta
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
