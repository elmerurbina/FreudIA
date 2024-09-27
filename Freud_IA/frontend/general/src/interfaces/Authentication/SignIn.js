import React from 'react';
import './SignIn.css'; // Import your CSS file here

const SignIn = () => {
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
        <a className="soft-link" href="/recover-account">Recuperar Contraseña</a>
        <a className="soft-link" href="/sign-up">Crear Cuenta</a>
      </div>
    </div>
  );
};

export default SignIn;
