import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import your CSS file here

const SignIn = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [rememberMe, setRememberMe] = useState(false); // State for the checkbox

  const handleRecoverPassword = () => {
    navigate('/recover-account'); // Navigate to Recover Password page
  };

  const handleCreateAccount = () => {
    navigate('/sign-up'); // Navigate to Sign Up page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for signing in, including handling remember me if needed
  };

  return (
    <div className="auth-wrapper"> {/* New wrapper div */}
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
                id="rememberMe" // Add an id for accessibility
                checked={rememberMe} // Manage state for checked status
                onChange={() => setRememberMe(!rememberMe)} // Toggle rememberMe state
            />
            <label htmlFor="rememberMe">Recuérdame</label> {/* Associate label with checkbox */}
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
