import React from 'react';  
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation  
import './Header.css';  

const Header = () => {  
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle navigation to sign-in for dropdown items other than Agentes IA
  const handleUserClick = (e) => {
    const clickedItem = e.target.innerText;
    if (clickedItem !== 'Agentes de IA') {
      // Redirect to the sign-in page
      navigate('/sign-in');
    }
  };

  return (  
    <header className="header">  
      <div className="logo">  
        <span className="freud">FREUD</span>  
        <span className="ia">IA</span>  
      </div>  
      <p className="slogan">Inteligencia Artificial al Servicio de la Humanidad</p>
      <nav className="navbar">  
        <ul>  
          <li>
            <Link to="/">Inicio</Link>  
          </li>  
          <li>  
            Psicologos  
            <div className="dropdown">  
              <ul>  
                <li>Contactar un Psicologo</li>  
                <li>Perfil</li>  
                <li>Reportes</li>
                <li>Directiva</li>
              </ul>  
            </div>  
          </li>  
          <li>  
            Usuarios  
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/agentes-ia">Agentes de IA</Link>  {/* Link to AgentesIA */}
                </li>
                {/* Apply onClick handler for the rest */}
                <li onClick={handleUserClick}>Objetivos</li>
                <li onClick={handleUserClick}>Expediente</li>
                <li onClick={handleUserClick}>Red de Apoyo</li>
                <li onClick={handleUserClick}>Historial</li>
                <li onClick={handleUserClick}>Notificaciones</li>
                <li onClick={handleUserClick}>Cuenta</li>
              </ul>
            </div>
          </li>  
          <li>  
            Lugares  
            <div className="dropdown">  
              <ul>  
                <li>Para correr</li>  
                <li>Relajarme</li>  
                <li>Meditar</li>  
                <li>Lugares turísticos cerca de mí</li>  
              </ul>  
            </div>  
          </li>  
          <li>  
            Socios  
            <div className="dropdown">  
              <ul>  
                <li>Aseguradoras</li>  
                <li>Clinicas</li>  
                <li>Farmacias</li>  
              </ul>  
            </div>  
          </li>  
        </ul>  
      </nav>  
    </header>  
  );  
};  

export default Header;
