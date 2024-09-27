import React from 'react';  
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for navigation  
import './Header.css';  

const Header = () => {  
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle navigation to sign-in for dropdown items, passing the target route
  const handleUserClick = (e) => {
    const clickedItem = e.target.innerText;
    let targetRoute = '/';

    // Determine target route based on clicked item
    switch (clickedItem) {
      case 'Objetivos':
        targetRoute = '/objetivos';
        break;
      case 'Expediente':
        targetRoute = '/expediente';
        break;
      case 'Red de Apoyo':
        targetRoute = '/red-de-apoyo';
        break;
      case 'Historial':
        targetRoute = '/historial';
        break;
      case 'Notificaciones':
        targetRoute = '/notificaciones';
        break;
      case 'Cuenta':
        targetRoute = '/cuenta';
        break;
      default:
        break;
    }

    if (clickedItem !== 'Agentes de IA') {
      // Redirect to the sign-in page, passing the intended target route
      navigate('/sign-in', { state: { from: targetRoute } });
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
                  <Link to="/agentes-ia">Agentes de IA</Link>  {/* Link to Agentes IA */}
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
