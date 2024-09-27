import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import your CSS file here

const SignIn = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRecoverPassword = () => {
    navigate('/recover-account'); // Navigate to Recover Password page
  };

  const handleCreateAccount = () => {
    navigate('/sign-up'); // Navigate to Sign Up page
  };

  return (
    <div className="auth-wrapper"> {/* New wrapper div */}
      <h2>Sign In</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Correo Electronico" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Contraseña" required />
        </div>
        <button className="btn-primary" type="submit">Iniciar Sesion</button>
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
